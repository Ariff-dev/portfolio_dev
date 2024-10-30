import Image from 'next/image'
import { CarouselLanguages } from './components'
import { DownLoadCV } from './components/DownLoadCV'

export default function Home() {
  return (
    <main className='bg-section-background rounded-lg border-2 border-border-section mt-4 '>
      <section className='p-4 flex flex-col gap-4'>
        <div>
          <Image
            src={
              'https://images.unsplash.com/photo-1569516449911-2dcc2ebcbe14?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'
            }
            width={300}
            height={300}
            className='w-full max-h-[300px] object-cover object-top border-2 border-blue-neon-contrast rounded-3xl'
            alt='Holi'
          />
        </div>
        <p className='text-sm flex justify-between font-bold'>
          <span className='text-pink-neon text-ms font-normal'>{`<h1>`}</span>
          ¡Bienvenidos! Soy Ariff Martínez
          <span className='text-pink-neon  text-ms font-normal'>{`</h1>`}</span>
        </p>

        <p className=' text-title leading-tight px-6'>
          Soy
          <span className='bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent'>{` Ingeniero de ${'$'}{Software}`}</span>{' '}
          y Desarrollador Web{' '}
          <span className='bg-gradient-to-r from-orange-neon to-orange-neon-contrast bg-clip-text text-transparent'>
            ${`{Full - Stack}`}
          </span>{' '}
        </p>

        <span className='text-pink-neon text-ms float-left'>{'<p>'}</span>
        <p className='px-6 text-sm'>
          Mi experiencia se centra en el desarrollo web full-stack, con{' '}
          <span className='text-yellow-neon'>JavaScript</span> como lenguaje
          principal. Dominio avanzado de frameworks y librerías como{' '}
          <span className='text-yellow-neon'>
            Node.js, React, Next.js, Angular y Nest.js Node.js, React, Next.js,
            Angular y Nest.js
          </span>
          . Complementando con habilidades en{' '}
          <span className='text-orange-neon'>PHP</span>,{' '}
          <span className='text-blue-neon'>Python</span> para análisis de datos
          y ciencia de datos utilizando{' '}
          <span className='text-orange-neon'>SQL</span> . Especializado en el
          desarrollo de soluciones web escalables y de alto impacto
        </p>
        <span className='text-pink-neon text-ms text-end'>{'</p>'}</span>
        <CarouselLanguages />
        <DownLoadCV />
      </section>
    </main>
  )
}
