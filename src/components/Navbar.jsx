import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useAuthContext } from '../../context/autContext'

const Navbar = () => {

    const { isLoggedIn, setLoggedIn, name, setName } = useAuthContext()

    const navigate = useNavigate()
    const user = Cookies.get().user
    const userCred = user ? JSON.parse(user) : undefined

    const logOut = () => {
        Cookies.remove('user')
        setLoggedIn(false)
        location.reload()
    }

    useEffect(() => {
        if (userCred?.token) {
            setLoggedIn(true)
            setName(userCred.name)
        }
    }, [setLoggedIn])
    return (
        <>
            <div className={`flex items-center justify-between ${isLoggedIn ? "bg-orange-100" : "bg-green-200"} p-3 md:px-16 xl:px-32 `}>
                <div>
                    <Link to="/">
                        <div className='h-[40px]'>
                            <img src={logo} alt="Logo" className='h-full w-full object-cover' />
                        </div>
                    </Link>
                </div>
                <div>
                    {
                        isLoggedIn ?

                            <ul className='flex items-center gap-4'>
                                <li>
                                    <h1 className='text-green-400'>Hi, <span className='text-orange-600 font-semibold text-lg'>{name}</span></h1>
                                </li>


                                <li>
                                    <button onClick={logOut} className='bg-white px-4 py-1 cursor-pointer rounded-sm border border-black hover:bg-orange-500 transition-colors duration-500 hover:text-white hover:border-white'>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                            :
                            <Link to="/login">
                                <button className='bg-white px-4 py-1 cursor-pointer rounded-sm border border-black hover:bg-green-500 transition-colors duration-500 hover:text-white hover:border-white'>
                                    LOGIN
                                </button>
                            </Link>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar