import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import UrlSection from '../components/UrlSection'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div className='bg-green-50'>
                <div className='h-[100vh]'>
                    <Navbar />
                    <Hero />
                </div>
                <div className=''>
                    <UrlSection />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home