import Image from 'next/image'
import { CarouselLanguages } from './components'
import { DownLoadCV } from './components/DownLoadCV'

import { PlusCircle } from 'iconoir-react'
import { funnyFacts, skills } from './data'

export default function Home() {
  return (
    <main className='mt-4 flex flex-col gap-4'>
      <section className='bg-section-background rounded-lg border-2 border-border-section p-4 flex flex-col lg:flex-row gap-4 lg:justify-center lg:items-center'>
        <div className='lg:w-2/5 lg:p-10'>
          <Image
            src={
              'https://images.unsplash.com/photo-1666594351951-43f58d69c93f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            width={300}
            height={300}
            className='w-full h-[300px] lg:h-[600px] object-cover object-top border-2 border-blue-neon-contrast rounded-3xl'
            alt='Holi'
          />
        </div>
        <div className='lg:w-3/5 lg:py-12 lg:px-10 flex flex-col gap-4'>
          <p className='text-sm lg:text-base flex justify-between lg:justify-start font-bold'>
            <span className='text-pink-neon text-ms lg:text-base font-normal'>{`<h1>`}</span>
            ¡Hola! Soy Ariff Martínez
            <span className='text-pink-neon text-ms lg:text-base font-normal'>{`</h1>`}</span>
          </p>

          <p className=' text-title lg:text-5xl leading-tight px-4'>
            Soy
            <span className='bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent'>{` Ingeniero de ${'$'}{Software}`}</span>{' '}
            y Desarrollador Web{' '}
            <span className='bg-gradient-to-r from-orange-neon to-orange-neon-contrast bg-clip-text text-transparent'>
              ${`{Full - Stack}`}
            </span>{' '}
          </p>

          <span className='text-pink-neon text-ms lg:text-sm float-left'>
            {'<p>'}
          </span>
          <p className='px-6 text-sm lg:text-base'>
            Mi experiencia se centra en el desarrollo web full-stack, con{' '}
            <span className='text-yellow-neon'>JavaScript</span> como lenguaje
            principal. Dominio avanzado de frameworks y librerías como{' '}
            <span className='text-yellow-neon'>
              Node.js, React, Next.js, Angular y Nest.js Node.js, React,
              Next.js, Angular y Nest.js
            </span>
            . Complementando con habilidades en{' '}
            <span className='text-orange-neon'>PHP</span>,{' '}
            <span className='text-blue-neon'>Python</span> para análisis de
            datos y ciencia de datos utilizando{' '}
            <span className='text-orange-neon'>SQL</span> . Especializado en el
            desarrollo de soluciones web escalables y de alto impacto
          </p>
          <span className='text-pink-neon text-ms lg:text-sm text-end'>
            {'</p>'}
          </span>
          <CarouselLanguages />
          <DownLoadCV />
        </div>
      </section>
      <section className='bg-section-background rounded-lg border-2 border-border-section flex flex-col lg:flex-row lg:justify-around p-6 gap-10'>
        {funnyFacts.map((fact) => (
          <div
            key={fact.description}
            className='flex flex-col gap-2 justify-center items-center'
          >
            {fact.icon}
            <p
              className={`${fact.color} flex items-center text-3xl lg:text-4xl`}
            >
              {fact.count}{' '}
              <span>
                <PlusCircle fontSize={16} className='text-primary-text-color' />
              </span>
            </p>
            <p className='lg:text-lg'>{fact.description}</p>
          </div>
        ))}
      </section>
      <section className='bg-section-background rounded-lg border-2 border-border-section flex flex-col items-center justify-center gap-2 p-4'>
        <h3 className='bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent text-lg font-bold text-center'>
          Habilidades
        </h3>
        <p className='text-center text-sm'>
          Diseñando <span className='text-blue-neon'>soluciones</span>{' '}
          personalizadas sobre tus requerimientos
        </p>
        <div className='flex flex-col gap-6 '>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className='p-4 border border-border-section flex flex-col justify-center gap-2 min-h-[250px] rounded-md '
            >
              {skill.icon}
              {skill.title}
              {skill.description}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
