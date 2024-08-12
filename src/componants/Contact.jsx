import React, { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        const subject = 'Contact Form Message';
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        const mailtoLink = `mailto:ohamedmagdyzzx256@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };


    return (
        <div>


            <h1 className='text-3xl font-sans text-center     text-white py-20  ' >Contact <span className='text-red-500'>Me</span> </h1>
            <div className='text-white  mb-40   flex justify-center  text-center  '>
                <form onSubmit={handleSubmit} className=' shadow-2xl shadow-red-500 p-8  ml-10  '>
                    <label className='text-xl m-20' >
                        Name :
                        <input className='text-xl w-56 m-8 mb-4'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label >
                    <br />
                    <label className='text-xl m-20'>
                        Email :
                        <input className='text-xl w-56 m-8 mb-4'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label className='text-xl m-20 text-center'>

                        Message :
                        <textarea className='text-xl w-56 m-8 mb-4 '
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <button className='border-2  border-red-500 rounded-lg p-3 mt-6 shadow-lg shadow-red-500 hover:bg-red-500 hover:text-black' type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};


export default Contact;