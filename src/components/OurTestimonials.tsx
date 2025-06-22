import React, { useState, useCallback } from 'react';
import { Testimonial } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import StarRating from './StarRating';
import Image from 'next/image';
import nextConfig from '../../next.config';

interface OurTestimonialsProps {
  testimonials: Testimonial[];
}

const OurTestimonials: React.FC<OurTestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 md:py-16 bg-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
            Hear From Our Happy Patients
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            {`Real stories from people who've experienced our care.`}
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 min-h-[300px] md:min-h-[280px] flex flex-col items-center text-center">
            <Image
              width={120}
              height={120}
              src={nextConfig.basePath + currentTestimonial.imageUrl}
              alt={`Photo of ${currentTestimonial.name}`}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4 border-4 border-sky-200 shadow-md"
            />
            <h3 className="text-xl font-semibold text-slate-800">
              {currentTestimonial.name}
            </h3>
            {currentTestimonial.location && (
              <p className="text-sm text-slate-500 mb-1">{currentTestimonial.location}</p>
            )}
            {currentTestimonial.rating && (
              <div className="my-2">
                <StarRating rating={currentTestimonial.rating} />
              </div>
            )}
            <blockquote className="mt-3 flex-grow">
              <p className="text-base text-slate-700 leading-relaxed italic">
                {`"${currentTestimonial.testimonial}"`}
              </p>
            </blockquote>
          </div>

          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute top-1/2 left-0 sm:-left-4 transform -translate-y-1/2 bg-white text-sky-600 hover:bg-sky-100 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute top-1/2 right-0 sm:-right-4 transform -translate-y-1/2 bg-white text-sky-600 hover:bg-sky-100 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors z-10"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </>
          )}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {`Testimonial ${currentIndex + 1} of ${testimonials.length}: ${currentTestimonial.name} says, "${currentTestimonial.testimonial}"`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTestimonials;
