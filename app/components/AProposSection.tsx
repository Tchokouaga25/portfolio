'use client';

import { useState } from 'react';

export default function AProposSection() {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const rotateCarousel = (direction: string) => {
    if (direction === 'left') {
      setCurrentCarouselIndex((prev) => (prev - 1 + 5) % 5);
    } else {
      setCurrentCarouselIndex((prev) => (prev + 1) % 5);
    }
  };

  const projects = [
    { title: "E-Commerce Platform", tech: "Spring Boot & React", color: "from-blue-400 to-blue-600", icon: "shopping-cart" },
    { title: "Mobile App", tech: "React Native", color: "from-green-400 to-green-600", icon: "smartphone" },
    { title: "API REST", tech: "Node.js & MongoDB", color: "from-purple-400 to-purple-600", icon: "server" },
    { title: "Dashboard", tech: "Vue.js", color: "from-orange-400 to-orange-600", icon: "chart-bar" },
    { title: "SaaS Platform", tech: "Laravel & Vue", color: "from-red-400 to-red-600", icon: "cloud" }
  ];

  return (
    <section id="apropos" className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">À Propos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mon Parcours</h3>
            
            <p className="text-sm sm:text-base mb-8 text-gray-600 leading-relaxed">
              Développeur Full‑stack passionné, je transforme des idées en solutions numériques performantes et évolutives. 
              Mon expertise couvre Java/Spring Boot et Laravel pour des backends robustes, ainsi que React, Tailwind CSS et WordPress 
              pour des interfaces modernes et intuitives. 
              J'intègre l'IA générative dans mon processus afin d'optimiser la productivité et d'apporter une valeur ajoutée à chaque projet. 
              Disponible pour relever de nouveaux défis, je m'engage à créer des expériences utilisateur remarquables, 
              alliant fiabilité, créativité et excellence technique.
            </p>

          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Carrousel en éventail */}
              <div className="relative h-80 perspective-1000">
                {projects.map((project, index) => {
                  // Calculer la position de chaque image
                  const position = (index - currentCarouselIndex + 5) % 5;
                  let transform = '';
                  let zIndex = 10;
                  let opacity = 0.6;
                  let scale = 0.8;
                  let width = 'w-32';
                  let height = 'h-48';
                  
                  if (position === 0) {
                    // Image centrale (active)
                    transform = 'scale(1.1)';
                    zIndex = 30;
                    opacity = 1;
                    scale = 1;
                    width = 'w-48';
                    height = 'h-64';
                  } else if (position === 1 || position === 4) {
                    // Images de côté
                    const side = position === 1 ? 1 : -1;
                    transform = `translateX(${side * 128}px) rotateY(${side * 12}deg)`;
                    zIndex = 20;
                    opacity = 0.8;
                    scale = 0.9;
                    width = 'w-40';
                    height = 'h-56';
                  } else {
                    // Images arrière
                    const side = position === 2 ? 1 : -1;
                    transform = `translateX(${side * 192}px) rotateY(${side * 24}deg)`;
                    zIndex = 10;
                    opacity = 0.6;
                    scale = 0.75;
                    width = 'w-32';
                    height = 'h-48';
                  }
                  
                  return (
                    <div
                      key={index}
                      className="absolute inset-0 flex items-center justify-center carousel-item"
                      style={{
                        transform,
                        zIndex,
                        opacity,
                      }}
                    >
                      <div className={`${width} ${height} rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${position === 0 ? 'ring-4 ring-blue-400' : ''}`}>
                        <div className="relative w-full h-full">
                          <img 
                            src={`https://images.unsplash.com/photo-${index === 0 ? '1460925895917-afdab827c52f' : index === 1 ? '1559028006-08167a9e9d62' : index === 2 ? '1563013544-824ae1b704d3' : index === 3 ? '1551288045-608f1bb86b2' : '1579516114063-147809b48527'}?w=400&h=300&fit=crop`} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                            <h4 className="text-white font-bold text-sm">{project.title}</h4>
                            <p className="text-white/80 text-xs mt-1">{project.tech}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Navigation */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button 
                  onClick={() => rotateCarousel('left')}
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                
                <div className="flex gap-2">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full carousel-dot transition-all duration-300 ${
                        index === currentCarouselIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={() => rotateCarousel('right')}
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
