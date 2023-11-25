import React, { useState } from 'react'
import copy from 'copy-to-clipboard'
import clipboard from '../assets/clipboard-copy.svg'
import exTab from '../assets/external-link.svg'
import check from '../assets/check.svg'
import { useUrlContext } from '../../context/urlContext'

const CopyClipboard = (props) => {

    const { newUrl } = props
    const [iscopied, setIsCopied] = useState(false)
    // const { url, setUrl } = useUrlContext()
    return (
        <div>
            <div className=' flex justify-center items-center px-6 py-3 w-full md:w-1/2 bg-green-100 rounded-lg m-auto'>
                <input type="text" value={newUrl} className='w-full bg-transparent' name="" id="" disabled />
                <button><img src={iscopied ? check : clipboard} className='h-6 w-6' alt="" onClick={() => {
                    copy(newUrl)
                    setIsCopied(true)
                    setTimeout(() => {
                        setIsCopied(false)
                    }, 5000)
                }} /></button>
                <button><img src={exTab} className='h-6 w-6 ml-1' alt="" onClick={() => {
                    window.open(newUrl)
                }} />
                </button>
            </div>
        </div>
    )
}

export default CopyClipboard