import Link from 'next/link';
import React, { useState } from 'react';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({weight: "400", subsets: ['latin']});
import { Icon } from '@iconify/react';


export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 z-50">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" passHref>
              <img src="/logoicon.ico" alt="Logo" className="h-14 cursor-pointer" />
            </Link>
          </div>

          {/* Navigation Menu for Larger Screens */}
          <div className={`hidden md:flex flex-grow items-center justify-end ${showSearch ? 'hidden' : 'flex'}`}>
            <div className="space-x-4">
              <Link href="/about" passHref><span className={`hover:text-red-500 cursor-pointer font-semibold ${cinzel.className}`}>About</span></Link>
              <Link href="/experience" passHref><span className={`hover:text-red-500 cursor-pointer font-semibold ${cinzel.className}`}>Experience</span></Link>
              <Link href="/samples" passHref><span className={`hover:text-red-500 cursor-pointer font-semibold ${cinzel.className}`}>Samples</span></Link>
              <Link href="/contact" passHref><span className={`hover:text-red-500 cursor-pointer font-semibold ${cinzel.className}`}>Contact</span></Link>
            </div>
          </div>

          <div className="flex items-center">
            {/* Search Icon and Input */}
            {!showSearch ? (
              <button onClick={toggleSearch} className="ml-3">
                <Icon icon="mdi:magnify" width="24" height="24" />
              </button>
            ) : (
              <>
                <input
                  autoFocus
                  type="text"
                  placeholder="Search"
                  className={`px-2 py-1 rounded-full border-2 border-white ml-3 bg-transparent outline-none focus:border-red-700 focus:pl-10 focus:pr-4 text-white font-semibold transition-all duration-1000 ${cinzel.className}`}
                  style={{ width: '150px' }}
                />
                <button onClick={toggleSearch} className="ml-2">
                  <Icon icon="mdi:close" width="24" height="24" />
                </button>
              </>
            )}

            {/* Hamburger Icon */}
            <div className="md:hidden ml-3">
              <button onClick={toggleMenu}>
                <Icon icon="mdi:menu" width="24" height="24" />
              </button>
            </div>
          </div>
        </div>


        {/* Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <div className="bg-white bg-opacity-10 rounded-b-xl rounded-t-xl p-4 flex flex-col items-center md:hidden hover:bg-opacity-10 hover:bg-red-500">
            <Link href="/about" passHref><span className={`hover:text-red-500 cursor-pointer font-semibold ${cinzel.className}`}>About</span></Link>
            <Link href="/experience" passHref><span className={`hover:text-red-500 cursor-pointer font-semibold ${cinzel.className}`}>Experience</span></Link>
            <Link href="/samples" passHref><span className={`hover:text-red-500 cursor-pointer font-semibold ${cinzel.className}`}>Samples</span></Link>
            <Link href="/contact" passHref><span className={`hover:text-red-500 cursor-pointer font-semibold ${cinzel.className}`}>Contact</span></Link>
          </div>
        )}
      </nav>

      <main>{children}</main>

 {/* Footer */}
 <footer className="bg-black text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          {/* Copyright */}
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} VS Development and Data. All rights reserved.</p>

          {/* Social Icons */}
          <div>
            <a href="https://www.linkedin.com/in/victoria-shmakov-8a194424b/" target="_blank" rel="noopener noreferrer" className="inline-block ml-2">
              <Icon icon="mdi:linkedin" width="36" height="36" /> 
            </a>
            <a href="https://github.com/nomanymore" target="_blank" rel="noopener noreferrer" className="inline-block ml-2">
              <Icon icon="raphael:github" width="36" height="36" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
