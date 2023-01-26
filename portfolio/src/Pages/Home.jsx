import React from 'react'
import Videoplay from '../Assets/Videoplay.mp4'

const Main = () => {
  return (
    <div>
        <video className='w-full h-screen object-cover' src={Videoplay} autoPlay loop muted />
    </div>
  )
}

export default Main