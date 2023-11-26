import React from 'react'

const Spinner = () => {
    return (
        <div>
            <div className="animate-spin flex justify-center items-center -m-1 w-6 h-6 border-[2px] border-current border-t-transparent text-white rounded-full " role="status" aria-label="loading">
                <span className="sr-only ">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner