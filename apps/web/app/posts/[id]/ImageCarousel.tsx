'use client';

import { urlFor } from '@/lib/sanityImage';
import Image from 'next/image';
import { useState } from 'react';

interface ImageCarouselProps {
  images: any[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="mb-10">
      {/* Single image or carousel */}
      {images.length === 1 ? (
        // Single image - no carousel
        <div className="max-w-3xl mx-auto relative w-full flex items-center justify-center">
          <Image
            src={urlFor(currentImage).quality(95).fit('max').url()}
            alt={`${title} - Mynd 1`}
            width={2400}
            height={2400}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
          />
        </div>
      ) : (
        // Multiple images - with carousel
        <div className="max-w-3xl mx-auto relative">
          <div className="relative w-full flex items-center justify-center">
            {images.map((image, index) => (
              <div
                key={image._key}
                className={`transition-opacity duration-500 ease-in-out flex items-center justify-center w-full ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <Image
                  src={urlFor(image).quality(95).fit('max').url()}
                  alt={`${title} - Mynd ${index + 1}`}
                  width={2400}
                  height={2400}
                  className="w-full h-auto"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Fyrri mynd"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Næsta mynd"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
