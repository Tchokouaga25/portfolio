'use client';

import { useState } from 'react';

interface ProjetsSectionProps {
  projectFilter: string;
  filterProjects: (type: string) => void;
}

export default function ProjetsSection({ projectFilter, filterProjects }: ProjetsSectionProps) {
  const projetsTermines = [
    {
      titre: "Plateforme de Gestion de Stock E-commerce",
      description: "Développement d'une application web pour la gestion complète de l'inventaire, des commandes et des clients pour une boutique en ligne.",
      technologies: ["Java 17", "Spring Boot", "React.js", "MySQL", "Docker"],
      defis: ["Optimisation des requêtes SQL complexes pour tableaux de bord en temps réel", "Sécurisation des transactions avec Spring Security et JWT"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      titre: "Système de Recommandation Films",
      description: "Application web de recommandation de films utilisant des algorithmes de machine learning pour suggestions personnalisées.",
      technologies: ["Python", "TensorFlow", "Vue.js", "PostgreSQL"],
      defis: [],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      titre: "Jeu Mobile Multi-joueurs",
      description: "Jeu mobile en temps réel avec fonctionnalités multijoueurs et système de classement compétitif.",
      technologies: ["Unity", "C#", "Firebase", "WebSocket"],
      defis: [],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  const projetsEnCours = [
    {
      titre: "Application Mobile de Fitness",
      description: "Application mobile React Native pour le suivi d'entraînements et nutrition avec synchronisation cloud.",
      technologies: ["React Native", "Firebase", "Node.js", "Redux"],
      progression: 75,
      image: null,
      github: "#",
      demo: "#"
    },
    {
      titre: "Dashboard Analytique",
      description: "Tableau de bord interactif avec visualisation de données en temps réel et rapports personnalisables.",
      technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288045-608f1bb86b2?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      titre: "SaaS de Gestion de Projet",
      description: "Platforme SaaS pour la gestion de projets d'équipe avec tableaux Kanban et communication en temps réel.",
      technologies: ["Vue.js", "Spring Boot", "WebSocket", "Redis"],
      image: "https://images.unsplash.com/photo-1579516376686-e5f5d93d20a6?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const ProjetCard = ({ projet, enCours = false }: { projet: any; enCours?: boolean }) => (
    <div className={`${enCours ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800' : 'bg-white dark:bg-gray-900'} rounded-xl shadow-lg overflow-hidden`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{projet.titre}</h3>
            {enCours && <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold">En cours</span>}
          </div>
          <p className={`${enCours ? 'text-gray-700' : 'text-gray-600'} dark:text-gray-300 mb-6`}>
            {projet.description}
          </p>
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies Utilisées:</h4>
            <div className="flex flex-wrap gap-2">
              {projet.technologies.map((tech: string, index: number) => (
                <span key={index} className={`px-3 py-1 ${enCours ? 'bg-cyan-600 text-white' : 'bg-gray-100 dark:bg-gray-800'} rounded-full text-sm`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {enCours && projet.progression && (
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gray-700 dark:text-gray-300">Progression:</span>
              <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: `${projet.progression}%`}}></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{projet.progression}%</span>
            </div>
          )}

          {!enCours && projet.defis && projet.defis.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Défis & Solutions:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {projet.defis.map((defi: string, index: number) => (
                  <li key={index}>{defi}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4">
            <a 
              href={projet.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a 
              href={projet.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {enCours ? 'Preview' : 'Demo Live'}
            </a>
          </div>
        </div>
        <div className="p-8 flex items-center justify-center">
          <div className="w-full h-48 rounded-lg overflow-hidden">
            {projet.image ? (
              <img src={projet.image} alt="Application Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Application Preview</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projets" className="py-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Mes Projets</h2>
      
        {/* Barre de filtrage type toggle */}
        <div className="flex justify-center mb-8">
          <div className="relative bg-gray-200 dark:bg-gray-700 rounded-full p-1 w-100">
            <div 
              className={`absolute top-1 h-10 bg-white dark:bg-gray-900 rounded-full shadow-md transition-all duration-300 ease-in-out ${
                projectFilter === 'termine' ? 'left-1 w-[168px]' : 'left-[226px] w-[168px]'
              }`}
            />
            <div className="relative flex justify-between">
              <button
                onClick={() => filterProjects('termine')}
                className={`relative z-10 px-6 py-2 font-semibold transition-colors duration-300 ${
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

        {/* Contenu des projets */}
        <div id="projets-content" className="space-y-8 max-w-7xl mx-auto">
          {/* Projets Terminés */}
          <div id="termine-projects" className={`space-y-8 ${projectFilter === 'encours' ? 'hidden' : ''}`}>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projets Terminés</h3>
            {projetsTermines.map((projet, index) => (
              <ProjetCard key={index} projet={projet} />
            ))}
          </div>

          {/* Projets en Cours */}
          <div id="encours-projects" className={`space-y-8 ${projectFilter === 'termine' ? 'hidden' : ''}`}>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projets en Cours</h3>
            {projetsEnCours.map((projet, index) => (
              <ProjetCard key={index} projet={projet} enCours />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
