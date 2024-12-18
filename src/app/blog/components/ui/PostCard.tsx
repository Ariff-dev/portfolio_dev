import { ArrowUpRightSquareSolid } from 'iconoir-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PostCardProps } from '../../interfaces/index'

export const PostCard: React.FC<PostCardProps> = ({
  id,
  cover,
  color,
  title,
  date,
  category,
  description,
  slug,
}) => {
  return (
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
            href={`/blog/post/${slug}`}
            className='flex gap-2 text-sm font-bold'
          >
            Seguir leyendo
            <ArrowUpRightSquareSolid style={{ color: color }} />
          </Link>
        </div>
      </div>
    </div>
  )
}
