'use client';

import { useState, useEffect } from 'react';
import { I18nProvider } from '@/lib/i18n-context';
import { ThemeProvider } from '@/lib/theme-context';
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
  const [activeSection, setActiveSection] = useState('accueil');
  const [projectFilter, setProjectFilter] = useState('termine');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
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
    <ThemeProvider>
    <I18nProvider>
      <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-1)]">
        <Header 
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
          formStatus={formStatus}
        />
        <Footer scrollToSection={scrollToSection} />
      </div>
    </I18nProvider>
    </ThemeProvider>
  );
}
