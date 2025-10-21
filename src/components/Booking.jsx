
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '', date: '' });
  const services = ['Producción de Video', 'Fotografía Profesional', 'Paquete de Contenido', 'Asesoría Creativa', 'Cobertura con Dron', 'Otro'];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hola, me gustaría reservar una sesión:%0A%0ANombre: ${formData.name}%0AEmail: ${formData.email}%0AServicio: ${formData.service}%0AFecha preferida: ${formData.date}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/50670470555?text=${message}`, '_blank');
    toast({ title: "¡Solicitud enviada!", description: "Te redirigimos a WhatsApp para confirmar tu reserva." });
    setFormData({ name: '', email: '', service: '', message: '', date: '' });
  };
  
  const inputStyles = "w-full px-4 py-3 bg-surface-highlight border border-dark-gray-border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-accent/50 focus:border-lime-accent transition-colors text-white placeholder:text-text-secondary/70";

  return (
    <section id="reservas" className="section-padding section-bg">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="section-title"><span className="lime-underline">Reservas y Cotizaciones</span></h2>
            <p className="section-subtitle">Agenda tu sesión o solicita una cotización personalizada para tu proyecto.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-grafito-soft border border-dark-gray-border p-8 md:p-10 rounded-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-secondary">Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputStyles} placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-secondary">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyles} placeholder="tu@email.com" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-text-secondary">Tipo de Servicio</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required className={inputStyles}>
                    <option value="">Selecciona un servicio</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2 text-text-secondary">Fecha Preferida</label>
                  <input type="date" id="date" name="date" value={formData.date} required className={inputStyles} />
                </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-secondary">Mensaje</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputStyles} resize-none`} placeholder="Cuéntanos más sobre tu proyecto..." />
            </div>

            <Button type="submit" variant="default" size="lg" className="w-full">
              Reservar Sesión
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
  