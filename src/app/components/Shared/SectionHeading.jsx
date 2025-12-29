import React from 'react'

const SectionHeading = ({heading}) => {
  return (
    <div className='mb-10 w-full flex flex-col lg:flex-row justify-between items-start gap-5'>
        <h2 className='lg:text-5xl md:text-3xl text-2xl text-center lg:text-start  Unbounded'>{heading}</h2>
    </div>
  )
}

export default SectionHeading