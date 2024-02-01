import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCallLight } from "react-icons/pi";
import { BsEnvelope } from "react-icons/bs";




const Footer = () => {
  return (
    <div className='footer w-screen bg-[#0d0d0d] h-auto flex flex-col 
    lg:py-20 py-12 '>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2 sm:gap-4  lg:gap-20 lg:px-24'>
        <div className='flex flex-col gap-4 lg:px-2 md:px-8 px-4 '>
            <div className='flex items-center '>
                <img src="/images/black_logo.png" className='lg:-ml-4 w-16 h-16' alt="" /> 
                <span className='text-white font-bold xl:text-6xl md:text-4xl text-2xl lg:text-4xl'>Faruix</span>
            </div>
            <div className='text-[#cdcdcd] '><p className=''>Faruix specializes in manufacturing and selling mobile phone accessories, including LCD screens, batteries, 
                and spare parts for phone repairs. </p></div>
            <div className='flex flex-col  gap-4 text-[#cdcdcd]'>
                <div className='flex  items-center gap-2'>
                <i className='rounded-full bg-blue-600 w-8 h-8    
                flex items-center justify-center'><SlLocationPin/></i>
                
                <span className=''>254 Lillian Blvd, Holbrook</span>
                </div>

                <div className='flex items-center gap-2'>
                <i className='rounded-full bg-white w-8 h-8
                flex items-center justify-center'><PiPhoneCallLight className='text-blue-600'/></i>
                
                <span>1-800-654-3210</span>
                </div>

                <div className='flex items-center gap-2'>
                <i className='rounded-full bg-white w-8 h-8
                flex items-center justify-center'><BsEnvelope className='text-blue-600'/></i>
                
                <span>info@faruix.com</span>
                </div>

            </div>
        </div>
        <div className='flex flex-col items-center   lg:py-8 text-[#cdcdcd]'>
            
            <ul className='flex flex-col list-none gap-4 -ml-44 sm:ml-0  lg:gap-12'>
                <li><h1 className='text-white font-bold text-xl lg:text-xl '>Information</h1></li>
                <ul className='flex flex-col gap-3'>
                <li><span>New Products</span></li>
                <li><span>Offer Products</span></li>
                <li><span>Special Offer</span></li>
                <li><span>Best Seller</span></li>
                <li><span>Terms and Condition</span></li>
                <li><span>About Our Shop</span></li>
                </ul>
            </ul>
        </div>

        <div className='flex flex-col items-center   lg:py-8 text-[#cdcdcd]'>
            
            <ul className='flex flex-col  list-none sm:-ml-48 -ml-48 gap-4'>
                <li><h1 className='text-white font-bold text-xl lg:text-xl '>Your Account</h1></li>
                <ul className='flex flex-col gap-2 lg:gap-3'>
                <li><span>Addresses</span></li>
                <li><span>Credit Slips</span></li>
                <li><span>Orders</span></li>
                <li><span>Personal info</span></li>
                <li><span>My wishlists</span></li>
                </ul>
                
            </ul>
        </div>

        <div className='flex flex-col items-center   lg:py-8 text-[#cdcdcd]'>
            
            <ul className='flex flex-col  list-none sm:ml-4 md:-ml-6 -ml-36 gap-4'>
                <li><h1 className='text-white font-bold text-xl lg:text-xl  '>Sign Up Newsletter</h1></li>
                <ul className=' flex flex-col lg:gap-3 gap-2'>
                <li className=''><span>Addresses</span></li>
                <li className=''><span>Credit Slips</span></li>
                <li className=''><span>Orders</span></li>
                <li className=''><span>Personal info</span></li>
                <li className=''><span>My wishlists</span></li>
                </ul>
                
            </ul>
        </div>


      </div>

      <div>
        <div></div>
        <div></div>
      </div>
      <div className='lg:mt-6  '>
        <hr className='text-white'/>
      </div>
    </div>
  )
}

export default Footer
