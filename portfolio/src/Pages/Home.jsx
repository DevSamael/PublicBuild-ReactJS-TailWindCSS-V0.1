import React from 'react'
import DevSam from '../Assets/DevSam.mp4'

const Home = () => {
  return (
    <div>
      <video src={DevSam} autoPlay loop className='w-full h-screen object-cover flex'></video>
    </div>
  )
}

export default Home