'use client';

import { useI18n } from '@/lib/i18n-context';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useI18n();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { url: "https://picsum.photos/400/400?random=1", tech: "React" },
    { url: "https://picsum.photos/400/400?random=2", tech: "Java" },
    { url: "https://picsum.photos/400/400?random=3", tech: "Spring Boot" },
    { url: "https://picsum.photos/400/400?random=4", tech: "TypeScript" },
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const techBadges = [
    { label: 'Java',        bg: 'bg-orange-500/20 border-orange-500/30 text-orange-300' },
    { label: 'Spring Boot', bg: 'bg-green-500/20  border-green-500/30  text-green-300'  },
    { label: 'React',       bg: 'bg-blue-500/20   border-blue-500/30   text-blue-300'   },
    { label: 'TypeScript',  bg: 'bg-cyan-500/20   border-cyan-500/30   text-cyan-300'   },
  ];

  return (
    <section id="accueil" className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 4rem)' }}>

      {/* Background image floutée */}
      <div className="absolute inset-0 z-0 transition-all duration-1000">
        <Image
          src={images[currentImage].url}
          alt="Background"
          fill
          className="object-cover"
          style={{
            filter: 'blur(6px) brightness(0.25) saturate(0.8)',
            transform: 'scale(1.1)',
          }}
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#06080f]/80 via-[#0c1222]/60 to-[#1e1b4b]/50" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#06080f]/60 via-transparent to-[#06080f]/40" />

      {/* Décoration lumineuse */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl z-10 dot-float-1" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl z-10 dot-float-2" />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          style={{ minHeight: 'calc(100vh - 5rem)' }}
        >
          {/* Contenu texte */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 glow-pulse inline-block" />
              Full-Stack Developer
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-white leading-tight">
              {t('hero.welcome')}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5 text-slate-300">
              {t('hero.iam')}{' '}
              <span className="gradient-text">{t('hero.name')}</span>
            </h2>
            <p className="text-sm sm:text-base mb-8 text-slate-400 leading-relaxed max-w-lg">
              {t('hero.description')}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {techBadges.map(({ label, bg }) => (
                <span
                  key={label}
                  className={`px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-sm ${bg}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Carrousel d'images */}
          <div className="flex justify-center items-center relative h-[420px] sm:h-[480px] animate-fade-in-up-d2">
            <div className="relative w-full max-w-2xl h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                {images.map((image, index) => {
                  const isActive = index === currentImage;
                  const isNext  = index === (currentImage + 1) % images.length;
                  const isNext2 = index === (currentImage + 2) % images.length;

                  let translateX = 0, opacity = 0, scale = 0.75, zIndex = 0;
                  if (isActive)      { translateX = 0;   opacity = 1;   scale = 1;    zIndex = 20; }
                  else if (isNext)   { translateX = 130; opacity = 0.65; scale = 0.82; zIndex = 10; }
                  else if (isNext2)  { translateX = 250; opacity = 0.35; scale = 0.68; zIndex = 5;  }

                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-500 ease-in-out"
                      style={{
                        transform: `translateX(${translateX}px) scale(${scale}) rotateY(18deg) rotateX(-15deg)`,
                        opacity,
                        zIndex,
                        width: '320px',
                        height: '80%',
                      }}
                    >
                      <Image
                        src={image.url}
                        alt={`Project ${index + 1}`}
                        fill
                        className="object-cover rounded-xl"
                        style={{
                          boxShadow: isActive
                            ? '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(59,130,246,0.2)'
                            : '0 20px 40px rgba(0,0,0,0.4)',
                          filter: isActive
                            ? 'brightness(1.05) saturate(1.1)'
                            : 'brightness(0.7) saturate(0.8)',
                        }}
                      />
                      {isActive && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
                          {image.tech}
                        </div>
                      )}
                      {/* Bordure lumineuse sur la carte active */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl ring-1 ring-blue-500/30 pointer-events-none" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Boutons de navigation */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white rounded-full flex items-center justify-center transition-all duration-200 z-30 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white rounded-full flex items-center justify-center transition-all duration-200 z-30 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicateurs */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? 'w-5 h-2 bg-blue-400'
                        : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dégradé de bas pour transition douce */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06080f] to-transparent z-20" />
    </section>
  );
}
