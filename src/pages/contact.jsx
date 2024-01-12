import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({weight: "400", subsets: ['latin']});
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';

export default function Contact() {
    const formRef = useRef();
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        // Reset the form when the component mounts
        if (formRef.current) {
            formRef.current.reset();
        }
    }, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // Check if all fields are filled
        for (let [key, value] of formData.entries()) {
            if (!value.trim()) {
                setErrorMessage(`Please fill in your ${key}.`);
                return;
            }
        }

        // Reset error message and submit the form
        setErrorMessage('');
        e.target.submit();
        setSubmitted(true);

    };

    
    return (
        <>
            <Head>
                <title>Contact - VS Data & Development</title>
            </Head>
            <div className="bg-cover bg-center min-h-screen w-full overflow-auto" style={{ backgroundImage: `url('/images/BannerLong.png')` }}>
                <div className="flex flex-col lg:flex-row p-8 lg:mt-12">
                    <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start mb-8 lg:mb-0">
                        <h1 className={`font-bold uppercase text-5xl mb-4 text-white ${cinzel.className}`}>Send me a <br /> message!</h1>
                    </div>
                   
                    <form ref={formRef} onSubmit={handleSubmit} action="https://formspree.io/f/mbjnjpko" method="POST">
                        <input type="hidden" name="_next" value="/thank-you" />
                            <div className="w-full lg:w-1/2 xl:w-2/3 flex flex-col items-center mb-8 lg:mb-0">
                            <div className="bg-gray-800 bg-opacity-90 p-8 md:px-12 rounded-2xl shadow-2xl w-full">
                            {/* Form Fields */}
                            <div className='text-white'><span className='text-xl'>Ready to bring your digital vision to life?<br/></span>
                            Whether you need a cutting-edge front-end design, meticulous quality assurance and testing, or insightful data analytics, I'm here to turn your ideas into reality. Let's connect and create something amazing together – your web aspirations are just a message away!</div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input className="w-full bg-gray-100 text-black p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="First Name*" name="First Name" />
                                <input className="w-full bg-gray-100 text-black p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name*" name="Last Name" />
                                <input className="w-full bg-gray-100 text-black p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Email*" name="Email" />
                                <input className="w-full bg-gray-100 text-black p-3 rounded-lg focus:outline-none focus:shadow-outline" type="number" placeholder="Phone*" name="Phone" />
                            </div>
                            <div className="my-4">
                                    <textarea className="w-full h-32 bg-gray-100 bg-opacity-90 text-black p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Message*" name="message"></textarea>
                                </div>
                                <div className="my-2 w-full lg:w-1/4">
                                    <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-red-900 hover:bg-opacity-80 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">Send Message</button>
                                </div>
                                {/* Error Message */}
                                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                {/* Submission Success Message */}
                                {submitted && <p className="text-green-500">Message sent successfully!</p>}
                            </div>
                        </div>
                    </form>

                    {/* Right Column - Contact Cards */}
                    <div className="w-full sm:flex-col lg:w-1/4 flex flex-col items-center ">
                        {/* Email Card */}
                        <div className="flex flex-col items-center gap-3 px-8 my-4 py-10 bg-white bg-opacity-90 rounded-2xl shadow-main">
                            <Icon icon="clarity:email-line" width="36" height="36" />
                            <p className="text-2xl font-extrabold text-dark-grey-900">Email</p>
                            <p className="text-base leading-7 text-dark-grey-600">Contact me at</p>
                            <a className="text-lg font-bold text-purple-blue-500" href="mailto:vsdatadevelopment">vsdatadevelopment<br/>@gmail.com</a>
                        </div>

                        {/* Phone Card */}
                        <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white bg-opacity-90 rounded-2xl shadow-main">
                            <Icon icon="gg:phone" width="36" height="36" />
                            <p className="text-2xl font-extrabold text-dark-grey-900">Phone</p>
                            <p className="text-base leading-7 text-dark-grey-600">Reach out to by phone</p>
                            <a className="text-lg font-bold text-purple-blue-500">(+1)902-986-2994</a>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}
