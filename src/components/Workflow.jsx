
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, List, Video, Edit3, Send, Settings, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { 
    icon: MessageSquare, 
    title: 'Briefing Inicial', 
    description: 'Definimos objetivos claros, audiencia meta y el mensaje central de tu proyecto en una sesión estratégica.' 
  },
  { 
    icon: List, 
    title: 'Preproducción', 
    description: 'Planificación meticulosa: guiones técnicos, búsqueda de locaciones y logística detallada para asegurar el éxito.' 
  },
  { 
    icon: Video, 
    title: 'Producción', 
    description: 'Ejecución cinematográfica con equipos de alta gama (Sony Cinema Line, Drones 4K) y dirección experta.' 
  },
  { 
    icon: Edit3, 
    title: 'Edición Avanzada', 
    description: 'Montaje narrativo, diseño sonoro inmersivo, color grading profesional y efectos visuales sutiles.' 
  },
  { 
    icon: Send, 
    title: 'Entrega + Ajustes', 
    description: 'Presentación del corte final para tu revisión, incluyendo una ronda de perfeccionamiento según tu feedback.' 
  },
  { 
    icon: Settings, 
    title: 'Optimización', 
    description: 'Adaptación de formatos para maximizar el impacto en cada plataforma digital específica.' 
  },
];

const WorkflowCard = ({ step, index, totalSteps }) => {
  const isEven = index % 2 === 0;
  const isLast = index === totalSteps - 1;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Connector Line (Desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-white/10 to-transparent z-0 transform -translate-y-1/2 group-hover:from-cyan-500/50 transition-colors duration-500" />
      )}
      
      {/* Card Content */}
      <div className="relative z-10 h-full p-1 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-cyan-500/20 hover:via-purple-500/20 hover:to-transparent transition-all duration-500">
        <div className="h-full bg-[#0F0F10] rounded-xl p-6 md:p-8 flex flex-col items-start border border-white/5 group-hover:border-white/10 transition-colors">
          
          {/* Step Number Badge */}
          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center font-montserrat font-bold text-white/30 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all shadow-lg z-20">
            {index + 1}
          </div>

          {/* Icon Container */}
          <div className="mb-6 p-3 rounded-lg bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-300">
            <step.icon className="w-8 h-8 text-cyan-400/80 group-hover:text-cyan-400 transition-colors" />
          </div>

          {/* Text Content */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors font-montserrat">
            {step.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            {step.description}
          </p>

          {/* Bottom highlight bar */}
          <div className="mt-auto pt-6 w-full">
            <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Workflow = () => {
  return (
    <section id="proceso" className="relative py-24 md:py-32 bg-[#050508] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase"
          >
            Metodología BWAY
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold font-montserrat mb-6 text-white tracking-tight"
          >
            Nuestro Proceso <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Creativo</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-400 font-light leading-relaxed"
          >
            Transformamos el caos creativo en una producción estructurada. 
            Cada paso está diseñado para garantizar calidad, transparencia y resultados que superan expectativas.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <WorkflowCard 
              key={index} 
              step={step} 
              index={index} 
              totalSteps={steps.length} 
            />
          ))}
        </div>

        {/* Call to Action Mini-Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 text-gray-400 text-sm md:text-base bg-white/5 px-6 py-3 rounded-full border border-white/5 hover:border-cyan-500/30 transition-colors cursor-default">
            <span>¿Listo para elevar tu marca al siguiente nivel?</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
