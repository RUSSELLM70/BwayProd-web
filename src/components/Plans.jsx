import React from 'react';

const Plans = () => {
  return (
    <section id="planes" className="py-20 bg-grafito">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
            <span className="lime-underline">Catálogo de Precios y Servicios</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            En BWAY PROD damos vida a tus ideas, transformándolas en <strong>experiencias visuales</strong> que <strong>inspiran, conectan y convierten</strong>.
          </p>
        </div>

        {/* Paquetes Básicos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-montserrat">Paquetes Básicos</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-stretch">
            {/* Plan Básico 1 */}
            <div className="bg-grafito-soft p-8 rounded-lg border border-dark-gray-border hover:border-lime-accent group flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-montserrat group-hover:text-lime-accent transition-colors duration-300">Básico 1 - Contenido Esencial</h3>
                <p className="text-text-secondary mb-6">Ideal para mantener tu marca activa sin compromiso mensual.</p>
                <div className="mb-6">
                  <p className="text-text-secondary text-sm">Precio sin IVA</p>
                  <p className="text-3xl font-bold text-white">₡120,000</p>
                  <p className="text-text-secondary text-sm">(₡135,600 con IVA)</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-text-secondary flex-grow">
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>1 sesión de fotos (10 editadas)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>1 video recap de hasta 1 minuto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Edición profesional de fotos y video</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Entrega en 5-7 días hábiles</span>
            </li>
        </ul>
              <button 
                onClick={() => window.open('https://wa.me/50670470555?text=Hola%2C%20me%20interesa%20el%20Básico%201', '_blank')}
                className="w-full bg-transparent border-2 border-lime-accent text-lime-accent hover:bg-lime-accent hover:text-grafito font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-accent/30 mt-auto"
              >
                Contratar Ahora
              </button>
      </div>

            {/* Plan Básico 2 */}
            <div className="bg-grafito-soft p-8 rounded-lg border border-dark-gray-border hover:border-lime-accent group flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-accent transition-colors duration-300">Básico 2 - Contenido Pro</h3>
                <p className="text-text-secondary mb-6">El balance perfecto entre constancia y calidad profesional.</p>
                <div className="mb-6">
                  <p className="text-text-secondary text-sm">Precio sin IVA</p>
                  <p className="text-3xl font-bold text-white">₡160,000</p>
                  <p className="text-text-secondary text-sm">(₡180,800 con IVA)</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-text-secondary flex-grow">
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>1 sesión completa integral (foto + video)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>20 fotos editadas profesionalmente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>1 video recap de hasta 2 minutos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Corrección de color avanzada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Música libre de derechos incluida</span>
                </li>
              </ul>
              <button 
                onClick={() => window.open('https://wa.me/50670470555?text=Hola%2C%20me%20interesa%20el%20Básico%202', '_blank')}
                className="w-full bg-transparent border-2 border-lime-accent text-lime-accent hover:bg-lime-accent hover:text-grafito text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-accent/30"
              >
                Contratar Ahora
              </button>
            </div>
          </div>
        </div>

        {/* Paquetes Profesionales */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-montserrat">Paquetes Profesionales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
            {/* Plan Quincenal */}
            <div className="bg-grafito-soft p-8 rounded-lg border border-dark-gray-border hover:border-lime-accent group flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-accent transition-colors duration-300">Plan Quincenal</h3>
                <p className="text-text-secondary mb-6">Ideal para mantener tu marca activa sin compromiso mensual.</p>
                <div className="mb-6">
                  <p className="text-text-secondary text-sm">Precio sin IVA</p>
                  <p className="text-3xl font-bold text-white">₡135,000</p>
                  <p className="text-text-secondary text-sm">(₡152,550 con IVA)</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-text-secondary flex-grow">
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>1 sesión completa (foto + video en la misma jornada)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>1 reel profesional optimizado para Instagram/TikTok</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>10 fotos editadas profesionalmente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Corrección de color avanzada (para fotos y reel)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Entrega en 5 días</span>
                </li>
              </ul>
              <button 
                onClick={() => window.open('https://wa.me/50670470555?text=Hola%2C%20me%20interesa%20el%20Plan%20Quincenal', '_blank')}
                className="w-full bg-transparent border-2 border-lime-accent text-lime-accent hover:bg-lime-accent hover:text-grafito text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-accent/30"
              >
                Contratar Ahora
              </button>
      </div>

            {/* Plan Mensual - Más Popular */}
            <div className="bg-grafito-soft p-8 rounded-lg border-2 border-lime-accent relative group flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/30">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-lime-accent text-grafito px-4 py-1 rounded-full text-sm font-bold">
                  Más Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-accent transition-colors duration-300">Plan Mensual</h3>
                <p className="text-text-secondary mb-6">El balance perfecto entre constancia y calidad profesional.</p>
                <div className="mb-6">
                  <p className="text-text-secondary text-sm">Precio sin IVA</p>
                  <p className="text-3xl font-bold text-white">₡200,000</p>
                  <p className="text-text-secondary text-sm">(₡226,900 con IVA)</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-text-secondary flex-grow">
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>2 sesiones completas al mes (foto + video)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>2 reels editados con corrección de color avanzada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>15 fotos profesionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Edición personalizada en todas las piezas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Optimización de contenido para Instagram/TikTok</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Entrega prioritaria en 5 días</span>
                </li>
              </ul>
              <button 
                onClick={() => window.open('https://wa.me/50670470555?text=Hola%2C%20me%20interesa%20el%20Plan%20Mensual', '_blank')}
                className="w-full bg-transparent border-2 border-lime-accent text-lime-accent hover:bg-lime-accent hover:text-grafito text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-accent/30"
              >
                Contratar Ahora
              </button>
    </div>

            {/* Plan Ejecutivo Premium */}
            <div className="bg-grafito-soft p-8 rounded-lg border border-dark-gray-border hover:border-lime-accent group flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-accent transition-colors duration-300">Plan Ejecutivo Premium</h3>
                <p className="text-text-secondary mb-6">El plan ejecutivo para marcas que buscan máxima presencia y diferenciación.</p>
                <div className="mb-6">
                  <p className="text-text-secondary text-sm">Precio sin IVA</p>
                  <p className="text-3xl font-bold text-white">₡250,000</p>
                  <p className="text-text-secondary text-sm">(₡282,500 con IVA)</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-text-secondary flex-grow">
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>4 sesiones completas al mes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>4 reels profesionales (producción + edición avanzada)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>30 fotos editadas premium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Cobertura con dron (1 vez al mes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Revisión estratégica de contenido (reunión mensual)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lime-accent mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✓</span>
                  <span>Entrega exprés en 3 días</span>
                </li>
              </ul>
              <button 
                onClick={() => window.open('https://wa.me/50670470555?text=Hola%2C%20me%20interesa%20el%20Plan%20Ejecutivo%20Premium', '_blank')}
                className="w-full bg-transparent border-2 border-lime-accent text-lime-accent hover:bg-lime-accent hover:text-grafito text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-accent/30"
              >
                Contratar Ahora
              </button>
            </div>
        </div>
        </div>

        {/* Servicios Individuales */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-montserrat">Servicios por Separado</h3>
          <p className="text-text-secondary text-center mb-8 max-w-3xl mx-auto">
            Todos nuestros servicios individuales pueden combinarse según tus necesidades específicas para crear un paquete personalizado.
          </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-center">
                <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
              <h4 className="text-lg font-bold text-white mb-2">Sesión de fotos</h4>
              <p className="text-text-secondary text-sm mb-4">30 imágenes profesionalmente editadas</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡90,400</p>
                <p className="text-text-secondary text-xs">₡80,000 s/IVA</p>
              </div>
            </div>
            <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
              <h4 className="text-lg font-bold text-white mb-2">Video recap</h4>
              <p className="text-text-secondary text-sm mb-4">Hasta 1 minuto de duración</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡96,000</p>
                <p className="text-text-secondary text-xs">₡85,000 s/IVA</p>
              </div>
            </div>
            <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
              <h4 className="text-lg font-bold text-white mb-2">Reel vertical</h4>
              <p className="text-text-secondary text-sm mb-4">Producción profesional optimizada</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡96,000</p>
                <p className="text-text-secondary text-xs">₡85,000 s/IVA</p>
              </div>
            </div>
            <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
              <h4 className="text-lg font-bold text-white mb-2">Cobertura con dron</h4>
              <p className="text-text-secondary text-sm mb-4">Tomas aéreas de alta calidad</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡101,700</p>
                <p className="text-text-secondary text-xs">₡90,000 s/IVA</p>
              </div>
            </div>
            <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
              <h4 className="text-lg font-bold text-white mb-2">Edición avanzada</h4>
              <p className="text-text-secondary text-sm mb-4">Color grading profesional</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡79,100</p>
                <p className="text-text-secondary text-xs">₡70,000 s/IVA</p>
              </div>
            </div>
            <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
              <h4 className="text-lg font-bold text-white mb-2">Grabación solo tomas</h4>
              <p className="text-text-secondary text-sm mb-4">Grabación profesional sin edición ni postproducción (por hora)</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡56,500</p>
                <p className="text-text-secondary text-xs">₡50,000 s/IVA por hora</p>
              </div>
            </div>
          </div>
        </div>

        {/* Extras Opcionales */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-montserrat">Extras Opcionales</h3>
          <p className="text-text-secondary text-center mb-8 max-w-3xl mx-auto">
            Complementa tu proyecto con estos servicios adicionales para maximizar el impacto y la efectividad de tu contenido audiovisual.
          </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
                  <h4 className="text-lg font-bold text-white mb-2">Locución / voz en off</h4>
              <p className="text-text-secondary text-sm mb-4">Narración profesional para tu contenido</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡39,550</p>
                <p className="text-text-secondary text-xs">₡35,000 s/IVA</p>
              </div>
            </div>
                <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
                  <h4 className="text-lg font-bold text-white mb-2">Subtítulos (1 video)</h4>
              <p className="text-text-secondary text-sm mb-4">Subtítulos profesionales sincronizados</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡13,560</p>
                <p className="text-text-secondary text-xs">₡12,000 s/IVA</p>
              </div>
            </div>
                <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
                  <h4 className="text-lg font-bold text-white mb-2">Persona adicional</h4>
              <p className="text-text-secondary text-sm mb-4">Fotógrafo o videógrafo extra</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡67,800</p>
                <p className="text-text-secondary text-xs">₡60,000 s/IVA</p>
              </div>
            </div>
                <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
                  <h4 className="text-lg font-bold text-white mb-2">Hora extra de producción</h4>
              <p className="text-text-secondary text-sm mb-4">Tiempo adicional de grabación</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡28,250</p>
                <p className="text-text-secondary text-xs">₡25,000 s/IVA</p>
              </div>
            </div>
                <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
                  <h4 className="text-lg font-bold text-white mb-2">Stock footage / licencias</h4>
              <p className="text-text-secondary text-sm mb-4">Material adicional con derechos</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡22,600</p>
                <p className="text-text-secondary text-xs">₡20,000 s/IVA</p>
              </div>
            </div>
                <div className="bg-grafito-soft p-6 rounded-lg border border-dark-gray-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-lime-accent/20 hover:border-lime-accent">
                  <h4 className="text-lg font-bold text-white mb-2">Entrega exprés 48h</h4>
              <p className="text-text-secondary text-sm mb-4">Entrega urgente en 48 horas</p>
              <div className="text-right">
                <p className="text-lime-accent font-bold">₡45,200</p>
                <p className="text-text-secondary text-xs">₡40,000 s/IVA</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Plans;