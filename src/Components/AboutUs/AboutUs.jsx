import React from 'react'

const AboutUs = () => {
  return (
    <div data-aos="flip-left" data-aos-duration="500" className=' flex flex-col py-20 bg-[#f2f5f7] w-screen h-auto'>
      <div className='flex flex-col w-screen lg:gap-4 justify-center'>
        <h1 className=' text-center px-8 font-bold text-2xl lg:text-4xl'>Find me anywhere in the world!</h1>
        <h4 className='text-center font-bold text-sm lg:text-xl text-[#8e959e]'>We have more than 10 years experience in the industry, <br></br>our products are exporting all over the world.</h4>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:mt-12 mt-8 lg:gap-8 content-around'>
        <div className='flex flex-col lg:px-2 items-center justify-center'>
            <img src="/images/products.png" alt="" className='lg:h-auto lg:w-auto'/>
            <h1 className='lg:text-2xl font-bold mx-auto'>Complete Product Line</h1>
            <h3 className='mx-auto text-[#8e959e] text-xl'>Kinds of products resources</h3>
        </div>

        <div className='flex flex-col lg:px-2 items-center justify-center'>
            <img src="/images/customer.png" alt="" className='lg:h-auto lg:w-auto'/>
            <h1 className='lg:text-2xl font-bold mx-auto'>Customer First</h1>
            <h3 className='mx-auto text-[#8e959e] text-xl'>Excellent Customer Service</h3>
        </div>

        <div className='flex flex-col lg:px-2 items-center justify-center'>
            <img src="/images/quality.png" alt="" className='lg:h-auto lg:w-auto'/>
            <h1 className='lg:text-2xl font-bold mx-auto'>Quality Assurance</h1>
            <h3 className='mx-auto text-[#8e959e] text-xl'>High Quality Products</h3>
        </div>


        <div className='flex flex-col lg:px-2 items-center justify-center'>
            <img src="/images/location.png" alt="" className='lg:h-auto lg:w-auto'/>
            <h1 className='lg:text-2xl font-bold mx-auto'>Local Service</h1>
            <h3 className='mx-auto text-[#8e959e] text-xl'>Warehouse in USA, Europe, <br></br>Dubai, Hong Kong, China</h3>
        </div>

        <div className='flex flex-col lg:px-2 items-center justify-center'>
            <img src="/images/team.png" alt="" className='lg:h-auto lg:w-auto'/>
            <h1 className='lg:text-2xl font-bold mx-auto'>Team Service</h1>
            <h3 className='mx-auto text-[#8e959e] text-xl'>One stop purchasing, saving your time</h3>
        </div>

        <div className='flex flex-col lg:px-2 items-center justify-center'>
            <img src="/images/payment.png" alt="" className='lg:h-auto lg:w-auto'/>
            <h1 className='lg:text-2xl font-bold mx-auto'>Payment Methods </h1>
            <h3 className='mx-auto text-[#8e959e] text-xl'>Kinds of payment method</h3>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
