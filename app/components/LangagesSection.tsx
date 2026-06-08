'use client';

import { useI18n } from '@/lib/i18n-context';

export default function CompetencesSection() {
  const { t } = useI18n();

  const getLevelKey = (niveau: number): string => {
    if (niveau >= 70) return 'langages.avance';
    if (niveau >= 45) return 'langages.intermediaire';
    return 'langages.debutant';
  };

  const getLevelColor = (niveau: number): string => {
    if (niveau >= 70) return 'text-emerald-400';
    if (niveau >= 45) return 'text-blue-400';
    return 'text-amber-400';
  };

  const frontendSkills = [
    { name: "React.js",     niveau: 55, bgColor: "bg-blue-500/15",  textColor: "text-blue-400",  barClass: "skill-bar-shine" },
    { name: "TypeScript",   niveau: 65, bgColor: "bg-cyan-500/15",  textColor: "text-cyan-400",  barClass: "skill-bar-shine" },
    { name: "Tailwind CSS", niveau: 60, bgColor: "bg-teal-500/15",  textColor: "text-teal-400",  barClass: "skill-bar-shine" },
    { name: "Next.js",      niveau: 60, bgColor: "bg-green-500/15", textColor: "text-green-400", barClass: "skill-bar-shine" },
  ];

  const backendSkills = [
    { name: "Java 17",     niveau: 60, bgColor: "bg-red-500/15",    textColor: "text-red-400",    barClass: "skill-bar-shine" },
    { name: "Spring Boot", niveau: 45, bgColor: "bg-green-500/15",  textColor: "text-green-400",  barClass: "skill-bar-shine" },
    { name: "Node.js",     niveau: 55, bgColor: "bg-yellow-500/15", textColor: "text-yellow-400", barClass: "skill-bar-shine" },
    { name: "REST API",    niveau: 40, bgColor: "bg-purple-500/15", textColor: "text-purple-400", barClass: "skill-bar-shine" },
  ];

  const databaseDevOpsSkills = [
    { name: "MySQL",      niveau: 65, bgColor: "bg-blue-500/15",  textColor: "text-blue-400",  barClass: "skill-bar-shine" },
    { name: "PostgreSQL", niveau: 60, bgColor: "bg-green-500/15", textColor: "text-green-400", barClass: "skill-bar-shine" },
  ];

  const outilsSkills = [
    { name: "VS Code",       niveau: 75, bgColor: "bg-blue-400/15",   textColor: "text-blue-400",   barClass: "skill-bar-shine" },
    { name: "GitHub",        niveau: 70, bgColor: "bg-slate-400/15",  textColor: "text-slate-400",  barClass: "skill-bar-shine" },
    { name: "Figma",         niveau: 65, bgColor: "bg-purple-500/15", textColor: "text-purple-400", barClass: "skill-bar-shine" },
    { name: "IA Générative", niveau: 75, bgColor: "bg-yellow-500/15", textColor: "text-yellow-400", barClass: "skill-bar-shine" },
  ];

  const SkillCard = ({ skill }: { skill: typeof frontendSkills[0] }) => {
    const levelKey = getLevelKey(skill.niveau);
    const levelColor = getLevelColor(skill.niveau);
    return (
      <div
        className="group rounded-xl p-3.5 border transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
        style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-color)' }}
      >
        {/* En-tête : icône + nom */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className={`w-8 h-8 ${skill.bgColor} rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110`}>
            <span className={`${skill.textColor} font-bold text-[10px] tracking-wide`}>
              {skill.name.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-xs truncate leading-tight" style={{ color: 'var(--text-1)' }}>
              {skill.name}
            </h4>
            <span className={`text-[9px] font-bold uppercase tracking-widest ${levelColor}`}>
              {t(levelKey)}
            </span>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="flex items-center gap-2">
          <div className="flex-1 rounded-full h-1.5 overflow-hidden" style={{ background: 'rgba(128,128,128,0.15)' }}>
            <div
              className={`${skill.barClass} h-1.5 rounded-full`}
              style={{ width: `${skill.niveau}%` }}
            />
          </div>
          <span className="text-[10px] font-bold tabular-nums shrink-0 w-7 text-right" style={{ color: 'var(--text-2)' }}>
            {skill.niveau}%
          </span>
        </div>
      </div>
    );
  };

  const categories = [
    {
      titleKey: 'langages.frontend',
      color: 'text-blue-400',
      accentClass: 'border-l-blue-500',
      iconPath: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
      skills: frontendSkills,
    },
    {
      titleKey: 'langages.backend',
      color: 'text-emerald-400',
      accentClass: 'border-l-emerald-500',
      iconPath: 'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z',
      skills: backendSkills,
    },
    {
      titleKey: 'langages.database',
      color: 'text-violet-400',
      accentClass: 'border-l-violet-500',
      iconPath: 'M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.36 6 2s-2.13 2-6 2-6-1.36-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.36-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17c0 .64-2.13 2-6 2z',
      skills: databaseDevOpsSkills,
    },
    {
      titleKey: 'langages.outils',
      color: 'text-orange-400',
      accentClass: 'border-l-orange-500',
      iconPath: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
      skills: outilsSkills,
    },
  ];

  return (
    <section id="competences" className="py-24" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold section-title gradient-text">
            {t('langages.sectionTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 border-l-2 ${cat.accentClass} transition-all duration-300 hover:-translate-y-1`}
              style={{
                background: 'var(--bg-card)',
                borderTop: '1px solid var(--border-color)',
                borderRight: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              {/* En-tête catégorie */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
                  <svg className={`w-4 h-4 ${cat.color}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d={cat.iconPath} />
                  </svg>
                </div>
                <h3 className={`text-sm font-bold ${cat.color} uppercase tracking-wide leading-tight`}>
                  {t(cat.titleKey)}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((skill, j) => (
                  <SkillCard key={j} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
