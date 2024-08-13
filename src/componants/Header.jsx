import React from 'react'
import portfolio from '../images/m elmogy.png'

function Header() {
  return (
    <div >
      <div className='max-w-[1240px] mx-auto p-4 grid lg:grid-cols-2 md:grid-cols-2 gap-5 sm::grid-col   text-white   '  >
        <div className='py-52 '>
          <h4 id='hello' className='font- text-3xl py-4  '>HELLO!</h4>
          <h1 id='iam' className='font-semibold text-3xl py-2'>Iam Mohamed ELmogy...</h1>
          <p id='paragaph' className='mb-8'>  Front End Developer Front-end development is a crucial aspect of web development that focuses on creating the user interface (UI) and user experience (UX) of websites and applications. </p>
          <a id='conatct' href='https://wa.me/201015316368' className='border-2 animate__animated animate__fadeInDown  border-red-500 rounded-lg p-3 mt-6 shadow-lg shadow-red-500 hover:bg-red-500 hover:text-black' type="submit">Conatct me</a>
        </div>
        <div className='lg:w-[90] lg:py-20    md:w-[80] md:py-16 sm:w-[70%] ' >
          <img className='' src={portfolio} alt="" srcset="" />
        </div>

      </div>
    </div>
  )
}

export default Header