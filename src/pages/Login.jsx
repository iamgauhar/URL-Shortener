import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import { useAuthContext } from '../../context/autContext'
import { useUrlContext } from '../../context/urlContext';

import sideBanner from '../assets/Computer login-rafiki.svg'
import Spinner from '../components/Spinner';
import MessageBox from '../components/MessageBox';

import { login } from '../../utils/apiUrls';

const Login = () => {

    const { email, setEmail, password, setPassword } = useAuthContext();
    const { spinner, setSpinner, msg, setMsg, isMsg, setIsMsg, verified, setVerified } = useUrlContext();

    const navigate = useNavigate()
    const doLogin = async (e) => {
        e.preventDefault()
        setSpinner(true)
        try {
            const sigUser = await fetch(login, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            })

            const response = await sigUser.json()
            console.log(response.user)
            if (response.status) {
                Cookies.set('user', JSON.stringify(response.user))
                setSpinner(false)
                setEmail("")
                setPassword("")
                navigate('/welcome')

            } else {
                setMsg(response.message)
                setIsMsg(true)
                setVerified(true)
                setSpinner(false)
            }
        } catch (error) {
            setMsg(error)
            setIsMsg(true)
            setVerified(true)
            setSpinner(false)
        }
    }

    return (
        <div>
            <main className="flex lg:h-[90vh]">
                <div className="w-full lg:w-[60%] py-8 px-3 md:p-14 flex items-center justify-center lg:justify-start">
                    <div className="py-8 px-3 w-[600px]">
                        <h1 className="text-6xl font-bold">Login</h1>

                        <form onSubmit={doLogin}>
                            <div className="mt-10 pl-1 flex flex-col">
                                <label>Email</label>
                                <input
                                    type="email"
                                    required
                                    className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mt-10 pl-1 flex flex-col">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-green-400 hover:bg-green-500 active:bg-yellow-400 text-white font-semibold px-8 rounded-full py-3 my-4 transition-all duration-500"

                            >
                                {spinner ? <Spinner /> : "Log in"}
                            </button>
                            <span className='ml-5 hover:underline text-[14px]'><Link to="/forgetPassword">Forget Password?</Link></span>
                        </form>

                    </div>
                </div>
                <div
                    className="w-[40%] border-l border-dashed bg-cover bg-right-top hidden lg:block"

                >
                    <img src={sideBanner} alt="" />
                </div>
                {isMsg ? <MessageBox message={msg} /> : ""}
            </main>
        </div>
    )
}

export default Login