// interfaces/index.ts

export interface Cover {
  url: string
  name: string
}

export interface PostCardProps {
  id: number
  cover: Cover
  color: string
  title: string
  date: string
  category: { name: string } // Suponiendo que 'category' es un objeto con 'name'
  description: string
  slug: string
}
