'use client'

import { useEffect, useState } from 'react'
import {
  NextjsOriginal,
  ReactOriginal,
  NestjsOriginal,
  PythonOriginal,
  PhpOriginal,
  FlaskOriginal,
} from 'devicons-react'

const languages = [
  {
    title: 'NextJS',
    icon: <NextjsOriginal size={32} />,
  },
  {
    title: 'React',
    icon: <ReactOriginal size={32} />,
  },
  {
    title: 'NestJS',
    icon: <NestjsOriginal size={32} />,
  },
  {
    title: 'Python',
    icon: <PythonOriginal size={32} />,
  },
  {
    title: 'PHP',
    icon: <PhpOriginal size={32} />,
  },
  {
    title: 'Flask',
    icon: <FlaskOriginal size={32} />,
  },
]

// Duplica la lista para evitar espacios vacíos
const duplicatedLanguages = [...languages, ...languages]

export const CarouselLanguages = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Cambia el índice automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length)
    }, 3000)

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval)
  }, [])

  // Determina cuántos idiomas mostrar
  const visibleCount = 3

  // Calcula el desplazamiento del carrusel
  const translateX = -((currentIndex % languages.length) * (100 / visibleCount))

  return (
    <div className='flex wrap items-center p-4 gap-2'>
      <div className='w-3/5 overflow-hidden'>
        <div
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {duplicatedLanguages.map((language, index) => (
            <div
              key={`${language.title}-${index}`} // Combina el título con el índice para una clave única
              className='p-4 flex-shrink-0 w-1/3 border border-border-section'
            >
              {language.icon}
            </div>
          ))}
        </div>
      </div>
      <div className='w-2/5 text-irrelevant-text-color'>... y más</div>
    </div>
  )
}
