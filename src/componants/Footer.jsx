import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (


    <div className='animate__animated  animate__backInUp flex py-20  items-center W-[100%]  justify-around h-20 max-w-9000x mx-auto px-4 border-t-red-500 text-white shadow-red-500 shadow-2xl'>
      <div>
        <h1 id='m-elmogy' className='w-full text-3xl text-neutral-500 font-sans'>
          <span className='text-red-500'>M</span>:ELmogy
        </h1>
      </div>
      <div className='flex '>
        <a href="https://github.com/M0elmogy"><FaGithub size={25} className='mr-8' /></a>
        <a href="https://www.linkedin.com/in/mohamed-elmogy-738709314"><FaLinkedin size={25} /></a>

      </div>

    </div>

  )
}

export default Footer