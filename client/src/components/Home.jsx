import React from 'react'
import { useState } from 'react'
import BgImage from '../images/pexels-andrea-piacquadio-972887.jpg'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaMoneyCheckDollar } from "react-icons/fa6"
import { BsCart4 } from "react-icons/bs"
import { TbCurrencyPeso } from "react-icons/tb"



function Home(props) {

  const [isClicked, setIsClicked] = useState(false)

  //data from clicked item send to focus item
  const [focusData, setFocusData] =useState()

  
  function handleClick(data) {
    setFocusData(data)
    setIsClicked(!isClicked)
  }

  function returnClick() {
    setIsClicked(!isClicked)
  }
  

  return (
    <section className='flex flex-col items-center justify-between w-[100%] h-screen bg-gray-200' >
        <div className='flex flex-col items-center justify-start w-[100%] h-screen'>
            <div className='flex items-center justify-end w-full bg-gray-500 h-[40%] bg-cover bg-center md:h-[70%]' style={{backgroundImage: `url(${BgImage})`}}>
              <h1 className=' font-serif w-[30%] m-3 text-lg md:text-xl'>Where <span className='font-bold text-red-500'>Shopping</span> is always a <span className='font-bold text-red-500'>good idea</span></h1>
            </div>
            <div className='flex items-center justify-between w-full h-[0.5rem] p-5'>
              <span className=' flex flex-col items-center justify-center bg-gray-400 w-[30%] h-[4rem] rounded-lg'>
                <BsCart4 size={30}/>
                <h3 className='font-bold '>Easy to order</h3>
              </span>
              <span className=' flex flex-col items-center justify-center bg-gray-400 w-[30%] h-[4rem] rounded-lg'>
                
                <TbTruckDelivery size={30}/>
                <h3 className='font-bold '>Fast Delivery</h3>
              </span>
              <span className=' flex flex-col items-center justify-center bg-gray-400 w-[30%] h-[4rem] rounded-lg'>
                <FaMoneyCheckDollar size={30}/>
                <h3 className='font-bold '>Easy to pay</h3>
              </span>
            </div>
            <div className='flex items-center justify-center w-full h-[1rem] mt-7 md:h-[3rem]'>
              <h1 className='font-bold md:text-2xl '>Relevant</h1>
            </div>
            <div className='flex flex-wrap items-start justify-center w-full h-screen overflow-auto mb-[3rem]'>
                {
                  props.data.map((data) => {
                    return(
                      <div className='flex flex-wrap items-center justify-center w-[7rem] h-[9rem] m-2 p-1 bg-white md:w-[14rem] md:h-[16rem]' key={JSON.stringify(data)} onClick={() => handleClick(data)}>
                        <img src={data.image} alt="" className='w-[6rem] h-[6rem]'/>
                        <p className='overflow-hidden text-xs truncate hover:overflow-visible  hover:bg-white hover:border-2 hover:border-black hover:z-0 hover:flex-wrap md:text-[1rem] '>{data.title}</p>
                        <p className='flex items-center text-blue-600 '><TbCurrencyPeso size={17}/>{data.price}</p>
                      </div>
                    )
                  })
                }
            </div>
            {isClicked ? <div className='absolute top-0 flex items-center justify-center w-full h-[42rem] backdrop-blur-sm p-3' onClick={returnClick}>
                <div className=' flex flex-col items-center w-[20rem] h-[30rem] bg-white p-2 overflow-auto border-2 border-gray-500 md:w-[23rem] md:h-[32rem]'>
                    <img src={focusData.image} alt="" className=' w-[60%] h-[10rem]' />
                    <p className='font-bold text-blue-700'>{focusData.title}</p>
                    <p className='font-bold text-blue-600'>Price: {focusData.price}</p>
                    <p><span className='font-bold text-black'>Description: </span><br/>{focusData.description}</p>
                </div>
            </div> : null}
        </div>
    </section>
  )
}

export default Home