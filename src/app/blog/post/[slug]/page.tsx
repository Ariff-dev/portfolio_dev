'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { marked } from 'marked'

const PostPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        const URL = `${process.env.NEXT_PUBLIC_URL}`
        const token = `${process.env.NEXT_PUBLIC_TOKEN}`

        const response = await fetch(
          `${URL}/api/articles?filters[slug]=${slug}&populate=*`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        )

        const data = await response.json()
        setPost(data.data[0])
      }

      fetchPost()
    }
  }, [slug])

  if (!post) return <div>Loading...</div>

  const articleHtml = marked(post.article)

  return (
    <div className='mt-4 flex flex-col gap-4'>
      <div>
        <Image
          src={post.cover.url}
          alt={post.cover.name}
          width={500}
          height={300}
          objectFit='cover'
        />
      </div>
      {/* Renderizamos el contenido convertido a HTML */}
      <div
        className='post-content prose prose-lg mx-auto prose-h1:text-white prose-p:text-primary-text-color'
        dangerouslySetInnerHTML={{ __html: articleHtml }}
      />
    </div>
  )
}

export default PostPage
