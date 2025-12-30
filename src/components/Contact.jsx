
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'WhatsApp',
      content: '+506 7047-0555',
      link: 'https://wa.me/50670470555',
      action: 'Enviar mensaje',
      delay: 0.1
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Correo Electrónico',
      content: 'booking@bwayprod.com',
      link: 'mailto:booking@bwayprod.com',
      action: 'Escribir ahora',
      delay: 0.2
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      content: 'San José, Costa Rica',
      link: 'https://maps.google.com/?q=San+Jose,Costa+Rica',
      action: 'Ver en mapa',
      delay: 0.3
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Redes Sociales',
      content: '@bwayprod',
      link: 'https://instagram.com/bwayprod',
      action: 'Seguir',
      delay: 0.4
    }
  ];

  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden bg-[#050508]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-medium text-cyan-300 uppercase tracking-widest">Contacto Directo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat mb-6 text-white text-shadow-lg tracking-tight">
              Hagamos Realidad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Tu Visión</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Estamos listos para escuchar tus ideas. Conecta con nosotros a través de tu canal preferido y comencemos a trabajar juntos.
            </p>
          </motion.div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: info.delay }}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                {info.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
              <p className="text-gray-400 mb-8 text-sm font-light tracking-wide">{info.content}</p>
              
              <div className="mt-auto flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                {info.action} <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA / Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="p-[1px] rounded-full bg-gradient-to-r from-cyan-500/50 to-purple-500/50 shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            <div className="bg-[hsl(var(--grafito))] rounded-full p-2">
               <Button
                variant="pill" 
                size="lg"
                className="px-10 py-6 text-base md:text-lg h-auto min-w-[280px]"
                onClick={() => window.open('https://wa.me/50670470555', '_blank')}
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Chatear con un Productor
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <Clock className="w-4 h-4 text-cyan-500" />
            <span>Horario de atención: Lun - Vie, 9:00 AM - 7:00 PM</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
