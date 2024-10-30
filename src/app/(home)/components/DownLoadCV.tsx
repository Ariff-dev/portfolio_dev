import { Download } from 'iconoir-react'

//Todo: Make a function to Download CV
export const DownLoadCV = () => {
  return (
    <div className='px-4 flex items-center gap-4'>
      <Download
        fontSize={28}
        className=' border border-blue-neon rounded-full p-2 text-blue-neon'
      />
      <p className='text-irrelevant-text-color'>Descargar CV</p>
    </div>
  )
}
