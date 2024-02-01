import React, { useState } from "react";
import mobile from "/images/mobile.png";
import map from "/images/map.png";
const Slider = () => {
  const [isclicked, setIsclicked] = useState(false);
  return (
    <div className="md:mt-10 flex flex-col md:py-4">
      <div className="md:px-24 grid md:grid-cols-2 lg:px-32  md:grid-col-1">
        <div className="md:flex md:flex-col px-2 flex flex-col gap-1 md:gap-4 mt-24 z-[1000] ">
          <span className="bg-white text-sm sm:text-lg text-blue-500 rounded-lg px-2 py-1 lg:py-2  sm:w-56 w-44 ">
            100% genuine Products
          </span>
          <h1 className="font-bold text-xl md:font-bold md:text-4xl">
            {isclicked
              ? "Become Our Customer"
              : "Faruix makes the world more environental!"}
          </h1>
          <h1
            className="font-bold text-smmd:font-bold md:text-xl"
            style={{ display: isclicked ? "flex" : "none" }}
          >
            We have a stable supply chain,
            <br /> Reliable prodcut quality{" "}
          </h1>
          <button className="bg-blue-600 md:w-24 w-20 md:px-2 md:py-2  text-white rounded-sm">
            Shop now
          </button>
        </div>
        <div
          className=" md:flex object-cover cursor-pointer -ml-12 object-cover"
          onClick={() => {
            setIsclicked(!isclicked);
          }}
        >
          <img
            src={isclicked ? map : mobile}
            alt=""
            className='isclicked?"animate-fade":"animate-fade" w-[100%] h-[100%]  z-[900] overflow-hidden'
          />
        </div>
      </div>

      <div className="w-screen flex justify-center gap-2 cursor-pointer">
        <span
          className={
            isclicked
              ? "rounded-lg w-12 h-3 border-2 bg-blue-600 border-blue-600 translate-x-6 transition-all "
              : " rounded-lg w-12 h-3 border-2  bg-blue-600 border-blue-600  "
          }
          onClick={() => {
            setIsclicked(!isclicked);
          }}
        ></span>
        <span
          className={
            isclicked
              ? "rounded-full w-3 h-3 border-2 bg-white border-blue-600 transition-all  -translate-x-12 "
              : "rounded-full w-3 h-3 border-2 bg-white border-blue-600 transition-all "
          }
          onClick={() => {
            setIsclicked(!isclicked);
          }}
        ></span>

        <span
          className="rounded-full w-3 h-3 border-2 bg-white border-blue-600"
          onClick={() => {
            setIsclicked(!isclicked);
          }}
        ></span>
      </div>
    </div>
  );
};

export default Slider;
