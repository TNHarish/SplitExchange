import React, { useEffect, useState } from 'react'
import { ImSpinner10 } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const Calculation = () => {
    const history = useNavigate();

    const handleButtonClick = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
            // Construct the message based on the fetched data
            `Your custom message: ${JSON.stringify(data)}`
        )}`;
        window.location.href = whatsappUrl;
    };

    const [isLoading, setIsLoading] = useState(false)
    const [data] = useState(() => {
        setIsLoading(true)
        return JSON.parse(localStorage.getItem('splitter'))
    })

    useEffect(() => {
        setIsLoading(true);
        if (data) {
            setIsLoading(false)
        }
    }, [])

    const [isequall, setIsequall] = useState(true)
    const handleOnChange = (option) => {
        if (option === 'equal') {

        } else {

        }
    }

    const [prices, setPrices] = useState(0)
    const handlePriceChange = (e) => {
        setPrices(prices + (e.target.value*1))
    }

    return (
        <>
            {isLoading ?
                <div className='h-[100vh] bg-gray-100 w-full flex justify-center items-center'>
                    <span className='text-2xl flex gap-2 items-center'>
                        <ImSpinner10 className='text-3xl animate-spin' /> Loading Data
                    </span>
                </div>
                :
                <div className={`flex min-h-full flex-col justify-center py-2 sm:px-8 px-3 bg-gray-100 h-[100vh]`}>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white px-4 py-8 shadow sm:rounded-lg rounded-lg sm:px-10">
                            <div className="space-y-6">
                                {/* <div className="flex gap-3 justify-center">
                                    <div className='border px-3 py-1 rounded-md bg-gray-200'>
                                        <input type="radio" name="select" id="equal" onChange={(e) => { e.target.checked === true ? setIsequall(true) : setIsequall(false); handleOnChange('equal') }} defaultChecked={true} />
                                        <label htmlFor="equal" className='ms-1 font-semibold text-gray-700'>Equal Split</label>
                                    </div>
                                    <div className='border px-3 py-1 rounded-md bg-gray-200'>
                                        <input type="radio" name="select" id="custom" onChange={(e) => { e.target.checked === true ? setIsequall(false) : setIsequall(true); handleOnChange('custom') }} />
                                        <label htmlFor="custom" className='ms-1 font-semibold text-gray-700'>Custom Split</label>
                                    </div>
                                </div> */}

                                <div>
                                    <table className='table w-full'>
                                        <tbody>
                                            {data.persons.map((ele, idx) => {
                                                return (
                                                    <tr key={ele} className=''>
                                                        <td>
                                                            <span className='font-semibold text-gray-800 capitalize block mb-3'>{ele}:</span>
                                                        </td>
                                                        <td>
                                                            {isequall ?
                                                                <span className='border-b block mb-3 w-full outline-none p-1 bg-transparent disabled:text-gray-500'>
                                                                    {Math.floor((data.amount * 1) / (data.persons.length * 1))} 
                                                                </span>
                                                                :
                                                                <input type="number" name={`price-${idx + 1}`} className='border-b block mb-3 w-full outline-none p-1 bg-transparent disabled:text-gray-500' disabled={isequall} onChange={handlePriceChange} defaultValue={Math.floor(data.amount/data.persons.length)*1} />
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex justify-center mt-6">
                                    <button
                                    onClick={handleButtonClick}
                                    className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none">
                                    Send to WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            }
        </>
    )
}

export default Calculation