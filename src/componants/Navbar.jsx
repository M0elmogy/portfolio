import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div >

            <div className='flex  items-center justify-between h-20 max-w-9000x mx-auto px-4 text-white shadow-red-500 shadow-lg'>
                <h1 className='w-full text-3xl text-neutral-500 font-sans'>
                    <span className='text-red-500'>M</span>:ELmogy
                </h1>
                <ul className=' hidden md:flex '>
                    <li className='p-4  hover:text-red-500 '><a href="">Home</a> </li>
                    <li className='p-4 hover:text-red-500 '><a href="">About</a> </li>
                    <li className='p-4 hover:text-red-500 '><a href="">projects</a> </li>
                    <li className='p-4 w-40 hover:text-red-500 '><a href='https://wa.me/201015316368'>Conatct me</a> </li>
                    <li className='p-4 hover:text-red-500 '><a href="https://github.com/M0elmogy"><FaGithub size={25} /></a> </li>
                    <li className='p-4 hover:text-red-500 '><a href="https://www.linkedin.com/in/mohamed-elmogy-738709314"><FaLinkedin size={25} /></a> </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}

                </div>
                <div className={nav ? 'fixed left-0 top-0 w-80   h-full border-r border-r-gray-900 bg-zinc-900 ' : 'hidden'}>
                    <h1 className='w-full text-3xl text-neutral-500  font-bold m-4'>
                        M:ELmogy
                    </h1>
                    <ul className='pt-2 uppercase'>
                        <li className='p-4 hover:text-red-500 '><a href="">Home</a> </li>
                        <li className='p-4 hover:text-red-500 '><a href="">About</a> </li>
                        <li className='p-4 hover:text-red-500 '><a href="">projects</a> </li>
                        <li className='p-4 hover:text-red-500 '><a href="">Conatct</a> </li>
                        <li className='p-4 hover:text-red-500 '><a href=""><FaGithub size={25} /></a> </li>
                        <li className='p-4 hover:text-red-500 '><a href=""><FaLinkedin size={25} /></a> </li>

                    </ul>
                </div>
            </div>
        </div>
    )

}


export default Navbar