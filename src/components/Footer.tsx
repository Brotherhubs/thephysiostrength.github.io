import React from 'react';
import Link from 'next/link';
import WhatsAppIcon from './icons/WhatsAppIcon';
import GoogleMapsIcon from './icons/GoogleMapsIcon';

// SVG Icon components for social media
// const _FacebookIcon = () => (
//   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//   </svg>
// );

// const InstagramIcon = () => (
//   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//     <path fillRule="evenodd" d="M12 2C8.74 2 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667 2.014 15.26 2 12 2zm0 4.865A5.135 5.135 0 1012 17.135 5.135 5.135 0 0012 6.865zm0 8.47A3.335 3.335 0 1112 11.8a3.335 3.335 0 010 3.535zm4.965-8.245a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" />
//   </svg>
// );

// const TwitterIcon = () => (
//     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//         <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//     </svg>
// );

export default function Footer() {
  // const socialLinks = [
  //   { name: 'Facebook', href: '#', icon: FacebookIcon },
  //   { name: 'Instagram', href: '#', icon: InstagramIcon },
  //   { name: 'Twitter', href: '#', icon: TwitterIcon },
  // ];

  const WHATSAPP_NUMBER = '919927772973'; // Replace with your actual WhatsApp number
  const WHATSAPP_MESSAGE = "Hello! I'm interested in your physiotherapy services.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const googleMapsUrl = 'https://maps.app.goo.gl/TxnCp5YUC7KGiZwP8';

  return (
    <footer className="bg-sky-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold text-white mb-4">The Physio Strength Wellness Center</h2>
            <p className="text-sm">
              Your trusted partner in recovery and wellness. We provide expert care to help you regain strength and live pain-free.
            </p>
            <br/>
            <b>Address: </b>
            <p className='normal-case text-sm'>SHOP NO.LGF-03, THE ARANYA HOTMART, PLOT NO.GH-02, SECTOR-119, NOIDA, GAUTAM BUDDHA NAGAR, UTTAR PRADESH-201301</p>
          </div>

          {/* Sitemap Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sitemap</h3>
            <ul className="space-y-2 text-sm ml-2">
              <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
              {/* <li><Link href="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li> */}
              {/* <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li> */}
              {/* <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li> */}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            {/* <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-sky-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{item.name}</span>
                  <item.icon />
                </a>
              ))}
            </div> */}
          </div>

          {/* Contact/WhatsApp */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors mt-2"
              aria-label="Open location on Google Maps"
            >
              <GoogleMapsIcon />
              Find Us on Map
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} The Physio Strength Wellness Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
