import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";


const Topbar = () => {
  const [itemsCount, setItemCount] = useState(0);
  return (

    <div className="h-8 flex items-center md:h-12 md:flex md:items-center  bg-[#f2f5f7] xsm:w-[100%] border-2 border-b-[#cbdaee] md:px-4  lg:px-32 lg:w-[100%] md:justify-around" >

    <div className="md:flex md:justify-between md:items-center sm:gap-4 md:gap-8 text-sm md:text-sm lg:gap-20 ">
      <div className="flex items-center justify-center gap-1 font-nunito   tet-sm md:text-lg">
        <span className="text-blue-600  ">Free Shipping</span>
        <p className="">orders for all items</p>
      </div>

      <div className=" hidden sm:flex align-center items-center justify-center gap-5">
       <div className="hidden md:flex md:items-center">
       <input className="px-1 py-1 rounded-lg outline-none " type="text" placeholder="Search item here "    />
        <i className="md:w-[30px] md:h-[30px] md:ml-[-15px] md:rounded-full md:bg-blue-500 md:flex md:items-center justify-center cursor-pointer">
        <CiSearch className="md:h-4 md:w-4  cursor-pointer absolute text-white "/>
        </i>

       </div>


        <div className=" hidden md:flex  md:items-center md:gap-2 ">
          <div className="flex gap-2"><img src="images/uk-flag.svg" alt=""  className="w-6 h-6 object-cover md:rounded-full"/></div>
          <div className="flex items-center">
          <span>EN</span>
          <IoIosArrowDown />
          </div>
        </div>

        <div className=" hidden md:flex items-center">
          <span>USD</span>
          <IoIosArrowDown />
        </div>

        <div className="hidden md:flex items-center">
          <CiHeart />
          <IoPersonOutline />

          <div className="hidden md:block md:relative">
          <BsCart3 />
          <span className="md:absolute md:cursor-pointer md:top-[-12px] md:-mr-4 md:bg-blue-700 md:rounded-full text-white md:h-4 md:w-4 md:flex md:items-center md:justify-center">{itemsCount}</span>
          </div>




        </div>
      </div>
    </div>
    </div>
  );
};

export default Topbar;
