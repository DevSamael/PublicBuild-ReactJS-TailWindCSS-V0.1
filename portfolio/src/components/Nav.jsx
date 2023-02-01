import React from 'react'
import { useState } from 'react'
import Button from './Button'
import Sunkisst from '../Assets/Sunkisst.png'



const Nav = () => {
  let [open,setOpen]=useState(false);
  return (
    <div className='w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7 '>
        <div className='cursor-pointer flex items-center'>
          <img className='w-full h-14' src={Sunkisst} alt="Sunkisst logo" />
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in font-mono ${open ? 'top-15 opacity-100':'top-[-350px]'}`}>
          <li className='md:ml-8 text-xl md:my-0 my-7 font-bold'>
          <a href="https://www.linkedin.com/in/samael-musgrove-47957a207/"><i class="fa-brands fa-linkedin-in text-white rounded-full shadow-lg bg-blue-500 shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300"></i> </a> 
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7 font-bold'>
          <a href="https://github.com/DevSamael"><i class="fa-brands fa-github text-black rounded-full shadow-lg bg-white shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300"></i></a>
          </li>
          <Button>
            <a href="/">
            Get In Touch!
            </a>
          </Button>
        </ul>
      </div>
    </div>
  )
}
export default Nav