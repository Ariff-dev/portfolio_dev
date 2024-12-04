import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CategoryCardProps } from '../../interfaces'

export const CategoryCard = ({
  id,
  name,
  image,
  color,
  slug,
}: CategoryCardProps) => {
  return (
    <div
      key={id}
      className='relative w-full h-32 border-2 border-border-section rounded-lg'
    >
      <Image
        src={`${image}`}
        alt={name}
        layout='fill'
        objectFit='cover'
        className='rounded-lg'
      />

      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg' />
      <Link href={`/blog/category/${slug}`}>
        <p
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold'
          style={{ color: color }}
        >
          {name}
        </p>
      </Link>
    </div>
  )
}
