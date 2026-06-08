'use client';

import { useI18n } from '@/lib/i18n-context';

export default function CompetencesSection() {
  const { t } = useI18n();

  const categories = [
    {
      gradient: 'from-blue-500 to-violet-600',
      accent: 'border-l-blue-500',
      titleColor: 'text-blue-400',
      title: t('competences.cmsWeb.title'),
      items: [
        { label: t('competences.cmsWeb.wordpress'),   desc: t('competences.cmsWeb.wordpressDesc') },
        { label: t('competences.cmsWeb.integration'), desc: t('competences.cmsWeb.integrationDesc') },
        { label: t('competences.cmsWeb.seo'),         desc: t('competences.cmsWeb.seoDesc') },
      ],
    },
    {
      gradient: 'from-orange-500 to-red-500',
      accent: 'border-l-orange-500',
      titleColor: 'text-orange-400',
      title: t('competences.toolsEnv.title'),
      items: [
        { label: t('competences.toolsEnv.git'),     desc: t('competences.toolsEnv.gitDesc') },
        { label: t('competences.toolsEnv.cicd'),    desc: t('competences.toolsEnv.cicdDesc') },
        { label: t('competences.toolsEnv.postman'), desc: t('competences.toolsEnv.postmanDesc') },
        { label: t('competences.toolsEnv.ide'),     desc: t('competences.toolsEnv.ideDesc') },
      ],
    },
    {
      gradient: 'from-yellow-500 to-orange-500',
      accent: 'border-l-yellow-500',
      titleColor: 'text-yellow-400',
      title: t('competences.ai.title'),
      items: [
        { label: t('competences.ai.generative'), desc: t('competences.ai.generativeDesc') },
        { label: t('competences.ai.api'),        desc: t('competences.ai.apiDesc') },
        { label: t('competences.ai.usage'),      desc: t('competences.ai.usageDesc') },
      ],
    },
    {
      gradient: 'from-blue-500 to-green-500',
      accent: 'border-l-emerald-500',
      titleColor: 'text-emerald-400',
      title: t('competences.architecture.title'),
      items: [
        { label: t('competences.architecture.restful'),   desc: t('competences.architecture.restfulDesc') },
        { label: t('competences.architecture.arch'),      desc: t('competences.architecture.archDesc') },
        { label: t('competences.architecture.cleanCode'), desc: t('competences.architecture.cleanCodeDesc') },
        { label: t('competences.architecture.performance'), desc: t('competences.architecture.performanceDesc') },
        { label: t('competences.architecture.security'),  desc: t('competences.architecture.securityDesc') },
      ],
    },
    {
      gradient: 'from-pink-500 to-purple-500',
      accent: 'border-l-pink-500',
      titleColor: 'text-pink-400',
      title: t('competences.uxui.title'),
      items: [
        { label: t('competences.uxui.design'),      desc: t('competences.uxui.designDesc') },
        { label: t('competences.uxui.responsive'),  desc: t('competences.uxui.responsiveDesc') },
        { label: t('competences.uxui.experience'),  desc: t('competences.uxui.experienceDesc') },
      ],
    },
    {
      gradient: 'from-teal-500 to-cyan-500',
      accent: 'border-l-teal-500',
      titleColor: 'text-teal-400',
      title: t('competences.transversal.title'),
      items: [
        { label: t('competences.transversal.problem'),    desc: t('competences.transversal.problemDesc') },
        { label: t('competences.transversal.teamwork'),   desc: t('competences.transversal.teamworkDesc') },
        { label: t('competences.transversal.autonomy'),   desc: t('competences.transversal.autonomyDesc') },
        { label: t('competences.transversal.monitoring'), desc: t('competences.transversal.monitoringDesc') },
      ],
    },
  ];

  return (
    <section id="competences" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold section-title gradient-text">
            {t('competences.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border border-l-2 ${cat.accent} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <h3 className={`text-base font-bold mb-4 ${cat.titleColor} uppercase tracking-wide`}>
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 opacity-60 bg-current" style={{ color: 'inherit' }} />
                    <div>
                      <p className="font-semibold text-sm leading-snug" style={{ color: 'var(--text-1)' }}>
                        {item.label}
                      </p>
                      <p className="text-xs leading-relaxed mt-0.5" style={{ color: 'var(--text-3)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
