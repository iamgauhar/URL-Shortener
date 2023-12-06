import React from 'react'
import { X } from 'lucide-react';

import { useUrlContext } from '../../context/urlContext'
import Spinner from './Spinner'
import { useUtilityContext } from '../../context/utilityContext'
import { updateUrl } from '../../utils/apiUrls'

const UpdateUrl = ({ uid, token }) => {

    const { updateUrlInput, setUpdateUrlInput, setOpenUrlInput, updateSuccess, setUpdateSuccess } = useUrlContext()
    const { spinner, setSpinner, err, setErr, failure, setFailure, isMsg, setIsMsg, msg, setMsg, } = useUtilityContext()

    const UpdateThisUrl = async (uid) => {
        setSpinner(true)
        try {
            const updateNow = await fetch(`${updateUrl}/${uid}`, {
                method: "PUT",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ original_url: updateUrlInput })
            })
            const response = await updateNow.json()
            console.log(response)
            if (response.status) {
                setUpdateSuccess(true)
                setOpenUrlInput(false)

            } else {
                setMsg(response.error)
                setIsMsg(true)
            }

        } catch (error) {
            setMsg(error.message)
            setIsMsg(true)
        }
        setSpinner(false)

    }

    return (
        <div>
            <div className=' fixed top-0 left-0 w-full h-full p-3 md:px-16 xl:px-32 bg-black bg-opacity-50 flex justify-center items-center '>
                <div className='relative w-full bg-white rounded-2xl py-12 my-4 px-4 sm:px-14 md:px-20 flex flex-col gap-6 justify-center '>

                    <div onClick={() => setOpenUrlInput(false)} className='absolute top-2 right-2 cursor-pointer'><X /></div>
                    <h1 className='text-center text-2xl font-semibold transition-transform duration-1000'>Update existing long URL.</h1>

                    <div className='transition-all duration-1000'>
                        <div>
                            <label htmlFor="hs-trailing-button-add-on" className="sr-only">Label</label>
                            <div className="flex rounded-xl shadow-sm">
                                <input onChange={(e) => {
                                    setUpdateUrlInput(e.target.value)
                                }} type="url" placeholder='Enter your new long URL...' name="hs-trailing-button-add-on" className={`py-3 px-4 block w-full border ${err ? "border-red-200" : "border-amber-300"} rounded-s-lg text-sm focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 outline-none disabled:pointer-events-none`} />
                                <button onClick={() => {
                                    UpdateThisUrl(uid)
                                }} type="button" className={`w-[33%] sm:w-[25%] md:w-[16%] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent ${err ? "bg-red-400 hover:bg-red-500" : "bg-amber-400 hover:bg-amber-500"} text-white disabled:opacity-50 disabled:pointer-events-none`}>
                                    {spinner ? <Spinner /> : err ? "Invalid" : "Update"}

                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UpdateUrl