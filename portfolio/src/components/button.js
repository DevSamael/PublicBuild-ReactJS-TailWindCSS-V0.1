import React from 'react'

const button = (props) => {
  return (
    <button className='bg-emerald-400 text-white font-sans py-2 px-6 rounded md:ml-8 hover:bg-emerald-800 duration-500'>
        {props.children}
    </button>
  )
}

export default button