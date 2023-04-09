import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from "next/link";
export default function Footer() {
  return (
    <section className="bg-secondary text-white ">
        <div className="max-w-screen-xl px-4 py-12 mx-auto overflow-hidden sm:px-6 lg:px-8 ">
            <nav className="flex md:flex-row flex-col items-center justify-center ">
                <div className="px-5 py-2">
                    <a href="#plans" className="text-base leading-6 hover:text-primary">
                        Plans
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#gallery" className="text-base leading-6 hover:text-primary">
                        Gallery
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="/blog" className="text-base leading-6 hover:text-primary">
                        Blog
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="/about" className="text-base leading-6 hover:text-primary">
                        About us
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="/contact" className="text-base leading-6 hover:text-primary">
                        Contact
                    </a>
                </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
            
              <a href='/#' className="hover:text-primary">
              <FaFacebook className="w-6 h-6"></FaFacebook>
              </a>
          
              <a href='/#' className="hover:text-primary">
              <FaInstagram className="w-6 h-6"></FaInstagram>
              </a>
          
              <a href='/#' className="hover:text-primary">
              <FaTwitter className="w-6 h-6"></FaTwitter>
              </a>
          
              <a href='/#' className="hover:text-primary">
              <FaYoutube className="w-6 h-6"></FaYoutube>
              </a>         
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">
                © 2023 FITUP, Inc. All rights reserved.
            </p>
        </div>
    </section>
  );
}