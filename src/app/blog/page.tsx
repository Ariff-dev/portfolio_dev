import { Footer } from '@/common/components/ui'
import { BestPosts } from './components/BestPosts'
import { CategoryGallery } from './components/CategoryGallery'

function BlogPage() {
  return (
    <main className='grid grid-cols-1 gap-4 mt-4  lg:mt-8'>
      <div className='text-center'>
        <p className='text-sm lg:text-base text-primary-text-color'>
          ¡Bienvenido a mi blog!
        </p>
        <p className='text-lg bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent lg:text-xl'>
          Del Caos al Código
        </p>
      </div>
      <CategoryGallery />
      <p className='text-lg bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent lg:text-xl'>
        Post Recientes
      </p>
      <BestPosts />
      <Footer />
    </main>
  )
}

export default BlogPage
