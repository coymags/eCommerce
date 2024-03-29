import React from 'react'
import { FaArrowLeft } from "react-icons/fa"

function Cart() {
  return (
    <>
        <div className='flex flex-col items-center justify-center w-[full] h-screen'>
            <div className=' flex items-center p-3 w-full h-[4rem] bg-blue-500 gap-2'>
                <FaArrowLeft/>
                <h1 className='font-semibold '>Shopping Cart</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full h-screen overflow-auto bg-gray-500 '>

            </div>
        </div>
    </>
  )
}

export default Cart