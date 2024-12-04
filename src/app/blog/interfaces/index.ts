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
  category: { name: string }
  description: string
  slug: string
}

export interface ImageData {
  url: string
}

export interface CategoryCardProps {
  id: number
  name: string
  image: string
  color: string
  slug: string
}
