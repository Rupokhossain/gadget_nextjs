import React from 'react'

const SectionHeading = ({heading}) => {
  return (
    <div className='mb-12 w-full flex flex-col lg:flex-row justify-between items-center lg:items-end gap-5 overflow-hidden'>
        <div data-aos="fade-right" data-aos-duration="1000" className="relative">
          <h2 className='lg:text-5xl md:text-4xl text-2xl text-center lg:text-start Unbounded'>
            {heading}
          </h2>
          <div className="h-1.5 w-24 bg-[#4B70F5] rounded-full mt-4 hidden lg:block"></div>
        </div>

        
    </div>
  )
}

export default SectionHeading;