import React from 'react'
import { CgPlayButtonO } from "react-icons/cg";


const VideoGallery = () => {

  return (
    <div className='mt-12'>
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold lg:text-3xl text-2xl'>Video Gallery</h1>
        <h4 className='text-[#bdc2c8] lg:text-xl text-lg'>Faruix factory production plant video</h4>
    </div>

    <div className='grid sm:grid-cols-2 gap-2 px-4 md:grid-cols-3 md:gap-4 lg:gap-4 content-around lg:px-12 lg:py-12'>
        <div className="relative h-auto cursor-pointer">
          
          <div className=' flex justify-center items-center text-white  absolute inset-0 backdrop-brightness-50
          hover:backdrop-brightness-90 transition-all delay-100'><CgPlayButtonO className="text-4xl lg:text-5xl" />
</div>
          <img src="/images/gallery_1.png" className='-z-12' alt="" />
          
        </div>
        <div className="relative h-auto cursor-pointer">
          {/* <img src="/images/gallery_1.png" className='-z-12' alt="" /> */}
          <div className='flex justify-center items-center text-white absolute inset-0 backdrop-brightness-50
          hover:backdrop-brightness-90 transition-all delay-100'><CgPlayButtonO className="text-4xl lg:text-5xl" />
</div>
          <img src="/images/gallery_2.png" className='-z-12' alt="" />
          
        </div>

        <div className="relative h-auto cursor-pointer">
          {/* <img src="/images/gallery_1.png" className='-z-12' alt="" /> */}
          <div className='flex items-center justify-center text-white absolute inset-0 backdrop-brightness-50
          hover:backdrop-brightness-90 transition-all delay-100'> <CgPlayButtonO className="text-4xl lg:text-5xl" />
</div>
          <img src="/images/gallery_3.png" className='-z-12' alt="" />
          
        </div>
    </div>

    <div className=' flex items-center justify-center text-white mt-2 '>
        <button className='px-4 py-1  bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg'>View all</button>
    </div>
    </div>
  )
}

export default VideoGallery
