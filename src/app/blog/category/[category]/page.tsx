'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PostCard } from '../../components/ui/PostCard'
import { PostCardProps } from '../../interfaces' // Asegúrate de tener estas interfaces correctamente definidas
import { ArrowLeftCircle } from 'iconoir-react'
import Link from 'next/link'
import { Footer } from '@/common/components/ui'

const CategoryPage = () => {
  const { category } = useParams() // Accedemos al slug de la categoría desde la URL
  const [categoryData, setCategoryData] = useState<CategoryData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (category) {
      const fetchCategory = async () => {
        const URL = `${process.env.NEXT_PUBLIC_URL}`
        const token = `${process.env.NEXT_PUBLIC_TOKEN}`

        try {
          // Hacemos la solicitud para obtener la categoría con sus posts relacionados
          const response = await fetch(
            `${URL}/api/categories?filters[slug]=${category}&populate=articles.cover`, // Aquí populamos también la imagen del artículo
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          )

          const data = await response.json()
          setCategoryData(data.data[0]) // Asumimos que la categoría es la primera en la respuesta
          setIsLoading(false)
        } catch (err) {
          setError(`Error al cargar los datos de la categoría. ${err} `)
          setIsLoading(false)
        }
      }

      fetchCategory()
    }
  }, [category])

  if (isLoading) {
    return <div>Loading...</div>
  }
  console.log(categoryData)
  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className='flex flex-col gap-4 mt-4'>
      <div className='flex items-center justify-between'>
        <h1
          className={` lg:text-2xl text-xl font-bold`}
          style={{ color: categoryData.color }}
        >
          {categoryData.name}
        </h1>
        <Link
          href={'/blog'}
          className='flex  gap-4  items-center text-sm lg:text-base  px-4 py-2 justify-center border-2 border-border-section bg-section-background lg:py-2 lg:px-6 rounded-lg'
        >
          Regresar{' '}
          <ArrowLeftCircle
            style={{
              color: categoryData.color,
            }}
          />
        </Link>
      </div>

      {categoryData?.articles?.map((article: PostCardProps) => {
        const { id, title, cover, date, description, color, slug } = article
        const post = {
          id,
          title,
          cover,
          date,
          description,
          color,
          slug,
        }

        return (
          <div key={slug}>
            <PostCard {...post} category={categoryData} />
          </div>
        )
      })}
      <Footer />
    </div>
  )
}

export default CategoryPage
