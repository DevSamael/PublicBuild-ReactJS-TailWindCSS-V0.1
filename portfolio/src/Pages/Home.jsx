import React from 'react'
import Videoplay from '../Assets/Videoplay.mp4'

const Home = () => {
  return (
    <div>
        <video className='w-full h-screen object-cover'src={Videoplay} autoPlay loop></video>
    </div>
  )
}

export default Home