'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Import des traductions
import frMessages from '../messages/fr.json';
import enMessages from '../messages/en.json';

type Language = 'fr' | 'en';
type Messages = typeof frMessages;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const messages: Record<Language, Messages> = {
  fr: frMessages,
  en: enMessages,
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  // Charger la langue depuis le localStorage au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // Détecter la langue du navigateur
      const browserLanguage = navigator.language.split('-')[0] as Language;
      if (browserLanguage === 'fr' || browserLanguage === 'en') {
        setLanguage(browserLanguage);
      }
    }
  }, []);

  // Sauvegarder la langue dans le localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Fonction de traduction
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = messages[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback vers le français si la clé n'existe pas
        let fallbackValue: any = messages.fr;
        for (const fk of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
            fallbackValue = fallbackValue[fk];
          } else {
            return key; // Retourner la clé si non trouvée
          }
        }
        return typeof fallbackValue === 'string' ? fallbackValue : key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
