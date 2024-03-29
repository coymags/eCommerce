import React from 'react'

function Contactus() {
  return (
    <div className='flex flex-col items-center justify-center w-[full] h-screen bg-gradient-to-b from-emerald-800 via-emerald-400 to-teal-200 '>
        <div className='w-[50%] h-[10%] flex items-center justify-center'>
            <h1 className='font-bold font-serif text-white text-[2rem] w-[100%] flex items-center justify-center'>Contact Us</h1>
        </div>
        <div className='w-[50%] h-[70%] md:w-[40%]'>
            <form action="">
                <div className='flex flex-col w-[full] h-[5rem]'>
                    <label htmlFor="" className='font-bold' >Email:</label>
                    <input type="text" name='email' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                </div>
                <div className='flex flex-col w-[full] h-[5rem]'>
                    <label htmlFor="" className='font-bold' >Name:</label>
                    <input type="text" name='email' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                </div>
                <div className='flex flex-col w-[full] h-[10rem]'>
                    <label htmlFor="" className='font-bold' >Message:</label>
                    <textarea name="message" cols="50" rows="10" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <div className='flex flex-col items-center justify-center w-[full] h-[100%] pt-4'>
                    <button className='w-[50%] px-3 py-2 font-bold bg-white rounded-md bourder focus:outline-none focus:border-blue-500 hover:bg-gray-400 md:w-[30%]'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contactus