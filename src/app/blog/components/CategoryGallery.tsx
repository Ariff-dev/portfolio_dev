import Image from 'next/image'

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
    <div className='grid grid-cols-1 gap-4  lg:grid-cols-4'>
      {data.map(({ id, name, image, color }) => (
        <div
          key={id}
          className='relative w-full h-32 border-2 border-border-section rounded-lg'
        >
          <Image
            src={image.url}
            alt={name}
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />

          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg' />

          <p
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold'
            style={{ color: color }}
          >
            {name}
          </p>
        </div>
      ))}
    </div>
  )
}
