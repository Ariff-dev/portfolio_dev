'use client' // Asegúrate de que este componente se ejecute del lado del cliente

import { Menu, Xmark } from 'iconoir-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Importamos el hook usePathname
import { useState, useEffect } from 'react' // Importamos useState y useEffect

const staticUrls = [
  {
    id: 1,
    path: '/',
    name: 'Home',
  },
  {
    id: 2,
    path: '/blog',
    name: 'Blog',
  },
]

export const Navbar = () => {
  // Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Obtenemos la ruta actual de la página
  const pathname = usePathname()

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Usamos el hook useEffect para manejar el desmontaje
  useEffect(() => {
    // Aquí puedes ejecutar alguna lógica cuando el menú se cierre
    if (!isMenuOpen) {
      console.log('El menú está cerrado')
      // Puedes realizar otras acciones como liberar recursos, si lo necesitas.
    }
  }, [isMenuOpen]) // Se ejecuta cada vez que cambia el estado de isMenuOpen

  return (
    <nav className='relative flex justify-between bg-section-background p-4 rounded-lg border-2 border-border-section'>
      <div>
        <Link href={'/'}>
          Ariff
          <span className='bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent'>
            .dev
          </span>
        </Link>
      </div>

      {/* Ícono de menú (solo visible en dispositivos móviles) */}
      <div className='lg:hidden'>
        <Menu fontSize={16} onClick={toggleMenu} />
      </div>

      {/* Ícono de cerrar (solo visible cuando el menú está abierto) */}
      {isMenuOpen && (
        <div className='absolute top-4 right-4 lg:hidden'>
          <Xmark fontSize={16} onClick={toggleMenu} />
        </div>
      )}

      {/* Menú lateral */}
      {isMenuOpen && (
        <div className='fixed bg-section-background border-l-4 border-border-section w-2/3 h-screen right-0 top-0 z-50 flex flex-col'>
          <div className='flex justify-end items-center p-4'>
            <Xmark fontSize={16} onClick={toggleMenu} />
          </div>
          <ul className='text-white flex-1'>
            {staticUrls.map((url) => (
              <li key={url.id}>
                <Link
                  href={url.path}
                  // Verificamos si el path coincide con la ruta actual
                  className={`block px-4 py-2 font-bold underline ${
                    pathname === url.path
                      ? 'text-blue-neon' // Color especial cuando el enlace es seleccionado
                      : 'hover:bg-gray-700'
                  }`}
                >
                  {url.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Menú de navegación para pantallas grandes */}
      <div className='hidden lg:flex'>
        <ul className='flex space-x-4'>
          {staticUrls.map((url) => (
            <li key={url.id}>
              <Link
                href={url.path}
                className={`font-bold underline ${
                  pathname === url.path ? 'text-blue-neon' : 'hover:bg-gray-700'
                }`}
              >
                {url.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
