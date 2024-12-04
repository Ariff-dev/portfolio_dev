'use client'

import { useEffect, useState } from 'react'
import { CategoryCardProps } from '../interfaces'
import { CategoryCard } from './ui/CategoryCard'
import { Spinner } from './ui/Spinner'

export const CategoryGallery = () => {
  const [categories, setCategories] = useState<CategoryCardProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      const URL = `${process.env.NEXT_PUBLIC_URL}`
      const token = `${process.env.NEXT_PUBLIC_TOKEN}`

      try {
        const response = await fetch(`${URL}/api/categories?populate=*`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Error fetching categories')
        }

        const categoriesData = await response.json()
        const validCategories = categoriesData.data.filter(isValidCategory)
        setCategories(validCategories)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message || 'Error fetching categories')
        } else {
          setError('Unexpected error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-4'>
      {categories.map(({ id, name, image, color, slug }: CategoryCardProps) => {
        const categoryProps = {
          id,
          name,
          image: image?.url,
          color,
          slug,
        }

        return <CategoryCard key={id} {...categoryProps} />
      })}
    </div>
  )
}

const isValidCategory = (category: any): category is CategoryCardProps => {
  return (
    typeof category.id === 'number' &&
    typeof category.name === 'string' &&
    typeof category.color === 'string' &&
    typeof category.slug === 'string' &&
    category.image &&
    typeof category.image.url === 'string'
  )
}
