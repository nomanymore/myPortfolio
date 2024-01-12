import Image from 'next/image';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({weight: "400", subsets: ['latin']});

export default function Experience() {
    return (
        <>
            {/* Top Background Image */}
            <div className="relative h-screen w-full overflow-hidden">
                <Image
                    src="/images/BannerLong.png"
                    alt="Top Hero Background"
                    layout="fill"
                    className="object-cover object-center"
                />

                {/* Overlay Content */}
                <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col lg:flex-row bg-black bg-opacity-50">
                    {/* Left Column - Experience Image */}
                    <div className="w-full lg:w-1/3 h-1/3 flex flex-col items-center justify-center ">
                        <h1 className={`text-5xl font-bold mb-4 text-white ${cinzel.className}`}>Experience</h1>
                        <a href="/Victoria_Shmakov_Resume 2023.pdf" download>
                            <button className={`bg-white hover:bg-red-800 hover:bg-opacity-90 text-black font-bold text-lg py-2 px-4 rounded-md ${cinzel.className}`}>
                                Download Resume
                            </button>
                        </a>
                    </div>

                    {/* Right Column - Heading and Download Button */}
                    
                    <div className="w-full h-full lg:w-2/3  flex items-center justify-center opacity-90 rounded-2xl shadow-2xl overflow-auto mr-4">
                        <Image
                            src="/images/exper2023.png"
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
