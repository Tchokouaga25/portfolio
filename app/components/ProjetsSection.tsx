'use client';

import { useI18n } from '@/lib/i18n-context';

interface ProjetsSectionProps {
  projectFilter: string;
  filterProjects: (type: string) => void;
}

/* Cercle de progression SVG avec gradient unique par instance */
function CircularProgress({ value, id }: { value: number; id: string }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

  return (
    <svg width="56" height="56" viewBox="0 0 56 56" className="shrink-0">
      <defs>
        <linearGradient id={`cg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* Track */}
      <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
      {/* Progress */}
      <circle
        cx="28" cy="28" r={r}
        fill="none"
        stroke={`url(#cg-${id})`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 28 28)"
        style={{ transition: 'stroke-dashoffset 0.8s ease' }}
      />
      <text x="28" y="32" textAnchor="middle" fontSize="10" fontWeight="700" fill="url(#cg-${id})">
        {value}%
      </text>
    </svg>
  );
}

export default function ProjetsSection({ projectFilter, filterProjects }: ProjetsSectionProps) {
  const { t } = useI18n();

  const projetsTermines = [
    {
      titre: "Plateforme de Gestion de Stock E-commerce",
      description: "Développement d'une application web pour la gestion complète de l'inventaire, des commandes et des clients pour une boutique en ligne.",
      technologies: ["Java 17", "Spring Boot", "React.js", "MySQL", "Docker"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      titre: "Système de Recommandation Films",
      description: "Application web de recommandation de films utilisant des algorithmes de machine learning pour suggestions personnalisées.",
      technologies: ["Python", "TensorFlow", "Vue.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      titre: "Jeu Mobile Multi-joueurs",
      description: "Jeu mobile en temps réel avec fonctionnalités multijoueurs et système de classement compétitif.",
      technologies: ["Unity", "C#", "Firebase", "WebSocket"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=200&fit=crop",
      github: "#",
      demo: "#",
    },
  ];

  const projetsEnCours = [
    {
      titre: "Application Mobile de Fitness",
      description: "Application mobile React Native pour le suivi d'entraînements et nutrition avec synchronisation cloud.",
      technologies: ["React Native", "Firebase", "Node.js", "Redux"],
      progression: 75,
      image: null,
      github: "#",
      demo: "#",
    },
    {
      titre: "Dashboard Analytique",
      description: "Tableau de bord interactif avec visualisation de données en temps réel et rapports personnalisables.",
      technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
      progression: 45,
      image: "https://images.unsplash.com/photo-1551288045-608f1bb86b2?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      titre: "SaaS de Gestion de Projet",
      description: "Platforme SaaS pour la gestion de projets d'équipe avec tableaux Kanban et communication en temps réel.",
      technologies: ["Vue.js", "Spring Boot", "WebSocket", "Redis"],
      progression: 30,
      image: "https://images.unsplash.com/photo-1579516376686-e5f5d93d20a6?w=600&h=200&fit=crop",
      github: "https://github.com",
      demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  const ProjetCardTermine = ({ projet, idx }: { projet: typeof projetsTermines[0]; idx: number }) => (
    <div
      className="group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(59,130,246,0.12)] hover:border-blue-500/30"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
    >
      {/* Image avec overlay hover tech stack */}
      <div className="h-44 overflow-hidden relative" style={{ background: 'var(--bg-elevated)' }}>
        <img
          src={projet.image}
          alt={projet.titre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay gradient toujours présent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* Overlay tech stack au hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1">{t('projets.technologies')}</p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {projet.technologies.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h3 className="text-sm font-bold mb-2 line-clamp-2 leading-snug" style={{ color: 'var(--text-1)' }}>
          {projet.titre}
        </h3>
        <p className="text-xs mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--text-2)' }}>
          {projet.description}
        </p>

        {/* Tech badges (visibles hors hover) */}
        <div className="mb-4 flex flex-wrap gap-1.5 group-hover:opacity-0 transition-opacity duration-200">
          {projet.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
          {projet.technologies.length > 3 && (
            <span className="tech-badge">+{projet.technologies.length - 3}</span>
          )}
        </div>

        {/* Boutons */}
        <div className="flex gap-2">
          <a href={projet.github} target="_blank" rel="noopener noreferrer"
            className="flex-1 btn-primary px-3 py-2 text-xs flex items-center justify-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t('projets.lienGithub')}
          </a>
          <a href={projet.demo} target="_blank" rel="noopener noreferrer"
            className="flex-1 px-3 py-2 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
            {t('projets.demoLive')}
          </a>
        </div>
      </div>
    </div>
  );

  type EnCoursProjet = { titre: string; description: string; technologies: string[]; progression: number; image: string | null; github: string; demo: string };
  const ProjetCardEnCours = ({ projet, idx }: { projet: EnCoursProjet; idx: number }) => (
    <div
      className="group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(139,92,246,0.12)] hover:border-violet-500/30"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
    >
      {/* Image / placeholder */}
      <div className="h-44 overflow-hidden relative" style={{ background: 'var(--bg-elevated)' }}>
        {projet.image ? (
          <>
            <img
              src={projet.image}
              alt={projet.titre}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 opacity-20" style={{ color: 'var(--text-2)' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
            </svg>
          </div>
        )}
        {/* Badge En cours */}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-full text-xs font-bold">
          {t('projets.enCoursBadge')}
        </span>
        {/* Overlay tech stack au hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-1">{t('projets.technologies')}</p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {projet.technologies.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h3 className="text-sm font-bold mb-2 line-clamp-2 leading-snug" style={{ color: 'var(--text-1)' }}>
          {projet.titre}
        </h3>
        <p className="text-xs mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--text-2)' }}>
          {projet.description}
        </p>

        {/* Progression circulaire + barre */}
        <div className="flex items-center gap-4 mb-4 p-3 rounded-xl" style={{ background: 'var(--bg-elevated)' }}>
          <CircularProgress value={projet.progression} id={`proj-${idx}`} />
          <div className="flex-1">
            <p className="text-xs font-semibold mb-1.5" style={{ color: 'var(--text-2)' }}>
              {t('projets.progression')}
            </p>
            <div className="rounded-full h-1.5 overflow-hidden" style={{ background: 'rgba(128,128,128,0.15)' }}>
              <div
                className="skill-bar-shine h-1.5 rounded-full transition-all duration-700"
                style={{ width: `${projet.progression}%` }}
              />
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="flex gap-2">
          <a href={projet.github} target="_blank" rel="noopener noreferrer"
            className="flex-1 btn-primary px-3 py-2 text-xs flex items-center justify-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t('projets.lienGithub')}
          </a>
          <a href={projet.demo} target="_blank" rel="noopener noreferrer"
            className="flex-1 px-3 py-2 border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
            {t('projets.preview')}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projets" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold section-title gradient-text">
            {t('projets.title')}
          </h2>
        </div>

        {/* Toggle filtre */}
        <div className="flex justify-center mb-12 ">
          <div
            className="relative inline-flex rounded-full p-1 border w-[300px]"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            <div
              className={`absolute top-1 h-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 ${
                projectFilter === 'termine' ? 'left-1 w-[140px]' : 'left-[148px] w-[140px]'
              }`}
            />
            <button
              onClick={() => filterProjects('termine')}
              id="btn-termine"
              className={`relative z-10 py-2.5 w-35 font-semibold text-sm transition-colors duration-300 rounded-full ${
                projectFilter === 'termine' ? 'text-white' : ''
              }`}
              style={{ color: projectFilter === 'termine' ? undefined : 'var(--text-2)' }}
            >
              {t('projets.termine')}
            </button>
            <button
              onClick={() => filterProjects('encours')}
              id="btn-encours"
              className={`relative z-10 py-2.5 w-35 font-semibold text-sm transition-colors duration-300 rounded-full ${
                projectFilter === 'encours' ? 'text-white' : ''
              }`}
              style={{ color: projectFilter === 'encours' ? undefined : 'var(--text-2)' }}
            >
              {t('projets.encours')}
            </button>
          </div>
        </div>

        {/* Grilles de projets */}
        <div id="projets-content">
          <div id="termine-projects" className={`${projectFilter === 'encours' ? 'hidden' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projetsTermines.map((projet, index) => (
                <ProjetCardTermine key={index} projet={projet} idx={index} />
              ))}
            </div>
          </div>

          <div id="encours-projects" className={`${projectFilter === 'termine' ? 'hidden' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projetsEnCours.map((projet, index) => (
                <ProjetCardEnCours key={index} projet={projet} idx={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
