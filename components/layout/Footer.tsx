'use client';

import Link from 'next/link';
import { Building2, MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919138331357?text=Hi, I am interested in Sigma Industrial Parks. Please provide more information.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919138331357', '_self');
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Industrial Park 1', href: '/industrial-park-1' },
    { name: 'Industrial Park 2', href: '/industrial-park-2' },
    { name: 'Contact', href: '/contact' },
  ];

  const projects = [
    { name: 'Sigma Industrial Park 1', location: 'Mauli, Barwala, NH-07', href: '/industrial-park-1' },
    { name: 'Sigma Industrial Park 2', location: 'Kakkar Majra, NH-07', href: '/industrial-park-2' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto container-padding section-spacing">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-poppins text-white">Sigma Group</h3>
                <p className="text-sm text-gray-300">+91 91383-31357</p>
              </div>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              Leading real estate development company with 15+ years of excellence. Creating premium industrial developments with world-class infrastructure and strategic locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="sm"
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleCall}
                className="border-blue-600 text-blue-400 bg-transparent hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-base text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group hover:translate-x-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6 text-white">Our Projects</h4>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <Link key={index} href={project.href}>
                  <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg hover:shadow-xl">
                    <CardContent className="p-4">
                      <h5 className="text-base font-semibold text-white mb-1">{project.name}</h5>
                      <p className="text-sm text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{project.location}</span>
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-medium text-white">Phone</p>
                  <p className="text-sm text-gray-300">+91 94043-94043</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-medium text-white">Email</p>
                  <p className="text-sm text-gray-300 break-all">info@sigmabuildtech.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-medium text-white">Location</p>
                  <p className="text-sm text-gray-300">Haryana, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-medium text-white">Business Hours</p>
                  <p className="text-sm text-gray-300">Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-base text-gray-300">
                &copy; 2025 Sigma Group. All Rights Reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                This is not an official website. Information subject to change.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors duration-300">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}