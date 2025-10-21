
import React from 'react';
import { Button } from '@/components/ui/button';
import { Film, MessageCircle } from 'lucide-react';

const Hero = () => {

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-50"
          alt="Filmmaker in action at a concert"
          src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/eb9e4b1cbdf93bdcff74c6cb2660d687.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-grafito via-grafito/40 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 pt-40 pb-40">
        <div>
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-montserrat tracking-tighter text-shadow-lg">
            <span className="block">
              Transformamos ideas en
            </span>
            <span 
              className="block text-lime-accent"
              style={{
                background: 'linear-gradient(45deg, #CBEA6A, #CFAF6A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              experiencias visuales
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto text-shadow">
            Producción audiovisual profesional para marcas, artistas y emprendedores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
              variant="default"
              size="lg"
            >
              <Film className="mr-2 w-5 h-5" />
              Ver Portafolio
            </Button>
            
            <Button
              onClick={() => window.open('https://wa.me/50670470555', '_blank')}
              variant="secondary"
              size="lg"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Contáctanos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div 
          className="w-6 h-10 border-2 border-lime-accent/50 rounded-full flex justify-center cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-1 h-2 bg-lime-accent rounded-full mt-2" />
        </div>
        <p className="text-xs text-lime-accent/70 mt-2 text-center">
          Scroll
        </p>
      </div>
    </section>
  );
};

export default Hero;
