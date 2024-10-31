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
    icon: <AppWindow />,
    title: 'Full Stack Web',
    description: (
      <p className=''>
        Desde la creación de <span className='text-red-neon'>APIs</span>{' '}
        eficientes hasta la implementación de interfaces interactivas, me enfoco
        en ofrecer experiencias web completas y optimizadas que satisfacen las
        necesidades del cliente y aseguran una navegación fluida para los
        usuarios finales.
      </p>
    ),
  },
  {
    icon: <Database />,
    title: 'Gestión de Bases de datos',
    description: (
      <p>
        Tengo experiencia en la administración y optimización de bases de datos
        para asegurar un almacenamiento y acceso de datos eficiente y seguro.
        Utilizo tecnologías como PostgreSQL, MariaDB y MongoDB para diseñar
        estructuras de datos robustas y escalables, adaptadas a las necesidades
        específicas de cada proyecto
      </p>
    ),
  },
  {
    icon: <XrayView />,
    title: 'Desarrollo de APIs',
    description: (
      <p>
        Utilizando frameworks como Express, Flask y Nest.js, desarrollo
        arquitecturas de APIs RESTful que optimizan el flujo de datos, soportan
        alto rendimiento y son escalables para adaptarse a necesidades futuras.
      </p>
    ),
  },
  {
    icon: <StatsUpSquare />,
    title: 'Optimización de Rendimiento',
    description: (
      <p>
        Me especializo en mejorar el rendimiento de aplicaciones y sistemas para
        ofrecer experiencias rápidas y eficientes. Utilizo técnicas como el
        ajuste de consultas en bases de datos y la gestión de memoria para
        identificar y resolver cuellos de botella.
      </p>
    ),
  },
  {
    icon: <Cart />,
    title: 'Soluciones E-commerce',
    description: (
      <p>
        Integro pasarelas de pago seguras, sistemas de inventario en tiempo real
        y carritos de compra personalizados, creando tiendas en línea
        escalables, confiables y fáciles de gestionar, adaptadas a cada negocio.
      </p>
    ),
  },
  {
    icon: <DesignPencil />,
    title: 'Desarrollo de Interfaces de Usuario (UI) ',
    description: (
      <p>
        Diseño interfaces de usuario intuitivas y atractivas que enriquecen la
        experiencia del usuario. Utilizando Figma, creo soluciones responsivas
        que se adaptan a cualquier dispositivo, garantizando una navegación
        fluida y efectiva.
      </p>
    ),
  },
]
