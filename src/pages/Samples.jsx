import Image from 'next/image';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({weight: "400", subsets: ['latin']});
import { Icon } from '@iconify/react';
import { useState } from 'react';

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
            <div className="relative h-screen w-full bg-cover bg-center overflow-auto" style={{ backgroundImage: 'url(/images/webp/Banner2.webp)', backgroundAttachment: 'fixed' }}>
                
                <div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center justify-center pt-8">
                    <h1 className={`text-5xl font-bold text-white mb-10 ${cinzel.className}`}>Samples</h1>
                        <div className="flex-grow flex items-start justify-center space-x-4">
                        <button
                            onClick={() => setSelectedSection('web')} 
                            className={`uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-1/4 focus:outline-none focus:shadow-outline 
                                        ${selectedSection === 'web' ? 'bg-white text-red-900' : 'bg-red-900 hover:bg-opacity-80 text-gray-100'}`}>
                            Web
                        </button>
                        <button
                            onClick={() => setSelectedSection('data')} 
                            className={`uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-1/4 focus:outline-none focus:shadow-outline 
                                        ${selectedSection === 'data' ? 'bg-white text-red-900' : 'bg-red-900 hover:bg-opacity-80 text-gray-100'}`}>
                            Data
                        </button>
                        <button
                            onClick={() => setSelectedSection('pm')} 
                            className={` uppercase text-sm font-bold tracking-wide p-3 mb-3 rounded-lg w-1/2 focus:outline-none focus:shadow-outline 
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
                            <img src="/images/TechRoster.png" alt="Project" className="w-full h-40 object-cover rounded border-2 border-gray-600" />
                            <h3 className={`text-2xl font-black text-red-800 mt-2 ${cinzel.className}`}>Tech Roster</h3>
                            <p className="text-gray-700 mt-2">A simple full stack app built with Next.js, Tailwind CSS, and MongoDB, pulling technology and course info form an API.</p>
                            <div className="flex justify-start flex-wrap mt-4">
                                {['Docker', 'Next.js', 'Tailwind CSS'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noreferrer">
                                        <Icon icon={techIcons[tech].icon} width="20" height="20" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 m-4 rounded-xl shadow-lg w-80 ">
                            <img src="/images/TechRoster.png" alt="Project" className="w-full h-40 object-cover rounded" />
                            <h3 className="text-2xl font-bold mt-2">Project Name</h3>
                            <p className="text-gray-700 mt-2">Project description goes here.</p>
                            <div className="flex justify-start flex-wrap mt-4">
                                {['React', 'Next.js', 'Tailwind CSS'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noreferrer">
                                        <Icon icon={techIcons[tech].icon} width="20" height="20" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-6 m-4 rounded-xl shadow-lg w-80 ">
                            <img src="/images/TechRoster.png" alt="Project" className="w-full h-40 object-cover rounded" />
                            <h3 className="text-2xl font-bold mt-2">Project Name</h3>
                            <p className="text-gray-700 mt-2">Project description goes here.</p>
                            <div className="flex justify-start flex-wrap mt-4">
                                {['React', 'Next.js', 'Tailwind CSS'].map((tech, index) => (
                                    <a key={index} href={techIcons[tech].url} className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-1 text-sm" target="_blank" rel="noreferrer">
                                        <Icon icon={techIcons[tech].icon} width="20" height="20" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {selectedSection === 'data' && (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Data Section</h2>
                        <p>Content for Data section will go here.</p>
                    </div>
                )}

                {selectedSection === 'pm' && (
                    <div className="w-3/4 mx-auto">

                        <div className="bg-white bg-opacity-60 rounded-lg p-4">
                            <p className="text-black text-center font-bold">
                                Codeflex 2023 was a Hackaton event organized by myself and 4 other NSCC IT students,
                                which saw 10 teams of students compete to complete a series of challenges in MySQL, Python and HTML/CSS 
                                for a chance to win a $100 gift card and bragging rights that they've correctly completed approximately 30 challenges in less than 5 hours
                                with absolutely no web access!
                                The event organizing consisted of securing funding, organizing food and drinks, advertising, booking the space as well as creating, testing and setting up the environment for the challenges.
                            </p>
                        </div>



                        {/* Carousel */}
                        <div className="relative bg-black bg-opacity-50 rounded-lg p-4 mb-4 mt-3">
                            <div className="relative h-56 md:h-96">
                                {/* Images */}
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

                        {/* Explanation text */}
                        
                    </div>
                )}

                </div>
            </div>
        </>
    );
}