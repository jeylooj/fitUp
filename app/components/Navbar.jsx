"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='mt-9'>
      <nav className=" w-full bg-primary fixed top-0 left-0 right-0 z-10 shadow-lg ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image 
                src='./images/logo.svg'
                width={100}
                height={40}
                alt='logo'
                priority={true}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="../images/close.svg" width={30} height={30} alt="logo"/>
                  ) : (
                    <Image
                      src="../images/Hamburger_icon.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className=" py-2 md:px-6 border-b-2 md:border-b-0  border-secondary">
                  <a href="/#plans" onClick={() => setNavbar(!navbar)}>
                    Plans
                  </a>
                </li>
                <li className=" py-2 md:px-6 border-b-2 md:border-b-0  border-secondary">
                  <a href="/#gallery" onClick={() => setNavbar(!navbar)}>
                    Gallery
                  </a>
                </li>
                <li className=" py-2 md:px-6 border-b-2 md:border-b-0  border-secondary">
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className=" py-2 md:px-6 border-b-2 md:border-b-0  border-secondary">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About us
                  </Link>
                </li>
                <li className=" py-2 md:px-6 border-b-2 md:border-b-0  border-secondary">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <button className='btn hidden lg:block'>Become a member</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;