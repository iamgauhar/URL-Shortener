import React from 'react'

import { useAuthContext } from '../../context/autContext'
import { forgotPassword } from '../../utils/apiUrls';

import Spinner from '../components/Spinner';
import MessageBox from '../components/MessageBox';
import sideBanner from '../assets/Mobile login-pana.svg'
import { useUtilityContext } from '../../context/utilityContext';


const ForgotPassword = () => {

    const { email, setEmail } = useAuthContext();
    const { spinner, setSpinner, isMsg, setIsMsg, msg, setMsg, setVerified } = useUtilityContext();

    const sendMail = async (e) => {
        e.preventDefault()
        setSpinner(true)
        try {
            const resetPass = await fetch(forgotPassword, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })

            const response = await resetPass.json()
            // console.log(response)
            if (response.status) {
                setSpinner(false)
                setEmail("")
                setIsMsg(true)
                setMsg(response.message)
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
        <main className="flex lg:h-[90vh]">
            <div className="w-full lg:w-[60%] py-8 px-3 md:p-14 flex items-center justify-center lg:justify-start">
                <div className="py-8 px-3 w-[600px]">
                    <h1 className="text-6xl font-bold">Forgot Password</h1>

                    <form onSubmit={sendMail}>

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
                            {spinner ? <Spinner /> : "Send E-mail"}
                        </button>
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

export default ForgotPassword
