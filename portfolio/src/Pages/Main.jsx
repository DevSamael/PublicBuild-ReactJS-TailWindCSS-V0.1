import React from 'react'
import '../Pages/Main.css'
import sale from '../Assets/sale.png'

const Main = () => {
  return (
    <>
      <div id="Home">
        <div className='w-full h-screen bg-videobg bg-cover bg-center bg-fixed flex flex-col justify-center items-center'>
          <img className='w-full h-auto' src={sale} alt="" />
          
        </div>
        <div id='About' className='w-full h-screen bg-black'>
              
        </div>
      </div>
    </>
  )
}

export default Main