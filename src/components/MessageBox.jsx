import React from 'react'
import { X } from 'lucide-react';
import { useUrlContext } from '../../context/urlContext';

const MessageBox = ({ message }) => {
    const { setIsMsg, failure, setFailure } = useUrlContext();
    return (
        <>
            <div className='fixed top-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center '>
                <div className={`w-full mx-4 sm:w-1/2 px-4 py-2 bg-white border ${failure ? "border-red-400" : "border-green-400"} rounded-xl`}>
                    <div className='flex justify-between items-center border-b mb-2'>
                        <h1 className='font-semibold'>Message❤️</h1>
                        <div className='cursor-pointer' onClick={() => {
                            setIsMsg(false)
                            setFailure(false)
                        }}>
                            <X />
                        </div>
                    </div>
                    <div>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageBox