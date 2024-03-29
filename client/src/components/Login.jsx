import React from 'react'
import { useState } from 'react'
import { FaEye, FaEyeSlash} from "react-icons/fa"
import axios from 'axios'




function Login() {

    //Hook to toggle Authentication error for email and password
    const [emailError, setEmailError] = useState(false)

    //Hook to toggle password visibility
    const [togglePass, setTogglePass] = useState(true)

    //Hook to change value in onchange function
    const [loginInput, setLoginInput] = useState({name : ''})
    
    function handleTogglePass() {
        setTogglePass(!togglePass)
    }

    function handleOnChange(e) {
        const {name, value} = e.target
        setLoginInput((prev) => {
            return {...prev,[name] : value}
        })
        console.log(loginInput)
    }

    async function handleOnSubmit(e) {
        e.preventDefault()
        try {
            const toLog = await axios.post('http://localhost:5000/userlogin', loginInput)
            console.log(toLog.data)
            if(loginInput.email !== toLog.data[0].email || toLog.data == 'Wrong') {
                setEmailError(!emailError)
            } else {
                //set data to local storage
                const dataToLocal = localStorage.setItem('user', JSON.stringify(toLog.data))

                //Navigate to User Dashboard component
                console.log('existed')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <div className='flex flex-col items-center justify-center w-[full] h-screen bg-gradient-to-b from-emerald-800 via-emerald-400 to-teal-200'>
            <div className='w-[50%] h-[10%] flex items-center justify-center'>
                <h1 className='font-bold font-serif text-white text-[2rem] w-[50%] flex items-center justify-center'>Login</h1>
            </div>
            <div className='w-[50%] h-[70%] md:w-[40%]'>
                <form onSubmit={handleOnSubmit}>
                    <div className='flex flex-col w-[full] h-[5rem]'>
                        <label htmlFor="" className='font-bold' >Email:</label>
                        <input type="text" name='email' className={emailError ? "w-full px-3 py-2 border-2 border-red-600 rounded-md " :"w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"} onChange={handleOnChange} onClick={() => setEmailError(false)}/>
                    </div>
                    <div className='flex flex-col w-[full] h-[5rem]'>
                        <label htmlFor="" className='font-bold'>Repeat Password:</label>
                        <div className='relative'>
                            <input type={togglePass ? 'password' : 'text'} name='password' className={emailError ? "w-full px-3 py-2 border-2 border-red-600 rounded-md":"w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"} placeholder="Enter password" onChange={handleOnChange}/>
                            <div className="absolute inset-y-0 right-0 flex items-center px-3" onClick={handleTogglePass}>
                            {togglePass ? <FaEye/> : <FaEyeSlash/>}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[full] h-[100%]'>
                        <button className='w-[50%] px-3 py-2 font-bold bg-white rounded-md bourder focus:outline-none focus:border-blue-500 hover:bg-gray-400 md:w-[30%]'>Submit</button>
                    </div>
                    {emailError ? <div className='flex items-center justify-center mt-4 font-bold '>
                        <h1 className='text-red-600 '>Check Email and Password carefully</h1>
                    </div>: null}
                </form>
            </div>
        </div>
    </>
  )
}

export default Login