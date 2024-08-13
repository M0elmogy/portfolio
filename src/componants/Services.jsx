import React from 'react'
import { FaLaptopCode } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa";

function Services() {
    return (
        <div className='text-white py-60'>

            <h1 id='services' className='text-3xl font-sans  text-center' >MY <span className='text-red-500'>Specail Services</span>  For Your <br /> Business <span className='text-red-500'> Development</span></h1>

            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8  py-12 text-center  text-xl       '>

                <div className='  animate__animated animate__lightSpeedInLeft  border-2 border-black shadow-lg shadow-red-500 p-8  '>
                    <FaLaptopCode size={70} color='red' className='mx-auto w-[50%] mb-4' />
                    <h1 id='web'>WEB DEVELOPMENT</h1>
                    <p id='web2'>Modern and mobile-ready website that will help you reach all of your marketing</p>
                </div>

                <div className=' animate__animated animate__lightSpeedInRight  border-2 border-black shadow-lg shadow-red-500 p-8'>
                    <FaRegFileCode size={70} color='red' className='mx-auto w-[50%] mb-4' />
                    <h1 id='web'>UI/UX DESIGN</h1>
                    <p id='web2'>Modern and mobile-ready website that will help you reach all of your marketingCreate Intuitive interfaces and delightful user experiences by blending aesthetics with usability</p>
                </div>

            </div>

        </div>
    )
}

export default Services