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
    <section className="py-24 md:py-32 bg-[#050508] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block text-white/50 text-xs font-light tracking-[0.3em] uppercase mb-4">
            Portfolio Visual
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-montserrat text-white tracking-tight leading-[1.1] mb-4">
            Galería en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Movimiento</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light">
            Cada proyecto cuenta una historia única. Descubre la calidad cinematográfica que define nuestro trabajo.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative w-full aspect-[16/9] rounded-xl overflow-hidden group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Minimal Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  className="space-y-4 max-w-3xl"
                >
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-white/90 text-[11px] font-medium tracking-[0.15em] uppercase rounded-md">
                      {currentVideo.category}
                    </span>
                    <div className="flex items-center gap-2 text-white/70 text-sm font-light">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{currentVideo.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-montserrat tracking-tight leading-tight">
                    {currentVideo.title}
                  </h3>

                  <div className="pt-2">
                    <Button
                      onClick={() => {
                        setSelectedVideo(currentVideo);
                        setIsModalOpen(true);
                      }}
                      variant="ghost"
                      className="group/btn px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 rounded-md"
                    >
                      <span className="text-sm font-medium">Ver detalles</span>
                      <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Subtle Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 hover:border-white/20 transition-all duration-300 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100"
            aria-label="Anterior"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 hover:border-white/20 transition-all duration-300 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100"
            aria-label="Siguiente"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Minimal Progress Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex ? 'w-10 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir a video ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl bg-[#050508] border-white/10 p-0 overflow-hidden">
          {selectedVideo && (
            <div className="relative">
              <video
                src={selectedVideo.videoUrl}
                className="w-full h-auto"
                controls
                autoPlay
              />
              <div className="p-8 md:p-10 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-montserrat tracking-tight">
                      {selectedVideo.title}
                    </h3>
                    <div className="flex items-center gap-6 text-white/60 text-sm font-light">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedVideo.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{selectedVideo.duration}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-white/90 text-[11px] font-medium tracking-[0.15em] uppercase rounded-md whitespace-nowrap">
                    {selectedVideo.category}
                  </span>
                </div>
                
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
                    {selectedVideo.description}
                  </p>
                  <p className="text-white/60 text-sm">
                    <span className="font-medium text-white/80">Cliente:</span> {selectedVideo.client}
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
