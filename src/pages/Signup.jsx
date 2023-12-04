import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../context/autContext'
import { useUrlContext } from '../../context/urlContext';

import { signup } from '../../utils/apiUrls';

import MessageBox from '../components/MessageBox';
import Spinner from '../components/Spinner';
import sideBanner from '../assets/Mobile login-pana.svg'
import { useUtilityContext } from '../../context/utilityContext';

const Signup = () => {
    const { name, setName, email, setEmail } = useAuthContext();
    const { spinner, setSpinner, isMsg, setIsMsg, msg, setMsg, setFailure } = useUtilityContext();


    const sendMail = async (e) => {
        e.preventDefault()
        setSpinner(true)
        try {
            const sigUser = await fetch(signup, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, first_name: name })
            })

            const response = await sigUser.json()
            if (response.status) {
                setSpinner(false)
                setEmail("")
                setName("")
                setIsMsg(true)
                setMsg(response.message)

            } else {
                setMsg(response.message)
                setIsMsg(true)
                setFailure(true)
                setSpinner(false)
            }
        } catch (error) {
            setMsg(error.message)
            setIsMsg(true)
            setFailure(true)
            setSpinner(false)
        }
    }

    return (
        <main className="flex lg:h-[90vh]">
            <div className="w-full lg:w-[60%] py-8 px-3 md:p-14 flex items-center justify-center lg:justify-start">
                <div className="py-8 px-3 w-[600px]">
                    <h1 className="text-6xl font-bold">Sign up</h1>

                    <form onSubmit={sendMail}>
                        <div className="mt-10 pl-1 flex flex-col">
                            <label>Full Name</label>
                            <input
                                type="text"
                                required
                                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mt-10 pl-1 flex flex-col">
                            <label>Email</label>
                            <input
                                type="email"
                                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button
                            className="bg-green-400 hover:bg-green-500 active:bg-yellow-400 text-white font-semibold px-8 rounded-full py-3 my-4 transition-all duration-500"

                        >
                            {spinner ? <Spinner /> : "Sign up"}
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

    )
}

export default Signup