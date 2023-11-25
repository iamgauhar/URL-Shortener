import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <>
            <div className='h-[100vh]'>
                <Navbar />
                <Hero />

            </div>
        </>
    )
}

export default Home