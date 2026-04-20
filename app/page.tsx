'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './animations.css';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [projectFilter, setProjectFilter] = useState('termine');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Détecter la section active lors du scroll
    const handleScroll = () => {
      const sections = ['accueil', 'apropos', 'objectifs', 'autres-projets', 'langages', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier au chargement

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    console.log('Toggle theme:', newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Added dark class');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Removed dark class');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Message de ${formData.name} depuis le portfolio`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:claudesandra311@gmail.com?subject=${subject}&body=${body}`;
    
    // Créer un iframe invisible pour envoyer l'email automatiquement
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = mailtoLink;
    document.body.appendChild(iframe);
    
    // Nettoyer après un court délai
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 100);
    
    // Optionnel : afficher une confirmation
    alert('Message envoyé avec succès !');
  };

  const filterProjects = (type: string) => {
    setProjectFilter(type);
    const termineProjects = document.getElementById('termine-projects');
    const encoursProjects = document.getElementById('encours-projects');
    const btnTermine = document.getElementById('btn-termine');
    const btnEncours = document.getElementById('btn-encours');

    if (type === 'termine') {
      termineProjects?.classList.remove('hidden');
      encoursProjects?.classList.add('hidden');
      btnTermine?.classList.add('ring-4', 'ring-green-300');
      btnEncours?.classList.remove('ring-4', 'ring-blue-300');
    } else {
      termineProjects?.classList.add('hidden');
      encoursProjects?.classList.remove('hidden');
      btnEncours?.classList.add('ring-4', 'ring-blue-300');
      btnTermine?.classList.remove('ring-4', 'ring-green-300');
    }
  };

  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const rotateCarousel = (direction: string) => {
    const projects = [
      { title: "E-Commerce Platform", tech: "Spring Boot & React", image: "projet1.jpg" },
      { title: "Mobile App", tech: "React Native", image: "projet2.jpg" },
      { title: "API REST", tech: "Node.js & MongoDB", image: "projet3.jpg" },
      { title: "Dashboard", tech: "Vue.js", image: "projet4.jpg" },
      { title: "SaaS Platform", tech: "Laravel & Vue", image: "projet5.jpg" }
    ];

    if (direction === 'left') {
      setCurrentCarouselIndex((prev) => (prev - 1 + projects.length) % projects.length);
    } else {
      setCurrentCarouselIndex((prev) => (prev + 1) % projects.length);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/55 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold text-white">
                Claude Sandra TCHOKOUAGA
              </div>
              <nav className="flex items-center space-x-6">
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className={`transition-colors font-medium ${
                    activeSection === 'accueil' 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  Accueil
                </button>
                <button 
                  onClick={() => scrollToSection('apropos')}
                  className={`transition-colors font-medium ${
                    activeSection === 'apropos' 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  À propos
                </button>
                <button 
                  onClick={() => scrollToSection('projets')}
                  className={`transition-colors font-medium ${
                    activeSection === 'projets' 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  Mes projets
                </button>
                <button 
                  onClick={() => scrollToSection('objectifs')}
                  className={`transition-colors font-medium ${
                    activeSection === 'objectifs' 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  Mes Objectifs
                </button>
                <button 
                  onClick={() => scrollToSection('langages')}
                  className={`transition-colors font-medium ${
                    activeSection === 'langages' 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  Mes langages
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`transition-colors font-medium ${
                    activeSection === 'contact' 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  Contact
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section - Accueil */}
        <section id="accueil" className="relative overflow-hidden " style={{ minHeight: 'calc(70vh - 6rem)' }}>
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 video-bg parallax-slow"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/1b.mp4" type="video/mp4" />
            {/* Fallback gradient if video doesn't load */}
          </video>
          
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 z-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 z-30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ minHeight: 'calc(85vh - 4rem)' }}>
              {/* Text content with black transparent background */}
              <div className=" transform hover:scale-105 transition-all duration-300">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 text-white">
                  Bienvenue! 
                </h1>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-white">
                 Je suis <span className="text-blue-400 text-xl sm:text-2xl lg:text-3xl">Claude Sandra TCHOKOUAGA</span>
                </h1>
                <p className="text-xm sm:text-lg mb-8 text-gray-200 leading-relaxed">
                  Développeur web passionné, avec plus de 5 ans d’expérience en Java et en développement full-stack, je transforme des idées en solutions numériques robustes et innovantes. Mon expertise couvre l’ensemble du cycle de développement, de la modélisation de bases de données à la création d’interfaces modernes et intuitives. Je m’engage à offrir des expériences utilisateur remarquables qui allient performance, fiabilité et créativité.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-700 text-white rounded-full text-sm backdrop-blur-sm">Java</span>
                  <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm backdrop-blur-sm">Spring Boot</span>
                  <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm backdrop-blur-sm">React</span>
                  <span className="px-4 py-2 bg-yellow-600 text-white rounded-full text-sm backdrop-blur-sm">TypeScript</span>
                </div>
              </div>
              
              {/* Floating image with 3D icons */}
              <div className="flex justify-center relative">
                <div className="relative">
                  {/* Floating image */}
                  <div className="w-84 h-84 sm:w-100 sm:h-100 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl relative z-20 transform hover:scale-105 transition-transform duration-300">
                    <Image src="/portfolio-assets/images/profile/photos.jpg" alt="Profile" width={350} height={350} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* 3D Floating Icons */}
                  {/* React Icon - Top Left */}
                  <div className="absolute -top-1 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl icon-3d icon-float" style={{ animationDelay: '0s' }}>
                    <span className="text-white font-bold text-lg">React</span>
                  </div>
                  
                  {/* Node.js Icon - Top Right */}
                  <div className="absolute -top-1 -right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl icon-3d icon-float" style={{ animationDelay: '0.5s' }}>
                    <span className="text-white font-bold text-sm">Sprint <br/>boot</span>
                  </div>
                  
                  {/* Java Icon - Bottom Left */}
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl icon-3d icon-float" style={{ animationDelay: '1s' }}>
                    <span className="text-white font-bold text-lg">Java</span>
                  </div>
                  
                  {/* Spring Boot Icon - Bottom Right */}
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-2xl icon-3d icon-float" style={{ animationDelay: '1.5s' }}>
                   <span className="text-white font-bold text-lg">Next</span>
                  </div>
                  
                  {/* Additional floating icons for 3D effect */}
                  <div className="absolute top-1/2 -left-12 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl icon-3d icon-pulse-3d" style={{ animationDelay: '2s' }}>
                    <span className="text-white font-bold text-lg">JS</span>
                  </div>
                  
                  <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl icon-3d icon-pulse-3d" style={{ animationDelay: '2.5s' }}>
                    <span className="text-white font-bold text-lg">TS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À Propos Section */}
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
                  J’intègre l’IA générative dans mon processus afin d’optimiser la productivité et d’apporter une valeur ajoutée à chaque projet. 
                  Disponible pour relever de nouveaux défis, je m’engage à créer des expériences utilisateur remarquables, 
                  alliant fiabilité, créativité et excellence technique.
                </p>

              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Carrousel en éventail */}
                  <div className="relative h-80 perspective-1000">
                    {[
                      { title: "E-Commerce Platform", tech: "Spring Boot & React", color: "from-blue-400 to-blue-600", icon: "shopping-cart" },
                      { title: "Mobile App", tech: "React Native", color: "from-green-400 to-green-600", icon: "smartphone" },
                      { title: "API REST", tech: "Node.js & MongoDB", color: "from-purple-400 to-purple-600", icon: "server" },
                      { title: "Dashboard", tech: "Vue.js", color: "from-orange-400 to-orange-600", icon: "chart-bar" },
                      { title: "SaaS Platform", tech: "Laravel & Vue", color: "from-red-400 to-red-600", icon: "cloud" }
                    ].map((project, index) => {
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
                            <div className={`w-full h-full bg-gradient-to-br ${project.color} flex flex-col items-center justify-center text-white`}>
                              {/* Icône du projet */}
                              <div className="mb-4">
                                {project.icon === 'shopping-cart' && (
                                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                                  </svg>
                                )}
                                {project.icon === 'smartphone' && (
                                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
                                  </svg>
                                )}
                                {project.icon === 'server' && (
                                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 1h16c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm0 6h16c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1zm0 6h16c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1z"/>
                                  </svg>
                                )}
                                {project.icon === 'chart-bar' && (
                                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
                                  </svg>
                                )}
                                {project.icon === 'cloud' && (
                                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                                  </svg>
                                )}
                              </div>
                              <h4 className="text-white font-bold text-sm text-center px-2">{project.title}</h4>
                              <p className="text-white/80 text-xs text-center px-2 mt-1">{project.tech}</p>
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

        {/* Mes Objectifs Section */}
        <section id="objectifs" className="py-10 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Mes Objectifs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Excellence Technique</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Maîtriser les dernières technologies et best practices pour livrer des solutions de haute qualité, performantes et évolutives.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Innovation Continue</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Explorer de nouvelles approches et technologies pour créer des solutions innovantes qui répondent aux besoins évolutifs des utilisateurs.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Collaboration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Travailler efficacement en équipe pour partager connaissances et expertise, et créer ensemble des produits exceptionnels.</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Croissance Personnelle</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Développer continuellement mes compétences et connaissances pour rester à la pointe de l'industrie et offrir une valeur ajoutée.</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Impact Utilisateur</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Créer des applications qui améliorent réellement la vie des utilisateurs en répondant à leurs besoins de manière intuitive et efficace.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Leadership Technique</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Développer mes compétences en leadership pour guider les équipes techniques et prendre des décisions architecturales éclairées.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mes Langages Section */}
        <section id="langages" className="py-10 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Mes Langages & Technologies & Framework</h2>
            
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-15 gap-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-red-500" strokeDasharray={`${2 * Math.PI * 36 * 0.75} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">75%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Java</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Intermédiaire</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-green-500" strokeDasharray={`${2 * Math.PI * 36 * 0.65} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">65%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">JavaScript</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-blue-500" strokeDasharray={`${2 * Math.PI * 36 * 0.60} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">60%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">TypeScript</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Intermédiaire</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-purple-500" strokeDasharray={`${2 * Math.PI * 36 * 0.75} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">65%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">React</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-purple-500" strokeDasharray={`${2 * Math.PI * 36 * 0.75} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">65%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">php</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-blue-500" strokeDasharray={`${2 * Math.PI * 36 * 0.70} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">70%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">React</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-yellow-500" strokeDasharray={`${2 * Math.PI * 36 * 0.45} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">45%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Spring Boot</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Intermédiaire</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-green-500" strokeDasharray={`${2 * Math.PI * 36 * 0.50} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">50%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Next.js</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Intermédiaire</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-red-500" strokeDasharray={`${2 * Math.PI * 36 * 0.55} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">55%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Laravel</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Intermédiaire</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-red-500" strokeDasharray={`${2 * Math.PI * 36 * 0.75} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">75%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">tailwind css</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>
              
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-indigo-500" strokeDasharray={`${2 * Math.PI * 36 * 0.85} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">85%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Base de données</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-cyan-500" strokeDasharray={`${2 * Math.PI * 36 * 0.90} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">90%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Figma</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-orange-500" strokeDasharray={`${2 * Math.PI * 36 * 0.90} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">90%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-purple-500" strokeDasharray={`${2 * Math.PI * 36 * 0.80} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">80%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Git</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>
                 <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="transform -rotate-90 w-20 h-20">
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200 dark:text-gray-700"></circle>
                      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-purple-500" strokeDasharray={`${2 * Math.PI * 36 * 0.80} ${2 * Math.PI * 36}`} strokeLinecap="round"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">80%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">IA</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avancé</p>
                </div>
              </div>
            
          </div>
        </section>

        {/* Projects Section */}
        <section id="projets" className="py-10 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Mes Projets</h2>
          
            {/* Barre de filtrage type toggle */}
            <div className="flex justify-center  mb-8">
              <div className="relative bg-gray-200 dark:bg-gray-700 rounded-full p-1 w-100">
                <div 
                  className={`absolute top-1 h-10 bg-white dark:bg-gray-900 rounded-full shadow-md transition-all duration-300 ease-in-out ${
                    projectFilter === 'termine' ? 'left-1 w-[168px]' : 'left-[226px] w-[168px]'
                  }`}
                />
                <div className="relative flex justify-between ">
                  <button
                    onClick={() => filterProjects('termine')}
                    className={`relative z-10 px-6 py-2  font-semibold transition-colors duration-300 ${
                      projectFilter === 'termine' 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    Projets Terminés
                  </button>
                  <button
                    onClick={() => filterProjects('encours')}
                    className={`relative z-10 px-6 py-2 font-semibold transition-colors duration-300 ${
                      projectFilter === 'encours' 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    Projets en Cours
                  </button>
                </div>
              </div>
            </div>
          </div>

            {/* Contenu des projets */}
            <div id="projets-content" className="space-y-8 max-w-7xl mx-auto">
              {/* Projets Terminés */}
              <div id="termine-projects" className="space-y-8">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projets Terminés</h3>
              {/* Project 1 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Plateforme de Gestion de Stock E-commerce</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Développement d'une application web pour la gestion complète de l'inventaire, des commandes et des clients pour une boutique en ligne.
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Technologies Utilisées:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Java 17</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Spring Boot</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">React.js</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">MySQL</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Docker</span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Défis & Solutions:</h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Optimisation des requêtes SQL complexes pour tableaux de bord en temps réel</li>
                        <li>Sécurisation des transactions avec Spring Security et JWT</li>
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Lien GitHub
                      </a>
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                        Demo Live
                      </a>
                    </div>
                  </div>
                  <div className="p-8 flex items-center justify-center">
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop" alt="Application Preview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Système de Recommandation Films</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Application web de recommandation de films utilisant des algorithmes de machine learning pour suggestions personnalisées.
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Technologies Utilisées:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">TensorFlow</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Vue.js</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">PostgreSQL</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Lien GitHub
                      </a>
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                        Demo Live
                      </a>
                    </div>
                  </div>
                  <div className="p-8 flex items-center justify-center">
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop" alt="Application Preview" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Jeu Mobile Multi-joueurs</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Jeu mobile en temps réel avec fonctionnalités multijoueurs et système de classement compétitif.
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Technologies Utilisées:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Unity</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">C#</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Firebase</span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">WebSocket</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="#" 
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Lien GitHub
                      </a>
                      <a 
                        href="#" 
                        className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Demo Live
                      </a>
                    </div>
                  </div>
                  <div className="p-8 flex items-center justify-center">
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop" alt="Application Preview" className="w-full h-full object-cover" />
                    </div>
                    
                </div>
                  
              </div>

              {/* Projets en Cours */}
              <div id="encours-projects" className="space-y-8 hidden">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projets en Cours</h3>
                
                {/* Project 4 - En cours */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Application Mobile de Fitness</h3>
                        <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold">En cours</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Application mobile React Native pour le suivi d'entraînements et nutrition avec synchronisation cloud.
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies Utilisées:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm">React Native</span>
                          <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm">Firebase</span>
                          <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Node.js</span>
                          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Redux</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-gray-700 dark:text-gray-300">Progression:</span>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">75%</span>
                      </div>
                      <div className="flex gap-4">
                        <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          GitHub
                        </a>
                        <a href="#" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                          Preview
                        </a>
                      </div>
                    </div>
                    <div className="p-8 flex items-center justify-center">
                      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Application Preview</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project 5 - En cours */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">SaaS de Gestion de Projet</h3>
                        <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold">En cours</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Platforme SaaS pour la gestion de projets d'équipe avec tableaux Kanban et communication en temps réel.
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies Utilisées:</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Vue.js</span>
                          <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Spring Boot</span>
                          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">WebSocket</span>
                          <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm">Redis</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-gray-700 dark:text-gray-300">Progression:</span>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '40%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">40%</span>
                      </div>
                      <div className="flex gap-4">
                        <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          GitHub
                        </a>
                        <a href="#" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                          Preview
                        </a>
                      </div>
                    </div>
                    <div className="p-8 flex items-center justify-center">
                      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Application Preview</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Contact</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Je suis actuellement à la recherche de nouvelles opportunités et de défis stimulants au sein d'équipes innovantes où je pourrai mettre à profit mes compétences et continuer à grandir professionnellement.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">claudesandra311@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p className="text-gray-600 dark:text-gray-400">+237 6 79 66 24 60 / 6 90 16 00 89</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Localisation</h4>
                      <p className="text-gray-600 dark:text-gray-400">Cameroun</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center mb-8">
                      
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        Découvrez mon parcours et <br/>mes compétences en détail
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <a 
                        href="/cv.pdf" 
                        download="CV_Claude_Sandra_TCHOKOUAGA.pdf"
                        className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg font-semibold"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,2H6A2,2 0 0,0 0,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8A2,2 0 0,0 18,6M14,2L18,6V8H14M8,13H16M8,17H16"/>
                        </svg>
                        Télécharger mon CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Claude Sandra TCHOKOUAGA</h3>
                <p className="text-gray-400">
                  Développeur web passionné créant des solutions innovantes et performantes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('accueil')} className="text-gray-400 hover:text-white transition-colors">Accueil</button></li>
                  <li><button onClick={() => scrollToSection('apropos')} className="text-gray-400 hover:text-white transition-colors">À propos</button></li>
                  <li><button onClick={() => scrollToSection('projets')} className="text-gray-400 hover:text-white transition-colors">Mes projets</button></li>
                  <li><button onClick={() => scrollToSection('langages')} className="text-gray-400 hover:text-white transition-colors">Mes langages</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Réseaux Sociaux</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 [TON NOM]. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
