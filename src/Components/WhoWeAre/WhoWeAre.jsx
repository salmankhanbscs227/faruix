import React from 'react'
import WhoWeAreCard from '../WhoWeAreCard/WhoWeAreCard'

const WhoWeAre = () => {
    const data =
        [
            {   id:1,
                image:'images/vision.png',
                heading:'vision',
                desc:'To be a Global Leading Mobile Phone Repair Accessories Solution Provider',

              },

        {   id:2,
            image:'images/mission.png',
            heading:'Mission',
            desc:'To Provide One Stop Mobile Repair Platform',

          },
    {   id:3,
        image:'images/values.png',
        heading:'Values',
        desc:'Integrity, Honesty, Service First, Quality Best',
    },

    {   id:4,
        image:'images/culture.png',
        heading:'Culture',
        desc:'Be Optimistic and Brave, Hard Work, Keep Learning,, Honesty, Service First, Quality Best',
    },

            
    ]
    
  return (
    <div className=' w-screen flex justify-center items-center flex-col lg:gap-8 lg:mt-12 md:mt-8 mt-4'>
      <div className='flex flex-col gap-4 px-4'>
        <img src="/images/logo.png" alt="" className='lg:w-36 lg:h-36 md:w-28 md:h-28 sm:w-24 sm:h-24 w-20 h-20' />
        <h1 className='font-bold text-2xl lg:text-4xl'>About us</h1>
      </div>
      <div className='mx-auto  px-4 lg:px-8'>
        <p className='text-center text-lg '>Established in 2011 in Shenzhen, Faruix specializes in manufacturing and selling mobile phone accessories, including LCD screens, batteries, and spare parts for phone repairs. Our products are exported to over 50 countries, such as the USA, Europe, and Dubai. We offer OEM & ODM customized services. fostering successful partnerships. Our products adhere to international standards with certifications like 1509001, RoHS, EMC, CE. FCC. EC CA65, and 2006/66/EC. Faruix focuses on cutting-edge phone screen technologies like TFT, Incell, Hard OLED, Soft OLED, and FOG, being a major distributor of JK and RI screens. To enhance global accessibility, we've established overseas warehouses in Europe. the USA. and Dubai. Additionally, we contribute to environmental protection by recycling and refurbishing broken screens, housing. and electronic waste in our Recycling program. 

        </p>
      </div>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 lg:px-12 lg:gap-12 w-screen '>
           { data.map((datum)=>{
                return <WhoWeAreCard key={datum.id} image={datum.image} heading= {datum.heading} desc={datum.desc} />

            }) }
        </div>

    </div>
  )
}

export default WhoWeAre
