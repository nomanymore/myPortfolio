import Image from 'next/image';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({weight: "400", subsets: ['latin']});

export default function Experience() {
    return (
        <>
            <div className="relative h-screen w-full overflow-auto bg-cover bg-center" style={{ backgroundImage: 'url(/images/Banner2.png)', backgroundAttachment: 'fixed' }}>
               <div className="relative top-0 left-0 right-0 bottom-0 z-10 flex flex-col lg:flex-row">
                    {/* About Me and Headshot */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/3 p-4">
                        <h1 className={`text-5xl font-bold text-white ${cinzel.className}`}>About Me</h1>
                        <div className="w-full max-w-xs lg:max-w-none mb-4 sm:mb-0"> 
                            <Image
                                src="/images/headshot.png"
                                alt="portrait photo of me"
                                width={250}
                                height={100}
                                className='ml-10'                         
                            />
                        </div>
                    </div>
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 p-4">
                        <div className="bg-gray-800 bg-opacity-90 p-8 md:px-12 rounded-2xl shadow-2xl">
                            <div className="text-white space-y-4"> 
                            <p className={`font-semibold text-md mb-4 ${cinzel.className}`}>
                            As a Junior Full Stack Web Developer with a keen interest in front-end development, I bring both a professional skill set and a friendly, collaborative approach to my work. I hold an Associate's Degree in Computer Science from the University of the People, along with a Diploma in IT - Web Programming from NSCC, Truro.<br/>
                            </p>
                            <p className={`font-semibold text-md mb-4 ${cinzel.className}`}>
                            My academic and professional journey has been rich and varied, allowing me to develop a comprehensive skill set in various web technologies. These include JavaScript, Next.js, Python, a range of CSS frameworks, PHP, and ASP.NET. Beyond these, I have a growing passion for Data Analysis, a field where I continually expand my knowledge in areas like MySQL, MongoDB, and visualization tools such as Tableau and Power BI, often exploring these areas in my personal time.<br/>
                            </p>
                            <p className={`font-semibold text-md ${cinzel.className}`}>
                            I'm currently open to exploring opportunities in roles related to Quality Assurance, Data Analytics, Front-End Web Development, or any related field. My goal is to join a team where I can contribute positively and continue to grow, both as a professional and as a part of a dynamic work community.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:flex-col lg:w-1/4 flex flex-col items-center mr-4 ">                   
                        <div className="flex flex-col items-center gap-3 px-8 my-4 py-10 bg-white bg-opacity-90 rounded-2xl shadow-main hover:bg-opacity-50">
                            <a href="https://www.uopeople.edu/programs/online-associates/computer-science/" target='_blank'>
                                <Image
                                    src="/images/UoPeople.png"
                                    alt="UoPeople logo"
                                    width={200}
                                    height={100}
                                />
                            </a>
                        </div>
                        <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white bg-opacity-90 rounded-2xl shadow-main mb-4 hover:bg-opacity-50">
                            <a href="https://www.nscc.ca/programs-and-courses/programs/plandescr.aspx?prg=ITWP&pln=ITWEBPRO" target='_blank'>
                            <Image
                                src="/images/nscc.jpg"
                                alt="nscc logo"
                                width={200}
                                height={100} 
                            />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
