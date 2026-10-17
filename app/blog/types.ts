export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  image: { src: string; alt: string }
  content: string
  date: string
  author: string
  readTime: string
  category: string
}
