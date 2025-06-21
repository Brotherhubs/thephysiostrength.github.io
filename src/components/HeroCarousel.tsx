import React, { useState, useEffect, useCallback } from 'react';
import { HeroSlideData } from '../types';
import Image from 'next/image';

interface HeroCarouselProps {
  slides: HeroSlideData[];
  autoplayInterval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides, autoplayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return; // No autoplay if 1 or 0 slides

    const timer = setInterval(goToNextSlide, autoplayInterval);
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [goToNextSlide, autoplayInterval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!slides || slides.length === 0) {
    return null; // Don't render anything if there are no slides
  }

  return (
    <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[80vh] overflow-hidden shadow-lg">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
              aria-hidden={slide.id !== slides[currentIndex].id}
            />
            <div className="absolute inset-0 bg-sky-900/60 flex flex-col justify-center items-center text-center p-4 sm:p-8">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-white text-base sm:text-lg md:text-xl max-w-md md:max-w-2xl drop-shadow-sm">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300
                ${currentIndex === index ? 'bg-sky-400 scale-125' : 'bg-sky-400/50 hover:bg-sky-400/75'}`}
            />
          ))}
        </div>
      )}
       {/* Screen reader announcements for slide changes */}
       {slides.length > 0 && (
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {currentIndex + 1} of {slides.length}: {slides[currentIndex].title}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
