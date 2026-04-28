'use client';

export default function ObjectifsSection() {
  const objectifs = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: "from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800",
      bgColor: "bg-blue-500",
      title: "Excellence Technique",
      description: "Maîtriser les dernières technologies et best practices pour livrer des solutions de haute qualité, performantes et évolutives."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      ),
      color: "from-green-50 to-green-100 dark:from-green-900 dark:to-green-800",
      bgColor: "bg-green-500",
      title: "Innovation Continue",
      description: "Explorer de nouvelles approches et technologies pour créer des solutions innovantes qui répondent aux besoins évolutifs des utilisateurs."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800",
      bgColor: "bg-purple-500",
      title: "Collaboration",
      description: "Travailler efficacement en équipe pour partager connaissances et expertise, et créer ensemble des produits exceptionnels."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
        </svg>
      ),
      color: "from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800",
      bgColor: "bg-yellow-500",
      title: "Croissance Personnelle",
      description: "Développer continuellement mes compétences et connaissances pour rester à la pointe de l'industrie et offrir une valeur ajoutée."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
        </svg>
      ),
      color: "from-red-50 to-red-100 dark:from-red-900 dark:to-red-800",
      bgColor: "bg-red-500",
      title: "Impact Utilisateur",
      description: "Créer des applications qui améliorent réellement la vie des utilisateurs en répondant à leurs besoins de manière intuitive et efficace."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      ),
      color: "from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800",
      bgColor: "bg-indigo-500",
      title: "Leadership Technique",
      description: "Développer mes compétences en leadership pour guider les équipes techniques et prendre des décisions architecturales éclairées."
    }
  ];

  return (
    <section id="objectifs" className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Mes Objectifs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectifs.map((objectif, index) => (
            <div key={index} className={`bg-gradient-to-br ${objectif.color} rounded-xl p-6 hover:shadow-lg transition-shadow`}>
              <div className={`w-8 h-8 ${objectif.bgColor} rounded-full flex items-center justify-center mb-4`}>
                {objectif.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{objectif.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{objectif.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
