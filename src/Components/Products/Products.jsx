import React from 'react'

const Products = () => {
  return (
   <div className='mt-4'>
    <div className='products grid   lg:grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 lg:px-16  border-black'>
      <div className='flex flex-col justify-center items-center'>
        <img src="images/battery.png" alt="" className="md:w-auto md:h-auto w-16 h-16" />
        <h2 className="md:text-xl text-lg">Phone Batteries</h2>
        
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src="images/phone.png" alt="" className="md:w-auto md:h-auto w-16 h-16"   />
        <h2 className="md:text-xl text-lg">Phone Display</h2>
        
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src="images/adapter.png" alt="" className="md:w-auto md:h-auto w-16 h-16"  />
        <h2 className="md:text-xl text-lg">Adapter</h2>
        
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src="images/iphone_parts.png" alt="" className="md:w-auto md:h-auto w-16 h-16"  />
        <h2 className="md:text-xl text-lg">iPhone Parts</h2>
        
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src="images/charging_cable.png" alt="" className="md:w-auto md:h-auto w-16 h-16"  />
        <h2 className="md:text-xl text-lg">Charging Cable</h2>
        
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src="images/headphones.png" alt="" className="md:w-auto md:h-auto w-16 h-16"  />
        <h2 className="md:text-xl text-lg">Headphones</h2>
        
      </div>
       
    </div>
    <div className='flex justify-around w-screen'>
    <div className='h-1 w-3/4 lg:w-full bg-[#ecedef] mt-1'></div>
    </div>
    </div>

  )
}

export default Products
