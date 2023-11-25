import React from 'react'
import copy from 'copy-to-clipboard'
import clipboard from '../assets/clipboard-copy.svg'
import exTab from '../assets/external-link.svg'
import check from '../assets/check.svg'

const CopyClipboard = (props) => {
    return (
        <div>
            <div className=' flex justify-center items-center px-6 py-3 w-full md:w-1/2 bg-green-100 rounded-lg m-auto'>
                <input type="text" value={props.props} className='w-full bg-transparent' name="" id="" disabled />
                <button><img src={clipboard} className='h-6 w-6' alt="" onClick={() => copyToClipboard(props.props)} /></button>
                <button><img src={exTab} className='h-6 w-6 ml-1' alt="" onClick={() => {
                    window.open(props.props)
                }} />
                </button>
            </div>
        </div>
    )
}

export default CopyClipboard