import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCallLight } from "react-icons/pi";
import { BsEnvelope } from "react-icons/bs";


const Footer_1 = () => {
  return (
    <div data-aos="fade-up" className='w-screen bg-[#0d0d0d] h-auto'>
      <div className='wrapper '>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 text-[#cdcdcd] gap-2 sm:grid-cols-3 px-4 py-4'>
            <div className="logo-section text-sm sm:text-lg  -mt-4 flex flex-col gap-2 px-1 ">
              <div className="logo-wrapper flex items-center gap-1">
                <img src="/images/black_logo.png" className='h-12 w-12 sm:h-auto sm:w-auto' alt="" />
                <h1 className=' text-white lg:text-4xl text-sm:3xl text-2xl '>Faruix</h1>
              </div>
              <div className="desc">
                <p>Faruix specializes in manufacturing and selling mobile phone accessories, including LCD screens, batteries, and spare parts for phone repairs. 

                </p>
              </div>
              <div className="contact-wrapper flex flex-col gap-2">
                <div className='location flex items-center gap-2'>
                  <div className='bg-blue-600 rounded-full w-8 h-8 flex justify-center items-center text-white'><SlLocationPin/></div>
                  <div className="address">254 Lillian Belvd, Hallbrook</div>
                </div>
                <div className='cell flex items-center gap-2'>
                  <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center text-blue-600'><PiPhoneCallLight/></div>
                  <div className="address">1-800-654-3210</div>
                </div>

                <div className='email flex items-center gap-2'>
                  <div className='bg-white rounded-full w-8 h-8 flex justify-center items-center text-blue-600'><BsEnvelope/></div>
                  <div className="address">info@faruix.com</div>
                </div>
              </div>
            </div>
            
            
            
            <div className="list-1 flex flex-col ">
              <div className="heading sm:text-xl text-lg  text-white ">
                <h1 className='text-white'>Information</h1>
              </div>
              <div className="remaining-contents text-sm sm:text-lg mt-2 gap-1  flex flex-col">
                <span>New Products</span>
                <span>Offer Products</span>
                <span>Best Seller</span>
                <span>Terms and Conditions</span>
                <span>About Our Shop</span>
              </div>
            </div>

            <div className="list-2 flex flex-col">
              <div className="heading sm:text-xl text-lg  text-white ">
                <h1 className='text-white'>Your Account</h1>
              </div>
              <div className="remaining-contents text-sm sm:text-lg mt-2 gap-1  flex flex-col">
                <span>Addresses</span>
                <span>Credit Slips</span>
                <span>Orders</span>
                <span>Personal Info</span>
                <span>My Wishlists</span>
              </div>
            </div>

            <div className='list-3 flex flex-col'>
              <div className="heading sm:text-xl text-lg  text-white ">
                <h1>Sign Up Newsletter</h1>
              </div>
              <div className="remaining-contents text-sm sm:text-lg mt-2 gap-2 md:gap-4  flex flex-col ">
                <div><span className=''>Get Updates by Subscribing our weekley newsletter</span></div>
                <div className='flex flex-row'>
                  <input className='rounded-lg lg:px-4  lg:py-2 px-2 py-2 outline-none border-none' type="text"  placeholder='Email Address'/>
                  <button className='subscribe text-white rounded-md lg:px-2 lg:py-1 px-1 py-1 bg-blue-600 -ml-16  sm:-ml-16 lg:-ml-24'>Subscriibe</button>
                </div>
              </div>
            </div>

        </div>
        <div className='social flex flex-row px-4 justify-between text-white[#8b9198]'>
            <div className='rights '><span className='text-[#8b9198] text-md'>© - All Rights Reserved</span></div>
            <div className='logos text-[#8b9198] sm:text-2xl text-lg flex gap-2 cursor-pointer'>
              <FaInstagram/>
              <IoLogoFacebook/>
              <FaTwitter/>
            </div>
        </div>
        <div className='horizontal-line text-white sm:mt-8 mt-4 h-1 px-4'>
          <hr/>
        </div>
      </div>
    </div>
  )
}

export default Footer_1
