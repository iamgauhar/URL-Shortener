import React, { useState } from 'react'
import copy from 'copy-to-clipboard'
import clipboard from '../assets/clipboard-copy.svg'
import exTab from '../assets/external-link.svg'
import check from '../assets/check.svg'
import { useUrlContext } from '../../context/urlContext'

const CopyClipboard = (props) => {

    const { newUrl } = props
    const { iscopied, setIsCopied } = useUrlContext()
    return (
        <div>
            <div className=' flex justify-center items-center transition-all duration-1000 px-6 py-3 w-full md:w-1/2 bg-green-100 rounded-lg m-auto'>
                <input type="text" value={newUrl} className='w-full bg-transparent' name="" id="" disabled />
                <button><img src={iscopied ? check : clipboard} className='h-6 w-6 mr-2 hover:scale-105 transition-all duration-300' alt="" onClick={() => {
                    copy(newUrl)
                    setIsCopied(true)
                    setTimeout(() => {
                        setIsCopied(false)
                    }, 5000)
                }} /></button>
                <span className='text-gray-300'>|</span>
                <button><img src={exTab} className='h-6 w-6 ml-1 hover:scale-105 transition-all duration-300' alt="" onClick={() => {
                    window.open(newUrl)
                }} />
                </button>
            </div>
        </div>
    )
}

export default CopyClipboard