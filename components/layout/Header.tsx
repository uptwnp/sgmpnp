'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Building2, Menu, Phone, MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Industrial Park 1', href: '/industrial-park-1' },
  { name: 'Industrial Park 2', href: '/industrial-park-2' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919138331357?text=Hi, I am interested in Sigma Industrial Parks. Please provide more information.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919138331357', '_self');
  };

  // Header should have solid background on non-home pages or when scrolled on home page
  const shouldHaveSolidBg = !isHomePage || isScrolled;

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      shouldHaveSolidBg
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <Building2 className={cn(
                'w-10 h-10 transition-colors duration-300',
                shouldHaveSolidBg ? 'text-blue-600' : 'text-white'
              )} />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                'text-xl font-bold font-poppins transition-colors duration-300',
                shouldHaveSolidBg ? 'text-gray-900' : 'text-white'
              )}>
                Sigma Group
              </span>
              <span className={cn(
                'text-xs font-medium transition-colors duration-300',
                shouldHaveSolidBg ? 'text-blue-600' : 'text-blue-200'
              )}>
                Industrial Parks
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:scale-105',
                  pathname === item.href
                    ? shouldHaveSolidBg 
                      ? 'text-blue-700 bg-blue-100 font-semibold shadow-sm' 
                      : 'text-white bg-white/20 font-semibold backdrop-blur-sm'
                    : shouldHaveSolidBg 
                      ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/15 backdrop-blur-sm'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCall}
              className={cn(
                'transition-all duration-300 hover:scale-105 font-medium',
                shouldHaveSolidBg 
                  ? 'border-blue-600 text-blue-700 bg-white hover:bg-blue-50 hover:border-blue-700 shadow-sm' 
                  : 'border-white text-white bg-white/10 hover:bg-white/20 hover:border-white backdrop-blur-sm'
              )}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button
              size="sm"
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="sm"
                className={cn(
                  'transition-all duration-300 hover:scale-105',
                  shouldHaveSolidBg 
                    ? 'text-gray-800 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/15 backdrop-blur-sm'
                )}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <SheetTitle asChild>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-8 h-8 text-blue-600" />
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900 font-poppins">Sigma Group</span>
                        <span className="text-xs text-blue-600 font-medium">Industrial Parks</span>
                      </div>
                    </div>
                  </SheetTitle>
                </div>
                
                <nav className="flex flex-col space-y-2 flex-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-all duration-300 py-3 px-4 rounded-lg hover:scale-105',
                        pathname === item.href 
                          ? 'text-blue-700 bg-blue-100 font-semibold shadow-sm' 
                          : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-3 mt-8 pt-6 border-t border-gray-200">
                  <Button
                    variant="outline"
                    onClick={handleCall}
                    className="w-full border-blue-600 text-blue-700 bg-white hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 hover:scale-105 font-medium shadow-sm"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}