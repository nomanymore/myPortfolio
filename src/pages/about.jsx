import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({weight: "400", subsets: ['latin']});

export default function About() {
    return (
        <>
            <Head>
                <title>About - VS Data & Development</title>
            </Head>

            {/* Flex container for the whole screen */}
            <div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden bg-black">

            {/* Left side - Image container */}
            <div className="w-full h-full md:w-screen md:h-full">
                    <div className="w-full h-full">
                        <Image
                            src="/images/headshot.JPG"
                            alt="Profile Background"
                            layout="responsive"
                            objectFit="cover"
                            className="rounded-2xl"
                            width={500}
                            height={750} 
                        />
                    </div>
                </div>

                {/* Right half for the text and logos */}
                <div className="w-full md:w-screen flex flex-col justify-between bg-gray-800 bg-opacity-90 p-8 rounded-b-2xl md:rounded-2xl overflow-auto">
                    {/* Text container */}
                    <div className="text-white space-y-4">
                        <h1 className={`text-5xl font-bold mb-3 underline ${cinzel.className}`}>About me</h1>
                        <p className={`font-semibold text-lg mb-4 ${cinzel.className}`}>
                        As a Junior Full Stack Web Developer with a keen interest in front-end development, I bring both a professional skill set and a friendly, collaborative approach to my work. I hold an Associate's Degree in Computer Science from the University of the People, along with a Diploma in IT - Web Programming from NSCC, Truro.<br/>
                        </p>
                        <p className={`font-semibold text-lg mb-4 ${cinzel.className}`}>
                        My academic and professional journey has been rich and varied, allowing me to develop a comprehensive skill set in various web technologies. These include JavaScript, Next.js, Python, a range of CSS frameworks, PHP, and ASP.NET. Beyond these, I have a growing passion for Data Analysis, a field where I continually expand my knowledge in areas like MySQL, MongoDB, and visualization tools such as Tableau and Power BI, often exploring these areas in my personal time.<br/>
                        </p>
                        <p className={`font-semibold text-lg ${cinzel.className}`}>
                        I'm currently open to exploring opportunities in roles related to Quality Assurance, Data Analytics, Front-End Web Development, or any related field. My goal is to join a team where I can contribute positively and continue to grow, both as a professional and as a part of a dynamic work community.
                        </p>
                    </div>

                    {/* Logos at the bottom */}
                    <div className="mt-4 flex justify-end space-x-4">
                        <Link href="https://www.uopeople.edu/programs/online-associates/computer-science/" target="_blank" passHref>
                            <div className="w-36 h-24">
                                <Image
                                    src="/images/UoPeople.png"
                                    alt="University of the People logo"
                                    width={200}
                                    height={100}
                                    className="rounded-xl"
                                />
                            </div>
                        </Link>
                        <Link href="https://www.nscc.ca/programs-and-courses/programs/plandescr.aspx?prg=ITWP&pln=ITWEBPRO" target="_blank" passHref>
                            <div className="w-36 h-24">
                                <Image
                                    src="/images/nscc.jpg"
                                    alt="NSCC logo"
                                    width={200}
                                    height={100}
                                    className="rounded-xl"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div> 
        </>
    );
}
