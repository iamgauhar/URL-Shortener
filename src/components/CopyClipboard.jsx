import React, { useState } from 'react'
import copy from 'copy-to-clipboard'
import { Check, ExternalLink, ClipboardCopy } from 'lucide-react'
import { useUrlContext } from '../../context/urlContext'

const CopyClipboard = (props) => {

    const { newUrl, bg } = props
    const { iscopied, setIsCopied } = useUrlContext()
    return (
        <div>
            <div className={` flex justify-center items-center transition-all duration-1000 px-4 py-3 w-full md:w-1/2 bg-${bg}-100 rounded-lg m-auto`}>
                <input type="text" value={newUrl} className='w-full bg-transparent' name="" id="" disabled />
                <button onClick={() => {
                    copy(newUrl)
                    setIsCopied(true)
                    setTimeout(() => {
                        setIsCopied(false)
                    }, 5000)
                }} >{iscopied ? <Check className='w-6' /> : <ClipboardCopy className='w-6 ml-1 hover:scale-105 transition-all duration-300' />}</button>
                <span className='text-gray-300 ml-1'>|</span>
                <button onClick={() => {
                    window.open(newUrl)
                }} >
                    <ExternalLink className='w-6 ml-1 hover:scale-105 transition-all duration-300' />
                </button>
            </div>
        </div>
    )
}

export default CopyClipboard