import React from 'react'

const button = (props) => {
  return (
    <button className='bg-sky-500 text-white font-sans py-2 px-6 rounded md:ml-10 hover:bg-sky-800 duration-500 font-bold'>
        {props.children}
    </button>
  )
}

export default button