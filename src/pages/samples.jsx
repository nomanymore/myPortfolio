import Image from 'next/image';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({weight: "400", subsets: ['latin']});
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Samples() {
    const [selectedSection, setSelectedSection] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);

    // List of images for the carousel
    const images = [
        "/images/webp/Codeflex1.webp",
        "/images/webp/Codeflex2.webp",
        "/images/webp/Codeflex3.webp",
        "/images/webp/Codeflex4.webp",
        "/images/webp/Codeflex5.webp",
        "/images/webp/Codeflex6.webp",
        "/images/webp/Codeflex7.webp",
        "/images/webp/Codeflex8.webp"
    ];

    // list of icons and tech items for skills
    const techIcons = {
        'React': { icon: 'skill-icons:react-dark', url: 'https://react.dev/' },
        'Next.js': { icon:'skill-icons:nextjs-dark', url:'https://nextjs.org/' },
        'php': { icon:'skill-icons:php-dark', url:'https://www.php.net/' },
        'Tailwind CSS': { icon:'skill-icons:tailwindcss-dark', url:'https://tailwindcss.com/' },
        'MongoDB': { icon:"devicon:mongodb-wordmark", url:'https://www.mongodb.com/' },
        'Python': { icon:'skill-icons:python-dark', url:'https://www.python.org/' },
        'HTML': { icon:'skill-icons:html', url:'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        'CSS': { icon:'skill-icons:css', url:'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        'JavaScript': { icon:'skill-icons:javascript', url:'https://www.javascript.com/' },
        'Java': { icon:'skill-icons:java-dark', url:'https://www.java.com/en/' },
        'C#': { icon:'vscode-icons:file-type-csharp2', url:'https://learn.microsoft.com/en-us/dotnet/csharp/' },
        'MySQL': { icon:'devicon:mysql-wordmark', url:'https://www.mysql.com/' },
        'Vercel': { icon:'logos:vercel', url:'https://vercel.com/' },
        'Power BI': { icon:'logos:microsoft-power-bi', url:'https://powerbi.microsoft.com/' },
        'Tableau': { icon:'logos:tableau', url:'https://www.tableau.com/' },
        'SASS': { icon:'skill-icons:sass', url:'https://sass-lang.com/' },
        'WordPress': { icon:'skill-icons:wordpress', url:'https://wordpress.com/' },
        'Docker': { icon:'skill-icons:docker', url:'https://www.docker.com/' },
        'ASP.NET': { icon:'devicon:dotnetcore', url:'https://dotnet.microsoft.com/en-us/' },
    };

    const handleSlideChange = (increment) => {
        setActiveSlide((prevSlide) => {
            let newSlide = prevSlide + increment;
            if (newSlide < 0) {
                newSlide = images.length - 1;
            } else if (newSlide >= images.length) {
                newSlide = 0;
            }
            return newSlide;
        });
    };

    return (
        <>
            <Head>
                <title>Samples - VS Data & Development</title>
            </Head>
            <div className="relative h-screen w-full bg-cover bg-center overflow-auto" style={{ backgroundImage: 'url(/images/webp/Banner2.webp)', backgroundAttachment: 'fixed' }}>
                
                <div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center justify-center pt-8">
                    <h1 className={`text-5xl font-bold text-white mb-10 ${cinzel.className}`}>Samples</h1>
                        <div className="flex items-center justify-between w-3/4 max-w-4xl">
                        <button
                            onClick={() => setSelectedSection('web')} 
                            className={`uppercase text-xs md:text-sm font-bold tracking-wide p-3 rounded-lg w-full md:w-1/4 mb-2 md:mb-0 focus:outline-none focus:shadow-outline 
                                        ${selectedSection === 'web' ? 'bg-white text-red-900' : 'bg-red-900 hover:bg-opacity-80 text-gray-100'}`}>
                            Web & Prog
                        </button>
                        <button
                            onClick={() => setSelectedSection('data')} 
                            className={`uppercase text-xs md:text-sm font-bold tracking-wide p-3 rounded-lg w-full md:w-1/4 mb-2 md:mb-0 focus:outline-none focus:shadow-outline 
                                        ${selectedSection === 'data' ? 'bg-white text-red-900' : 'bg-red-900 hover:bg-opacity-80 text-gray-100'}`}>
                            Data
                        </button>
                        <button
                            onClick={() => setSelectedSection('pm')} 
                            className={`uppercase text-xs md:text-sm font-bold tracking-wide p-3 rounded-lg w-full md:w-1/4 focus:outline-none focus:shadow-outline
                                        ${selectedSection === 'pm' ? 'bg-white text-red-900' : 'bg-red-900 hover:bg-opacity-80 text-gray-100'}`}>
                            Project Management
                        </button>
                    </div>
                </div>

                {/* Section Content */}
                <div className="absolute top-1/4 w-full z-30 p-4">
                {selectedSection === 'web' && (
                    <div className="flex flex-wrap justify-center ">
                        <div className="bg-white bg-opacity-90 p-6 m-4 rounded-xl shadow-lg w-80 ">
                            <a href='https://tech-roster-vercel.vercel.app/' target="_blank"><img src="/images/TechRoster.png" alt="Screencap of Project tech roster" className="w-full h-40 object-cover rounded border-2 border-gray-600" /></a>
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>Tech Roster</h3>
                            <p className="text-gray-700 mt-2">A simple full stack app built with Next.js, Tailwind CSS, and MongoDB, pulling technology and course info form an API.</p>
                            <p className='text-black font-bold text-lg mt-2'>Built with:</p>
                            <div className="flex justify-start flex-wrap mt-4"> 
                                {['Docker', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Vercel'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noopener noreferrer" title={tech}>
                                        <Icon icon={techIcons[tech].icon} width="25" height="25" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 p-6 m-4 rounded-xl shadow-lg w-80 ">
                            <a href='https://tech-roster-admin-beige.vercel.app/' target="_blank"><img src="/images/webp/techAdmin.webp" alt="Screencap of Project tech roster" className="w-full h-40 object-cover rounded border-2 border-gray-600" /></a>
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>Tech Roster - Admin</h3>
                            <p className="text-gray-700 mt-2">The admin side of the Tech Roster! A simple full stack app built with Next.js, Tailwind CSS, and MongoDB, allowing CRUD functionality. </p>
                            <p className='text-black font-bold text-lg mt-2'>Built with:</p>
                            <div className="flex justify-start flex-wrap mt-4"> 
                                {['Docker', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Vercel'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noopener noreferrer" title={tech}>
                                        <Icon icon={techIcons[tech].icon} width="25" height="25" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 p-6 m-4 rounded-xl shadow-lg w-80 ">
                            <a href='https://photo-album-fullstack.vercel.app/' target='_blank'><img src="/images/webp/photoalbum.webp" alt="Screencap of Project Photo Album" className="w-full h-40 object-cover rounded border-2 border-gray-600" /></a>     
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>Photo Album</h3>
                            <p className="text-gray-700 mt-2">Full stack photo album, retrieving photos and related info from a MongoDB database, commenting, and jump feature. </p>
                            <p className='text-black font-bold text-lg mt-2'>Built with:</p>
                            <div className="flex justify-start flex-wrap mt-4">
                                {['MongoDB', 'Next.js', 'Tailwind CSS', 'Docker', 'Vercel'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noreferrer" title={tech}>
                                        <Icon icon={techIcons[tech].icon} width="25" height="25" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 p-6 m-4 rounded-xl shadow-lg w-80 ">
                            <a href='https://year-1-web-build-6.vercel.app/' target='_blank'><img src="/images/webp/webbuild6.webp" alt="Screencap of Project mini portfolio" className="w-full h-40 object-cover rounded border-2 border-gray-600" /></a>
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>Mini Portfolio</h3>
                            <p className="text-gray-700 mt-2">My Very first complete "portfolio" done with only plain HTML/CSS as part of the learning process for web development and understanding the basics.</p>
                            <p className='text-black font-bold text-lg mt-2'>Built with:</p>
                            <div className="flex justify-start flex-wrap mt-4">
                                {['HTML', 'CSS', 'Vercel'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noopener noreferrer" title={tech}>
                                        <Icon icon={techIcons[tech].icon} width="25" height="25" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 p-6 m-4 rounded-xl shadow-lg w-80 ">
                            <a href='https://year-1-web-build-5.vercel.app/' target='_blank'><img src="/images/webp/Multiculture.webp" alt="Screencap of Project Photo Album" className="w-full h-40 object-cover rounded border-2 border-gray-600" /></a>     
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>Multiculturalism website</h3>
                            <p className="text-gray-700 mt-2">Collaborative project with another student building a multi-page simple HTML/CSS website for an event. </p>
                            <p className='text-black font-bold text-lg mt-2'>Built with:</p>
                            <div className="flex justify-start flex-wrap mt-4">
                                {['HTML', 'CSS', 'Vercel'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noreferrer" title={tech}>
                                        <Icon icon={techIcons[tech].icon} width="25" height="25" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 p-6 m-4 rounded-xl shadow-lg w-80 ">
                            <a href='https://www.online-python.com/6rdNPthazS' target='_blank'><img src="/images/webp/insult.webp" alt="Screencap of Project Photo Album" className="w-full h-40 object-cover rounded border-2 border-gray-600" /></a>     
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>Insult Generator</h3>
                            <p className="text-gray-700 mt-2">Fun little Python program that takes user input and generates insults. </p>
                            <p className='text-black font-bold text-lg mt-2'>Built with:</p>
                            <div className="flex justify-start flex-wrap mt-4">
                                {['Python'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noreferrer" title={tech}>
                                        <Icon icon={techIcons[tech].icon} width="25" height="25" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 p-6 m-4 rounded-xl shadow-lg w-80 ">
                            <a href='https://www.online-python.com/lE52A7NRjb' target='_blank'><img src="/images/webp/numbersGame.webp" alt="Screencap of Project Photo Album" className="w-full h-40 object-cover rounded border-2 border-gray-600" /></a>     
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>Number Guessing Game</h3>
                            <p className="text-gray-700 mt-2">Python guessing game, asking the user to guess a number between 1-100 and telling them if it's hot or cold. </p>
                            <p className='text-black font-bold text-lg mt-2'>Built with:</p>
                            <div className="flex justify-start flex-wrap mt-4">
                                {['Python'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noreferrer" title={tech}>
                                        <Icon icon={techIcons[tech].icon} width="25" height="25" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                        {selectedSection === 'data' && (
                            <div className="flex justify-around mx-auto">
                                <div className="bg-white bg-opacity-90 p-4 m-4 rounded-xl shadow-lg w-1/2">
                            <iframe title="NY resolutions" width="656" height="242" src="https://app.powerbi.com/view?r=eyJrIjoiOWVmMWE2OGQtMDExMC00N2RmLTk1YTEtOWQ2Mzc2MTA5NWQyIiwidCI6IjlmMjlkOTFmLWYzM2EtNGY4NC05ZDU2LWE0NGQ4ODk0YTA0NiJ9&embedImagePlaceholder=true&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>NY Resolutions</h3>
                            <p className="text-gray-700 mt-2">Simple Visualization showing New Year resolutions of UK population by gender and age groups. Done as part of a challenge obtained from <a href="workout-wednesday.com"> workout-wednesday.com</a> </p>
                            <p className='text-black font-bold text-lg mt-2'>Built with:</p>
                            <div className="flex justify-start flex-wrap mt-4"> 
                                {['Power BI'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noopener noreferrer" title={tech}>
                                        <Icon icon={techIcons[tech].icon} width="25" height="25" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white bg-opacity-90 p-4 m-4 rounded-xl shadow-lg w-1/2">
                        <iframe title="IT job fair" width="656" height="242" src="https://app.powerbi.com/view?r=eyJrIjoiY2M2YzA4YjQtYjAzYS00YmIwLTgyMDMtOGIyYWQxMGQ1M2I3IiwidCI6IjlmMjlkOTFmLWYzM2EtNGY4NC05ZDU2LWE0NGQ4ODk0YTA0NiJ9" frameborder="0" allowFullScreen="true"></iframe>
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>Halifax IT job fair 2024</h3>
                            <p className="text-gray-700 mt-2">A visualization analyzing the companies attending the Halifax IT job fair, number of available positions and types of positions offered to help me navigate the job fair better. </p>
                            <p className='text-black font-bold text-lg mt-2'>Built with:</p>
                            <div className="flex justify-start flex-wrap mt-4"> 
                                {['Power BI'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noopener noreferrer" title={tech}>
                                        <Icon icon={techIcons[tech].icon} width="25" height="25" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    )}

                {selectedSection === 'pm' && (
                    <div className="w-3/4 mx-auto">

                        <div className="bg-white bg-opacity-90 rounded-lg p-4">
                            <p className="text-black text-center ">
                                Codeflex 2023 was a Hackaton event organized by myself and 4 other NSCC IT students,
                                which saw 10 teams of students compete to complete a series of challenges in MySQL, Python and HTML/CSS 
                                for a chance to win a $100 gift card and bragging rights that they've correctly completed approximately 30 challenges in less than 5 hours
                                with absolutely no web access!
                                The event organizing consisted of securing funding, organizing food and drinks, advertising, booking the space as well as creating, testing and setting up the environment for the challenges.
                            </p>
                            <a href='https://w0476108.wixsite.com/codeflex' target='_blank'><p className={`text-center text-xl text-red-800 font-black ${cinzel.className}`}>Visit the promo website!</p></a>
                        </div>



                        {/* Carousel */}
                        <div className="relative bg-black bg-opacity-50 rounded-lg p-4 mb-4 mt-3">
                            <div className="relative h-56 md:h-96">
                                {images.map((src, index) => (
                                    <img 
                                        key={src} 
                                        src={src} 
                                        className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-700 ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                                        alt={`Slide ${index + 1}`} 
                                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                                    />
                                ))}
                            </div>

                            {/* Carousel Nav */}
                            <div className="absolute inset-0 flex justify-between items-center">
                                <button 
                                    onClick={() => handleSlideChange(-1)}
                                    className="bg-white bg-opacity-50 rounded-full p-2 text-black"
                                    aria-label="Previous Slide"
                                    style={{ zIndex: 2 }}>
                                    &#10094; 
                                </button>
                                <button 
                                    onClick={() => handleSlideChange(1)}
                                    className="bg-white bg-opacity-50 rounded-full p-2 text-black"
                                    aria-label="Next Slide"
                                    style={{ zIndex: 2 }}>
                                    &#10095;
                                </button>
                            </div>
                        </div>

                        
                    </div>
                )}

                </div>
            </div>
        </>
    );
}
