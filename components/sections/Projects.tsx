'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, ArrowRight, MapPin, Shield, Zap, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 'industrial-park-1',
      title: 'Sigma Industrial Park 1',
      location: 'Mauli, Barwala, NH-07, Panchkula',
      rera: 'HRERA-PKL-PKL-503-2023',
      price: 'Below ₹30K',
      description: 'Premium industrial development with world-class infrastructure and strategic highway connectivity for modern businesses.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        '24x7 Security & Surveillance',
        'Direct Highway Connectivity', 
        'Developed Infrastructure',
        'Power & Water Supply',
        'Modern Amenities'
      ],
      highlights: [
        'RERA Registered',
        'Strategic Location',
        'Investment Ready',
        'High ROI Potential'
      ],
      color: 'blue',
      href: '/industrial-park-1'
    },
    {
      id: 'industrial-park-2', 
      title: 'Sigma Industrial Park 2',
      location: 'Kakkar Majra, NH-07, Ambala',
      rera: 'RERA Compliant',
      price: 'Below ₹30K',
      description: 'Expansive industrial park designed for diverse business requirements with flexible plot options and premium amenities.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Flexible Plot Sizes',
        'Prime Highway Location',
        'Modern Infrastructure', 
        'Growth Corridor',
        'Business-Ready Plots'
      ],
      highlights: [
        'Wide Plot Range',
        'Premium Location', 
        'Future Ready',
        'Excellent Connectivity'
      ],
      color: 'amber',
      href: '/industrial-park-2'
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200 px-4 py-2">
              Our Industrial Parks
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6">
              Premium Industrial 
              <span className="gradient-text"> Developments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our flagship industrial parks designed with modern infrastructure, strategic locations, and comprehensive facilities for your business growth.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white overflow-hidden shadow-lg">
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${project.color === 'blue' ? 'bg-blue-600' : 'bg-amber-600'} text-white font-semibold px-2 py-1 text-xs sm:text-sm shadow-lg`}>
                      {project.price}/sq yd
                    </Badge>
                  </div>

                  {/* RERA Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white border-0 text-xs sm:text-sm shadow-lg">
                      <Shield className="w-3 h-3 mr-1" />
                      RERA
                    </Badge>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs sm:text-sm font-medium truncate">{project.location}</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${project.color === 'blue' ? 'bg-blue-600' : 'bg-amber-600'} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl font-poppins text-gray-900">{project.title}</CardTitle>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{project.rera}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-base text-gray-600 leading-relaxed">{project.description}</p>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-600" />
                      Investment Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700 px-2 py-1">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <Link href={project.href}>
                        <Button 
                          className={`w-full ${project.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-amber-600 hover:bg-amber-700'} text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium`}
                          size="lg"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button 
                          variant="outline" 
                          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105 font-medium"
                          size="lg"
                        >
                          Get Info
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking CTA */}
          <div className="text-center">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 via-white to-amber-50 border-0 shadow-xl mx-4 sm:mx-auto">
              <CardContent className="p-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
                      Ready to Secure Your Investment?
                    </h3>
                    <p className="text-lg text-gray-600 mb-2">
                      Book your industrial plot with a token amount of just
                    </p>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 font-poppins">₹5 Lakhs</div>
                    <p className="text-sm text-gray-500">
                      *Flexible payment plans available | RERA approved projects
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4 justify-center">
                    <Link href="/contact">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        Book Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 font-medium">
                        Schedule Site Visit
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}