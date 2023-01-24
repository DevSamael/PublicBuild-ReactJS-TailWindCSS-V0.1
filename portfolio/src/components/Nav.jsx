import React from 'react'

const Nav = () => {
  return (
    <div class="relative bg-white mx-auto max-w-7xl px-6 flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 lg:w-0 lg:flex-1">
      <a href="/">
        <span className="sr-only">Your Company</span>
        <img class="h-8 w-auto sm:h-10" src="https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo.png" alt=""></img>
      </a>
    </div>
  )
}

export default Nav