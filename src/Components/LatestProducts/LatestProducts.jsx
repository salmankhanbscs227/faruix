import React, { useState } from 'react'
import pro_incell from '/images/11_pro_incell.png'
import hover_pro from '/images/hover_11_pro.png'
const LatestProducts = () => {
    const[isHovered,setIshovered] = useState(false);
  return (
    <div className='w-screen h-auto px-8 lg:mt-16 flex flex-col lg:gap-8 mt-4 gap-4'>
        <div className=' w-screen flex items-center justify-center'>
            <h1 className='font-bold text-xl lg:text-2xl '>Latest Product</h1>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-4 md:gap-8 lg:gap-12 sm:grid-cols-2 sm:gap-4 gap-2'>
            <div className='flex flex-col justify-center items-center md:px-4 lg:px-6 lg:py-4 border lg:gap-4 gap-2 px-2 py-2 gap-2 px-2 py-2'>
                <img className='transition ease-in-out hover:opacity delay-150' src="/images/11_pro_incell.png"alt="" onMouseEnter={(e)=>{e.currentTarget.src="images/hover_11_pro.png" }} onMouseLeave={(e)=>{e.currentTarget.src='/images/11_pro_incell.png'}} />
                <p className='font-bold'>RJ incell LCD Assembly with Metal Plate for iPhone 11 Pro</p>
                <button className='rounded-lg hover:bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-700 lg:px-3 lg:py-1 px-2 py-1 px-2 py-1 text-white'>Shop now</button>
            </div>

            <div className='flex flex-col justify-center items-center md:px-4 md:py-2 lg:px-6 lg:py-4 border lg:gap-4 gap-2 px-2 py-2'>
                <img src="/images/11_pro_incell.png"alt="" onMouseEnter={(e)=>{e.currentTarget.src="images/hover_11_pro.png" }} onMouseLeave={(e)=>{e.currentTarget.src='/images/11_pro_incell.png'}} />
                <p className='font-bold'>RJ incell LCD Assembly with Metal Plate for iPhone 11 Pro</p>
                <button className='rounded-lg hover:bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-700 lg:px-3 lg:py-1 px-2 py-1 text-white'>Shop now</button>
            </div>

            <div className='flex flex-col justify-center items-center md:px-4 md:py-2 lg:px-6 lg:py-4 border lg:gap-4 gap-2 px-2 py-2'>
                <img src="/images/11_pro_incell.png"alt="" onMouseEnter={(e)=>{e.currentTarget.src="images/hover_11_pro.png" }} onMouseLeave={(e)=>{e.currentTarget.src='/images/11_pro_incell.png'}} />
                <p className='font-bold'>RJ incell LCD Assembly with Metal Plate for iPhone 11 Pro</p>
                <button className='rounded-lg hover:bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-700 lg:px-3 lg:py-1 px-2 py-1 text-white'>Shop now</button>
            </div>

            <div className='flex flex-col justify-center items-center md:px-4 md:py-2 lg:px-6 lg:py-4 border lg:gap-4 gap-2 px-2 py-2'>
                <img src="/images/11_pro_incell.png"alt="" onMouseEnter={(e)=>{e.currentTarget.src="images/hover_11_pro.png" }} onMouseLeave={(e)=>{e.currentTarget.src='/images/11_pro_incell.png'}} />
                <p className='font-bold'>RJ incell LCD Assembly with Metal Plate for iPhone 11 Pro</p>
                <button className='rounded-lg hover:bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-700 lg:px-3 lg:py-1 px-2 py-1 text-white'>Shop now</button>
            </div>

            <div className='flex flex-col justify-center items-center md:px-4 md:py-2 lg:px-6 lg:py-4 border lg:gap-4 gap-2 px-2 py-2'>
                <img src="/images/11_pro_incell.png"alt="" onMouseEnter={(e)=>{e.currentTarget.src="images/hover_11_pro.png" }} onMouseLeave={(e)=>{e.currentTarget.src='/images/11_pro_incell.png'}} />
                <p className='font-bold'>RJ incell LCD Assembly with Metal Plate for iPhone 11 Pro</p>
                <button className='rounded-lg hover:bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-700 lg:px-3 lg:py-1 px-2 py-1 text-white'>Shop now</button>
            </div>

            <div className='flex flex-col justify-center items-center md:px-4 md:py-2 lg:px-6 lg:py-4 border lg:gap-4 gap-2 px-2 py-2'>
                <img src="/images/11_pro_incell.png"alt="" onMouseEnter={(e)=>{e.currentTarget.src="images/hover_11_pro.png" }} onMouseLeave={(e)=>{e.currentTarget.src='/images/11_pro_incell.png'}} />
                <p className='font-bold'>RJ incell LCD Assembly with Metal Plate for iPhone 11 Pro</p>
                <button className='rounded-lg hover:bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-700 lg:px-3 lg:py-1 px-2 py-1 text-white'>Shop now</button>
            </div>
            <div className='flex flex-col justify-center items-center md:px-4 md:py-2 lg:px-6 lg:py-4 border lg:gap-4 gap-2 px-2 py-2'>
                <img src="/images/11_pro_incell.png"alt="" onMouseEnter={(e)=>{e.currentTarget.src="images/hover_11_pro.png" }} onMouseLeave={(e)=>{e.currentTarget.src='/images/11_pro_incell.png'}} />
                <p className='font-bold'>RJ incell LCD Assembly with Metal Plate for iPhone 11 Pro</p>
                <button className='rounded-lg hover:bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-700 lg:px-3 lg:py-1 px-2 py-1 text-white'>Shop now</button>
            </div>

            <div className='flex flex-col justify-center items-center md:px-4 md:py-2 lg:px-6 lg:py-4 border lg:gap-4 gap-2 px-2 py-2'>
                <img src="/images/11_pro_incell.png"alt="" onMouseEnter={(e)=>{e.currentTarget.src="images/hover_11_pro.png" }} onMouseLeave={(e)=>{e.currentTarget.src='/images/11_pro_incell.png'}} />
                <p className='font-bold'>RJ incell LCD Assembly with Metal Plate for iPhone 11 Pro</p>
                <button className='rounded-lg hover:bg-blue-300 bg-gradient-to-r from-blue-500 to-blue-700 lg:px-3 lg:py-1 px-2 py-1 text-white'>Shop now</button>
            </div>


        </div>

        <div className='flex justify-center mt-4'>
            <button className='lg:px-6 px-4 py-1 lg:py-2 bg-blue-500 text-white rounded-lg'>View all products</button>
        </div>
      
    </div>
  )
}

export default LatestProducts
