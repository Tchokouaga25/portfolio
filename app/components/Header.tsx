'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n-context';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ isDarkMode, toggleTheme, scrollToSection, activeSection }: HeaderProps) {
  const { t, language, setLanguage } = useI18n();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageDropdownOpen && !(event.target as Element).closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageDropdownOpen]);

  const LanguageToggle = () => (
    <div className="relative language-dropdown">
      <button
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white flex items-center gap-2"
        aria-label={t('language.toggle')}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
        </svg>
        <span className="text-sm font-medium uppercase">{language}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </button>
      
      {isLanguageDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          <button
            onClick={() => {
              setLanguage('fr');
              setIsLanguageDropdownOpen(false);
            }}
            className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
              language === 'fr' 
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="text-lg">🇫🇷</span>
            <div>
              <div className="font-medium">{t('language.french')}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Français</div>
            </div>
            {language === 'fr' && (
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            )}
          </button>
          
          <button
            onClick={() => {
              setLanguage('en');
              setIsLanguageDropdownOpen(false);
            }}
            className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
              language === 'en' 
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="text-lg">🇬🇧</span>
            <div>
              <div className="font-medium">{t('language.english')}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">English</div>
            </div>
            {language === 'en' && (
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/55 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white">
            {t('header.title')}
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
              {t('header.nav.accueil')}
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className={`transition-colors font-medium ${
                activeSection === 'apropos' 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {t('header.nav.apropos')}
            </button>
            <button 
              onClick={() => scrollToSection('projets')}
              className={`transition-colors font-medium ${
                activeSection === 'projets' 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {t('header.nav.projets')}
            </button>
            <button 
              onClick={() => scrollToSection('objectifs')}
              className={`transition-colors font-medium ${
                activeSection === 'objectifs' 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {t('header.nav.objectifs')}
            </button>
            <button 
              onClick={() => scrollToSection('langages')}
              className={`transition-colors font-medium ${
                activeSection === 'langages' 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {t('header.nav.langages')}
            </button>
            <button 
              onClick={() => scrollToSection('competences')}
              className={`transition-colors font-medium ${
                activeSection === 'competences' 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {t('header.nav.competences')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors font-medium ${
                activeSection === 'contact' 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {t('header.nav.contact')}
            </button>
            <LanguageToggle />
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
  );
}
