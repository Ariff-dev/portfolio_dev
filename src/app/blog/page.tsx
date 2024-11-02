import React from 'react'

const token = process.env.NEXT_PUBLIC_TOKEN
console.log('token:', token)
async function page() {
  const posts = await fetch('http://localhost:1337/api/posts', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  const data = await posts.json()
  console.log(data)

  return <div>Holi</div>
}

export default page
