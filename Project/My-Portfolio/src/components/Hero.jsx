import React from 'react'
import profilePic from '../assets/images/janvi.jpeg'

const Hero = () => {
  return (
   <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/3'>
          <div className='flex justify-center lg:p-8'>
            <img src={profilePic} alt="Janvi Parmar" className='border border-stone-900 rounded-3xl'>
            </img>
          </div>
        </div>

      </div>
   </div>
  )
}

export default Hero
