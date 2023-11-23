import React from 'react'

import HeroSVG from '../assets/www-amico.svg'
const Hero = () => {
    return (
        <div>
            <div className='p-6 flex flex-col gap-6 justify-between items-center md:flex-row-reverse '>

                <div className='w-full sm:w-1/2 md:w-1/2'>
                    <img src={HeroSVG} alt="" />
                </div>
                <div className='px-4 w-full md:w-1/2'>
                    <h1 className='font-bold text-2xl md:text-4xl'>Transforming Long URLs into Instantly Shareable Links...</h1>
                    <p className='text-gray-500 text-md'>Welcome to Your Personal URL Shortening Haven</p>
                </div>
            </div>
        </div>
    )
}

export default Hero