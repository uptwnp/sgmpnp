'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function HomeTestimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Manufacturing Unit Owner",
      content: "Sigma Industrial Park 1 provided the perfect location for our manufacturing unit. The infrastructure is world-class and the support team is exceptional. Our business has grown significantly since moving here.",
      rating: 5
    },
    {
      name: "Manisha Sharma",
      business: "Logistics Company",
      content: "The strategic location and excellent connectivity of Sigma Industrial Park 2 has been crucial for our logistics operations. The investment has shown great returns and the facilities are top-notch.",
      rating: 5
    },
    {
      name: "Arvind Patel",
      business: "Industrial Investor",
      content: "I've invested in multiple industrial projects, but Sigma Group's transparency and quality standards are unmatched. The RERA compliance and clear documentation process gave me complete confidence.",
      rating: 5
    },
    {
      name: "Sunita Verma",
      business: "Textile Business",
      content: "The flexible plot sizes and modern amenities at Sigma Industrial Parks perfectly suited our textile business requirements. The 24x7 security and professional management is impressive.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from satisfied investors and business owners who have chosen Sigma Industrial Parks for their growth and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 relative">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4">
                  <Quote className="w-6 h-6 text-blue-200" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join hundreds of satisfied investors and business owners</p>
          <div className="flex justify-center items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}