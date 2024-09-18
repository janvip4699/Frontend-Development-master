import React from 'react'
import img from '../../../assets/images/mission.jpg'

const OurMission = () => {
  return (
    <div className='container my-10'>
        <div>
            <h1 className='font-bold text-4xl text-center'>Our <span className='text-primary'>Mission</span></h1>
        </div>
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
            {/* img section */}
            <div className='w-full md:w-2/4'>
                <img src={img} alt="img" className='rounded-lg'></img>
            </div>
            {/* content section */}
            <div className='w-full md:w-2/4 space-y-4'>
                <h1 className='font-bold text-primary text-lg lg:text-3xl'>To create a community where every journey is extraordinary.</h1>
                <h2 className='font-semibold text-lg lg:text-2xl'>Enpower individuals to achieve sustainable mobility solutions and inspire a positive impact on the environment.</h2>
                <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat natus.</p>
                <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio voluptates voluptatibus quia debitis a facere eius quidem, molestias vel fugiat quos omnis enim vero neque! Laudantium libero voluptatum esse.</p>
            </div>
        </div>
        
    </div>
  )
}

export default OurMission
