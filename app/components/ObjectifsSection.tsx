'use client';

import { useI18n } from '@/lib/i18n-context';

export default function ObjectifsSection() {
  const { t } = useI18n();

  const objectifs = [
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-700',
      glow: 'hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]',
      accent: 'border-blue-500/20 hover:border-blue-500/40',
      titleKey: 'objectifs.excellence.title',
      descKey: 'objectifs.excellence.description',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-600',
      glow: 'hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]',
      accent: 'border-emerald-500/20 hover:border-emerald-500/40',
      titleKey: 'objectifs.innovation.title',
      descKey: 'objectifs.innovation.description',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: 'from-violet-500 to-purple-700',
      glow: 'hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]',
      accent: 'border-violet-500/20 hover:border-violet-500/40',
      titleKey: 'objectifs.collaboration.title',
      descKey: 'objectifs.collaboration.description',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
        </svg>
      ),
      gradient: 'from-amber-500 to-orange-600',
      glow: 'hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)]',
      accent: 'border-amber-500/20 hover:border-amber-500/40',
      titleKey: 'objectifs.croissance.title',
      descKey: 'objectifs.croissance.description',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
        </svg>
      ),
      gradient: 'from-rose-500 to-red-600',
      glow: 'hover:shadow-[0_8px_30px_rgba(244,63,94,0.15)]',
      accent: 'border-rose-500/20 hover:border-rose-500/40',
      titleKey: 'objectifs.impact.title',
      descKey: 'objectifs.impact.description',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      ),
      gradient: 'from-indigo-500 to-blue-700',
      glow: 'hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]',
      accent: 'border-indigo-500/20 hover:border-indigo-500/40',
      titleKey: 'objectifs.leadership.title',
      descKey: 'objectifs.leadership.description',
    },
  ];

  return (
    <section id="objectifs" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold section-title gradient-text">
            {t('objectifs.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectifs.map((objectif, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 ${objectif.accent} ${objectif.glow}`}
              style={{ background: 'var(--bg-card)' }}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${objectif.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                {objectif.icon}
              </div>

              <h3 className="text-base font-bold mb-2.5" style={{ color: 'var(--text-1)' }}>
                {t(objectif.titleKey)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                {t(objectif.descKey)}
              </p>

              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${objectif.gradient} opacity-5`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
