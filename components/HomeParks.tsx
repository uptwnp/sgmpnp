'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, ArrowRight, MapPin, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HomeParks() {
  const parks = [
    {
      id: 'industrial-park-1',
      title: 'Sigma Industrial Park 1',
      location: 'Mauli, Barwala, NH-07, Panchkula',
      rera: 'HRERA-PKL-PKL-503-2023',
      description: 'Premium industrial development with world-class infrastructure and strategic highway connectivity.',
      features: ['24x7 Security', 'Highway Connectivity', 'Developed Complex', 'All Facilities'],
      highlights: ['RERA Registered', 'Strategic Location', 'Modern Infrastructure', 'Investment Ready'],
      color: 'blue',
      href: '/industrial-park-1'
    },
    {
      id: 'industrial-park-2',
      title: 'Sigma Industrial Park 2',
      location: 'Kakkar Majra, NH-07, Ambala',
      rera: 'RERA Compliant',
      description: 'Expansive industrial park designed for diverse business requirements with flexible plot options.',
      features: ['Flexible Plots', 'Prime Location', 'Modern Amenities', 'Growth Potential'],
      highlights: ['Wide Plot Range', 'Premium Location', 'Future Ready', 'High ROI Potential'],
      color: 'amber',
      href: '/industrial-park-2'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Our Industrial Parks
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Industrial Developments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our flagship industrial parks designed with modern infrastructure, strategic locations, and comprehensive facilities for your business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {parks.map((park) => (
            <Card key={park.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${park.color === 'blue' ? 'bg-blue-600' : 'bg-amber-600'} rounded-lg flex items-center justify-center`}>
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{park.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      {park.location}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    <Shield className="w-3 h-3 mr-1" />
                    {park.rera}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{park.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {park.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${park.color === 'blue' ? 'bg-blue-600' : 'bg-amber-600'}`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Investment Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {park.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href={park.href} className="flex-1">
                      <Button 
                        className={`w-full ${park.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-amber-600 hover:bg-amber-700'} text-white`}
                        size="lg"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button 
                        variant="outline" 
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
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

        {/* Booking Amount CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-amber-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Invest?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Secure your industrial plot with a booking amount of just <span className="font-bold text-blue-600">₹5 Lakhs</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Book Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
                    Schedule Site Visit
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}