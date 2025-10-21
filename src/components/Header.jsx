
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, LogIn, Sparkles, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BehanceIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7.17 11.48h4.58v1.36H7.17v-1.36zM13.83 6h-6.7v1.36h6.7V6zm0 2.73h-6.7v1.36h6.7v-1.36z" /><path d="M19 6h-2.92a2.47 2.47 0 0 0-2.58 2.47v.14a2.47 2.47 0 0 0 2.58 2.47H19v-5.08zm-2.92 3.82a1.11 1.11 0 0 1-1.22-1.2h.01a1.11 1.11 0 0 1 1.21-1.21H17.7v2.41h-1.69z" /><path d="M19.17 14.28a2.53 2.53 0 0 0-2.73-2.58h-2.27v6.6h2.1a2.64 2.64 0 0 0 2.89-2.73c0-1.11-.6-2-1.33-2.29a2.12 2.12 0 0 0 1.34-2zm-2.72 4.15h-1.07v-1.6h1.07a1.27 1.27 0 0 1 1.37 1.25 1.2 1.2 0 0 1-1.37 1.17v-.82z" /><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z" /></svg>
);


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Planes', href: '/planes' },
    { name: 'Reservas', href: '/reservas' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/bwayprod', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/bwayproduction/', label: 'Facebook' },
    { icon: Youtube, href: 'https://youtube.com/@bwayprod', label: 'YouTube' },
    { icon: MessageCircle, href: 'https://wa.me/50670470555', label: 'WhatsApp' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-grafito/90 backdrop-blur-xl border-b border-lime-accent/20 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="/" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/eb54702e245d3090dadd93563340f94b.png" 
              alt="BWAY Productions Logo" 
              className="h-14 w-auto transition-all duration-300 group-hover:brightness-110"
            />
            <motion.div
              className="absolute -inset-2 bg-lime-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
          </motion.a>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`relative text-white hover:text-lime-accent transition-all duration-300 font-medium text-sm group ${
                    location.pathname === item.href ? 'text-lime-accent' : ''
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-lime-accent"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredItem === item.name ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active Indicator */}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-lime-accent"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-lime-accent transition-all duration-300 group relative" 
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 transition-all duration-300 group-hover:drop-shadow-lg" />
                <motion.div
                  className="absolute -inset-1 bg-lime-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button asChild variant="default" size="sm" className="group relative overflow-hidden">
                <Link to="/login">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-lime-accent to-lime-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <LogIn className="mr-2 h-4 w-4 relative z-10" />
                  <span className="relative z-10">Login</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.button 
            className="lg:hidden text-white relative group" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.div
              className="absolute -inset-2 bg-lime-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden mt-4 bg-grafito-soft/95 backdrop-blur-xl rounded-lg p-6 border border-lime-accent/20"
            >
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.href} 
                      className="block py-3 text-white hover:text-lime-accent transition-all duration-300 font-medium group relative" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.div
                        className="absolute left-0 top-1/2 w-0 h-0.5 bg-lime-accent transform -translate-y-1/2 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="flex items-center space-x-4 mt-6 pt-6 border-t border-lime-accent/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={social.label} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-text-secondary hover:text-lime-accent transition-all duration-300 group" 
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6"
              >
                <Button asChild variant="default" className="w-full group relative overflow-hidden">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-lime-accent to-lime-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <LogIn className="mr-2 h-4 w-4 relative z-10" />
                    <span className="relative z-10">Login</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
