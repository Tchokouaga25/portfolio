'use client';

import { useI18n } from '@/lib/i18n-context';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useI18n();
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgrounds = [
    'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900',
    'bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900', 
    'bg-gradient-to-br from-orange-900 via-red-900 to-pink-900',
    'bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900'
  ];
  
  const images = [
    { url: "https://picsum.photos/400/400?random=1", tech: "React" },
    { url: "https://picsum.photos/400/400?random=2", tech: "Java" },
    { url: "https://picsum.photos/400/400?random=3", tech: "Spring Boot" },
    { url: "https://picsum.photos/400/400?random=4", tech: "TypeScript" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);
  return (
    <section id="accueil" className="relative overflow-hidden pt-8" style={{ minHeight: 'calc(70vh - 6rem)' }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0 transition-all duration-1000">
        <Image
          src={images[currentImage].url}
          alt="Background"
          fill
          className="object-cover"
          style={{
            filter: 'blur(5px) brightness(0.5) saturate(1.2)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 "></div>
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 z-30 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ minHeight: 'calc(85vh - 4rem)' }}>
          {/* Text content with black transparent background */}
          <div className=" transform hover:scale-105 transition-all duration-300 bg-black/40 py-4 px-4 rounded-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 text-white">
              {t('hero.welcome')} 
            </h1>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-white">
             {t('hero.iam')} <span className="text-blue-400 text-xl sm:text-2xl lg:text-3xl">{t('hero.name')}</span>
            </h1>
            <p className="text-xm sm:text-lg mb-8 text-gray-200 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4 absolute">
              <span className="px-4 py-2 bg-blue-700 text-white rounded-lg text-lg backdrop-blur-sm">Java</span>
              <span className="px-4 py-2 bg-green-600 text-white rounded-lg text-lg backdrop-blur-sm">Spring Boot</span>
              <span className="px-4 py-2 bg-purple-600 text-white rounded-lg text-lg backdrop-blur-sm">React</span>
              <span className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-lg backdrop-blur-sm">TypeScript</span>
            </div>
          </div>
          
          {/* Image carousel */}
          <div className="flex justify-center items-center relative h-full">
            <div className="relative w-full max-w-2xl h-full">
              {/* Carousel container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {images.map((image, index) => {
                  const offset = index - currentImage;
                  const isActive = index === currentImage;
                  const isNext = index === (currentImage + 1) % images.length;
                  const isNext2 = index === (currentImage + 2) % images.length;
                  
                  let translateX = 0;
                  let opacity = 0;
                  let scale = 0.8;
                  let zIndex = 0;
                  
                  if (isActive) {
                    translateX = 0;
                    opacity = 1;
                    scale = 1;
                    zIndex = 20;
                  } else if (isNext) {
                    translateX = 140;
                    opacity = 0.7;
                    scale = 0.85;
                    zIndex = 10;
                  } else if (isNext2) {
                    translateX = 280;
                    opacity = 0.4;
                    scale = 0.7;
                    zIndex = 5;
                  }
                  
                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-500 ease-in-out`}
                      style={{
                        transform: `translateX(${translateX}px) scale(${scale}) rotateY(20deg) rotateX(-20deg)`,
                        opacity: opacity,
                        zIndex: zIndex,
                        width: '450px',
                        height: '85%'
                      }}
                    >
                      <Image
                        src={image.url}
                        alt={`Project ${index + 1}`}
                        fill
                        className="object-cover rounded-sm"
                        style={{ 
                          boxShadow: isActive 
                            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 20px 25px -5px rgba(0, 0, 0, 0.4)'
                            : '0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 15px 20px -5px rgba(0, 0, 0, 0.3)',
                          filter: isActive 
                            ? 'sepia(0.2) hue-rotate(220deg) saturate(1.2) brightness(1.1)'
                            : 'sepia(0.3) hue-rotate(200deg) saturate(0.9) brightness(0.8)'
                        }}
                      />
                      {/* Tech badge */}
                      {isActive && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                          {image.tech}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 z-30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 z-30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentImage ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
