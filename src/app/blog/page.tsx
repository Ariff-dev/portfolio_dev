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
    <main>
      <CategoryGallery />
    </main>
  )
}

export default page
