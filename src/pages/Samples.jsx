import Image from 'next/image';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({weight: "400", subsets: ['latin']});
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Experience() {
    // State to track which section is selected
    const [selectedSection, setSelectedSection] = useState(null);

    const techIcons = {
        'React': { icon:'skill-icons:react-dark', url:'https://react.dev/' },
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

    let Tech = ['React','Next.js', 'php', 'Tailwind CSS', 'MongoDB', 'Python', 'HTML', 'CSS', 'JavaScript', 'Java', 'C#', 'MySQL', 'Vercel', 'Power BI', 'Tableau', 'SASS', 'WordPress', 'Docker', 'ASP.NET' ]

    return (
        <>
            {/* Top Background Image with Title and Buttons */}
            <div className="relative h-screen w-full overflow-auto bg-cover bg-center" style={{ backgroundImage: 'url(/images/Banner2.png)',backgroundAttachment: 'fixed' }}>
                {/* Overlay Container for Title and Buttons */}
                <div className="absolute inset-0 z-20 flex flex-col">
                    {/* Title at the top 1/4 of the screen */}
                    <div className="flex flex-col items-center justify-start pt-8 h-1/4">
                        <h1 className={`text-5xl font-bold text-white ${cinzel.className}`}>Samples</h1>
                    </div>

                    {/* Buttons right below the title */}
                    <div className="flex-grow flex items-start justify-center space-x-4">
                        <button onClick={() => setSelectedSection('web')} className="ml-2 uppercase text-sm font-bold tracking-wide bg-red-900 hover:bg-opacity-80 text-gray-100 p-3 rounded-lg w-1/4 focus:outline-none focus:shadow-outline">
                            Web
                        </button>
                        <button onClick={() => setSelectedSection('data')} className="uppercase text-sm font-bold tracking-wide bg-red-900 hover:bg-opacity-80 text-gray-100 p-3 rounded-lg w-1/4 focus:outline-none focus:shadow-outline">
                            Data
                        </button>
                        <button onClick={() => setSelectedSection('pm')} className="ml-2 uppercase text-sm font-bold tracking-wide bg-red-900 hover:bg-opacity-80 text-gray-100 p-3 rounded-lg w-1/4 focus:outline-none focus:shadow-outline">
                            Project Management
                        </button>
                    </div>
                </div>

                    {/* Section Content */}
                <div className="absolute top-1/4 w-full z-10 p-4 mt-20">
                    {selectedSection === 'web' && (
                        <div className="flex flex-wrap -mx-2">
                            {/* First Project Card */}
                            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                                <div className="bg-white bg-opacity-90 rounded-2xl p-8">
                                    <div className="flex flex-row items-center">
                                        <div className="w-1/2">
                                            <img className="rounded-md" src="/images/TechRoster.png" alt="Project Image"  />
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <div className={`font-black text-xl text-red-800 mb-2 ${cinzel.className}`}>Technology Roster</div>
                                            <p className="text-gray-700 text-base">
                                                A simple full stack app built with Next.js, Tailwind CSS, and MongoDB, pulling technology and course info form an API.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <div className="font-bold text-xl mb-2">Built with:</div>
                                        {['React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                                        <a key={tech} href={techIcons[tech].url} className="inline-block bg-gray-200 rounded-full p-2 hover:bg-gray-700 hover:bg-opacity-90 hover:cursor-pointer  " target="_blank" rel="noopener noreferrer" title={tech}>
                                            <Icon icon={techIcons[tech].icon} width="24" height="24" />
                                        </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                                <div className="bg-white bg-opacity-90 rounded-2xl shadow-main p-8">
                                    <div className="flex flex-row items-center">
                                        <div className="w-1/2">
                                            <Image className="rounded-md" src="/images/TechRoster.png" width="150" height="75" alt="Project Image" />
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <div className={`font-black text-xl text-red-800 mb-2 ${cinzel.className}`}>Project Name</div>
                                            <p className="text-gray-700 text-base">
                                                Brief description here.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <div className="font-bold text-xl mb-2">Built with:</div>
                                        {['React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                                            <a key={tech} href={techIcons[tech].url} className="inline-block bg-gray-200 rounded-full p-2 mr-2 mb-2 hover:bg-gray-700 hover:bg-opacity-90" target="_blank" rel="noopener noreferrer" title={tech}>
                                                <Icon icon={techIcons[tech].icon} width="24" height="24" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                                <div className="bg-white bg-opacity-90 rounded-2xl shadow-main p-8">
                                    <div className="flex flex-row items-center">
                                        <div className="w-1/2">
                                            <Image className="rounded-md" src="/images/TechRoster.png" width="150" height="75" alt="Project Image" />
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <div className={`font-black text-xl text-red-800 mb-2 ${cinzel.className}`}>Project Name</div>
                                            <p className="text-gray-700 text-base">
                                                Brief description here.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <div className="font-bold text-xl mb-2">Built with:</div>
                                        {['React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                                            <a key={tech} href={techIcons[tech].url} className="inline-block bg-gray-200 rounded-full p-2 mr-2 mb-2 hover:bg-gray-700 hover:bg-opacity-90" target="_blank" rel="noopener noreferrer" title={tech}>
                                                <Icon icon={techIcons[tech].icon} width="24" height="24" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>                    



                        </div>
                    )}

                        
                    {selectedSection === 'data' && (
                     <div className="bg-white bg-opacity-90 rounded-2xl shadow-main p-8 md:px-12 shadow-2xl max-w-sm max-h-screen">
                     <Image className="rounded-md border-4 border-black border-opacity-80" src="/images/TechRoster.png" width="300" height="150" alt="Sunset in the mountains"
                     />
                     <div className="px-6 py-4">
                       <div className={`font-black text-xl text-red-800 mb-2 ${cinzel.className}`}>Technology Roster</div>
                       <p className="text-gray-700 text-base">
                         Simple Full-Stack web app, using MongoDB API to retrieve and display a technology stack and show the courses in which they are required.
                       </p>
                     </div>
                     <div className="px-6 pt-4 pb-2">
                     <div className="font-bold text-xl mb-2">Built with:</div>
                     {['Tailwind CSS', 'Next.js', 'Docker', 'MongoDB'].map((tech) => (
                              <a key={tech} href={techIcons[tech].url} className="inline-block bg-gray-200 rounded-full p-2 mr-2 mb-2 hover:bg-gray-700 hover:bg-opacity-90" target="_blank" rel="noopener noreferrer" title={tech}>
                                  <Icon icon={techIcons[tech].icon} width="24" height="24" />
                              </a>
                          ))}
                       </div>
                      
                     </div>
                    )}
                    {selectedSection === 'pm' && (
                     <div className="bg-white bg-opacity-90 rounded-2xl shadow-main p-8 md:px-12 shadow-2xl max-w-sm max-h-screen">
                     <Image className="rounded-md border-4 border-black border-opacity-80" src="/images/TechRoster.png" width="300" height="150" alt="Sunset in the mountains"
                     />
                     <div className="px-6 py-4">
                       <div className={`font-black text-xl text-red-800 mb-2 ${cinzel.className}`}>Technology Roster</div>
                       <p className="text-gray-700 text-base">
                         Simple Full-Stack web app, using MongoDB API to retrieve and display a technology stack and show the courses in which they are required.
                       </p>
                     </div>
                     <div className="px-6 pt-4 pb-2">
                     <div className="font-bold text-xl mb-2">Built with:</div>
                     {['Tailwind CSS', 'Next.js', 'Docker', 'MongoDB'].map((tech) => (
                              <a key={tech} href={techIcons[tech].url} className="inline-block bg-gray-200 rounded-full p-2 mr-2 mb-2 hover:bg-gray-700 hover:bg-opacity-90" target="_blank" rel="noopener noreferrer" title={tech}>
                                  <Icon icon={techIcons[tech].icon} width="24" height="24" />
                              </a>
                          ))}
                       </div>
                     </div>
                    )}
                </div>
            </div>

        </>
    );
}
