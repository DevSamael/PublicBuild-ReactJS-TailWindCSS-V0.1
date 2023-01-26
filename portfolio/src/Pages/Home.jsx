import React from 'react'
import DevSamBlank from '../Assets/DevSamBlank.gif'

const Home = () => {
  return (
    <div>
      <img className='w-full h-screen object-cover' src={DevSamBlank} alt="Hero img" />
      <div className='flex justify-center items-center'>
        <h1 className='text-white text-6xl'>Welcome</h1>
      </div>
    </div>
  )
}

export default Home