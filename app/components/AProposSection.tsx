'use client';

import { useI18n } from '@/lib/i18n-context';

export default function AProposSection() {
  const { t } = useI18n();

  return (
    <section id="apropos" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      {/* Carrés décoratifs de fond */}
      <div className="absolute top-10 right-10 w-20 h-20 rotate-12 pointer-events-none" style={{ border: '2px solid rgba(96,165,250,0.7)', boxShadow: '0 0 12px rgba(96,165,250,0.25)' }} />
      <div className="absolute top-24 right-28 w-10 h-10 rotate-45 pointer-events-none" style={{ border: '2px solid rgba(167,139,250,0.7)', boxShadow: '0 0 10px rgba(167,139,250,0.25)' }} />
      <div className="absolute top-10 right-5 w-20 h-20 rotate-12 pointer-events-none" style={{ border: '2px solid rgba(96,165,250,0.55)', boxShadow: '0 0 10px rgba(96,165,250,0.20)' }} />
      <div className="absolute top-24 right-18 w-10 h-10 rotate-45 pointer-events-none" style={{ border: '2px solid rgba(167,139,250,0.60)', boxShadow: '0 0 8px rgba(167,139,250,0.20)' }} />
      <div className="absolute top-1/2 right-6 w-14 h-14 rotate-[20deg] pointer-events-none" style={{ border: '2px solid rgba(96,165,250,0.65)', boxShadow: '0 0 10px rgba(96,165,250,0.22)' }} />
      <div className="absolute bottom-16 left-10 w-16 h-16 rotate-[30deg] pointer-events-none" style={{ border: '2px solid rgba(167,139,250,0.65)', boxShadow: '0 0 12px rgba(167,139,250,0.22)' }} />
      <div className="absolute bottom-32 left-28 w-8 h-8 rotate-12 pointer-events-none" style={{ border: '2px solid rgba(96,165,250,0.60)', boxShadow: '0 0 8px rgba(96,165,250,0.20)' }} />
      <div className="absolute bottom-10 left-10 w-16 h-16 rotate-[30deg] pointer-events-none" style={{ border: '2px solid rgba(167,139,250,0.55)', boxShadow: '0 0 10px rgba(167,139,250,0.20)' }} />
      <div className="absolute bottom-12 left-28 w-8 h-8 rotate-12 pointer-events-none" style={{ border: '2px solid rgba(96,165,250,0.55)', boxShadow: '0 0 8px rgba(96,165,250,0.18)' }} />
      <div className="absolute top-20 left-1/4 w-10 h-10 rotate-45 pointer-events-none" style={{ background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.50)', boxShadow: '0 0 10px rgba(96,165,250,0.20)' }} />
      <div className="absolute bottom-20 right-1/4 w-20 h-20 rotate-[15deg] pointer-events-none" style={{ background: 'rgba(167,139,250,0.10)', border: '1px solid rgba(167,139,250,0.50)', boxShadow: '0 0 14px rgba(167,139,250,0.20)' }} />
      <div className="absolute top-1/3 left-8 w-14 h-14 rotate-[25deg] pointer-events-none" style={{ border: '2px solid rgba(96,165,250,0.50)', boxShadow: '0 0 10px rgba(96,165,250,0.18)' }} />
      {/* Lueurs douces conservées */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold section-title gradient-text">
            {t('apropos.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Texte */}
          <div className="space-y-5 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-1)' }}>
              {t('apropos.parcours')}
            </h3>

            <div
              className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)]"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <p className="text-sm sm:text-base leading-relaxed text-justify" style={{ color: 'var(--text-2)' }}>
                {t('apropos.description1')}
              </p>
            </div>

            <div
              className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.08)]"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <p className="text-sm sm:text-base leading-relaxed text-justify" style={{ color: 'var(--text-2)' }}>
                {t('apropos.description2')}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center animate-fade-in-up-d2">
            <div className="relative max-w-lg w-full">
              {/* Avatar miniature */}
              <div className="absolute -top-4 -right-4 z-20 w-16 h-16 rounded-full ring-4 ring-[var(--bg-surface)] overflow-hidden shadow-xl">
                <img
                  src="/portfolio-assets/images/lis1.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image principale */}
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-[var(--border-color)] shadow-2xl">
                <img
                  src="/portfolio-assets/images/lis1.png"
                  alt="Développement Web Full-Stack"
                  className="w-full h-[380px] sm:h-[440px] object-cover filter brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.04] pointer-events-none" />
              </div>

              {/* Badge flottant */}
              <div
                className="absolute bottom-4 left-4 px-3 py-2 rounded-xl backdrop-blur-sm border shadow-xl"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                <p className="text-xs font-semibold gradient-text">{t('apropos.badge')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
