import React from 'react';

interface LocationMapProps {
  location: string;
  title?: string; // Optional title for the map section header
  mapFrameTitle?: string; // Optional title for the iframe itself (accessibility)
}

const LocationMap: React.FC<LocationMapProps> = ({ 
  location, 
  title = "Our Location",
  mapFrameTitle = "Google Map showing our location" 
}) => {
  const encodedLocation = encodeURIComponent(location);
  // Note: For production use, you would typically include an API key in the src.
  // However, per project constraints, we are omitting explicit API key handling here.
  // Basic Google Maps Embed API usage may work without a key for limited use.
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodedLocation}`;

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 tracking-tight">
              {title}
            </h2>
          </div>
        )}
        <div className="aspect-[16/9] w-full rounded-xl shadow-2xl overflow-hidden border-2 border-sky-200">
          <iframe
            title={mapFrameTitle}
            src={mapSrc}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
         <p className="mt-4 text-center text-sm text-slate-500">
          Note: Map interaction may be limited. For full map features, please visit Google Maps directly.
        </p>
      </div>
    </section>
  );
};

export default LocationMap;