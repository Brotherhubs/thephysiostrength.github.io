import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import WhatsAppIcon from './icons/WhatsAppIcon';
import PhoneIcon from './icons/PhoneIcon';

export default function Header() {
  const [isBlogMenuOpen, setBlogMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const blogMenuRef = useRef<HTMLDivElement>(null);

  const WHATSAPP_NUMBER = '919927772973';
  const PHONE_NUMBER = '919927772973';
  const WHATSAPP_MESSAGE = "Hello! I'm interested in your physiotherapy services.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const phoneUrl = `tel:${PHONE_NUMBER}`;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (blogMenuRef.current && !blogMenuRef.current.contains(event.target as Node)) {
        setBlogMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [blogMenuRef]);

  // Close mobile menu on resize to desktop to prevent it from staying open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-sky-800 text-white shadow-lg sticky top-0 z-50 relative">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-sky-200 transition-colors duration-200">
            The Physio Strength Wellness Center
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#treatment-plans" className="font-medium text-sky-100 hover:text-white transition-colors duration-200">
            Treatment Plans
          </Link>
          {/* Blog Dropdown */}
          <div className="relative" ref={blogMenuRef}>
            {/* <button
              type="button"
              onClick={() => setBlogMenuOpen(!isBlogMenuOpen)}
              className="font-medium text-sky-100 hover:text-white transition-colors duration-200 flex items-center"
              aria-haspopup="true"
              aria-expanded={isBlogMenuOpen}
            >
              Blogs
              <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isBlogMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button> */}
            {false && isBlogMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 origin-top-right">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/blog/understanding-back-pain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-800" role="menuitem">
                    Understanding Back Pain
                  </Link>
                  <Link href="/blog/sports-injury-prevention" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-800" role="menuitem">
                    Sports Injury Prevention
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-5">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="text-sky-100 hover:text-white transition-colors duration-200">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <a href={phoneUrl} aria-label="Call us" className="text-sky-100 hover:text-white transition-colors duration-200">
              <PhoneIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-sky-200 hover:text-white focus:outline-none focus:text-white"
            aria-label="toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-sky-700 shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#treatment-plans" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-sky-100 hover:text-white hover:bg-sky-600">
              Treatment Plans
            </Link>
            {/* <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-sky-100 hover:text-white hover:bg-sky-600">
              About Us
            </Link>
            <Link href="/blog/understanding-back-pain" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-sky-100 hover:text-white hover:bg-sky-600">
              Blog: Understanding Back Pain
            </Link>
            <Link href="/blog/sports-injury-prevention" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-sky-100 hover:text-white hover:bg-sky-600">
              Blog: Sports Injury Prevention
            </Link> */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-sky-100 hover:text-white hover:bg-sky-600">
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a href={phoneUrl} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-sky-100 hover:text-white hover:bg-sky-600">
              <PhoneIcon className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
