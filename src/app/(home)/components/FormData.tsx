import { contactData } from '../data'
import { ArrowUpRightSquareSolid } from 'iconoir-react'

export const FormData = () => {
  return (
    <section className='bg-section-background rounded-lg border-2 border-border-section '>
      <div className='p-4 flex flex-col gap-4 '>
        <h4 className='bg-gradient-to-r from-blue-neon to-blue-neon-contrast bg-clip-text text-transparent text-center'>
          Contacto
        </h4>
        <div className='grid place-content-center  lg:grid-cols-2 gap-4'>
          <form className=''>
            <div className='grid lg:grid-cols-2 lg:gap-4 gap-4'>
              <input
                type='text'
                placeholder='Tu nombre'
                className='p-4 bg-border-section rounded-lg w-full'
              />
              <input
                type='text'
                placeholder='Télefono'
                className='p-4 bg-border-section rounded-lg w-full'
              />
              <input
                type='text'
                placeholder='Tu email'
                className='p-4 bg-border-section rounded-lg w-full'
              />
              <input
                type='text'
                placeholder='Asunto'
                className='p-4 bg-border-section rounded-lg w-full'
              />
            </div>
            <div className='py-4'>
              <textarea
                name='Messsage'
                id=''
                placeholder='Mensaje'
                className='p-4 bg-border-section rounded-lg w-full h-[280px]'
              />
            </div>
            <button className='py-4 flex gap-4'>
              Enviar Mensaje
              <ArrowUpRightSquareSolid fontSize={16} />
            </button>
          </form>
          <div className='flex flex-col gap-4  justify-start items-start'>
            {contactData.map((contact) => (
              <div
                key={contact.id}
                className='flex items-center justify-center gap-4'
              >
                <div className='p-8 bg-black/10 rounded-lg'>{contact.icon}</div>
                <div>
                  <p className='text-secondary-text-color font-bold'>
                    {contact.title}
                  </p>
                  <span className='text-primary-text-color text-sm'>
                    {contact.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
