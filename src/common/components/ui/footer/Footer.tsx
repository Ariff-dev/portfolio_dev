import { Code } from 'iconoir-react'

export const Footer = () => {
  return (
    <footer className='border-2 border-section-background'>
      <div className='flex gap-2 items-center justify-center text-xl'>
        <Code className='text-green-neon ' />
        <p>
          Ariff
          <span className='bg-gradient-to-r from-zinc-500 to-zinc-800 bg-clip-text text-transparent'>
            .dev
          </span>{' '}
        </p>
      </div>
    </footer>
  )
}
