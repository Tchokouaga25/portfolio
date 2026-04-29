'use client';

export default function CompetencesSection() {
  return (
    <section id="competences" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
        Compétences Techniques
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* CMS & Web */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              CMS & Web
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">WordPress</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Développement et personnalisation de sites web avec WordPress</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Intégration Web</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Personnalisation de thèmes et plugins</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Optimisation SEO</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Création de solutions web optimisées pour le SEO et les performances</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outils & Environnement */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">
              Outils & Environnement
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Git & GitHub/GitLab</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Gestion de versions avec Git (workflows GitHub / GitLab)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Docker</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Notions d'intégration et de déploiement continus (CI/CD)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Postman</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Tests et documentation d'API avec Postman</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">IDE</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Environnements de développement : VS Code / IntelliJ IDEA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligence Artificielle */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-3">
              Intelligence Artificielle
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">IA Générative</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Intégration d'outils d'IA générative dans les workflows de développement</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">API IA</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Expérience dans l'intégration d'API de services d'intelligence artificielle</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Utilisation de l'IA</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Utilisation de l'IA pour : Génération et optimisation du code, Prototypage rapide, Automatisation des tâches répétitives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture & Bonnes pratiques */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-3">
              Architecture & Bonnes pratiques
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">API RESTful</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Maîtrise des concepts d'architecture microservices</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Architecture</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Application de l'architecture MVC et de modèles de conception modulaires</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Clean Code</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Mise en œuvre des principes SOLID et des bonnes pratiques Clean Code, tests et débogage</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Performance</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Optimisation des performances et stratégies de scalabilité</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">Sécurité</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Revue de code, refactorisation et maintien de la qualité du code</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UX/UI & Design */}
      <div className="mb-12">
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
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
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
