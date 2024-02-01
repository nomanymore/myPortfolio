import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {

  const navigationItems = [
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Samples', href: '/samples' },
    { name: 'Contact', href: '/contact' }
  ];

  return (

    
    <>
      {/* Top Background Image */}
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/webp/Banner.webp"
          alt="Top Hero Background"
          layout="fill"
          className="object-cover object-center"
        />
        
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          {/* Image Above the Title */}
          <div className="mb-4">
            <Image
              src="/images/webp/Profile.webp"
              alt="photo of me"
              width={150}
              height={84.38}
              className="rounded-xl border-white border-2 opacity-90 z-10"
            />
          </div>
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Victoria Shmakov</h1>
            <p className="text-xl">Development and Data</p>
          </div>
        </div>
      </div>

      {/* Bottom Banner Image */}
      <div className="relative h-48 w-full overflow-auto">
        <Image
          src="/images/webp/BannerBottom.webp"
          alt="Bottom Hero Background"
          layout="fill"
          className="object-cover object-center"
        />

        {/* Navigation Images */}
        <div className="absolute inset-0 flex justify-around  items-center p-4 z-20 overflow-hidden">
        {navigationItems.map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <div className="sm:w-28 md:w-32 lg:w-48 p-2 relative cursor-pointer group">
              <Image
                src={`/images/webp/${item.name}.webp`}
                alt={item.name}
                layout="responsive"
                width={100}
                height={100}
                className="rounded-xl transition duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-white bg-opacity-10 transition duration-300"></div>

              {/* Text Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-1 rounded-b-xl text-center  overflow-hidden">
                <span className="text-white text-sm font-bold">{item.name}</span>
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </>
  );
}
