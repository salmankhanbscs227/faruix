import React, { useState } from 'react'

const BrandSeries = () => {
  const[Focused1,setFocused1] = useState(false);
  const[Focused2,setFocused2] = useState(false);
  const[Focused3,setFocused3] = useState(false);
  const[Focused4,setFocused4] = useState(false);
  const[Focused5,setFocused5] = useState(false);

  return (
    <div className='lg:mt-28 md:mt-20 sm:mt-12 mt-16 lg:text-4xl font-bold'>
        <div className='flex  items-center justify-center gap-8 transition-all'>
        <h1 className='font-bold lg:text-4xl md:text-2xl text-xl '>
            Five Brand Series Screen 
            
        </h1>
        </div>
        <div className='grid lg:grid-cols-5 sm:grid-cols-2 xsm:grid-cols-2 lg:gap-12 gap-4 md:grid-cols-3 '>
            <div className='flex flex-col justify-center items-center gap-4  hover:shadow-lg hover:shadow-black hover:border-b-4 border-b-blue-600' 
            onMouseEnter={()=>setFocused1(true)} onMouseLeave={()=>setFocused1(false)}>
            <div>
            <img src="/images/orange_logo.png" className='object-cover' alt="" />
            </div>
            <div>
            <img src="/images/orange_13.png" className='h-[100%] w-[100%] object-cover' alt="" />
            </div>
            <span className='text-blue-400 text-lg text-center cursor-pointer -ml-12'>{Focused1?"View all": ""
            }</span>
            </div>

             <div className='flex flex-col justify-center items-center gap-4 
             lg:mt-12  hover:shadow-lg hover:shadow-black hover:border-b-4 border-b-blue-600' 
            onMouseEnter={()=>setFocused2(true)} onMouseLeave={()=>setFocused2(false)}>
            <div>
            <img src="/images/logo.png" className='h-20 w-20' alt="" />
            </div>
            <div>
            <img src="/images/max.png" alt="" className='h-[100%] w-[100%] object-cover' />
            </div>
            <span className='text-blue-400 text-lg text-center cursor-pointer -ml-12 '>{Focused2?"View all": ""
            }</span>
            </div>

            <div className='flex flex-col justify-center items-center gap-4  hover:shadow-lg hover:shadow-black hover:border-b-4 border-b-blue-600' 
            onMouseEnter={()=>setFocused3(true)} onMouseLeave={()=>setFocused3(false)}>
            <div>
            <img src="/images/jk_logo.png" alt="" />
            </div>
            <div>
            <img src="/images/incell_14.png" alt="" className='h-[100%] w-[100%] object-cover' />
            </div>
            <span className='text-blue-400 text-lg text-center cursor-pointer -ml-12'>{Focused3?"View all": ""
            }</span>
            </div>

            <div className='flex flex-col justify-center items-center gap-4  hover:shadow-lg hover:shadow-black hover:border-b-4 border-b-blue-600' 
            onMouseEnter={()=>setFocused4(true)} onMouseLeave={()=>setFocused4(false)}>
            <div>
            <img src="/images/orange_chinese_logo.png" alt="" />
            </div>
            <div>
            <img src="/images/incell_13_black.png" alt="" />
            </div>
            <span className='text-blue-400 text-lg text-center cursor-pointer -ml-12'>{Focused4?"View all": ""
            }</span>
            </div>



            <div className='flex flex-col justify-center items-center gap-4  hover:shadow-lg hover:shadow-black hover:border-b-4 border-b-blue-600' 
            onMouseEnter={()=>setFocused5(true)} onMouseLeave={()=>setFocused5(false)}>
            <div>
            <img src="/images/logo.png" className='h-20 w-20' alt="" />
            </div>
            <div>
            <img src="/images/11_pro_max.png" alt="" />
            </div>
            <span className='text-blue-400 text-lg text-center cursor-pointer -ml-12'>{Focused5?"View all": ""
            }</span>
            </div>


         

            


        </div>
      
    </div>
  )
}

export default BrandSeries
