import React from 'react'

const Nav = () => {
  return (
    <div class="relative bg-white mx-auto max-w-7xl px-6 flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 lg:w-0 lg:flex-1">
      <a href="/">
        <span className="sr-only">Your Company</span>
        <img class="w-16 md:w-32 lg:w-48" src="https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo.png" alt="Sample Logo"></img>
      </a>
      <div class='-my-2 -mr-2 md:hidden'>
        <button type='button' class='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false'>
          <span class='sr-only'>Open Menu</span>
          <svg class='h-6 w-6' xmlnx="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <nav class='"w-16 md:w-32 lg:w-48"'>
        <ul>
          <a href="/"></a>
        </ul>
      </nav>
    </div>
  )
}

export default Nav