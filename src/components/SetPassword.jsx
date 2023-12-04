import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../../context/autContext'
import { verifySetPassword } from '../../utils/apiUrls'

import MessageBox from './MessageBox'
import Spinner from './Spinner'

import sideBanner from '../assets/My password-pana.svg'
import { useUtilityContext } from '../../context/utilityContext'


const SetPassword = () => {

    const { newPassword, setNewPassword, repeatPassword, setRepeatPassword } = useAuthContext()
    const { spinner, setSpinner, isMsg, setIsMsg, verified, setVerified, msg, setMsg } = useUtilityContext();

    const { userId, token } = useParams()

    const navigate = useNavigate()

    const verifyAndSetPassword = async (e) => {
        e.preventDefault()
        console.log(token)
        if (newPassword !== repeatPassword) {
            setMsg("Enter same password in both inputs")
            setIsMsg(true)
            setVerified(true)
            return;
        }

        try {
            const setPassword = await fetch(`${verifySetPassword}/${userId}/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password: newPassword })
            })
            const response = await setPassword.json()
            if (response.status) {
                setMsg(response.message + " Redirecting in 5 sec.")
                setIsMsg(true)
                setSpinner(false)
                setTimeout(() => {

                    setIsMsg(false)
                    navigate("/login")

                }, 5000);
            } else {
                setMsg(response.message)
                setIsMsg(true)
                setVerified(true)
            }
        } catch (err) {
            setMsg(err)
            setIsMsg(true)
            setVerified(true)
        }


    }


    return (
        <div>
            <main className="flex lg:h-[90vh]">
                <div className="w-full lg:w-[60%] py-8 px-3 md:p-14 flex items-center justify-center lg:justify-start">
                    <div className="py-8 px-3 w-[600px]">
                        <h1 className="text-6xl font-bold">Set Password</h1>

                        <form onSubmit={verifyAndSetPassword}>
                            <div className="mt-10 pl-1 flex flex-col">
                                <label>Password</label>
                                <input
                                    type="password"
                                    required
                                    className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className="mt-10 pl-1 flex flex-col">
                                <label>Confirm password</label>
                                <input
                                    type="password"
                                    className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                                    value={repeatPassword}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-green-400 hover:bg-green-500 active:bg-yellow-400 text-white font-semibold px-8 rounded-full py-3 my-4 transition-all duration-500"

                            >
                                {spinner ? <Spinner /> : "Set password"}
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

export default SetPassword