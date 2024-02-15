import Image from 'next/image';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({weight: "400", subsets: ['latin']});
import Head from 'next/head';

export default function Experience() {
    return (
        <>
            <Head>
                <title>Experience - VS Data & Development</title>
            </Head>
            <div className="relative h-screen w-full overflow-auto bg-cover bg-center" style={{ backgroundImage: 'url(/images/webp/Banner2.webp)',backgroundAttachment: 'fixed' }}>
              
                <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col lg:flex-row ">
                    {/* Experience Image */}
                    <div className="w-full lg:w-1/3 h-1/3 flex flex-col items-center justify-center ">
                        <h1 className={`text-5xl font-bold mb-4 text-white ${cinzel.className}`}>Experience</h1>
                        <a href="/MyCV2024.pdf" download>
                            <button className={`bg-red-900 hover:bg-opacity-80 text-white font-bold text-lg py-2 px-4 rounded-md`}>
                                Download Resume
                            </button>
                        </a>
                    </div>

                    {/*Heading and Download Button */}
                    
                    <div className="w-full h-full lg:w-2/3  flex items-center justify-center opacity-90 rounded-2xl shadow-2xl overflow-auto mr-4">
                        <Image
                            src="/images/webp/Work experience IT2.webp"
                            alt="Experience"
                            layout="responsive"
                            width={1000}
                            height={700}
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
