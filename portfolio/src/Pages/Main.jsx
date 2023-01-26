import React from 'react'
import DevSam from '../Assets/DevSam.gif'

const Main = () => {
  return (
    <div id="Home">
      <img id="Homeimg"className='w-full h-screen object-cover' src={DevSam} alt="Hero img" />
      <div className='flex justify-center items-center'>
        <h1 className='text-white text-6xl'>Welcome</h1>
      </div>
    </div>
  )
}

export default Main