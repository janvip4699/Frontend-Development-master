import React from 'react'
import img from '../../assets/images/vision.jpg'

const Vision = () => {
    return (
        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-16'>
            {/* img section */}
            <div className='w-full md:w-2/5'>
                <img src={img} alt="img" className='rounded-lg'></img>
            </div>

            {/* content section */}
            <div className='w-full md:w-2/4 space-y-4'>
                <h1 className='text-4xl font-bold'>Our Vision</h1>
                <h2 className='font-semibold text-lg lg:text-2xl'>Empower individuals to achieve sustainable mobility solutions and inspire a positive impact on the environment.</h2>
                <p className='text-sm lg:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum fugiat.</p>
                <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci impedit blanditiis quas voluptatem reiciendis delectus esse iure, deserunt quis corrupti perferendis quisquam, magni consequuntur laboriosam quam eos debitis. Sequi.</p>
            </div>

        </div>
    )
}

export default Vision
