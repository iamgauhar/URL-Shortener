import React from 'react'

import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between bg-yellow-100 p-2 md:px-16 xl:px-32 '>
                <div>
                    <Link to="/">
                        <div className='h-[40px]'>
                            <img src={logo} alt="Logo" className='h-full w-full object-cover' />
                        </div>
                    </Link>
                </div>
                <div>
                    <ul className='flex gap-2'>
                        <li>
                            <Link to="/login">
                                <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-1 font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-150  hover:border-b active:opacity-75 outline-none duration-300 group">
                                    <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    SIGNUP
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup">
                                <button className="bg-neutral-950 text-orange-500 border border-orange-500 border-b-1 font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-150 hover:border hover:border-b active:opacity-75 outline-none duration-300 group">
                                    <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    LOGIN
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar