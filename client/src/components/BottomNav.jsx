import React from 'react'
import { IoHomeOutline } from "react-icons/io5"
import { IoMdNotificationsOutline } from "react-icons/io"
import { IoPersonOutline } from "react-icons/io5"
import { FiShoppingCart } from "react-icons/fi"

function BottomNav() {
  return (
    <>
        <div className='fixed bottom-0 flex items-center justify-between w-full h-[3rem] border-t-2 border-gray-300 bg-white'>
            <div className='flex items-center justify-center w-full h-[70%] border-r-2 border-gray-500'>
                <IoHomeOutline size={20} className=' hover:size-8'/>
            </div>

            <div className='flex items-center justify-center w-full'>
                <FiShoppingCart size={20} className=' hover:size-8'/>
            </div>

            <div className='flex items-center justify-center w-full h-[70%] border-r-2 border-l-2 border-gray-500'>
                <IoMdNotificationsOutline size={20} className=' hover:size-8'/>
            </div>
            
            <div className='flex items-center justify-center w-full'>
                <IoPersonOutline size={20} className=' hover:size-8'/>
            </div>
        </div>
    </>
  )
}

export default BottomNav