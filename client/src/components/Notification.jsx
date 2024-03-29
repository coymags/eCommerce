import React from 'react'

function Notification() {

    const mockData = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  return (
    <>
        <div className='flex flex-col items-center justify-start w-full h-screen'>
            <div className=' fixed top-0 flex items-center justify-start w-full h-[3rem] p-3 font-bold border-b-2 border-gray-300'>Notifications</div>

            <div className='flex flex-col justify-start mt-12 overflow-auto w-[100%] h-[100%] p-3'>
                {/*
                    mockData.map((index,data) => {
                        return(
                            <div key={index} className=' flex items-center justify-center w-[90%] h-[6rem] border-b-2 border-gray-300'>
                                <p>{data}</p>
                            </div>
                        )
                    })
                */}
            </div>
        </div>
    </>
  )
}

export default Notification