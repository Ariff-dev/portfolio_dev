import { Menu } from 'iconoir-react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-section-background p-4 rounded-lg border-2 border-border-section'>
      <div>
        <p>
          Ariff
          <span className='bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent'>
            .dev
          </span>
        </p>
        <div></div>
      </div>
      <div>
        <Menu fontSize={16} />
      </div>
    </nav>
  )
}
