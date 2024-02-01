import React from 'react'

const TeamCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='rounded-full overflow-hidden'>
        <img className='rounded-full hover:scale-150 transition-all delay-100' src={props.image} alt="" />
        </div>
        <h1 className='font-bold text-lg sm:text-xl '>{props.name}</h1>
        <h2 className='text-sm sm:text-lg text-[#b5bac0]'>{props.designation}</h2>
    </div>
  )
}

export default TeamCard;
