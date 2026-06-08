'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n-context';
import { useTheme } from '@/lib/theme-context';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ scrollToSection, activeSection }: HeaderProps) {
  const { t, language, setLanguage } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageDropdownOpen && !(event.target as Element).closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageDropdownOpen]);

  const navItems = [
    { id: 'accueil',     label: t('header.nav.accueil') },
    { id: 'apropos',     label: t('header.nav.apropos') },
    { id: 'projets',     label: t('header.nav.projets') },
    { id: 'objectifs',   label: t('header.nav.objectifs') },
    { id: 'competences', label: t('header.nav.competences') },
    { id: 'contact',     label: t('header.nav.contact') },
  ];

  /* ── Bouton thème ── */
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[var(--text-2)] hover:text-[var(--text-1)]"
      aria-label={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
      title={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
    >
      {theme === 'dark' ? (
        /* Soleil — cliquer pour passer en clair */
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0 12c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM3 13c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h2zm18 0c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2z"/>
        </svg>
      ) : (
        /* Lune — cliquer pour passer en sombre */
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
        </svg>
      )}
    </button>
  );

  /* ── Sélecteur de langue ── */
  const LanguageToggle = () => (
    <div className="relative language-dropdown">
      <button
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[var(--text-2)] hover:text-[var(--text-1)] flex items-center gap-1.5"
        aria-label={t('language.toggle')}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
        </svg>
        <span className="text-xs font-bold uppercase tracking-widest">{language}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
          fill="currentColor" viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </button>

      {isLanguageDropdownOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-44 rounded-xl shadow-2xl border overflow-hidden z-50"
          style={{ background: 'var(--dropdown-bg)', borderColor: 'var(--border-color)' }}
        >
          {[
            { code: 'fr', flag: '🇫🇷', label: t('language.french'), sub: 'Français' },
            { code: 'en', flag: '🇬🇧', label: t('language.english'), sub: 'English' },
          ].map(({ code, flag, label, sub }) => (
            <button
              key={code}
              onClick={() => { setLanguage(code as 'fr' | 'en'); setIsLanguageDropdownOpen(false); }}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors text-sm ${
                language === code
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-[var(--text-2)] hover:bg-black/[0.04]'
              }`}
            >
              <span className="text-base">{flag}</span>
              <div>
                <div className="font-medium">{label}</div>
                <div className="text-xs text-[var(--text-3)]">{sub}</div>
              </div>
              {language === code && (
                <svg className="w-4 h-4 text-blue-400 ml-auto shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
      style={{ background: 'var(--header-bg)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('accueil')}
            className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            {t('header.title')}
          </button>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-black/[0.04]'
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
                )}
              </button>
            ))}
            <div className="ml-1 pl-1 border-l" style={{ borderColor: 'var(--border-color)' }}>
              <ThemeToggle />
            </div>
            <div className="pl-1 border-l" style={{ borderColor: 'var(--border-color)' }}>
              <LanguageToggle />
            </div>
          </nav>

          {/* Mobile : thème + langue + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-black/[0.05] transition-colors"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden backdrop-blur-xl border-t py-3"
          style={{ background: 'var(--mobile-bg)', borderColor: 'var(--border-color)' }}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { scrollToSection(id); setIsMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-black/[0.04]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
