
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ZoomIn, Play, ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

// Categories for filtering
const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'video', label: 'Producción Video' },
  { id: 'photography', label: 'Fotografía' },
  { id: 'branding', label: 'Branding' },
  { id: 'events', label: 'Eventos' }
];

// Expanded Mock Data for Portfolio Items (30+ items)
const portfolioItems = [
  // Original Items
  {
    id: 1,
    title: "Neon Cyberpunk City",
    category: "video",
    size: "large",
    type: "video",
    description: "Campaña visual futurista para lanzamiento de marca de ropa urbana.",
    image: <img alt="Neon city street at night with cyberpunk vibes" src="https://images.unsplash.com/photo-1671877298381-2aeaa4a45b96" />
  },
  {
    id: 2,
    title: "Minimalist Architecture",
    category: "photography",
    size: "tall",
    type: "image",
    description: "Serie fotográfica de arquitectura moderna en blanco y negro.",
    image: <img alt="Minimalist concrete architecture building" src="https://images.unsplash.com/photo-1525010104492-8c4f8f1be685" />
  },
  {
    id: 3,
    title: "Eco-Friendly Brand Identity",
    category: "branding",
    size: "normal",
    type: "image",
    description: "Rebranding completo para startup de productos sostenibles.",
    image: <img alt="Eco friendly product branding mockup" src="https://images.unsplash.com/photo-1555666672-ae20ed129f17" />
  },
  {
    id: 4,
    title: "Music Festival Aftermovie",
    category: "events",
    size: "wide",
    type: "video",
    description: "Cobertura completa y edición dinámica para festival de música electrónica.",
    image: <img alt="Music festival crowd with laser lights" src="https://images.unsplash.com/photo-1619229725894-47c4b2382764" />
  },
  {
    id: 5,
    title: "Culinary Excellence",
    category: "photography",
    size: "normal",
    type: "image",
    description: "Fotografía gastronómica para restaurante de alta cocina.",
    image: <img alt="Gourmet dish plating" src="https://images.unsplash.com/photo-1681270496598-13c5365730c8" />
  },
  {
    id: 6,
    title: "Tech Startup Promo",
    category: "video",
    size: "normal",
    type: "video",
    description: "Video corporativo explicando nueva tecnología blockchain.",
    image: <img alt="Modern tech office collaboration" src="https://images.unsplash.com/photo-1553632168-eb4237620881" />
  },
  {
    id: 7,
    title: "Luxury Real Estate",
    category: "video",
    size: "tall",
    type: "video",
    description: "Tour virtual cinematográfico de mansión en la costa.",
    image: <img alt="Modern luxury villa with pool" src="https://images.unsplash.com/photo-1580364545803-ab1e5ca8673a" />
  },
  {
    id: 8,
    title: "Fashion Editorial",
    category: "photography",
    size: "wide",
    type: "image",
    description: "Sesión editorial para revista de moda internacional.",
    image: <img alt="High fashion model posing" src="https://images.unsplash.com/photo-1641236210747-48bc43e4517f" />
  },
  
  // New Items (9-30)
  {
    id: 9,
    title: "Urban Streetwear",
    category: "branding",
    size: "normal",
    type: "image",
    description: "Diseño de identidad visual para marca de ropa urbana.",
    image: <img alt="Streetwear clothing flatlay" src="https://images.unsplash.com/photo-1608680480325-d3ec3cdf7e60" />
  },
  {
    id: 10,
    title: "Corporate Conference 2024",
    category: "events",
    size: "normal",
    type: "video",
    description: "Cobertura de evento corporativo internacional.",
    image: <img alt="Corporate conference speaker" src="https://images.unsplash.com/photo-1531747640578-31a6ef239ca6" />
  },
  {
    id: 11,
    title: "Nature Documentary",
    category: "video",
    size: "large",
    type: "video",
    description: "Documental sobre la biodiversidad de Costa Rica.",
    image: <img alt="Rainforest waterfall" src="https://images.unsplash.com/photo-1598302741079-f78eb8f89ae8" />
  },
  {
    id: 12,
    title: "Coffee Culture",
    category: "photography",
    size: "normal",
    type: "image",
    description: "Serie sobre el proceso del café de especialidad.",
    image: <img alt="Barista pouring latte art" src="https://images.unsplash.com/photo-1610324566780-38beb64916dc" />
  },
  {
    id: 13,
    title: "Automotive Launch",
    category: "video",
    size: "wide",
    type: "video",
    description: "Spot comercial para nuevo vehículo eléctrico.",
    image: <img alt="Electric car on road" src="https://images.unsplash.com/photo-1686846045215-d2033acdccc1" />
  },
  {
    id: 14,
    title: "Art Gallery Opening",
    category: "events",
    size: "tall",
    type: "image",
    description: "Fotografía de inauguración de galería de arte contemporáneo.",
    image: <img alt="Art gallery interior" src="https://images.unsplash.com/photo-1694401460733-4ad34e3e5a41" />
  },
  {
    id: 15,
    title: "Organic Skincare",
    category: "branding",
    size: "normal",
    type: "image",
    description: "Packaging design para línea de cosmética natural.",
    image: <img alt="Skincare bottles mockup" src="https://images.unsplash.com/photo-1695972235639-7af9a9a6d2d5" />
  },
  {
    id: 16,
    title: "Fitness Lifestyle",
    category: "video",
    size: "normal",
    type: "video",
    description: "Contenido para redes sociales de gimnasio boutique.",
    image: <img alt="Person lifting weights" src="https://images.unsplash.com/photo-1578229353624-a4007142da75" />
  },
  {
    id: 17,
    title: "Wedding Story",
    category: "photography",
    size: "wide",
    type: "image",
    description: "Fotografía documental de boda en la playa.",
    image: <img alt="Wedding couple on beach" src="https://images.unsplash.com/photo-1523498634936-efac95d407ca" />
  },
  {
    id: 18,
    title: "Craft Beer Label",
    category: "branding",
    size: "normal",
    type: "image",
    description: "Ilustración y diseño para etiquetas de cerveza artesanal.",
    image: <img alt="Craft beer bottles" src="https://images.unsplash.com/photo-1700152685306-2e891acd4de2" />
  },
  {
    id: 19,
    title: "Interior Design Portfolio",
    category: "photography",
    size: "tall",
    type: "image",
    description: "Fotografía de interiores para estudio de diseño.",
    image: <img alt="Modern living room" src="https://images.unsplash.com/photo-1702295304723-10d36c22070c" />
  },
  {
    id: 20,
    title: "Music Video Production",
    category: "video",
    size: "large",
    type: "video",
    description: "Videoclip musical con efectos visuales avanzados.",
    image: <img alt="Band performing in studio" src="https://images.unsplash.com/photo-1598520061272-5beaa91735a0" />
  },
  {
    id: 21,
    title: "Restaurant Menu",
    category: "branding",
    size: "normal",
    type: "image",
    description: "Diseño de menú y papelería para bistró francés.",
    image: <img alt="Restaurant menu design" src="https://images.unsplash.com/photo-1676910490328-2a4d7e5e747c" />
  },
  {
    id: 22,
    title: "Charity Gala",
    category: "events",
    size: "normal",
    type: "video",
    description: "Video resumen de gala benéfica anual.",
    image: <img alt="Formal gala dinner" src="https://images.unsplash.com/photo-1690757831439-ecb4c4e4c4b3" />
  },
  {
    id: 23,
    title: "Product Unboxing",
    category: "video",
    size: "normal",
    type: "video",
    description: "Experiencia de unboxing para producto tecnológico.",
    image: <img alt="Tech product unboxing" src="https://images.unsplash.com/photo-1670556518181-f31869c8f8f1" />
  },
  {
    id: 24,
    title: "Portrait Series",
    category: "photography",
    size: "tall",
    type: "image",
    description: "Retratos artísticos en estudio con luz natural.",
    image: <img alt="Artistic portrait" src="https://images.unsplash.com/photo-1548632094-c36c854eb86a" />
  },
  {
    id: 25,
    title: "App Interface Design",
    category: "branding",
    size: "wide",
    type: "image",
    description: "UI/UX design para aplicación fintech.",
    image: <img alt="Mobile app screens" src="https://images.unsplash.com/photo-1701680853149-1b5240a95eeb" />
  },
  {
    id: 26,
    title: "Travel Vlog Editing",
    category: "video",
    size: "normal",
    type: "video",
    description: "Edición dinámica para canal de viajes en YouTube.",
    image: <img alt="Traveler with backpack" src="https://images.unsplash.com/photo-1696790575656-d6bc582e8621" />
  },
  {
    id: 27,
    title: "Jewelry Photography",
    category: "photography",
    size: "normal",
    type: "image",
    description: "Macro fotografía para catálogo de joyería fina.",
    image: <img alt="Gold ring macro" src="https://images.unsplash.com/photo-1620732065911-5cb69f82013d" />
  },
  {
    id: 28,
    title: "Sports Event Coverage",
    category: "events",
    size: "wide",
    type: "video",
    description: "Transmisión y highlights de torneo de surf.",
    image: <img alt="Surfer riding wave" src="https://images.unsplash.com/photo-1474402656496-6641a08dab21" />
  },
  {
    id: 29,
    title: "Podcast Branding",
    category: "branding",
    size: "normal",
    type: "image",
    description: "Identidad visual completa para serie de podcast.",
    image: <img alt="Podcast microphone setup" src="https://images.unsplash.com/photo-1695559564415-932c1c7d2d21" />
  },
  {
    id: 30,
    title: "Aerial Cinematography",
    category: "video",
    size: "large",
    type: "video",
    description: "Tomas aéreas con dron para documental turístico.",
    image: <img alt="Drone view of coastline" src="https://images.unsplash.com/photo-1661806328107-c4b94f4773c1" />
  }
];

const ITEMS_PER_PAGE = 9;

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(ITEMS_PER_PAGE);

  // Filter items based on category
  const filteredItems = useMemo(() => {
    const items = activeCategory === 'all' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === activeCategory);
    return items;
  }, [activeCategory]);

  // Determine items to display based on pagination
  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleItemsCount);
  }, [filteredItems, visibleItemsCount]);

  // Handle category change
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setVisibleItemsCount(ITEMS_PER_PAGE); // Reset pagination on category change
  };

  // Load more function
  const handleLoadMore = () => {
    setVisibleItemsCount(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <section className="min-h-screen bg-[#050508] relative overflow-hidden pb-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 pt-12 md:pt-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              EXPLORA NUESTRO LEGADO VISUAL
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat text-white tracking-tight leading-none mb-6 drop-shadow-lg">
              Visiones <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Cautivadoras
              </span>
            </h1>
            <p className="text-white/80 text-lg font-light max-w-lg leading-relaxed drop-shadow-md">
              Cada proyecto es una declaración: fusionamos la maestría técnica con la pasión narrativa para transformar ideas en experiencias visuales inolvidables.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-end"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-md",
                  activeCategory === cat.id
                    ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "bg-black/30 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                )}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-white/[0.02]",
                  item.size === "large" && "md:col-span-2 md:row-span-2",
                  item.size === "wide" && "md:col-span-2",
                  item.size === "tall" && "md:row-span-2",
                )}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Container */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                   <div className="w-full h-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
                     {item.image}
                   </div>
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-grafito/90 via-grafito/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-y-4 md:group-hover:translate-y-0">
                  <div className="transform transition-transform duration-300">
                    <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2 block">
                      {categories.find(c => c.id === item.category)?.label}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors text-xs uppercase tracking-widest font-semibold">
                      <span>Ver Proyecto</span>
                      {item.type === 'video' ? <Play className="w-3 h-3 fill-current" /> : <ZoomIn className="w-3 h-3" />}
                    </div>
                  </div>
                </div>

                {/* Hover Icon (Center) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 border border-white/20">
                  {item.type === 'video' ? (
                     <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  ) : (
                     <ZoomIn className="w-6 h-6 text-white" />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleItemsCount < filteredItems.length && (
          <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              onClick={handleLoadMore}
              className="group border-white/10 bg-white/5 hover:bg-white/10 text-white hover:text-cyan-400 transition-all duration-300 rounded-full px-8 py-6"
            >
              <span className="mr-2">Ver Más Proyectos</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-grafito/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-grafito rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/20 text-white/70 hover:text-white hover:bg-black/40 transition-all backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Media Section */}
              <div className="w-full md:w-2/3 h-[40vh] md:h-auto relative bg-black">
                 <div className="w-full h-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
                    {selectedItem.image}
                 </div>
                 {/* Video Indicator if video */}
                 {selectedItem.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer hover:bg-black/40 transition-colors">
                        <div className="w-20 h-20 rounded-full bg-cyan-500/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform">
                             <Play className="w-8 h-8 fill-white ml-1" />
                        </div>
                    </div>
                 )}
              </div>

              {/* Info Section */}
              <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col justify-center bg-grafito border-l border-white/5 overflow-y-auto max-h-[50vh] md:max-h-full">
                <div className="mb-auto">
                   <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-4 border border-cyan-500/20">
                    {categories.find(c => c.id === selectedItem.category)?.label}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {selectedItem.title}
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    {selectedItem.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-t border-white/10">
                    <span className="text-white/40 text-sm">Cliente</span>
                    <span className="text-white font-medium">Confidencial</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-t border-white/10">
                    <span className="text-white/40 text-sm">Servicio</span>
                    <span className="text-white font-medium capitalize">{selectedItem.category}</span>
                  </div>
                   <div className="flex justify-between items-center py-4 border-t border-white/10 border-b mb-8">
                    <span className="text-white/40 text-sm">Fecha</span>
                    <span className="text-white font-medium">2024</span>
                  </div>

                  <Button className="w-full" variant="hero">
                    Solicitar Cotización Similar
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
