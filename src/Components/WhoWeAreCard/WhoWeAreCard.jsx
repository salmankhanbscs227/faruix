import React from "react";

const WhoWeAreCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-center hover:border-b-2 lg:gap-2  border-blue-600 bg-white lg:px-8 lg:py-8 hover:shadow-xl">
      <img src={props.image} alt="" />
      <h1 className="font-bold text-lg sm:text-xl ">{props.heading}</h1>
      <p  className="text-sm sm:text-lg w-72">{props.desc}</p>
    </div>
  );
};

export default WhoWeAreCard;
