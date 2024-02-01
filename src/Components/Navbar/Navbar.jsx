import React, { useState } from 'react'
/* import { Link } from "react-router-dom"; */
import { RxHamburgerMenu } from "react-icons/rx";
import PhonesList from '../PhonesList/PhonesList';

const ShareData = () =>{

}


const Navbar = () => {
   const[buttonClicked,setButtonClicked]= useState(false);
  return (
    <div className='navbar flex items-center md:text-sm lg:justify-around justify-between px-2  py-1 sm:gap-2 bg-[#ffffff] w-2/3 shadow-lg '>
      <div className='logo_wrapper flex items-center py-1 lg:text-[25px] md:text-[#0066AE] font-roboto'>
        <img src="/images/logo.png"  alt="" className=' sm:w-12 sm:h-12 h-8 w-8' />
        <span className='font-Assistant text-blue-500 font-bold text-lg sm:text-3xl'>Faruix</span>
      </div>
      <div>
        <ul className='lg:flex hidden items-center lg:gap-8 gap-1 text-sm lg:text-lg'>
            <li>
               {/*  <Link>Apple</Link> */}
               <a href="#" className='hover:text-blue-500'>Apple</a>
            </li>
            <li>
               {/*  <Link>Apple</Link> */}
               <a href="#" className='hover:text-blue-500'>Samsung</a>
            </li>

            <li>
               {/*  <Link>Apple</Link> */}
               <a href="#" className='hover:text-blue-500'>Repair tools</a>
            </li>

            <li>
               {/*  <Link>Apple</Link> */}
               <a href="#" className='hover:text-blue-500'>About us</a>
            </li>

            <li>
               {/*  <Link>Apple</Link> */}
               <a href="#" className='hover:text-blue-500'>Contact</a>
            </li>

            <li>
               {/*  <Link>Apple</Link> */}
               <div className='rounded-md bg-gradient-to-r from-blue-500 to-blue-700 w-8 h-8 text-white flex items-center justify-center cursor-pointer'>
               <RxHamburgerMenu onClick={()=>{
                setButtonClicked(!buttonClicked);
                console.log(buttonClicked);
              }} className='block'/>

               </div>
            </li>
        </ul>
        <div className='lg:hidden  rounded-md bg-gradient-to-r from-blue-500 to-blue-700 w-8 h-8 text-white flex items-center justify-center cursor-pointer'
        onClick={()=>{
         setButtonClicked(!buttonClicked);
         console.log(buttonClicked);
         
        }}>
               <RxHamburgerMenu className='block'/>

               </div>
      </div>
      
    </div>
  )
}

export default Navbar
