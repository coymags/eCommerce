import React from 'react'
import { useEffect, useState } from 'react'
import { IoNavigateCircle, IoPersonOutline } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'

function Profile() {

    const [storageData, setStorageData] = useState()
    const navigate = useNavigate()

    //Getting data from local storage
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('user'))
        setStorageData(localData)
    }, [])

    function handleClick() {
        localStorage.removeItem('user')
        navigate('/home')
    }
  return (
    <>
        <div className='flex flex-col w-full h-screen overflow-auto'>
            <div className='flex items-end w-full h-[8rem] bg-red-300 p-2'>
                <div className=' flex items-center justify-center bg-gray-200 rounded-[50%] w-[5rem] h-[5rem]'>
                    <IoPersonOutline size={30}/>
                </div>
                <div className='flex flex-col p-2 w-[30%]'>
                    <h1>Welcome!</h1>
                    <h1 className=' overflow-hidden text-xs truncate hover:overflow-visible  hover:bg-white hover:border-2 hover:border-black hover:flex-wrap md:text-[1rem]'>{'My Profile'}</h1>
                </div>
                <div className=' flex items-end justify-end w-[40%] h-[8rem] p-2'>
                    <h1 className='font-bold ' onClick={handleClick}>Log-out</h1>
                </div>
            </div>
            <div className='flex flex-col w-full h-[31.5rem] p-5 font-bold'>
                <h1>My Purchases</h1>
                <div className='flex flex-col w-[100%] h-[80%] overflow-auto border-[1px] border-black'>

                </div>
            </div>
        </div>
    </>
  )
}

export default Profile