export const Timeline = ({ data }) => {
  return (
    <ol className='ml-4 flex flex-col gap-4  border-l border-neutral-300 dark:border-neutral-500'>
      {/* Primer evento */}
      {data.map((data) => (
        <li key={data.id}>
          <div className='flex items-center pt-3'>
            <div className='ml-[-5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500'></div>
            <p className='text-sm font-bold text-primary-text-color'>
              {data.temporality}
            </p>
          </div>
          <div className='mb-6 ml-4 mt-2'>
            <h4 className='mb-1.5 text-base font-semibold '>{data.title}</h4>
            <p className='mb-3 text-xs text-primary-text-color'>
              {data.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
