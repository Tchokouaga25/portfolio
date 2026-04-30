'use client';

import { useI18n } from '@/lib/i18n-context';

export default function CompetencesSection() {
  const { t } = useI18n();
  return (
    <section id="competences" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-br ">
      
      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
        {t('competences.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* CMS & Web */}
      <div className="mb-4">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              {t('competences.cmsWeb.title')}
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.cmsWeb.wordpress')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.cmsWeb.wordpressDesc')}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.cmsWeb.integration')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.cmsWeb.integrationDesc')}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.cmsWeb.seo')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.cmsWeb.seoDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outils & Environnement */}
      <div className="mb-4">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
              {t('competences.toolsEnv.title')}
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.toolsEnv.git')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.toolsEnv.gitDesc')}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.toolsEnv.cicd')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.toolsEnv.cicdDesc')}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.toolsEnv.postman')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.toolsEnv.postmanDesc')}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.toolsEnv.ide')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.toolsEnv.ideDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence Artificielle */}
      <div className="mb-4">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-3">
              {t('competences.ai.title')}
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.ai.generative')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.ai.generativeDesc')}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.ai.api')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.ai.apiDesc')}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.ai.usage')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.ai.usageDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture & Bonnes pratiques */}
      <div className="mb-4">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-3">
              {t('competences.architecture.title')}
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.architecture.restful')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.architecture.restfulDesc')}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.architecture.arch')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.architecture.archDesc')}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Clean Code</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.architecture.cleanCodeDesc') || 'Mise en œuvre des principes SOLID et des bonnes pratiques Clean Code, tests et débogage'}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Performance</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.architecture.performanceDesc') || 'Optimisation des performances et stratégies de scalabilité'}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t('competences.architecture.security') || 'Sécurité'}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">{t('competences.architecture.securityDesc') || 'Revue de code, refactorisation et maintien de la qualité du code'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UX/UI & Design */}
      <div className="mb-4">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-3">
              UX/UI & Design
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Design UX/UI</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Conception d'interfaces intuitives centrées utilisateur</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Responsive</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Principes de design responsive et mobile-first</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Expérience</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Bonnes pratiques d'utilisabilité et d'accessibilité (notions WCAG)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compétences transversales */}
      <div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent mb-3">
              Compétences transversales
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Résolution de problèmes</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Esprit analytique et résolution de problèmes</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Travail d'équipe</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Communication efficace et travail en équipe</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Autonomie</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Autonomie et gestion du temps</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Veille</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Veille technologique, Capacité d'adaptation et apprentissage continu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
}
