
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-32 bg-[#050508] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <span className="inline-block text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6 opacity-80">
              ¿Listo para empezar?
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-white tracking-tight leading-tight mb-6">
              Creamos experiencias <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Visuales Únicas</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Transforma tu visión en realidad. Hablemos sobre tu próximo proyecto y llevemos tu marca al siguiente nivel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="hero" 
              className="w-full sm:w-auto min-w-[200px] h-14 text-sm md:text-base font-semibold tracking-wide shadow-cyan-500/20 hover:shadow-cyan-500/40"
              onClick={() => window.open('https://wa.me/50670470555', '_blank')}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="w-full sm:w-auto min-w-[200px] h-14 text-sm md:text-base font-medium tracking-wide border border-white/10 hover:bg-white/5 hover:border-white/20"
              onClick={() => navigate('/contacto')}
            >
              Contáctanos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
