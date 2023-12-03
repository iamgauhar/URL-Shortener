import React from 'react'

const Spinner = ({ color }) => {
    return (
        <div className=''>
            <div className={`animate-spin flex justify-center items-center w-6 h-6 border-[2px] border-current border-t-transparent ${color ? 'text-orange-400 m-auto' : 'text-white -m-1'} rounded-full `} role="status" aria-label="loading">
                <span className="sr-only ">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner