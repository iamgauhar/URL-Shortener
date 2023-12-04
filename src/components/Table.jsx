import React from 'react'
import { deleteUrl } from '../../utils/apiUrls'
import { useUrlContext } from '../../context/urlContext'
import MessageBox from './MessageBox'
import { useUtilityContext } from '../../context/utilityContext'

const Table = ({ allUrls, length, token }) => {

    const { setAllUrls } = useUrlContext()
    const { isMsg, setIsMsg, msg, setMsg, isTable, setIsTable } = useUtilityContext()

    const deleteThisUrl = async (uid, i) => {
        try {
            const deleteNow = await fetch(`${deleteUrl}/${uid}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            const response = await deleteNow.json()
            if (response.status) {
                allUrls.splice(i, 1)
                setAllUrls(allUrls)
                setIsMsg(true)
                setMsg(response.message)

            } else {
                setMsg(response.message)
                setIsMsg(true)
            }
        } catch (error) {
            setMsg(error.message)
            setIsMsg(true)
        }
    }


    return (
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className=" divide-y divide-gray-200">
                        <div className="py-3 px-4">
                            <div className="relative max-w-xs border border-orange-100 rounded-lg">
                                <label className="sr-only">Search</label>
                                <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder="Search for items" />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <thead className="bg-gray-50 ">
                                    <tr>

                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Shorten URL</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Original URL</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Created Date</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Clicks</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Update / Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 ">

                                    {
                                        allUrls?.map((item, idx) => {
                                            return (
                                                <tr key={item.uid} className='hover:bg-orange-50'>

                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                                                        <a href={`https://sho-rt.netlify.app/${item.short_url}`} target="_blank" rel="noopener noreferrer">
                                                            {`sho-rt.netlify.app/${item.short_url}`}
                                                        </a>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-ellipsis "><p className='truncate max-w-xs'>{item.original_url}</p></td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item.created_at.split("T")[0]}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item.count_clicks}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-sky-400 hover:text-sky-600 disabled:opacity-50 disabled:pointer-events-none ">Update</button>
                                                        <span className='text-gray-300 mx-1'>|</span>
                                                        <button onClick={() => deleteThisUrl(item.uid, idx)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-orange-400 hover:text-orange-600 disabled:opacity-50 disabled:pointer-events-none ">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }


                                </tbody>
                            </table>
                        </div>
                        <div className="py-1 px-4">
                            <nav className="flex items-center space-x-1">
                                <button type="button" className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-orange-100 disabled:opacity-50 disabled:pointer-events-none ">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button type="button" className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-orange-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none " aria-current="page">1</button>
                                <button type="button" className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-orange-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none ">2</button>
                                <button type="button" className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-orange-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none ">3</button>
                                <button type="button" className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-orange-100 disabled:opacity-50 disabled:pointer-events-none ">
                                    <span className="sr-only">Next</span>
                                    <span aria-hidden="true">»</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {isMsg ? <MessageBox message={msg} /> : ""}
        </div>

    )
}

export default Table