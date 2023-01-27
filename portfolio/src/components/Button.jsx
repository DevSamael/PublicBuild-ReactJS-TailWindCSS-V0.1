import React from 'react'

const button = (props) => {
  return (
    <button className='bg-sky-500 text-white shadow-lg shadow-black font-sans py-2 px-6 rounded md:ml-10 font-bold hover:scale-110 ease-in duration-300'>
        {props.children}
    </button>
  )
}

export default button