'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-amber-50 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Panipat, Haryana</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Sigma Group
                <span className="text-blue-600"> Industrial Parks</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Leading real estate development company with 15+ years of excellence. Discover Sigma Industrial Park 1 & 2 - premium industrial developments designed for modern businesses with world-class infrastructure and strategic locations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/industrial-park-1">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                >
                  Explore Industrial Park 1
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/industrial-park-2">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  Explore Industrial Park 2
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Below ₹30K</h3>
                <p className="text-gray-600 font-medium">Industrial Park 1 - Per sq yard</p>
                <p className="text-sm text-gray-500 mt-1">Premium plots available</p>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-600 mb-2">Below ₹30K</h3>
                <p className="text-gray-600 font-medium">Industrial Park 2 - Per sq yard</p>
                <p className="text-sm text-gray-500 mt-1">Flexible plot sizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}