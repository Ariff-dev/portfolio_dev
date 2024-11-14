'use client'

import { useEffect, useState } from 'react'
import { CategoryCardProps } from '../interfaces'
import { CategoryCard } from './ui/CategoryCard'

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
        setCategories(categoriesData.data)
      } catch (error: any) {
        setError(error.message || 'Error fetching categories')
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, []) // El array vacío [] asegura que solo se ejecute una vez al montar el componente

  if (loading) {
    return <div>Loading...</div> // Puedes personalizar esto con un spinner o algo más elegante
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
          image: image?.url, // Accedemos a `image.url` de forma segura
          color,
          slug,
        }

        return <CategoryCard key={id} {...categoryProps} />
      })}
    </div>
  )
}
