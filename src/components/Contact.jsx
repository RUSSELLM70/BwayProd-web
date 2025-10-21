
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, title: 'Ubicación', content: 'Costa Rica', link: null },
    { icon: Phone, title: 'WhatsApp', content: '+506 7047-0555', link: 'https://wa.me/50670470555' },
    { icon: Mail, title: 'Email', content: 'bwayproductions420@gmail.com', link: 'mailto:bwayproductions420@gmail.com' },
    { icon: Clock, title: 'Disponibilidad', content: 'Cobertura Nacional & Internacional', link: null }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.5 } }
  };

  return (
    <section id="contacto" className="section-padding bg-grafito">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="section-title"><span className="lime-underline">Contacto</span></h2>
            <p className="section-subtitle">Estamos listos para hacer realidad tu proyecto. Hablemos.</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-grafito-soft p-6 rounded-lg text-center border border-dark-gray-border group hover:border-lime-accent hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-block bg-surface-highlight p-4 rounded-full border border-dark-gray-border group-hover:border-lime-accent transition-colors mb-4">
                <info.icon className="w-8 h-8 text-lime-accent mx-auto" />
              </div>
              <h3 className="text-lg font-extrabold mb-1 text-white">{info.title}</h3>
              {info.link ? (
                <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-lime-accent transition-colors duration-300 text-sm">
                  {info.content}
                </a>
              ) : (
                <p className="text-text-secondary text-sm">{info.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
  