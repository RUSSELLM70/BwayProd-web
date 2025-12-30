
import React, { useState } from 'react';
import { 
  Check, 
  Calendar as CalendarIcon, 
  Info, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Clock, 
  Camera, 
  Music, 
  Users, 
  Filter,
  Sparkles,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

// --- Data Definitions ---

const socialMediaPlans = [
  {
    id: 'social-1',
    name: 'Básico 1 – Contenido Esencial',
    price: '₡165,000',
    priceWithIVA: '₡186,450 (IVA 13%)',
    description: 'Perfecto para lanzar una marca o actualizar redes. Recomendado para primera producción profesional.',
    features: [
      '1 video vertical optimizado para redes (9:16)',
      'Sesión fotográfica (1 hora)',
      '10 fotos profesionales editadas',
      'Edición profesional',
    ],
    highlight: false,
    category: 'social'
  },
  {
    id: 'social-2',
    name: 'Básico 2 – Contenido Pro',
    price: '₡215,000',
    priceWithIVA: '₡242,950 (IVA 13%)',
    description: 'Mejor relación valor–resultado.',
    features: [
      '1 reel vertical',
      '1 video profesional horizontal',
      '20 fotos profesionales editadas',
      '2 horas de sesión',
      'Corrección de color avanzada',
      'Textos simples para redes (opcional)',
    ],
    highlight: true,
    category: 'social'
  },
];

const professionalPlans = [
  {
    id: 'prof-1',
    name: 'Plan Quincenal – Presencia Constante',
    price: '₡185,000',
    priceWithIVA: '₡209,050 (IVA 13%)',
    description: 'Ahorro frente a contratación individual.',
    features: [
      '1 video profesional',
      '1 reel vertical',
      '10 fotos editadas',
      'Corrección de color',
      'Calendario sugerido de publicación',
      'Entrega estimada: 5 días hábiles',
    ],
    highlight: false,
    category: 'professional'
  },
  {
    id: 'prof-2',
    name: 'Plan Mensual – Marca Activa',
    price: '₡290,000',
    priceWithIVA: '₡327,700 (IVA 13%)',
    description: 'Plan más solicitado. Ideal para crecimiento sostenido.',
    features: [
      '2 videos profesionales horizontales',
      '2 reels verticales',
      '15 fotos editadas',
      'Edición avanzada',
      'Coherencia visual entre piezas del mes',
      'Optimización multiplataforma',
      'Entrega estimada: 5 días hábiles',
    ],
    highlight: true,
    category: 'professional'
  },
  {
    id: 'prof-3',
    name: 'Plan Ejecutivo Premium – Marca Líder',
    price: '₡385,000',
    priceWithIVA: '₡435,050 (IVA 13%)',
    description: 'Pensado para marcas que buscan liderar.',
    features: [
      '4 videos profesionales',
      '4 reels verticales',
      '30 fotos editadas',
      'Uso de múltiples encuadres y movimientos (1 solo operador)',
      'Dron incluido si se requiere',
      'Dirección artística',
      'Prioridad en agenda',
      'Entrega estimada: 3 días hábiles',
    ],
    highlight: false,
    category: 'professional'
  },
];

const eventPlans = [
  {
    id: 'evt-1',
    name: 'Evento Bronce – Recuerdos Esenciales',
    price: '₡135,000',
    priceWithIVA: '₡152,550 (IVA 13%)',
    features: [
      'Cobertura continua del evento',
      '30 fotos profesionales editadas',
      'Video recap (1 minuto)',
      'Edición profesional',
      'Entrega estimada: 5–7 días hábiles'
    ],
    highlight: false,
    category: 'events'
  },
  {
    id: 'evt-2',
    name: 'Evento Plata – Celebración Completa',
    price: '₡200,000',
    priceWithIVA: '₡226,000 (IVA 13%)',
    description: 'Equilibrio perfecto entre recuerdo y emoción.',
    features: [
      'Cobertura continua',
      '50 fotos profesionales editadas',
      'Video recap cinematográfico (1–2 minutos)',
      'Corrección de color profesional',
      'Selección curada de mejores momentos',
      'Entrega estimada: 5–7 días hábiles'
    ],
    highlight: true,
    category: 'events'
  },
  {
    id: 'evt-3',
    name: 'Evento Oro – Experiencia Premium',
    price: '₡280,000',
    priceWithIVA: '₡316,400 (IVA 13%)',
    features: [
      'Cobertura completa con enfoque cinematográfico',
      '80 fotos premium editadas',
      'Video cinematográfico (2–3 minutos)',
      'Reel vertical',
      'Narrativa visual del evento',
      'Entrega estimada: 5 días hábiles'
    ],
    highlight: false,
    category: 'events'
  },
];

const weddingPlans = [
  {
    id: 'wed-1',
    name: 'Boda Esencial – El Comienzo',
    price: '₡550,000',
    priceWithIVA: '₡621,500 (IVA 13%)',
    features: [
      'Cobertura de momentos clave (ceremonia + detalles)',
      '150 fotos profesionales editadas',
      'Video highlight (3–4 minutos)',
      'Música licenciada',
      'Entrega estimada: 15 días hábiles'
    ],
    highlight: false,
    category: 'weddings'
  },
  {
    id: 'wed-2',
    name: 'Boda Cinematográfica – Nuestra Historia',
    price: '₡850,000',
    priceWithIVA: '₡960,500 (IVA 13%)',
    description: 'Opción más elegida por parejas.',
    features: [
      'Cobertura narrativa del día',
      '250 fotos profesionales editadas',
      'Video cinematográfico (5–7 minutos)',
      'Reel vertical',
      'Narrativa emocional guiada por música',
      'Corrección de color cinematográfica',
      'Entrega estimada: 12–15 días hábiles'
    ],
    highlight: true,
    category: 'weddings'
  },
  {
    id: 'wed-3',
    name: 'Boda Premium – Película de Vida',
    price: '₡1,250,000',
    priceWithIVA: '₡1,412,500 (IVA 13%)',
    features: [
      'Cobertura completa con enfoque documental',
      '400 fotos premium editadas',
      'Película cinematográfica (10–12 minutos)',
      'Reel + teaser',
      'Tomas con dron incluidas',
      'Edición storytelling',
      'Entrega estimada: 10–12 días hábiles'
    ],
    highlight: false,
    category: 'weddings'
  },
];

const massiveEventPlans = [
  {
    id: 'mass-1',
    name: 'Masivo Esencial – Cobertura Documental',
    price: '₡350,000',
    priceWithIVA: '₡395,500 (IVA 13%)',
    features: [
      'Cobertura general de ambiente y público',
      '60 fotos profesionales editadas',
      'Video recap (1–2 minutos)',
      'Corrección de color',
      'Entrega estimada: 7–10 días hábiles'
    ],
    highlight: false,
    category: 'massive'
  },
  {
    id: 'mass-2',
    name: 'Masivo Pro – Cobertura Cinematográfica',
    price: '₡550,000',
    priceWithIVA: '₡621,500 (IVA 13%)',
    description: 'Recomendado para marcas y producción profesional.',
    features: [
      'Cobertura dinámica del evento',
      '120 fotos profesionales editadas',
      'Video cinematográfico (2–3 minutos)',
      'Reel vertical',
      'Planos de impacto para redes',
      'Corrección de color cinematográfica',
      'Entrega estimada: 7 días hábiles'
    ],
    highlight: true,
    category: 'massive'
  },
  {
    id: 'mass-3',
    name: 'Masivo Premium – Producción de Alto Nivel',
    price: '₡850,000',
    priceWithIVA: '₡960,500 (IVA 13%)',
    features: [
      'Cobertura estratégica del evento',
      '200 fotos premium editadas',
      'Video cinematográfico (3–5 minutos)',
      '2 reels verticales',
      'Tomas con dron incluidas',
      'Material pensado para promoción post-evento',
      'Corrección de color premium',
      'Entrega estimada: 5–7 días hábiles'
    ],
    highlight: false,
    category: 'massive'
  },
];

const corporatePlans = [
  {
    id: 'corp-1',
    name: 'Corporativo Esencial – Imagen Institucional',
    price: '₡280,000',
    priceWithIVA: '₡316,400 (IVA 13%)',
    features: [
      'Video institucional profesional (1–2 min)',
      '20 fotos corporativas editadas',
      'Mensaje institucional claro y profesional',
    ],
    highlight: false,
    category: 'corporate'
  },
  {
    id: 'corp-2',
    name: 'Corporativo Pro – Autoridad de Marca',
    price: '₡420,000',
    priceWithIVA: '₡474,600 (IVA 13%)',
    features: [
      'Video institucional cinematográfico (2–3 min)',
      '2 reels corporativos',
      '35 fotos corporativas premium',
      'Refuerzo visual de autoridad de marca',
    ],
    highlight: true,
    category: 'corporate'
  },
  {
    id: 'corp-3',
    name: 'Corporativo Premium – Presencia Ejecutiva',
    price: '₡650,000',
    priceWithIVA: '₡734,500 (IVA 13%)',
    features: [
      'Video institucional cinematográfico (3–4 min)',
      '4 reels ejecutivos',
      '60 fotos corporativas premium',
      'Tomas con dron (si aplica)',
      'Imagen alineada a valores empresariales',
    ],
    highlight: false,
    category: 'corporate'
  },
];

const dentalPlans = [
  {
    id: 'dental-1',
    name: 'Dental Básico – Presencia Profesional',
    price: '₡190,000',
    priceWithIVA: '₡214,700 (IVA 13%)',
    features: [
      'Video institucional corto (30–45 s)',
      '15 fotos profesionales editadas',
      'Enfoque en confianza y cercanía',
    ],
    highlight: false,
    category: 'dental'
  },
  {
    id: 'dental-2',
    name: 'Dental Pro – Confianza y Autoridad',
    price: '₡285,000',
    priceWithIVA: '₡322,050 (IVA 13%)',
    features: [
      'Video institucional (1–2 min)',
      '2 reels educativos',
      '25 fotos profesionales editadas',
      'Contenido educativo simple para pacientes',
    ],
    highlight: true,
    category: 'dental'
  },
  {
    id: 'dental-3',
    name: 'Dental Premium – Marca Clínica',
    price: '₡420,000',
    priceWithIVA: '₡474,600 (IVA 13%)',
    features: [
      'Video cinematográfico (2–3 min)',
      '4 reels estratégicos',
      '40 fotos premium editadas',
      'Construcción de marca clínica',
    ],
    highlight: false,
    category: 'dental'
  },
  {
    id: 'dental-4',
    name: 'Plan Dental Mensual',
    price: '₡320,000 / mes',
    priceWithIVA: '₡361,600 / mes (IVA 13%)',
    features: [
      '4 reels profesionales',
      '1 video largo (1–2 min)',
      '20 fotos editadas',
      'Consistencia visual mensual',
    ],
    highlight: false,
    category: 'dental'
  },
];

const foodPlans = [
  {
    id: 'food-1',
    name: 'Food Básico – Menú Atractivo',
    price: '₡180,000',
    priceWithIVA: '₡203,400 (IVA 13%)',
    features: [
      '1 reel gastronómico',
      '15 fotos de platos editadas',
      'Estilo visual apetitoso y natural',
    ],
    highlight: false,
    category: 'food'
  },
  {
    id: 'food-2',
    name: 'Food Pro – Experiencia del Restaurante',
    price: '₡280,000',
    priceWithIVA: '₡316,400 (IVA 13%)',
    features: [
      'Video profesional (1–2 min)',
      '2 reels gastronómicos',
      '25 fotos (platos + ambiente)',
      'Enfoque en experiencia del local',
    ],
    highlight: true,
    category: 'food'
  },
  {
    id: 'food-3',
    name: 'Food Premium – Marca Gastronómica',
    price: '₡420,000',
    priceWithIVA: '₡474,600 (IVA 13%)',
    features: [
      'Video cinematográfico (2–3 min)',
      '4 reels premium',
      '40 fotos premium editadas',
      'Narrativa de marca gastronómica',
    ],
    highlight: false,
    category: 'food'
  },
  {
    id: 'food-4',
    name: 'Plan Food Mensual',
    price: '₡350,000 / mes',
    priceWithIVA: '₡395,500 / mes (IVA 13%)',
    features: [
      '4 reels gastronómicos',
      '1 video largo (1–2 min)',
      '20 fotos editadas',
      'Rotación estratégica de contenido',
    ],
    highlight: false,
    category: 'food'
  },
];

const musicVideoPlans = [
  {
    id: 'music-1',
    name: 'Video Musical Esencial – Performance Cinemático',
    price: '₡380,000',
    priceWithIVA: '₡429,400 (IVA 13%)',
    features: [
      'Grabación en 1 locación',
      'Enfoque performance (artista/banda)',
      'Dirección visual alineada al género musical',
      'Grabación con equipo profesional',
      'Edición completa',
      'Corrección de color cinematográfica',
      'Entrega estimada: 7–10 días hábiles',
    ],
    highlight: false,
    category: 'music'
  },
  {
    id: 'music-2',
    name: 'Video Musical Pro – Narrativa Visual',
    price: '₡650,000',
    priceWithIVA: '₡734,500 (IVA 13%)',
    features: [
      'Concepto creativo definido en brief',
      'Hasta 2 locaciones',
      'Dirección artística',
      'Moodboard visual previo',
      'Edición cinematográfica avanzada',
      'Corrección de color premium',
      'Reel teaser para redes',
      'Entrega estimada: 10–12 días hábiles',
    ],
    highlight: true,
    category: 'music'
  },
];

const otherPlans = [
  {
    id: 'other-1',
    name: 'Producción Audiovisual por Horas',
    price: '₡95,000',
    priceWithIVA: '₡107,350 (IVA 13%)',
    features: [
      'Grabación de foto y/o video',
      'Dirección básica',
      'Uso de equipo profesional',
      'Entrega estimada: 5–8 fotos editadas por hora + clips base',
    ],
    highlight: false,
    category: 'other'
  },
  {
    id: 'other-2',
    name: 'Branding Audiovisual Estratégico',
    price: '₡320,000',
    priceWithIVA: '₡361,600 (IVA 13%)',
    features: [
      'Definición de estilo visual',
      '1 video guía (1–2 min)',
      '25 fotos alineadas a la identidad',
      'Lineamientos visuales reutilizables',
    ],
    highlight: false,
    category: 'other'
  },
  {
    id: 'other-3',
    name: 'Edición Profesional de Contenido',
    price: 'Desde ₡180,000',
    priceWithIVA: 'Desde ₡203,400 (IVA 13%)',
    features: [
      'Edición de reels o videos',
      'Corrección de color',
      'Optimización de formatos',
    ],
    highlight: false,
    category: 'other'
  },
  {
    id: 'other-4',
    name: 'Plan de Edición Mensual',
    price: '₡300,000 / mes',
    priceWithIVA: '₡339,000 / mes (IVA 13%)',
    features: [
      'Hasta 8 reels editados',
      'Color grading uniforme',
      'Ajustes mensuales',
    ],
    highlight: false,
    category: 'other'
  },
];

const allPackages = [
  ...socialMediaPlans,
  ...professionalPlans,
  ...eventPlans,
  ...weddingPlans,
  ...massiveEventPlans,
  ...corporatePlans,
  ...dentalPlans,
  ...foodPlans,
  ...musicVideoPlans,
  ...otherPlans
];

const categories = [
  { id: 'all', label: 'Todos', icon: Filter },
  { id: 'social', label: 'Redes Sociales', icon: Camera },
  { id: 'professional', label: 'Profesional', icon: Star },
  { id: 'events', label: 'Eventos', icon: CalendarIcon },
  { id: 'weddings', label: 'Bodas', icon: Clock },
  { id: 'massive', label: 'Masivos', icon: Users },
  { id: 'corporate', label: 'Corporativo', icon: Users },
  { id: 'dental', label: 'Odontología', icon: Users },
  { id: 'food', label: 'Restaurantes', icon: Users },
  { id: 'music', label: 'Videos Musicales', icon: Music },
  { id: 'other', label: 'Otros', icon: Filter },
];

// --- Components ---

const FeatureItem = ({ text, highlight, index }) => (
  <motion.li 
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
    className="flex items-start gap-3"
  >
    <div 
      className={cn(
        "mt-0.5 rounded-full p-0.5 flex-shrink-0",
        highlight ? "text-cyan-400 bg-cyan-950/30" : "text-white/60 bg-white/5"
      )}
    >
      <Check size={14} strokeWidth={3} />
    </div>
    <span 
      className={cn(
        "text-sm leading-tight",
        highlight ? "text-white font-medium" : "text-white/70"
      )}
    >
      {text}
    </span>
  </motion.li>
);

const PlanCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ 
      duration: 0.3, 
      delay: index * 0.1,
      ease: "easeOut"
    }}
    whileHover={{ 
      y: -2,
      transition: { duration: 0.25 }
    }}
    className={cn(
      "relative flex flex-col p-6 md:p-8 rounded-[2rem] border transition-all duration-300 group overflow-hidden h-full",
      plan.highlight
        ? "bg-[#0B0B15] border-purple-500/30 shadow-[0_0_50px_-15px_rgba(168,85,247,0.3)] z-10 scale-[1.02] md:scale-105"
        : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/10 hover:shadow-2xl"
    )}
  >
    {/* Highlight Badge */}
    {plan.highlight && (
      <>
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
        <div className="absolute top-4 right-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
        </div>
        <div className="absolute top-5 right-8 text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
          Recomendado
        </div>
      </>
    )}

    {/* Header */}
    <div className="mb-6 relative z-10">
      <h3 className={cn(
        "text-lg font-bold mb-3 uppercase tracking-wider transition-colors",
        plan.highlight ? "text-white" : "text-white/80 group-hover:text-white"
      )}>
        {plan.name}
      </h3>
      
      <div className="flex items-end gap-1 mb-1">
        <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60">
          {plan.price}
        </span>
      </div>
      <p className="text-xs text-white/40 font-mono tracking-tight">{plan.priceWithIVA}</p>
    </div>

    {/* Description */}
    {plan.description && (
      <div className="mb-6 pb-6 border-b border-white/5">
        <p className="text-sm text-white/60 italic leading-relaxed">"{plan.description}"</p>
      </div>
    )}

    {/* Features List */}
    <ul className="space-y-4 mb-8 flex-grow">
      {plan.features.map((feature, i) => (
        <FeatureItem key={i} text={feature} highlight={plan.highlight} index={i} />
      ))}
    </ul>

    {/* Action Button */}
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ duration: 0.25 }}
    >
      <Button
        className={cn(
          "w-full h-12 text-sm uppercase tracking-widest font-bold transition-all duration-300",
          plan.highlight
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-purple-900/40 border-0"
            : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
        )}
        onClick={() => window.open(`https://wa.me/50670470555?text=Hola,%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}`, '_blank')}
      >
        <span className="mr-2">Cotizar Ahora</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>

    {/* Background Gradient Orbs for Hover */}
    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none" />
    <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />
  </motion.div>
);

const Plans = () => {
  const { toast } = useToast();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('social'); 
  
  // Calendar Logic
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // 0 is Sunday

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedPackage) return;
    
    const formattedDate = selectedDate.toLocaleDateString('es-CR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    toast({
      title: "Solicitud Iniciada 🚀",
      description: `Redirigiendo a WhatsApp para confirmar ${selectedPackage.name}...`,
      duration: 3000,
    });

    setTimeout(() => {
        const message = `Hola BWAY! Me gustaría reservar el paquete "${selectedPackage.name}" (${selectedPackage.category}) para la fecha: ${formattedDate}. Precio estimado: ${selectedPackage.price}`;
        const whatsappUrl = `https://wa.me/50670470555?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  const filteredPackages = categoryFilter === 'all' 
    ? allPackages 
    : allPackages.filter(pkg => pkg.category === categoryFilter);

  const weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  return (
    <section id="planes" className="py-24 md:py-32 bg-[#050508] relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">Planes Flexibles</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl font-black font-montserrat mb-6 text-white leading-tight"
          >
            Elige el Nivel de tu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Impacto Visual
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
            className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Producción audiovisual realizada íntegramente por un único profesional, encargado de la dirección, grabación y postproducción. Comunicación directa, visión unificada y enfoque cinematográfico en cada proyecto.
          </motion.p>
        </div>

        {/* Narrative Micro-copy */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-white/40 text-sm font-light italic">
            Cada proyecto tiene una intención.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <Tabs defaultValue="social" className="w-full mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-16 px-4"
          >
            <div className="w-full max-w-7xl">
              {/* Container with glassmorphism effect */}
              <div className="relative bg-black/30 backdrop-blur-2xl border border-white/15 rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-xl overflow-hidden">
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
                
                <TabsList className="relative bg-transparent p-0 h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-3 w-full">
                  {['social', 'professional', 'events', 'weddings', 'massive', 'corporate', 'dental', 'food', 'music', 'other'].map((val) => (
                    <TabsTrigger 
                      key={val}
                      value={val} 
                      className="relative rounded-xl md:rounded-2xl px-3 md:px-4 lg:px-5 py-2.5 md:py-3 text-xs md:text-sm font-medium transition-all duration-300 ease-out data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:shadow-md hover:bg-white/10 hover:text-white hover:border-white/30 active:scale-95 border border-white/20 bg-black/40 backdrop-blur-md text-white/90 w-full text-center"
                    >
                      {val === 'social' && 'Redes Sociales'}
                      {val === 'professional' && 'Profesional'}
                      {val === 'events' && 'Eventos'}
                      {val === 'weddings' && 'Bodas'}
                      {val === 'massive' && 'Masivos'}
                      {val === 'corporate' && 'Corporativo'}
                      {val === 'dental' && 'Odontología'}
                      {val === 'food' && 'Restaurantes'}
                      {val === 'music' && 'Videos Musicales'}
                      {val === 'other' && 'Otros'}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
          </motion.div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {['social', 'professional', 'events', 'weddings', 'massive', 'corporate', 'dental', 'food', 'music', 'other'].map((category) => (
                <TabsContent key={category} value={category} className="mt-0 outline-none">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto ${
                      (category === 'social' || category === 'massive') ? 'lg:justify-center lg:flex' : ''
                    }`}
                  >
                    {category === 'social' && socialMediaPlans.map((plan, i) => (
                      <div key={i} className="w-full max-w-md mx-auto"><PlanCard plan={plan} index={i} /></div>
                    ))}
                    {category === 'professional' && professionalPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'events' && eventPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'weddings' && weddingPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'massive' && massiveEventPlans.map((plan, i) => (
                      <div key={i} className="w-full max-w-md mx-auto"><PlanCard plan={plan} index={i} /></div>
                    ))}
                    {category === 'corporate' && corporatePlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'dental' && dentalPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'food' && foodPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'music' && musicVideoPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'other' && otherPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>

        {/* Narrative Micro-copy */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-white/40 text-sm font-light italic">
            La coherencia no es casual.
          </p>
        </motion.div>

        {/* Booking Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative pt-20 border-t border-white/10"
        >
            <motion.div 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050508] px-8 py-2 border border-white/10 rounded-full flex items-center gap-2"
            >
                <CalendarIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold tracking-widest text-white/90">AGENDA TU FECHA</span>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
                
                {/* Calendar Widget */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
                  className="lg:col-span-5"
                >
                    <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl h-full flex flex-col">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-white font-montserrat">
                              {monthNames[currentDate.getMonth()]} <span className="text-white/40">{currentDate.getFullYear()}</span>
                            </h3>
                            <div className="flex gap-2">
                                <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.25 }}>
                                    <Button variant="outline" size="icon" onClick={prevMonth} className="h-9 w-9 rounded-full border-white/20 hover:bg-white/10 hover:border-white/40">
                                        <ChevronLeft size={16} />
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.25 }}>
                                    <Button variant="outline" size="icon" onClick={nextMonth} className="h-9 w-9 rounded-full border-white/20 hover:bg-white/10 hover:border-white/40">
                                        <ChevronRight size={16} />
                                    </Button>
                                </motion.div>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 mb-4 text-center">
                            {weekDays.map((day, i) => (
                                <div 
                                  key={i}
                                  className="text-xs font-bold text-white/30 uppercase tracking-widest"
                                >
                                  {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2 md:gap-3 flex-grow content-start">
                            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                                <div key={`empty-${i}`} className="aspect-square" />
                            ))}
                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                const day = i + 1;
                                const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                                const isSelected = selectedDate && dateObj.toDateString() === selectedDate.toDateString();
                                const isToday = new Date().toDateString() === dateObj.toDateString();
                                
                                return (
                                    <motion.button
                                        whileHover={{ y: -1 }}
                                        whileTap={{ y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        key={day}
                                        onClick={() => handleDateClick(day)}
                                        className={cn(
                                            "aspect-square rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center relative group",
                                            isSelected 
                                                ? "bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30" 
                                                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10",
                                            isToday && !isSelected && "border-cyan-500/50 text-cyan-400"
                                        )}
                                    >
                                        {day}
                                        {isToday && !isSelected && (
                                            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-white/10">
                           <div className="flex items-center gap-3 text-sm text-white/60 bg-black/20 p-3 rounded-lg border border-white/5">
                                <Info size={16} className="text-cyan-400 shrink-0" />
                                {selectedDate 
                                  ? (
                                    <span>
                                      Fecha: <strong className="text-white">{selectedDate.toLocaleDateString()}</strong>
                                    </span>
                                  )
                                  : <span>Selecciona una fecha disponible</span>
                                }
                           </div>
                        </div>
                    </div>
                </motion.div>

                {/* Booking Form / Summary */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                  className="lg:col-span-7 flex flex-col gap-6"
                >
                    <div className="bg-[#0f0f16] border border-white/10 rounded-3xl p-1 overflow-hidden flex flex-col h-[500px]">
                        <div className="p-4 bg-white/5 border-b border-white/5 flex gap-2 overflow-x-auto scrollbar-hide">
                            {categories.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                <motion.button
                                    key={cat.id}
                                    whileHover={{ y: -1 }}
                                    transition={{ duration: 0.25 }}
                                    onClick={() => setCategoryFilter(cat.id)}
                                    className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
                                    categoryFilter === cat.id
                                        ? "bg-white text-black border-white shadow-lg"
                                        : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                                    )}
                                >
                                    <Icon size={14} />
                                    {cat.label}
                                </motion.button>
                                );
                            })}
                        </div>
                        
                        <div className="flex-grow overflow-y-auto p-4 space-y-2 custom-scrollbar">
                           {filteredPackages.map((pkg, index) => {
                               const isSelected = selectedPackage?.id === pkg.id;
                               return (
                                   <motion.div 
                                      key={pkg.id}
                                      initial={{ opacity: 0, y: 6 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                                      whileHover={{ y: -1 }}
                                      onClick={() => handlePackageClick(pkg)}
                                      className={cn(
                                          "flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all border relative overflow-hidden group",
                                          isSelected
                                            ? "bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border-cyan-500/50"
                                            : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
                                      )}
                                   >
                                       <div 
                                           className={cn(
                                               "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                                               isSelected ? "bg-cyan-500 text-black" : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white"
                                           )}
                                       >
                                           {pkg.category === 'social' && <Camera size={20} />}
                                           {pkg.category === 'professional' && <Star size={20} />}
                                           {pkg.category === 'events' && <CalendarIcon size={20} />}
                                           {pkg.category === 'weddings' && <Clock size={20} />}
                                           {pkg.category === 'massive' && <Users size={20} />}
                                           {pkg.category === 'corporate' && <Users size={20} />}
                                           {pkg.category === 'dental' && <Users size={20} />}
                                           {pkg.category === 'food' && <Users size={20} />}
                                           {pkg.category === 'music' && <Music size={20} />}
                                           {pkg.category === 'other' && <Filter size={20} />}
                                       </div>
                                       
                                       <div className="flex-grow min-w-0">
                                           <div className="flex items-center gap-2 mb-1">
                                               <h4 className={cn("font-bold truncate", isSelected ? "text-cyan-100" : "text-white")}>{pkg.name}</h4>
                                               {pkg.highlight && <span className="text-[10px] bg-purple-500 text-white px-2 rounded-full font-bold">TOP</span>}
                                           </div>
                                           <p className="text-sm text-white/40 font-mono">{pkg.price}</p>
                                       </div>

                                       <div 
                                           className={cn(
                                               "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                                               isSelected ? "border-cyan-400 bg-cyan-400 text-black" : "border-white/20 text-transparent"
                                           )}
                                       >
                                           <Check size={14} strokeWidth={4} />
                                       </div>
                                   </motion.div>
                               )
                           })}
                        </div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="bg-gradient-to-r from-indigo-900/80 to-purple-900/80 p-6 rounded-3xl border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
                    >
                        <div className="text-center md:text-left">
                            <p className="text-indigo-200 text-xs uppercase tracking-widest font-bold mb-1">Resumen de Reserva</p>
                            <div className="flex items-baseline gap-2 justify-center md:justify-start">
                                <span className="text-3xl font-black text-white">
                                    {selectedPackage ? selectedPackage.price : '---'}
                                </span>
                                <span className="text-sm text-indigo-300">
                                    {selectedDate ? `para el ${selectedDate.getDate()}/${selectedDate.getMonth()+1}` : '(Fecha pendiente)'}
                                </span>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Button 
                                size="lg"
                                className={cn(
                                    "min-w-[240px] h-14 text-base font-bold shadow-xl transition-all",
                                    (!selectedDate || !selectedPackage) 
                                        ? "bg-white/10 text-white/40 cursor-not-allowed" 
                                        : "bg-white text-indigo-900 hover:bg-indigo-50"
                                )}
                                disabled={!selectedDate || !selectedPackage}
                                onClick={handleBooking}
                            >
                                {selectedDate && selectedPackage ? (
                                    <span className="flex items-center gap-2">Confirmar por WhatsApp <Zap size={18} className="fill-current" /></span>
                                ) : (
                                    "Completa tu selección"
                                )}
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>

        {/* Signature Manifesto Block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mt-16 mb-16 max-w-2xl mx-auto"
        >
          <p className="text-white/40 text-sm font-light italic">
            Un solo profesional.<br/>
            Una sola narrativa.<br/>
            Un resultado coherente.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Plans;
