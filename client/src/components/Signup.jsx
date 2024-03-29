import React from 'react'
import { FaEye, FaEyeSlash} from "react-icons/fa"
import { useState } from 'react'
import useStore from '../../data/Store'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {

  const [togglePass, setTogglePass] = useState(true)
  const [toggleRePass, setToggleRePass] = useState(true)
  const [passWrong, setPassWrong] = useState(false)
  const [regSuccess, setRegSuccess] = useState(false)

  //Navigation variable
  const navigate = useNavigate()

  // useStore variable
  const {resetForm,  RegisterInput, setRegisterInput } = useStore()

  //useState for onChange in input connected to handleOnChange setEmail
  //const [email, setEmail] = useState({name: ''})

  function handleOnChange(e) {
    const {name, value} = e.target
    /*setEmail((prev) => {
      return {...prev, [name] : value}
    })*/
    setRegisterInput(name, value)
  }

  async function handleOnSubmit(e) {
    e.preventDefault()
    if (RegisterInput.password == RegisterInput.retypepassword) {
      try {
        const register = await axios.post('http://localhost:5000/user',RegisterInput)
        if(register.data) {
          setRegSuccess(!regSuccess)
          setPassWrong(false)
          resetForm()
        } else {
          console.log('Failed')
        }
      } catch (error) {
        console.error(error.message)
      }
    } else {
      setPassWrong(!passWrong)
    }
  }

  function handleTogglePass() {
    setTogglePass(!togglePass)
  }

  function handleToggleRePass() {
    setToggleRePass(!toggleRePass)
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center w-[full] h-screen bg-gradient-to-b from-emerald-800 via-emerald-400 to-teal-200'>
          <div className='w-[50%] h-[10%] flex items-center justify-center'>
            <h1 className='font-bold font-serif text-white text-[2rem] w-[50%] flex items-center justify-center'>Register</h1>
          </div>
          <div className='w-[50%] h-[70%] md:w-[40%]'>
            <form onSubmit={handleOnSubmit}>
              <div className='flex flex-col w-[full] h-[5rem]'>
                <label htmlFor="" className='font-bold' >Email:</label>
                <input type="text" required value={RegisterInput.email} name='email' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={handleOnChange}/>
              </div>
              {/*<div className='flex flex-col w-[full] h-[5rem]'>
                <label htmlFor="" className='font-bold'>Username:</label>
                <input type="text" name='username' className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
              </div>*/}
              <div className='flex flex-col w-[full] h-[5rem]'>
                <label htmlFor="" className='font-bold'>Password:</label>
                <div className='relative'>
                  <input required type={togglePass ? 'password': 'text'} value={RegisterInput.password} name='password' onChange={handleOnChange} className={passWrong ? "w-full px-3 py-2 border-2 border-red-700 rounded-md focus:outline-none focus:border-blue-500" : "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"} placeholder="Enter password"/>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3" onClick={handleTogglePass}>
                    {togglePass ? <FaEye/> : <FaEyeSlash/>}
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-[full] h-[5rem]'>
                <label htmlFor="" className='font-bold'>Repeat Password:</label>
                <div className='relative'>
                  <input required type={toggleRePass ? 'password': 'text'} value={RegisterInput.retypepassword} name='retypepassword' onChange={handleOnChange} className={passWrong ? "w-full px-3 py-2 border-red-600 border-2 rounded-md focus:outline-none focus:border-blue-500": "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"} placeholder="Enter password"/>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3" onClick={handleToggleRePass}>
                    {toggleRePass ? <FaEye/> : <FaEyeSlash/>}
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center w-[full] h-[100%]'>
                <button className='w-[50%] px-3 py-2 font-bold bg-white rounded-md bourder focus:outline-none focus:border-blue-500 hover:bg-gray-400 md:w-[30%]'>Submit</button>
              </div>
              {passWrong ? <div className=' flex items-center justify-center w-full h-[3rem] border-2 border-red-600 mt-3'><h1 className='font-bold text-red-500 '>Password dont match</h1></div> : null}
              {regSuccess ? <div className=' flex flex-col items-center justify-center w-full h-[3rem]'>
                <h1 className='font-bold text-black '>Registration Success</h1>
                <h1 className='text-blue-700 underline hover:cursor-pointer' onClick={() => navigate('/login')}>Login</h1>
              </div> : null}
              <div className='flex items-center justify-center '>
                <h1>Already have an account? <span className='text-blue-600 hover:cursor-pointer' onClick={() => navigate('/login')}>Login</span></h1>
              </div>
            </form>
          </div>
      </div>
    </>
  )
}

export default Signup