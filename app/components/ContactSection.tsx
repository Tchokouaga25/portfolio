'use client';

import { useI18n } from '@/lib/i18n-context';

interface ContactSectionProps {
  formData: { name: string; email: string; message: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  formStatus: 'idle' | 'loading' | 'success' | 'error';
}

export default function ContactSection({ formData, handleInputChange, handleSubmit }: ContactSectionProps) {
  const { t } = useI18n();

  const contactInfos = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      bg: 'bg-blue-500/15 text-blue-400',
      labelKey: 'contact.email',
      value: 'claudesandra311@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      bg: 'bg-emerald-500/15 text-emerald-400',
      labelKey: 'contact.telephone',
      value: '+237 6 79 66 24 60 / 6 90 16 00 89',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      bg: 'bg-violet-500/15 text-violet-400',
      labelKey: 'contact.localisation',
      value: 'Cameroun',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold section-title gradient-text">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Infos de contact */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-1)' }}>
                {t('contact.parlons')}
              </h3>
              <p className="leading-relaxed text-sm sm:text-base" style={{ color: 'var(--text-2)' }}>
                {t('contact.description')}
              </p>
            </div>

            {/* Cartes de contact */}
            <div className="space-y-3">
              {contactInfos.map(({ icon, bg, labelKey, value }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${bg}`}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: 'var(--text-3)' }}>
                      {t(labelKey)}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-1)' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CV download */}
            <div className="flex items-start gap-4 pt-2">
              <div className="flex-1">
                <p className="text-sm mb-4" style={{ color: 'var(--text-2)' }}>{t('contact.cv')}</p>
                <a
                  href="/cv.pdf"
                  download="CV_Claude_Sandra_TCHOKOUAGA.pdf"
                  className="inline-flex items-center gap-3 btn-primary px-5 py-3 text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  {t('contact.telechargerCV')}
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div
            className="rounded-2xl p-7 border animate-fade-in-up-d2"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text-1)' }}>
              {t('contact.envoyerMessage')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wide mb-2"
                  style={{ color: 'var(--text-2)' }}
                >
                  {t('contact.nom')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact.nomPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition-all duration-200"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-1)',
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wide mb-2"
                  style={{ color: 'var(--text-2)' }}
                >
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition-all duration-200"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-1)',
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wide mb-2"
                  style={{ color: 'var(--text-2)' }}
                >
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition-all duration-200 resize-none"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-1)',
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-3.5 text-sm flex items-center justify-center gap-2 mt-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {t('contact.envoyer')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
