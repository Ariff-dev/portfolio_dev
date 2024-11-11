import Image from 'next/image'
import { ArrowUpRightSquareSolid } from 'iconoir-react'
import Link from 'next/link'

export const BestPosts = async () => {
  const URL = `${process.env.NEXT_PUBLIC_URL}`
  const token = `${process.env.NEXT_PUBLIC_TOKEN}`
  const articles = await fetch(`${URL}/api/articles?populate=*`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  const articlesData = await articles.json()

  const { data } = articlesData

  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
      {data.map(
        ({ id, title, cover, date, description, category, color, slug }) => (
          <div
            key={id}
            className='relative p-4 bg-section-background border-2 border-border-section rounded-lg h-[300px]'
          >
            <div className='relative w-full h-full '>
              <Image
                src={cover.url}
                alt={cover.name}
                className='rounded-md'
                layout='fill'
                objectFit='cover'
              />
              <div className='absolute inset-0 bg-black bg-opacity-75 z-0'></div>
            </div>

            <div className='absolute flex justify-between top-0 left-0 w-full p-8 text-white z-10 '>
              <p
                className='bg-section-background px-8 rounded-lg text-sm border-2 font-bold'
                style={{ borderColor: color }}
              >
                {category.name}
              </p>
              <p className='text-sm font-light'>{date}</p>
            </div>
            <div className='absolute bottom-0 left-0 w-full p-8 text-white z-10 flex flex-col justify-center gap-2'>
              <h2
                className='text-base text-irrelevant-text-color font-bold  rounded-md text-center'
                style={{ background: color }}
              >
                {title}
              </h2>
              <p className={`text-xs`}>{description}</p>
              <div>
                <Link
                  href={`/blog/${slug}`}
                  className='flex gap-2 text-sm font-bold'
                >
                  Seguir leyendo
                  <ArrowUpRightSquareSolid style={{ color: color }} />
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}
