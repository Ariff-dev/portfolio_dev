import { BestPosts } from './components/BestPosts'
import { CategoryGallery } from './components/CategoryGallery'

async function page() {
  const token = `${process.env.NEXT_PUBLIC_TOKEN}`

  const posts = await fetch('http://localhost:1337/api/posts', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  const data = await posts.json()

  return (
    <main className='grid grid-cols-1 gap-4 mt-4  lg:mt-8'>
      <div className='text-center'>
        <p className='text-sm lg:text-base text-primary-text-color'>
          ¡Bienvenido a mi blog!
        </p>
        <p className='text-lg bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent lg:text-xl'>
          Del Caos al Código
        </p>
      </div>
      <CategoryGallery />
      <p className='text-lg bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent lg:text-xl'>
        Post Recientes
      </p>
      <BestPosts />
    </main>
  )
}

export default page
