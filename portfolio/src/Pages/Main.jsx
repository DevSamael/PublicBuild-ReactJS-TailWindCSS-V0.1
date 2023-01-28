import React from 'react'
import Hero from '../Assets/Heroimg.png'
import BG from '../Assets/BG.gif'

const Main = () => {
  return (
    <>
        <div id="Home">
            <div>
                <img className='w-full h-screen object-cover' src={Hero} alt='' />
            </div>
            <div className='bg-black w-full h-screen'>
                <img className='w-full h-screen object-cover' src={BG} alt="" />
            </div>
        </div>
    </>
  )
}

export default Main