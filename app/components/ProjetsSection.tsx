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
      
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      titre: "Système de Recommandation Films",
      description: "Application web de recommandation de films utilisant des algorithmes de machine learning pour suggestions personnalisées.",
      technologies: ["Python", "TensorFlow", "Vue.js", "PostgreSQL"],
      
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      titre: "Jeu Mobile Multi-joueurs",
      description: "Jeu mobile en temps réel avec fonctionnalités multijoueurs et système de classement compétitif.",
      technologies: ["Unity", "C#", "Firebase", "WebSocket"],
      
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
    <div className={`${enCours ? 'bg-gradient-to-br from-blue-50 to-blue-100' : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700`}>
      {/* Image du projet */}
      <div className="h-48 overflow-hidden">
        {projet.image ? (
          <img src={projet.image} alt={projet.titre} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">Application Preview</span>
          </div>
        )}
      </div>
      
      {/* Contenu du projet */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{projet.titre}</h3>
          {enCours && <span className="px-2 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold">En cours</span>}
        </div>
        
        <p className={`${enCours ? 'text-gray-700' : 'text-gray-600'} dark:text-gray-300 text-sm mb-4 line-clamp-2`}>
          {projet.description}
        </p>
        
        {/* Technologies */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-gray-900 text-sm">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {projet.technologies.map((tech: string, index: number) => (
              <span key={index} className={`px-2 py-1 ${enCours ? 'bg-cyan-600 text-white' : 'bg-gray-100'} rounded-full text-xs`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Progression pour projets en cours */}
        {enCours && projet.progression && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-gray-700 text-sm">Progression:</span>
              <span className="text-sm font-semibold text-gray-700">{projet.progression}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full transition-all duration-300" style={{width: `${projet.progression}%`}}></div>
            </div>
          </div>
        )}


        {/* Boutons d'action */}
        <div className="flex gap-2">
          <a 
            href={projet.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium flex items-center justify-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a 
            href={projet.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 px-2 py-1 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all text-xs font-medium flex items-center justify-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>{enCours ? 'Preview' : 'Demo'}</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projets" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Mes Projets</h2>
      
        {/* Barre de filtrage type toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-gray-200 rounded-full p-1 w-100">
            <div 
              className={`absolute top-1 h-10 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${
                projectFilter === 'termine' ? 'left-1 w-[168px]' : 'left-[226px] w-[168px]'
              }`}
            />
            <div className="relative flex justify-between">
              <button
                onClick={() => filterProjects('termine')}
                className={`relative z-10 px-6 py-2 font-semibold transition-colors duration-300 ${
                  projectFilter === 'termine' 
                    ? 'text-green-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Projets Terminés
              </button>
              <button
                onClick={() => filterProjects('encours')}
                className={`relative z-10 px-6 py-2 font-semibold transition-colors duration-300 ${
                  projectFilter === 'encours' 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Projets en Cours
              </button>
            </div>
          </div>
        </div>

        {/* Contenu des projets */}
        <div id="projets-content" className="px-4 sm:px-6 lg:px-8">
          {/* Projets Terminés */}
          <div id="termine-projects" className={`${projectFilter === 'encours' ? 'hidden' : ''}`}>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projetsTermines.map((projet, index) => (
                <ProjetCard key={index} projet={projet} />
              ))}
            </div>
          </div>

          {/* Projets en Cours */}
          <div id="encours-projects" className={`${projectFilter === 'termine' ? 'hidden' : ''}`}>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projetsEnCours.map((projet, index) => (
                <ProjetCard key={index} projet={projet} enCours />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
