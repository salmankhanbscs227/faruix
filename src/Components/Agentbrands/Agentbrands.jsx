import React from 'react'

const Agentbrands = () => {
  return (
    <div className='flex flex-col mt-12'>
        <div className='flex flex-col justify-center items-center gap-2 '>
        <h1 className='font-bold text-2xl sm:text-4xl'>Agent Brands</h1>
        <h3 className='text-[#636567] text-center'>Rich product resources, quality assurance, stable supply chain</h3>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
        <div className='flex flex-col justify-center items-center'>
            <img src="images/brand-1.png" alt="" />
            <button className='w-32 px-co py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg'>RJ brand</button>

        </div>

        <div className='flex flex-col justify-center items-center'>
            <img src="/images/brand-2.png" alt="" />
            <button className='w-32 px-co py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg'>JK brand</button>

        </div>

        <div className='flex flex-col justify-center items-center'>
            <img src="/images/brand-3.png" alt="" />
            <button className='w-32 px-co py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg'>ZY brand</button>

        </div>

        </div>
      
    </div>
  )
}

export default Agentbrands
