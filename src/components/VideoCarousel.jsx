import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const videos = [
  {
    id: 1,
    title: "Recap Battle Warriors CR",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Recap+%40battlewarriorscr++2%EF%B8%8F%E2%83%A30%EF%B8%8F%E2%83%A32%EF%B8%8F%E2%83%A33%EF%B8%8F%E2%83%A3+%F0%9F%8E%A5%F0%9F%92%AA%F0%9F%8F%BF%F0%9F%9A%80.mp4",
    duration: "2:19",
    description: "Recap dinámico del evento Battle Warriors CR, capturando la energía y la intensidad del combate. Producción que documenta los momentos más impactantes del evento con edición cinematográfica.",
    date: "2024",
    client: "Battle Warriors CR"
  },
  {
    id: 2,
    title: "Competencia de DownHill",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/AVENTURE+PARK/DH.mp4",
    duration: "1:22",
    description: "Recap cinematográfico de competencia de DownHill, capturando la velocidad, adrenalina y destreza de los ciclistas. Producción dinámica que documenta la intensidad del descenso con edición de ritmo acelerado y tomas impactantes.",
    date: "Enero 2023",
    client: "Adventure Park Heredia"
  },
  {
    id: 3,
    title: "DJ EL FARI - DJ Set Live from Surf Abu Dhabi",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/DJFariEL+FARI+%E2%80%93+Afro+House+DJ+Set+Live+from+Surf+Abu+Dhabi+%7C+Latin+Vibes+%2B+Live+Sax+.mp4",
    duration: "38:38",
    description: "Producción audiovisual del DJ set de El Fari, capturando la energía y el ritmo de la música electrónica. Video dinámico que documenta la conexión entre el artista y la audiencia, con edición sincronizada al beat que transmite la intensidad de la experiencia musical en vivo.",
    date: "Noviembre 2025",
    client: "DJ El Fari"
  },
  {
    id: 4,
    title: "Tapon en FlowFest - Live Performance",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/FLOWFEST/Recap-Tapon.mp4",
    duration: "01:07",
    description: "Producción audiovisual del show en vivo de Tapon en FlowFest, capturando la energía y el carisma del artista nacional. Video dinámico que documenta los momentos más impactantes de la presentación, con edición cinematográfica que refleja la conexión entre el artista y su audiencia.",
    date: "Julio 2023",
    client: "FlowFest"
  },
  {
    id: 5,
    title: "Contenido para Canal 6 - Noticias",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Repretel/Repretel+Recap..mp4",
    duration: "0:55",
    description: "Producción audiovisual profesional para Canal 6, destacando calidad televisiva y contenido de alto nivel. Video que refleja los estándares de excelencia del canal con edición precisa y narrativa visual efectiva.",
    date: "Junio 2022",
    client: "Canal 6"
  },
  {
    id: 6,
    title: "Víctor Ramírez | Físico Culturista",
    category: "Contenido - Redes Sociales",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/ROAD+to+Mr+Olimpia.mp4",
    duration: "2:50",
    description: "Producción audiovisual profesional para Víctor Ramírez, físico culturista. Video que destaca la dedicación, disciplina y estética corporal del atleta, capturando su transformación física con edición cinematográfica que resalta la excelencia y el profesionalismo del culturismo.",
    date: "Julio 2025",
    client: "Victor Ramirez"
  }
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(true);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(true);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isHovered && isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % videos.length);
      }, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isHovered, isPlaying]);

  const currentVideo = videos[activeIndex];

  return (
    <section className="py-32 md:py-40 bg-[#050508] relative overflow-hidden">
      {/* Dynamic Background - Más sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-[15%] right-[8%] w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Section Header - Más minimalista */}
        <motion.div 
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-white/40 text-[10px] font-light tracking-[0.4em] uppercase mb-6">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat text-white tracking-tight leading-[0.95] mb-6">
            Galería en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Movimiento</span>
          </h2>
        </motion.div>

        {/* Carousel Container - Más limpio */}
        <div 
          className="relative w-full aspect-[16/9] rounded-lg overflow-hidden group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {/* Video */}
              <video
                ref={videoRef}
                src={currentVideo.videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              
              {/* Gradient Overlay - Más sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Content Overlay - Más minimalista */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 lg:p-20 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  className="space-y-5 max-w-2xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 bg-white/5 backdrop-blur-sm border border-white/8 text-white/80 text-[10px] font-normal tracking-[0.2em] uppercase rounded-sm">
                      {currentVideo.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs font-light">
                      <Clock className="w-3 h-3" />
                      <span>{currentVideo.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat tracking-tight leading-[1.05]">
                    {currentVideo.title}
                  </h3>

                  <div className="pt-3">
                    <Button
                      onClick={() => {
                        setSelectedVideo(currentVideo);
                        setIsModalOpen(true);
                      }}
                      variant="ghost"
                      className="group/btn px-5 py-2 bg-white/5 hover:bg-white/8 border border-white/8 text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/15 rounded-sm text-xs font-normal tracking-wide"
                    >
                      <span>Ver detalles</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Más discretos */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/8 text-white/80 hover:bg-black/50 hover:border-white/12 transition-all duration-300 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100"
            aria-label="Anterior"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/8 text-white/80 hover:bg-black/50 hover:border-white/12 transition-all duration-300 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100"
            aria-label="Siguiente"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          {/* Progress Indicators - Más sutiles */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-[2px] rounded-full transition-all duration-700 ${
                  idx === activeIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ir a video ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal - Más minimalista */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl bg-[#050508] border-white/8 p-0 overflow-hidden">
          {selectedVideo && (
            <div className="relative">
              <video
                src={selectedVideo.videoUrl}
                className="w-full h-auto"
                controls
                autoPlay
              />
              <div className="p-10 md:p-12 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4 flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-montserrat tracking-tight leading-tight">
                      {selectedVideo.title}
                    </h3>
                    <div className="flex items-center gap-5 text-white/50 text-xs font-light">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{selectedVideo.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{selectedVideo.duration}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-white/5 backdrop-blur-sm border border-white/8 text-white/80 text-[10px] font-normal tracking-[0.2em] uppercase rounded-sm whitespace-nowrap">
                    {selectedVideo.category}
                  </span>
                </div>
                
                <div className="pt-6 border-t border-white/8 space-y-4">
                  <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
                    {selectedVideo.description}
                  </p>
                  <p className="text-white/50 text-xs">
                    <span className="font-normal text-white/70">Cliente:</span> {selectedVideo.client}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoCarousel;
