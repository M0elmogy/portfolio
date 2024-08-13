import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import 'animate.css';


function Skills() {
    return (
        <div className='text-white'>
            <h1 id='skills' className='text-3xl font-sans  text-center' >MY <span className='text-red-500'>Talent</span> <br /> Professional Skills  </h1>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8  py-12 text-center  text-xl       '>

                <div className=' animate__animated animate__rotateInDownLeft   border-2 border-black shadow-lg shadow-red-500 p-8  '>
                    <IoLogoJavascript size={70} color='yellow' className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    JavaScript</h1>

                </div>

                <div className='animate__animated animate__rotateInDownLeft border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <SiTypescript size={70} color='blue' className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    TypeScript</h1>
                </div>
                <div className=' animate__animated animate__rotateInDownLeft border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <FaPython size={70} className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    Python</h1>
                </div>
                <div className=' animate__animated animate__rotateInDownLeft border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <SiPhp size={70} color='22223b' className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    PHP</h1>
                </div>
                <div className=' animate__animated animate__rotateInDownLeft border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <FaReact size={70} color='4cc9f0' className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    React</h1>
                </div>
                <div className=' animate__animated animate__rotateInDownLeft border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <FaLaravel size={70} color='8d0801' className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    Laravel</h1>
                </div>
                <div className=' animate__animated animate__rotateInDownLeft border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <RiTailwindCssFill size={70} color='4cc9f0' className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    Tailwind</h1>
                </div>
                <div className=' animate__animated animate__rotateInDownLeft border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <FaBootstrap size={70} color='3a0ca3' className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    Bootstrap</h1>
                </div>
                <div className=' animate__animated animate__rotateInDownLeft border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <FaHtml5 size={70} color='f26419' className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    HTML</h1>
                </div>
                <div className=' animate__animated animate__rotateInDownLeft border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <FaCss3Alt size={70} color='014f86' className='mx-auto w-[50%] mb-4' />
                    <h1 id='icons' >    CSS</h1>
                </div>

            </div>

        </div>
    )
}

export default Skills