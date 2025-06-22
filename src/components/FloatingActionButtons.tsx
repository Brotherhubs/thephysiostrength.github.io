
import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import GoogleMapsIcon from './icons/GoogleMapsIcon'

const FloatingActionButtons: React.FC = () => {
  const WHATSAPP_NUMBER = '919927772973';
  const WHATSAPP_MESSAGE = "Hello! I'm interested in your physiotherapy services.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const googleMapsUrl = 'https://maps.app.goo.gl/TxnCp5YUC7KGiZwP8';

  return (
    <>
      {/* Google Maps Button - Bottom Left */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Find us on Google Maps"
        className="fixed bottom-5 left-5 z-50 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
      >
        <GoogleMapsIcon className="w-7 h-7" />
      </a>

      {/* WhatsApp Button - Bottom Right */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </>
  );
};

export default FloatingActionButtons;