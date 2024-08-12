import React from 'react'
import frontt from '../images/frontend.jpg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function About() {
    return (
        <div className=' mx-auto grid  md:grid-cols-2 px-12  py-11 w-[90%] sm:items-center    shadow-2xl shadow-red-500 '>
            <div cl>
                <img className='sm:w-[80%] md:w-[90%]' src={frontt} alt="" srcset="" />
            </div>
            <div className='text-white md:mr-6 w-full   '>
                <h1 className='text-2xl font-sans py-3'>ABOUT MY..</h1>
                <p className=''>More than 3 years Experience in the development of software and solutions.
                    A conscientious person who pays attention to details.
                    Very passionate about software development, always willing and ready to learn new things/concepts.
                    Proven leader with the ability to streamline development processes to drive the achievement of organisational objectives.
                    Develop highly interactive Front end / User Interfaces for the web. </p>
                <div className='flex justify-around py-3 '><a href="https://github.com/M0elmogy"><FaGithub size={25} /></a> <a href="https://www.linkedin.com/in/mohamed-elmogy-738709314"><FaLinkedin size={25} /></a> </div>
            </div>

        </div>
    )
}

export default About