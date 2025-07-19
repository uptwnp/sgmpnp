import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, MapPin, Shield, Zap, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Sigma Industrial Park 2 Panipat | Premium Industrial Plots Kakkar Majra NH-07',
  description: 'Sigma Industrial Park 2 at Kakkar Majra, NH-07 Ambala. Premium industrial plots 300-3000 sq yards with flexible payment plans. RERA compliant development by Sigma Group.',
  keywords: 'Sigma Industrial Park 2, Kakkar Majra industrial plots, NH-07 Ambala industrial park, flexible industrial plots panipat, Sigma Group industrial project',
};

export default function IndustrialPark2() {
  const features = [
    'Flexible Plot Sizes',
    'Prime Highway Location',
    'Modern Infrastructure',
    'Growth Corridor',
    'Business-Ready Plots',
    'RERA Compliant',
    'Premium Location',
    'Future Ready'
  ];

  const specifications = [
    { label: 'Location', value: 'Kakkar Majra, NH-07, Ambala' },
    { label: 'RERA Status', value: 'RERA Compliant' },
    { label: 'Plot Sizes', value: '300 - 3000 Sq Yards' },
    { label: 'Price Range', value: 'Below ₹30K per Sq Yard' },
    { label: 'Booking Amount', value: '₹5 Lakhs' },
    { label: 'Development Status', value: 'Under Development' }
  ];

  return (
    <main className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-amber-600 border-amber-200">
              Industrial Park 2
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4 sm:mb-6 px-4">
              Sigma Industrial Park 2
              <span className="gradient-text"> Expansive Development</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4">
              Expansive industrial park designed for diverse business requirements with flexible plot options and premium amenities.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <Badge className="bg-green-600 text-white">
                <Shield className="w-3 h-3 mr-1" />
                RERA Compliant
              </Badge>
              <Badge className="bg-amber-600 text-white">
                <MapPin className="w-3 h-3 mr-1" />
                NH-07 Location
              </Badge>
              <Badge className="bg-blue-600 text-white">
                <Star className="w-3 h-3 mr-1" />
                Growth Corridor
              </Badge>
            </div>

            <div className="flex flex-col gap-4 justify-center px-4">
              <Link href="/contact">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full btn-hover-scale">
                  Book Site Visit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full btn-hover-scale">
                  Get Information
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Sigma Industrial Park 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">Future-Ready Industrial Complex</h3>
                <p className="text-sm sm:text-base text-white/90">Designed for tomorrow's business needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 sm:py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4 px-4">
                Project <span className="gradient-text">Specifications</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Detailed information about Sigma Industrial Park 2
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-poppins flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-amber-600" />
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 last:border-b-0 gap-1 sm:gap-0">
                      <span className="text-sm sm:text-base text-gray-600 font-medium">{spec.label}</span>
                      <span className="text-sm sm:text-base text-gray-900 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-poppins flex items-center gap-3">
                    <Zap className="w-6 h-6 text-green-600" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4 px-4">
                Location <span className="gradient-text">Advantages</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Strategic benefits of Kakkar Majra location on NH-07
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-3 font-poppins">
                    <MapPin className="w-6 h-6 text-amber-600" />
                    Connectivity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-gray-600">• Direct access to NH-07 (National Highway)</p>
                  <p className="text-sm sm:text-base text-gray-600">• Close to Ambala industrial hub</p>
                  <p className="text-sm sm:text-base text-gray-600">• Excellent road and rail connectivity</p>
                  <p className="text-sm sm:text-base text-gray-600">• Access to major transportation networks</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-3 font-poppins">
                    <Building2 className="w-6 h-6 text-green-600" />
                    Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-gray-600">• Modern infrastructure planning</p>
                  <p className="text-sm sm:text-base text-gray-600">• Flexible plot configurations</p>
                  <p className="text-sm sm:text-base text-gray-600">• Future-ready utility systems</p>
                  <p className="text-sm sm:text-base text-gray-600">• Sustainable development approach</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-2xl hover-lift">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-gray-900 mb-4 sm:mb-6">
                  Investment Opportunity
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="text-center p-4 sm:p-6 bg-amber-50 rounded-xl">
                      <h4 className="text-xl sm:text-2xl font-bold text-amber-600 mb-2">Below ₹30K</h4>
                      <p className="text-sm sm:text-base text-gray-700">Per Square Yard</p>
                    </div>
                    <div className="text-center p-4 sm:p-6 bg-green-50 rounded-xl">
                      <h4 className="text-xl sm:text-2xl font-bold text-green-600 mb-2">₹5 Lakhs</h4>
                      <p className="text-sm sm:text-base text-gray-700">Booking Amount</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3 text-left">
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Flexible payment plans available</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">RERA compliant development</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">High growth potential area</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Future infrastructure developments</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 justify-center pt-4 sm:pt-6">
                    <Link href="/contact">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full btn-hover-scale">
                        Book Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full btn-hover-scale">
                        Schedule Visit
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}