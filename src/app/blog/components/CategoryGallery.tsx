import { CategoryCardProps } from '../interfaces'
import { CategoryCard } from './ui/CategoryCard'

export const CategoryGallery = async () => {
  const URL = `${process.env.NEXT_PUBLIC_URL}`
  const token = `${process.env.NEXT_PUBLIC_TOKEN}`

  const categories = await fetch(`${URL}/api/categories?populate=*`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  const categoriesData = await categories.json()
  const { data } = categoriesData

  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-4'>
      {data.map(({ id, name, image, color, slug }: CategoryCardProps) => {
        // Crear el objeto con las propiedades necesarias
        const categoryProps = {
          id,
          name,
          image: image?.url, // Accedemos a `image.url` de forma segura
          color,
          slug,
        }

        return <CategoryCard key={id} {...categoryProps} /> // Usamos spread para pasar las propiedades
      })}
    </div>
  )
}
