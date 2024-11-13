import { PostCard } from './ui/PostCard'
import { PostCardProps } from '../interfaces/index'

export const BestPosts = async () => {
  const URL = `${process.env.NEXT_PUBLIC_URL}`
  const token = `${process.env.NEXT_PUBLIC_TOKEN}`

  // Hacemos la petición y obtenemos los datos
  const articles = await fetch(`${URL}/api/articles?populate=*`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  // Parseamos los datos obtenidos
  const articlesData = await articles.json()
  const { data }: { data: PostCardProps[] } = articlesData // Tipamos explícitamente la respuesta

  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
      {data.map(
        ({ id, title, cover, date, description, category, color, slug }) => {
          const post = {
            id,
            title,
            cover,
            date,
            description,
            category,
            color,
            slug,
          }
          return <PostCard key={id} {...post} />
        }
      )}
    </div>
  )
}
