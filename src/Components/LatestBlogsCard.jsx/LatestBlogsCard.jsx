import React from 'react'
import { SlCalender } from "react-icons/sl";

const LatestBlogsCard = () => {
  return (
    <div className="">
    <div className="relative">
      <img className="" src="/images/latest-blog.png" alt="" />
      <button className=" text-white absolute bottom-2 left-2 px-5 py-1 bg-blue-500 rounded-lg ">
        iOS
      </button>
    </div>
    <div>
      <div className="flex flex-col px-2 lg:gap-4 gap-2 mt-4">
        <div className="flex flex-row gap-1 items-center ">
          <SlCalender className="text-blue-500 text-sm" />
          <span className="text-[#81858a] text-sm">July 27, 2020</span>
        </div>
        <div>
          <h1 className="font-bold text-xl lg:text-2xl">
            Extremely Important Notice/ Please hold off on the iOS 16
            update
          </h1>
        </div>
        <div>
          <span className="text-[#7d8186] lg:text-lg text-sm cursor-pointer">
            Read More
          </span>
        </div>
      </div>
    </div>


    
  </div>
  )
}

export default LatestBlogsCard
