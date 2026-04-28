'use client';

import { useState, useEffect } from 'react';
import { I18nProvider } from '@/lib/i18n-context';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AProposSection from './components/AProposSection';
import ObjectifsSection from './components/ObjectifsSection';
import LangagesSection from './components/LangagesSection';
import ProjetsSection from './components/ProjetsSection';
import CompetencesSection from './components/CompetencesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
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
      const sections = ['accueil', 'apropos', 'objectifs', 'projets', 'langages', 'competences', 'contact'];
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

  return (
    <I18nProvider>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        <Header 
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />

        <HeroSection />
        <AProposSection />
        <ObjectifsSection />
        <LangagesSection />
        <ProjetsSection 
          projectFilter={projectFilter}
          filterProjects={filterProjects}
        />
        <CompetencesSection />
        <ContactSection 
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <Footer scrollToSection={scrollToSection} />
        </div>
      </div>
    </I18nProvider>
  );
}
