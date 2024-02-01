import React from 'react'
import TeamCard from '../TeamCard/TeamCard'

const Team = () => {
    const data =[
        {   id:1,
            img:'/images/team_pic.png',
            name:'Team Name',
            designation:'Designation',

        },
        {   id:2,
            img:'/images/team_pic.png',
            name:'Team Name',
            designation:'Designation',

        },
        {   id:3,
            img:'/images/team_pic.png',
            name:'Team Name',
            designation:'Designation',

        },
    ]
  return (
    <div className='flex flex-col items-center justify-center bg-[#f2f5f7] w-screen 
      mt-4 lg:gap-12 gap-8 lg:py-8 py-4'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold lg:text-4xl text-2xl'>Our Team </h1>
        <h3 className='font-bold text-[#b5bac0] lg:text-xl text-lg'>Faces Behind the Excellence</h3>
      </div>
      <div className='grid  sm:grid-cols-3 content-center '>
        {
            data.map((data)=> <TeamCard key={data.id} image={data.img} name={data.name} designation={data.designation} />)
        }

      </div>

      <div>
        <button className='bg-gradient-to-r rounded-lg text-white px-4 from-blue-400 to-blue-700'>View all</button>
      </div>
    </div>
  )
}

export default Team
