import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videos = [
  {
    id: 1,
    title: "Campaña de Moda Urbana",
    category: "Reels",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    duration: "0:30"
  },
  {
    id: 2,
    title: "Highlight de Boda",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    duration: "1:00"
  },
  {
    id: 3,
    title: "Video Corporativo Tech",
    category: "Empresas",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    duration: "1:45"
  },
  {
    id: 4,
    title: "Drone View Costa Rica",
    category: "Aéreo",
    image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=2070&auto=format&fit=crop",
    duration: "0:45"
  }
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isHovered]);

  return (
    <section className="py-24 md:py-32 bg-grafito relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <span className="inline-block text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4 opacity-80">
              Nuestro Trabajo
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white tracking-tight leading-tight">
              Galería en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Movimiento</span>
            </h2>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-300 w-12 h-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 text-white transition-all duration-300 w-12 h-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative w-full aspect-[16/9] md:aspect-[2.35/1] rounded-3xl overflow-hidden bg-white/5 border border-white/5 shadow-2xl group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Image */}
              <img 
                src={videos[activeIndex].image} 
                alt={videos[activeIndex].title}
                className="w-full h-full object-cover opacity-90 transition-transform duration-[5000ms] ease-linear scale-100 group-hover:scale-105"
              />
              
              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 opacity-40" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-5xl flex flex-col items-start z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-4">
                     <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full">
                        {videos[activeIndex].category}
                      </span>
                      <div className="h-px w-8 bg-white/40"></div>
                      <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
                        {videos[activeIndex].duration}
                      </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-5xl font-bold text-white font-montserrat tracking-tight leading-none">
                    {videos[activeIndex].title}
                  </h3>
                </motion.div>
              </div>

              {/* Play Button - Centered */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
                  className="pointer-events-auto cursor-pointer group/play"
                >
                    <div className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500">
                        <div className="absolute inset-0 rounded-full border border-white/10 opacity-0 group-hover/play:opacity-100 group-hover/play:scale-125 transition-all duration-700" />
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1 opacity-90 group-hover/play:text-cyan-400 group-hover/play:fill-cyan-400 transition-colors duration-300" />
                    </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Controls */}
           <div className="absolute inset-x-0 bottom-6 px-6 flex justify-end items-center gap-4 md:hidden pointer-events-none z-20">
               <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="pointer-events-auto rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white w-10 h-10 hover:bg-white/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
               <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="pointer-events-auto rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white w-10 h-10 hover:bg-white/20"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
           </div>
        </div>

        {/* Minimal Progress Indicators */}
        <div className="flex justify-center mt-10 gap-2">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1 rounded-full transition-all duration-500 ease-out ${
                  idx === activeIndex ? 'w-16 bg-gradient-to-r from-cyan-400 to-purple-500' : 'w-2 bg-white/10 hover:bg-white/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;