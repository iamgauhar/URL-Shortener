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
        try {
            if (id) {
                const originalUrl = await fetch(`${baseApi}/${id}`)
                const response = await originalUrl.json()
                // console.log(response)
                if (response.response) {
                    location.href = response.redirect_url
                }
            }



        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        // console.log(shortID)
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