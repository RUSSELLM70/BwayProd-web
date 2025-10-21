
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filters = ['all', 'video', 'foto', 'dron', 'branding'];

  const portfolioItems = [
    { id: 1, type: 'video', title: 'Video Musical', category: 'video', thumbnail: 'Professional music video production with artist performing', imgSrc: 'https://picsum.photos/800/600?random=1' },
    { id: 2, type: 'foto', title: 'Sesión de Producto', category: 'foto', thumbnail: 'Professional product photography with dramatic lighting', imgSrc: 'https://picsum.photos/800/600?random=2' },
    { id: 3, type: 'dron', title: 'Toma Aérea', category: 'dron', thumbnail: 'Aerial drone shot of Costa Rica landscape', imgSrc: 'https://picsum.photos/800/600?random=3' },
    { id: 4, type: 'branding', title: 'Branding Corporativo', category: 'branding', thumbnail: 'Corporate branding photoshoot in modern office', imgSrc: 'https://picsum.photos/800/600?random=4' },
    { id: 5, type: 'video', title: 'Comercial', category: 'video', thumbnail: 'Commercial video production behind the scenes', imgSrc: 'https://picsum.photos/800/600?random=5' },
    { id: 6, type: 'foto', title: 'Retrato Profesional', category: 'foto', thumbnail: 'Professional portrait photography with dramatic lighting', imgSrc: 'https://picsum.photos/800/600?random=6' },
    { id: 7, type: 'video', title: 'Evento Corporativo', category: 'video', thumbnail: 'Corporate event video production', imgSrc: 'https://picsum.photos/800/600?random=7' },
    { id: 8, type: 'foto', title: 'Fotografía Gastronómica', category: 'foto', thumbnail: 'Professional food photography', imgSrc: 'https://picsum.photos/800/600?random=8' },
    { id: 9, type: 'dron', title: 'Vista Panorámica', category: 'dron', thumbnail: 'Panoramic aerial view with drone', imgSrc: 'https://picsum.photos/800/600?random=9' }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedFilter);

  return (
    <section id="portafolio" className="section-padding bg-grafito">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title"><span className="lime-underline">Portafolio Audiovisual</span></h2>
          <p className="section-subtitle">
            Explora la calidad y creatividad de nuestros proyectos.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              variant={selectedFilter === filter ? 'default' : 'ghost'}
              className="capitalize !text-sm !font-medium"
              size="sm"
            >
              {filter === 'all' ? 'Todos' : filter}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3] border border-dark-gray-border"
                onClick={() => setSelectedItem(item)}
              >
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={item.thumbnail} src={item.imgSrc} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-lg font-extrabold text-white mb-1">{item.title}</h3>
                  <span className="text-sm uppercase font-semibold text-lime-accent">{item.category}</span>
                </div>
                <div className="absolute top-4 right-4 bg-grafito/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === 'video' ? <Play className="w-5 h-5 text-white" /> : <Maximize className="w-5 h-5 text-white" />}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-grafito/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setSelectedItem(null)} className="absolute -top-10 right-0 text-text-secondary hover:text-white transition-colors" aria-label="Cerrar">
                  <X className="w-8 h-8" />
                </button>
                <div className="bg-grafito-soft rounded-lg overflow-hidden border border-dark-gray-border">
                  <img className="w-full h-auto max-h-[80vh] object-contain" alt={selectedItem.thumbnail} src={selectedItem.imgSrc} />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-extrabold text-white mb-1">{selectedItem.title}</h3>
                  <span className="text-lime-accent uppercase text-sm font-semibold tracking-wider">{selectedItem.category}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
  