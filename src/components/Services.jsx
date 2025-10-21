
import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, Calendar, Lightbulb, Plane, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollAnimations, { CardReveal, TextReveal, ButtonReveal } from '@/components/ScrollAnimations';

const Services = () => {
  const services = [
    { icon: Video, title: 'Producción y Edición de Video', description: 'Reels, comerciales, videos musicales y corporativos con calidad cinematográfica.' },
    { icon: Camera, title: 'Fotografía Profesional', description: 'Retratos, productos, branding y eventos capturados con excelencia visual.' },
    { icon: Calendar, title: 'Paquetes de Contenido', description: 'Planes mensuales y quincenales para mantener tus redes sociales activas.' },
    { icon: Lightbulb, title: 'Asesorías Creativas', description: 'Consultoría en marca personal y estrategia de contenido digital.' },
    { icon: Plane, title: 'Cobertura Aérea con Dron', description: 'Tomas aéreas espectaculares y videos 360° con Insta360 X4.' },
    { icon: Palette, title: 'Color Grading Cinematográfico', description: 'Edición personalizada con corrección de color profesional.' }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }
  };

  return (
    <section id="servicios" className="section-padding section-bg">
      <div className="container mx-auto px-4">
        <TextReveal delay={0.2}>
          <h2 className="section-title">
            <span className="lime-underline">Nuestros Servicios</span>
          </h2>
          <p className="section-subtitle">
            Soluciones audiovisuales completas para llevar tu marca al siguiente nivel.
          </p>
        </TextReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <CardReveal
              key={index}
              delay={index * 0.1}
              className="bg-surface-highlight p-8 rounded-lg border border-dark-gray-border group cursor-pointer flex flex-col items-center text-center transition-all duration-300 hover:border-lime-accent hover:-translate-y-2 hover:shadow-primary-hover"
            >
              <motion.div 
                className="bg-grafito-soft p-4 rounded-full border border-dark-gray-border group-hover:border-lime-accent transition-colors mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="w-8 h-8 text-lime-accent transition-colors duration-300" />
              </motion.div>
              <h3 className="text-xl font-extrabold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-text-secondary flex-grow text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-lime-accent/5 to-soft-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </CardReveal>
          ))}
        </div>

        <ButtonReveal delay={0.8} className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => window.open('https://wa.me/50670470555?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n', '_blank')}
              variant="default"
              size="lg"
              className="group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-lime-accent to-lime-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Solicita tu Cotización</span>
            </Button>
          </motion.div>
        </ButtonReveal>
      </div>
    </section>
  );
};

export default Services;
  