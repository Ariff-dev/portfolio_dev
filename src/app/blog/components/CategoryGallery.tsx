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
  console.log(data)
  return (
    <div>
      {data.map(({ id, category, categoryimage }) => (
        <div key={id}>
          <h1>{category}</h1>
          <p>
            {(categoryimage == null) | '' ? (
              'No existe'
            ) : (
              <Image
                src={categoryimage.url}
                alt={categoryimage.alternativeText}
                width={categoryimage.width}
                height={categoryimage.height}
              />
            )}
          </p>
        </div>
      ))}
    </div>
  )
}
