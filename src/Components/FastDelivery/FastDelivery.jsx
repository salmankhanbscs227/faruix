import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { PiPhoneCallBold } from "react-icons/pi";
import { SiContactlesspayment } from "react-icons/si";
import { CiBadgeDollar } from "react-icons/ci";





const FastDelivery = () => {
  return (
    <div className='grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2 w-screem lg:gap-6 gap-4 md:gap-2 sm:gap-2 mt-4  content-center  h-auto px-12 py-12 bg-[#f2f5f7]'>
      <div className='flex flex-col px-4 py-4 gap-1 bg-white hover:border-b-2 border-blue-600 '>
        <CiDeliveryTruck className='text-blue-500 lg:text-4xl text-3xl'/>
        <div>
            <h1 className='font-bold lg:text-2xl text-xl'>
                Fast Delivery
            </h1>
            <h3 className='text-[#8b9198]  text-sm '>Express Shipping Methods</h3>
        </div>

      </div>

      <div className='flex flex-col px-4 py-4 gap-1 bg-white hover:border-b-2 border-blue-600 '>
        <PiPhoneCallBold className='text-blue-500 lg:text-4xl text-3xl'/>
        <div>
            <h1 className='font-bold lg:text-2xl text-xl'>
                Support 24/7
            </h1>
            <h3 className='text-[#8b9198]  text-sm '>Contact us 24 Hours Daily</h3>
        </div>

      </div>


      <div className='flex flex-col px-4 py-4 gap-1 bg-white hover:border-b-2 border-blue-600 '>
        <SiContactlesspayment className='text-blue-500 lg:text-4xl text-3xl'/>
        <div>
            <h1 className='font-bold lg:text-2xl text-xl'>
                Secure Payments
            </h1>
            <h3 className='text-[#8b9198]  text-sm '>100% Payments Protection</h3>
        </div>

      </div>

      <div className='flex flex-col px-4 py-4 gap-1 bg-white hover:border-b-2 border-blue-600 '>
        <CiBadgeDollar className='text-blue-500 lg:text-4xl text-3xl'/>
        <div>
            <h1 className='font-bold lg:text-2xl text-xl'>
                Qaulity & Service
            </h1>
            <h3 className='text-[#8b9198]  text-sm '>We Focus on Quality & Service</h3>
        </div>

      </div>


      
    </div>
  )
}

export default FastDelivery
