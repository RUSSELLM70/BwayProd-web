
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const BehanceIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7.17 11.48h4.58v1.36H7.17v-1.36zM13.83 6h-6.7v1.36h6.7V6zm0 2.73h-6.7v1.36h6.7v-1.36z" /><path d="M19 6h-2.92a2.47 2.47 0 0 0-2.58 2.47v.14a2.47 2.47 0 0 0 2.58 2.47H19v-5.08zm-2.92 3.82a1.11 1.11 0 0 1-1.22-1.2h.01a1.11 1.11 0 0 1 1.21-1.21H17.7v2.41h-1.69z" /><path d="M19.17 14.28a2.53 2.53 0 0 0-2.73-2.58h-2.27v6.6h2.1a2.64 2.64 0 0 0 2.89-2.73c0-1.11-.6-2-1.33-2.29a2.12 2.12 0 0 0 1.34-2zm-2.72 4.15h-1.07v-1.6h1.07a1.27 1.27 0 0 1 1.37 1.25 1.2 1.2 0 0 1-1.37 1.17v-.82z" /><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z" /></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/bwayprod', label: 'Instagram' },
    { icon: BehanceIcon, href: '#', label: 'Behance' },
    { icon: Youtube, href: 'https://youtube.com/@bwayprod', label: 'YouTube' }
  ];

  return (
    <footer className="bg-grafito-soft border-t border-dark-gray-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
          <a href="#inicio">
            <img src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/eb54702e245d3090dadd93563340f94b.png" alt="BWAY Productions Logo" className="h-14 w-auto"/>
          </a>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-lime-accent transition-colors" aria-label={social.label}>
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
  