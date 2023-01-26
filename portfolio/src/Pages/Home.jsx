import React from 'react'
import Hero from '../Assets/Hero.jpg'

const Main = () => {
  return (
    <div>
        <img id='Hero' className='w-full h-screen object-cover' src={Hero} alt="My PIC" />
        <h1 id='heading'className='text-white absolute w-full h-screen top-0 flex flex-col justify-center items-center text-4xl font-bold'>Developer Sam</h1>
    </div>
  )
}

export default Main