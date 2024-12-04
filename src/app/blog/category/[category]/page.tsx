'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { marked } from 'marked'
import { Footer } from '@/common/components/ui'
import Link from 'next/link'
import { ArrowLeftCircle } from 'iconoir-react'

interface Post {
  id: number
  slug: string
  title: string
  article: string
  color: string
  cover: {
    url: string
    name: string
  }
}

const PostPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState<Post | null>(null)

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
        const fetchedPost = data.data[0]

        // Validar los datos antes de asignarlos al estado
        if (fetchedPost && isValidPost(fetchedPost)) {
          setPost(fetchedPost)
        } else {
          console.error('Invalid post data:', fetchedPost)
        }
      }

      fetchPost()
    }
  }, [slug])

  if (!post) return <div>Loading...</div>

  const articleHtml = marked(post.article)

  return (
    <div className='mt-4 flex flex-col gap-4'>
      <Link
        href={'/blog'}
        className='flex  gap-4  items-center text-sm lg:text-base  px-4 py-2 justify-center border-2 border-border-section bg-section-background lg:py-2 lg:px-6 rounded-lg'
      >
        Regresar <ArrowLeftCircle style={{ color: post.color }} />
      </Link>
      <div>
        <Image
          src={post.cover.url}
          alt={post.cover.name}
          width={500}
          height={300}
          objectFit='cover'
        />
      </div>
      <div
        className='post-content prose prose-lg mx-auto prose-h1:text-white prose-p:text-primary-text-color'
        dangerouslySetInnerHTML={{ __html: articleHtml }}
      />
      <Footer />
    </div>
  )
}

const isValidPost = (post: unknown): post is Post => {
  if (typeof post !== 'object' || post === null) return false
  const { id, slug, title, article, color, cover } = post as Record<
    string,
    unknown
  >
  return (
    typeof id === 'number' &&
    typeof slug === 'string' &&
    typeof title === 'string' &&
    typeof article === 'string' &&
    typeof color === 'string' &&
    typeof cover === 'object' &&
    cover !== null &&
    typeof (cover as Record<string, unknown>).url === 'string' &&
    typeof (cover as Record<string, unknown>).name === 'string'
  )
}

export default PostPage
