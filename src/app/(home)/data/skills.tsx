import {
  AppWindow,
  Database,
  XrayView,
  StatsUpSquare,
  Cart,
  DesignPencil,
} from 'iconoir-react'
// Todo: Customize labels, size, and colors for each section.
// Todo: Create a file for Tailwind modules to optimize repeated configuration.
export const skills = [
  {
    id: 1,
    icon: <AppWindow fontSize={24} className='text-yellow-neon' />,
    title: <p className='text-yellow-neon text-sm'>Full Stack Web</p>,
    description: (
      <p className='text-xs font-light'>
        Desde la creación de <span className='text-red-neon'>APIs</span>{' '}
        eficientes hasta la implementación de interfaces interactivas, me enfoco
        en ofrecer experiencias web completas y{' '}
        <span className='text-green-neon'>optimizadas</span> que satisfacen las
        necesidades del cliente y aseguran una{' '}
        <span className='text-red-neon'>navegación</span> fluida para los
        usuarios finales.
      </p>
    ),
  },
  {
    id: 2,
    icon: <Database fontSize={24} className='text-orange-neon' />,
    title: (
      <p className='text-orange-neon text-sm'>Gestión de Bases de datos</p>
    ),
    description: (
      <p className='text-xs font-light'>
        Tengo experiencia en la{' '}
        <span className='text-pink-neon'>administración</span> y{' '}
        <span className='text-pink-neon'>optimización</span> de bases de datos
        para asegurar un almacenamiento y acceso de datos eficiente y seguro.
        Utilizo tecnologías como{' '}
        <span className='text-orange-neon'>PostgreSQL</span>,{' '}
        <span className='text-orange-neon'>MariaDB</span> y{' '}
        <span className='text-green-neon'>MongoDB</span> para diseñar
        estructuras de datos robustas y escalables, adaptadas a las necesidades
        específicas de cada proyecto
      </p>
    ),
  },
  {
    id: 3,
    icon: <XrayView fontSize={24} className='text-red-neon' />,
    title: <p className='text-red-neon text-sm'>Desarrollo de APIs</p>,
    description: (
      <p className='text-xs font-light'>
        Utilizando frameworks como{' '}
        <span className='text-yellow-neon'>Express</span>,{' '}
        <span className='text-blue-neon'>Flask</span> y{' '}
        <span className='text-pink-neon'>Nest.js</span>, desarrollo
        arquitecturas de APIs RESTful que optimizan el flujo de datos, soportan
        alto rendimiento y son escalables para adaptarse a necesidades futuras.
      </p>
    ),
  },
  {
    id: 4,
    icon: <StatsUpSquare fontSize={24} className='text-blue-neon' />,
    title: (
      <p className='text-blue-neon text-sm'>Optimización de Rendimiento</p>
    ),
    description: (
      <p className='text-xs font-light'>
        Me especializo en mejorar el{' '}
        <span className='text-red-neon'>rendimiento</span> de aplicaciones y
        sistemas para ofrecer experiencias rápidas y eficientes. Utilizo
        técnicas como el ajuste de{' '}
        <span className='text-orange-neon'>consultas</span> en bases de datos y
        la <span className='text-green-neon'>gestión de memoria</span> para
        identificar y resolver cuellos de botella.
      </p>
    ),
  },
  {
    id: 5,
    icon: <Cart className='text-purple-neon' />,
    title: <p className='text-purple-neon text-sm'>Soluciones E-commerce</p>,
    description: (
      <p className='text-xs font-light'>
        Integro <span className='text-yellow-neon'>pasarelas de pago</span>{' '}
        seguras,{' '}
        <span className='text-orange-neon'>sistemas de inventario</span> en
        tiempo real y carritos de compra personalizados, creando tiendas en
        línea escalables, confiables y fáciles de gestionar, adaptadas a cada
        negocio.
      </p>
    ),
  },
  {
    id: 6,
    icon: <DesignPencil className='text-green-neon' />,
    title: (
      <p className='text-green-neon text-sm'>
        Desarrollo de Interfaces de Usuario (UI)
      </p>
    ),
    description: (
      <p className='text-xs font-light'>
        Diseño interfaces de usuario intuitivas y atractivas que enriquecen la
        experiencia del usuario. Utilizando{' '}
        <span className='text-red-neon'>Figma</span>, creo soluciones
        responsivas que se adaptan a cualquier dispositivo, garantizando una
        navegación <span className='text-blue-neon'>fluida</span> y{' '}
        <span className='text-yellow-neon'>efectiva</span>.
      </p>
    ),
  },
]
