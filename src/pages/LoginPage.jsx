
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { LogIn, Mail, Lock } from 'lucide-react';

const LoginPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 ¡Función en desarrollo!",
      description: "El inicio de sesión aún no está implementado. ¡Pídelo en tu próximo prompt! 🚀",
    });
  };

  const inputStyles = "w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-colors text-white placeholder:text-gray-400";

  return (
    <div className="min-h-screen flex items-center justify-center bg-grafito p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/">
            <img 
              src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/eb54702e245d3090dadd93563340f94b.png" 
              alt="BWAY Productions Logo" 
              className="h-20 w-auto mx-auto"
            />
          </Link>
        </div>

        <div className="bg-black/40 border border-white/10 p-8 md:p-10 rounded-lg shadow-2xl backdrop-blur-md">
          <h1 className="text-3xl font-extrabold text-center mb-2 text-white">Bienvenido</h1>
          <p className="text-gray-400 text-center mb-8">Inicia sesión para continuar</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder="tu@email.com"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder="Contraseña"
              />
            </div>

            <div className="text-right">
              <a href="#" onClick={(e) => { e.preventDefault(); handleSubmit(e); }} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button type="submit" variant="default" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white border-none">
              <LogIn className="mr-2 h-5 w-5" />
              Iniciar Sesión
            </Button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-8">
            ¿No tienes una cuenta?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); handleSubmit(e); }} className="font-semibold text-green-400 hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
