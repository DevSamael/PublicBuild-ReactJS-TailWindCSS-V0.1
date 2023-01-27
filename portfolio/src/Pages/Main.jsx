import React from 'react'
import DevSam from '../Assets/DevSam.gif'
import Me from'../Assets/Me.png'

const Main = () => {
  return (
    <>
        <div id="Home">
            <img className='w-full h-screen object-cover' src={DevSam} alt="Hero img" />
        </div>
        <div id="About Me" className='w-full h-screen bg-black'>
            <h1 className='text-6xl font-mono text-white font-bold flex ml-5 my-20'>
                About Me!
            </h1>
            <img class='float-right rounded-lg' src={Me} alt="Mobile" />
            <p className='text-xl font-mono text-white py-14 ml-2 px-1 border-red-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas. Vitae purus faucibus ornare suspendisse sed nisi lacus. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Ultricies mi quis hendrerit dolor. Auctor urna nunc id cursus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Ac turpis egestas sed tempus urna. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Dolor sed viverra ipsum nunc aliquet bibendum. Ornare aenean </p>
          
        </div>
    </>
  )
}

export default Main