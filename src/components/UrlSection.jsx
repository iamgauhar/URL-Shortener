import React, { useState } from 'react'
import CopyClipboard from './CopyClipboard'
import { baseUrlClient, generateShortUrl } from '../../utils/apiUrls'
// import { useUrlContext } from '../../context/urlContext'

const UrlSection = () => {

    const [url, setUrl] = useState("")
    const [shortUrl, setShortURL] = useState("")
    const [available, setAvailable] = useState(false)

    const generateShortenUrl = async (link) => {
        try {
            const getShortUrl = await fetch(generateShortUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ original_url: url })
            })

            const response = await getShortUrl.json()
            setShortURL(`${baseUrlClient}${response.response}`)
            setAvailable(true)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='h-screen bg-green-100 p-3 md:px-16 xl:px-32 flex justify-center items-center'>
            <div className='h-2/5 sm:h-3/5 w-full bg-white rounded-2xl px-4 sm:px-14 md:px-20 flex flex-col gap-6 justify-center shadow-md shadow-green-200 '>
                <h1 className='text-center text-2xl font-semibold'>Experience the Ease of URL Shortening!</h1>
                <div>
                    <div>
                        <label htmlFor="hs-trailing-button-add-on" className="sr-only">Label</label>
                        <div className="flex rounded-xl shadow-sm">
                            <input onChange={(e) => {
                                setUrl(e.target.value)
                            }} type="text" placeholder='Enter your long URL...' name="hs-trailing-button-add-on" className="py-3 px-4 block w-full border border-green-200 rounded-s-lg text-sm focus:z-10 focus:border-green-500 focus:ring-green-500 disabled:opacity-50 outline-none disabled:pointer-events-none" />
                            <button onClick={() => generateShortenUrl(url)} type="button" className=" w-[33%] sm:w-[25%] md:w-[16%] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-green-400 text-white hover:bg-green-500 disabled:opacity-50 disabled:pointer-events-none">
                                Short it!
                            </button>
                        </div>
                    </div>
                </div>
                {available ? <CopyClipboard newUrl={shortUrl} /> : ""}
            </div>
        </div>
    )
}

export default UrlSection