import React from 'react'
import { SlCalender } from "react-icons/sl";
import LatestBlogsCard from '../LatestBlogsCard.jsx/LatestBlogsCard';


const LatestBlogs = () => {
  return (
    <div className="flex flex-col lg:mt-8 gap-4 mt-8">
      <div className="flex items-center justify-center ">
        <span className="font-bold text-3xl lg:text-4xl">Latest Blogs</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 px-8">
       <LatestBlogsCard/>
       <LatestBlogsCard/>
       <LatestBlogsCard/>
 

        
      </div>
      <div className="flex items-center justify-center mt-4">
        <button className="flex items-center justify-center text-white rounded-lg px-4 lg:px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-700">
          View all
        </button>
      </div>
    </div>
  );
}

export default LatestBlogs
