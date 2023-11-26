import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import HeroSVG from '../assets/www-amico.svg'

const Hero = () => {
    return (
        <div className=' h-[90vh] sm:h-[70vh] bg-green-50 md:px-16 xl:h-[90vh] xl:px-32'>
            <div className='p-6 my-auto relative top-1/2 -translate-y-1/2 md:p-0 flex flex-col gap-8 justify-between items-center md:flex-row-reverse '>
                <div className='w-full sm:w-1/2 md:w-1/2'>
                    <img src={HeroSVG} alt="" />
                </div>
                <div className='px-2 w-full md:w-1/2 md:p-0'>
                    <h1 className='font-bold text-2xl md:text-4xl'>Transforming Long URLs into Instantly Shareable Links...</h1>
                    <p className='text-gray-400 text-sm'>Welcome to Your Personal URL Shortening Haven</p>
                    <div className='py-6 flex justify-center gap-4 sm:justify-start'>
                        <button className="relative px-8 py-2 w-full sm:w-auto rounded-md bg-white isolation-auto z-10 border-2 border-green-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-green-300 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Get Started</button>
                        <ScrollLink
                            to="demo"
                            smooth={true}
                            duration={800}
                            className='w-full sm:w-auto'
                        >
                            <button className="relative px-8 py-2  rounded-md bg-white isolation-auto z-10 border-2 border-green-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-green-300 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Try Demo</button>

                        </ScrollLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero