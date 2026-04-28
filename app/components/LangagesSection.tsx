'use client';

export default function CompetencesSection() {
  const frontendSkills = [
    { name: "React.js", niveau: 85, color: "bg-blue-500", bgColor: "bg-blue-100 dark:bg-blue-900", textColor: "text-blue-600 dark:text-blue-400" },
    { name: "TypeScript", niveau: 75, color: "bg-cyan-500", bgColor: "bg-cyan-100 dark:bg-cyan-900", textColor: "text-cyan-600 dark:text-cyan-400" },
    { name: "Tailwind CSS", niveau: 90, color: "bg-teal-500", bgColor: "bg-teal-100 dark:bg-teal-900", textColor: "text-teal-600 dark:text-teal-400" },
    { name: "Vue.js 3", niveau: 70, color: "bg-green-500", bgColor: "bg-green-100 dark:bg-green-900", textColor: "text-green-600 dark:text-green-400" }
  ];

  const backendSkills = [
    { name: "Java 17", niveau: 80, color: "bg-red-500", bgColor: "bg-red-100 dark:bg-red-900", textColor: "text-red-600 dark:text-red-400" },
    { name: "Spring Boot", niveau: 85, color: "bg-green-500", bgColor: "bg-green-100 dark:bg-green-900", textColor: "text-green-600 dark:text-green-400" },
    { name: "Node.js", niveau: 75, color: "bg-yellow-500", bgColor: "bg-yellow-100 dark:bg-yellow-900", textColor: "text-yellow-600 dark:text-yellow-400" },
    { name: "REST API", niveau: 90, color: "bg-purple-500", bgColor: "bg-purple-100 dark:bg-purple-900", textColor: "text-purple-600 dark:text-purple-400" }
  ];

  const databaseDevOpsSkills = [
    { name: "MySQL", niveau: 85, color: "bg-blue-500", bgColor: "bg-blue-100 dark:bg-blue-900", textColor: "text-blue-600 dark:text-blue-400" },
    { name: "PostgreSQL", niveau: 80, color: "bg-green-500", bgColor: "bg-green-100 dark:bg-green-900", textColor: "text-green-600 dark:text-green-400" },
    { name: "Docker", niveau: 75, color: "bg-blue-500", bgColor: "bg-blue-100 dark:bg-blue-900", textColor: "text-blue-600 dark:text-blue-400" },
    { name: "Git/GitHub", niveau: 90, color: "bg-orange-500", bgColor: "bg-orange-100 dark:bg-orange-900", textColor: "text-orange-600 dark:text-orange-400" }
  ];

  const outilsSkills = [
    { name: "VS Code", niveau: 95, color: "bg-gray-500", bgColor: "bg-gray-100 dark:bg-gray-700", textColor: "text-gray-600 dark:text-gray-400" },
    { name: "Git", niveau: 90, color: "bg-red-500", bgColor: "bg-red-100 dark:bg-red-900", textColor: "text-red-600 dark:text-red-400" },
    { name: "Figma", niveau: 70, color: "bg-purple-500", bgColor: "bg-purple-100 dark:bg-purple-900", textColor: "text-purple-600 dark:text-purple-400" },
    { name: "IA Générative", niveau: 85, color: "bg-yellow-500", bgColor: "bg-yellow-100 dark:bg-yellow-900", textColor: "text-yellow-600 dark:text-yellow-400" }
  ];

  const SkillCard = ({ skill }: { skill: any }) => (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 ${skill.bgColor} rounded-lg flex items-center justify-center mr-3`}>
          <span className={`${skill.textColor} font-bold text-sm`}>
            {skill.name.substring(0, 2).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm text-gray-900 dark:text-white">{skill.name}</h4>
          <div className="flex items-center mt-1">
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className={`${skill.color} h-2 rounded-full`} style={{width: `${skill.niveau}%`}}></div>
            </div>
            <span className="ml-2 text-xs text-gray-600 dark:text-gray-400">{skill.niveau}%</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="competences" className="py-16 bg-white dark:bg-gray-900">
      <h2 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-lg sm:text-xl font-bold mb-12 text-gray-900 dark:text-white">Mes Compétences Techniques</h2>
        
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        
        {/* Frontend */}
        <div className="mb-12">
          <h3 className="text-base font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Développement Frontend</h3>
          <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-4 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-12">
          <h3 className="text-base font-bold mb-8 text-center text-green-600 dark:text-green-400">Développement Backend</h3>
          <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-4 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Base de données & DevOps */}
        <div className="mb-12">
          <h3 className="text-base font-bold mb-8 text-center text-purple-600 dark:text-purple-400">Base de Données & DevOps</h3>
          <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-4 gap-6">
            {databaseDevOpsSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Outils & Autres */}
        <div>
          <h3 className="text-base font-bold mb-8 text-center text-orange-600 dark:text-orange-400">Outils & Technologies</h3>
          <div className="grid grid-col-1 md:grid-col-2 lg:grid-col-4 gap-6">
            {outilsSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
