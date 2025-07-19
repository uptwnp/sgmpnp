'use client';
import { Building2, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I am interested in Sigma Projects. Please provide more information.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold">Sigma Group</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading real estate development company with 15+ years of excellence. Sigma Industrial Park 1 & 2 offer premium industrial developments with world-class infrastructure.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/industrial-park-1" className="hover:text-white transition-colors">Industrial Park 1</a></li>
              <li><a href="/industrial-park-2" className="hover:text-white transition-colors">Industrial Park 2</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +91 94043-94043
              </button>
              <button 
                onClick={handleCall}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                info@sigmabuildtech.com
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Sigma Group. All Rights Reserved. This is not an official website.</p>
        </div>
      </div>
    </footer>
  );
}