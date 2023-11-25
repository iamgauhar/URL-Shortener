import React from 'react'

import HeroSVG from '../assets/www-amico.svg'
const Hero = () => {
    return (
        <div className=' h-[90vh] sm:h-[70vh] md:px-16 xl:h-[90vh] xl:px-32 border border-rose-500'>
            <div className='p-6 my-auto relative top-1/2 -translate-y-1/2 md:p-0 flex flex-col gap-8 justify-between items-center md:flex-row-reverse '>
                <div className='w-full sm:w-1/2 md:w-1/2'>
                    <img src={HeroSVG} alt="" />
                </div>
                <div className='px-2 w-full md:w-1/2 md:p-0'>
                    <h1 className='font-bold text-2xl md:text-4xl'>Transforming Long URLs into Instantly Shareable Links...</h1>
                    <p className='text-gray-400 text-sm'>Welcome to Your Personal URL Shortening Haven</p>
                </div>
            </div>
        </div>
    )
}

export default Hero