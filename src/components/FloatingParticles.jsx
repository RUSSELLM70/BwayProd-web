
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = ({ mousePosition = { x: 50, y: 50 } }) => {
  const [particles, setParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 2,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 20,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      color: Math.random() > 0.7 ? 'lime-accent' : Math.random() > 0.4 ? 'soft-gold' : 'white',
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        const mouseInfluence = isHovering ? 0.3 : 0;
        const mouseX = (mousePosition.x - 50) * mouseInfluence;
        const mouseY = (mousePosition.y - 50) * mouseInfluence;

        return (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${
              particle.color === 'lime-accent' ? 'bg-lime-accent' :
              particle.color === 'soft-gold' ? 'bg-soft-gold' : 'bg-white'
            }`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.startX}vw`,
              top: `${particle.startY}vh`,
              filter: 'blur(0.5px)',
            }}
            initial={{
              opacity: 0,
              y: 0,
              x: 0,
            }}
            animate={{
              y: [0, Math.random() * 150 - 75 + mouseY, 0],
              x: [0, Math.random() * 120 - 60 + mouseX, 0],
              opacity: [0, particle.opacity, particle.opacity, 0],
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 2,
              opacity: 1,
              transition: { duration: 0.3 }
            }}
          />
        );
      })}
      
      {/* Interactive Mouse Trail */}
      <motion.div
        className="absolute w-4 h-4 bg-lime-accent/20 rounded-full pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovering ? [1, 1.5, 1] : [1, 0.8, 1],
          opacity: isHovering ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default FloatingParticles;
