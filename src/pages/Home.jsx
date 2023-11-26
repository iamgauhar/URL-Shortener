import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import UrlSection from '../components/UrlSection'
import Footer from '../components/Footer'
import { baseApi } from '../../utils/apiUrls'

const Home = () => {
    const { shortID } = useParams()

    const getUrl = async (id) => {
        const originalUrl = await fetch(`${baseApi}${id}`)
        if (originalUrl.redirected) {
            window.open(originalUrl.url)
        }
    }

    useEffect(() => {
        getUrl(shortID)
    }, [])
    return (
        <>
            <div className='bg-green-50'>
                <div className='h-[100vh]'>
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