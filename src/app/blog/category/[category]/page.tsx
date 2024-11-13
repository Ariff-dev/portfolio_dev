'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PostCard } from '../../components/ui/PostCard'
import { PostCardProps } from '../../interfaces' // Asegúrate de tener estas interfaces correctamente definidas

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
          setError('Error al cargar los datos de la categoría.')
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
    <div>
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
    </div>
  )
}

export default CategoryPage
