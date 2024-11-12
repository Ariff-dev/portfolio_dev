'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const CategoryPage = () => {
  const { category } = useParams() // Accedemos al slug de la categoría desde la URL
  const [categoryData, setCategoryData] = useState<any>(null)
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
            `${URL}/api/categories?filters[slug]=${category}&populate=*`, // Asumimos que 'posts' es el campo que contiene los posts relacionados
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

  return <div>{category}</div> // Retornamos solo un div con "Hola"
}

export default CategoryPage
