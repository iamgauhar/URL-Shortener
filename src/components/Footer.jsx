import React from 'react'
import { Globe, Linkedin, Github, Twitter } from 'lucide-react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="w-full max-w-[85rem] py-10 p-3 md:px-16 xl:px-32 mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
                    <div>
                        <div className='h-[40px] w-[160px] m-auto sm:m-0'>
                            <img src={logo} alt="Logo" className='h-full w-full object-cover' />
                        </div>
                    </div>


                    <ul className="text-center">
                        <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                            <a className="inline-flex gap-x-2 text-sm text-gray-800 hover:text-gray-800" href="#">
                                About
                            </a>
                        </li>
                        <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                            <a className="inline-flex gap-x-2 text-sm text-gray-800 hover:text-gray-800" href="#">
                                Services
                            </a>
                        </li>
                        <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                            <a className="inline-flex gap-x-2 text-sm text-gray-800 hover:text-gray-800" href="#">
                                Blog
                            </a>
                        </li>
                    </ul>

                    <div className="md:text-end space-x-2">
                        <a className="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-50 hover:border hover:border-green-500 disabled:opacity-50 disabled:pointer-events-none" href="https://iamgauhar.github.io/" target='_blank'>
                            <Globe />
                        </a>
                        <a className="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-50 hover:border hover:border-green-500 disabled:opacity-50 disabled:pointer-events-none" href="https://github.com/iamgauhar/" target='_blank'>
                            <Github />
                        </a>
                        <a className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-50 hover:border hover:border-green-500 disabled:opacity-50 disabled:pointer-events-none" href="https://twitter.com/iamgauhar_in/" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> </svg>
                        </a>
                        <a className="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-50 hover:border hover:border-green-500 disabled:opacity-50 disabled:pointer-events-none" href="https://www.linkedin.com/in/iamgauhar/" target='_blank'>
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer