import React, { useEffect, useState } from 'react'
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [name, setName] = useState([])
    const [data, setData] = useState({
        persons: ""
    })

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('splitter', JSON.stringify({ amount: data.amount, persons: name }))
        navigate('/calculate')
    }

    useEffect(() => {
        (() => {
            if (data.persons.length === 0) {
                setName([])
                return;
            }

            let arr = data?.persons.split(",")
            let finalArr = []

            Array.isArray(arr) && arr.forEach((ele) => {
                finalArr.push(ele.trim())
            });

            setName(finalArr)
        })();
    }, [data])

    return (
        <div className={`flex min-h-full flex-col justify-center py-2 sm:px-8 px-3 bg-gray-100 h-[100vh]`}>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white px-4 py-8 shadow sm:rounded-lg rounded-lg sm:px-10">
                    <div className='mb-4'>
                        <div className="flex flex-wrap gap-2">
                            {Array.isArray(name) && name.map((ele) => {
                                return (
                                    <span key={ele} className='border px-2 py-1 rounded-md uppercase text-gray-800 text-ellipsis'>{ele}</span>
                                )
                            })}
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit} method="post">
                        <input
                            type={'number'}
                            placeholder='Amount'
                            name='amount'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                            className={`
                            form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                            ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focu:ring-inset
                            focus:ring-sky-600 sm:text-sm sm:leading-6 outline-none px-3
                        `} />

                        <input
                            type={'text'}
                            placeholder='Person 1, Person 2, Person 3 ...'
                            name='persons'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                            className={`
                            form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                          ring-gray-300 placeholder:text-gray-300 focus:ring-2 focu:ring-inset focus:ring-sky-600 
                            sm:text-sm sm:leading-6 outline-none px-3
                        `} />

                        <button
                            type="submit"
                            className={`
                                    flex justify-center items-center rounded-md 
                                    px-3 py-2 text-sm w-full font-semibold 
                                    focus-visible:outline focus-visible:outline-2 
                                    focus-visible:outline-offset-2 text-white 
                                    bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600
                                `}>
                            Next <GrFormNextLink className='text-xl' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home