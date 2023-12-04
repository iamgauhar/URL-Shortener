import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import UrlSection from '../components/UrlSection'
import Footer from '../components/Footer'
import { baseApi } from '../../utils/apiUrls'
import Cookies from 'js-cookie'

const Home = () => {
    const { shortID } = useParams()
    const navigate = useNavigate()
    const user = Cookies.get().user
    const token = user ? JSON.parse(user).token : undefined

    const getUrl = async (id) => {
        try {
            if (id && id.length === 6 && id !== "signup") {
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
        if (token === undefined) {
            navigate('/')
        } else {
            navigate('/welcome')
        }

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