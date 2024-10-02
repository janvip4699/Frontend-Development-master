import React from 'react'
import Vision from './Vision'
import Approach from './Approach'
import Footer from '../Footer'

const AboutUs = () => {
    return (
        <div className='container pt-24'>
            <div>
                <h1 className='font-bold text-4xl text-center'>About <span className='text-primary'>US</span></h1>
            </div>
            <Vision/>
            <Approach/>
        </div>
    )
}

export default AboutUs
