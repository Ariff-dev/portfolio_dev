import { Mail, Phone, Position, Instagram } from 'iconoir-react'

export const contactData = [
  {
    id: 1,
    icon: <Phone fontSize={16} className='text-red-neon' />,
    title: 'Mi número',
    description: '+52 5532902312',
  },
  {
    id: 2,
    icon: <Mail fontSize={16} className='text-green-neon' />,
    title: 'Email',
    description: 'ariff.dev24@gmail.com',
  },
  {
    id: 3,
    icon: <Position fontSize={16} className='text-yellow-neon' />,
    title: 'Sede',
    description: 'Ciudad de México, CDMX',
  },
  {
    id: 4,
    icon: <Instagram fontSize={16} className='text-blue-neon' />,
    title: 'Instagram',
    description: '@ariff.dev',
  },
]
