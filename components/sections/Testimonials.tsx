'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Manufacturing Unit Owner",
      location: "Industrial Park 1",
      content: "Sigma Industrial Park 1 provided the perfect location for our manufacturing unit. The infrastructure is world-class and the support team is exceptional. Our business has grown significantly since moving here.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Manisha Sharma",
      business: "Logistics Company CEO",
      location: "Industrial Park 2", 
      content: "The strategic location and excellent connectivity of Sigma Industrial Park 2 has been crucial for our logistics operations. The investment has shown great returns and the facilities are top-notch.",
      rating: 5,
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Arvind Patel",
      business: "Industrial Investor",
      location: "Multiple Projects",
      content: "I've invested in multiple industrial projects, but Sigma Group's transparency and quality standards are unmatched. The RERA compliance and clear documentation process gave me complete confidence.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sunita Verma",
      business: "Textile Business Owner",
      location: "Industrial Park 1",
      content: "The flexible plot sizes and modern amenities at Sigma Industrial Parks perfectly suited our textile business requirements. The 24x7 security and professional management is impressive.",
      rating: 5,
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Vikram Singh",
      business: "Auto Parts Manufacturer",
      location: "Industrial Park 2",
      content: "Excellent infrastructure and strategic location helped us establish our auto parts manufacturing unit efficiently. The team's support throughout the process was outstanding.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Priya Agarwal",
      business: "Food Processing Unit",
      location: "Industrial Park 1",
      content: "The modern facilities and compliance standards at Sigma Industrial Park made it easy to set up our food processing unit. Great investment opportunity with excellent returns.",
      rating: 5,
      image: "https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200 px-4 py-2">
              Client Testimonials
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from satisfied investors and business owners who have chosen Sigma Industrial Parks for their growth and success.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {getVisibleTestimonials().map((testimonial, index) => (
                <Card key={`${currentSlide}-${index}`} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white relative overflow-hidden group shadow-lg">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote className="w-12 h-12 text-blue-600" />
                  </div>
                  
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <blockquote className="text-gray-600 leading-relaxed mb-6 text-sm italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0 shadow-md"
                      />
                      <div>
                        <h4 className="text-base font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.business}</p>
                        <p className="text-xs text-blue-600 font-medium">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="rounded-full w-12 h-12 p-0 border-blue-200 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="rounded-full w-12 h-12 p-0 border-blue-200 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Overall Rating */}
          <div className="text-center">
            <Card className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-gray-900 font-poppins">4.9/5</span>
                  </div>
                  <p className="text-base text-gray-600">
                    Based on <span className="font-semibold">200+ reviews</span> from satisfied clients
                  </p>
                  <p className="text-sm text-gray-500">
                    Join hundreds of successful investors and business owners
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}