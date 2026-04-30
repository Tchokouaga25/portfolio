'use client';

export default function AProposSection() {
  return (
    <section id="apropos" className="py-10 bg-gradient-to-br from-blue-300 to-whrite-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">À Propos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mon Parcours</h3>
            <p className="text-sm sm:text-base mb-4 p-6 text-gray-600 bg-white leading-relaxed text-justify rounded-lg shadow-2xl transform rotate-y-12 transition-all duration-300 hover:rotate-y-6 hover:scale-105">
              Développeur Full‑stack passionné, je transforme des idées en solutions numériques performantes et évolutives. 
              Mon expertise couvre Java/Spring Boot et Laravel pour des backends robustes, ainsi que React, Tailwind CSS et WordPress 
              pour des interfaces modernes et intuitives. 
              
            </p>
            <p className="text-sm sm:text-base text-gray-600 p-6 bg-white leading-relaxed text-justify rounded-lg shadow-lg transform rotate-y-12 transition-all duration-300 hover:rotate-y-6 hover:scale-105">
              J'intègre l'IA générative dans mon processus afin d'optimiser la productivité et d'apporter une valeur ajoutée à chaque projet. 
              Disponible pour relever de nouveaux défis, je m'engage à créer des expériences utilisateur remarquables, 
              alliant fiabilité, créativité et excellence technique.
            </p>

          </div>
          <div className="flex justify-center">
            <div className="relative max-w-lg w-full">
              {/* Avatar souriant */}
              <div className="absolute top-5 right-8 z-20">
                <div className="w-18 h-18 bg-gradient-to-br from-blue-400 to-whrite-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <img 
                    src="/portfolio-assets/images/lis1.png" 
                    alt="Avatar souriant" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Image avec effets 3D */}
              <div className="relative preserve-3d perspective-1000">
                <img 
                  src="/portfolio-assets/images/lis1.png" 
                  alt="Développement Web Full-Stack" 
                  className="w-full h-110 filter brightness-125"
                />
                
                {/* Effet 3D supplémentaire */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
