'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, MessageCircle, MapPin, Clock, Mail, Calendar } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919138331357?text=Hi, I am interested in Sigma Industrial Parks. Please provide more information.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919138331357', '_self');
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Support",
      description: "Get instant responses to your queries",
      action: "Chat on WhatsApp",
      color: "green",
      onClick: handleWhatsApp
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Call",
      description: "Speak directly with our experts",
      action: "Call Now",
      color: "blue",
      onClick: handleCall
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Meeting",
      description: "Book a consultation with our team",
      action: "Schedule Now",
      color: "purple",
      onClick: () => handleWhatsApp()
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      description: "+91 91383-31357"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      description: "info@sigmabuildtech.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      description: "Haryana, India"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      description: "Mon-Sat: 9:00 AM - 6:00 PM"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: { bg: 'bg-green-100', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200 px-4 py-2">
              Contact Us
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to invest in your future? Contact us today to discuss your requirements and schedule a site visit to our premium industrial parks.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const colors = getColorClasses(method.color);
              
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-lg">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 ${colors.text}`}>
                      {method.icon}
                    </div>
                    <CardTitle className="text-xl font-poppins text-gray-900">{method.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={method.onClick}
                      className={`w-full ${colors.button} text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium`}
                      size="lg"
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gray-50 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-poppins text-gray-900">{info.title}</CardTitle>
                      <CardDescription className="text-base text-gray-600">{info.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                  Why Contact Sigma?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-base">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Free site visits and consultation</span>
                    </div>
                    <div className="flex items-center gap-3 text-base">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Detailed project information</span>
                    </div>
                    <div className="flex items-center gap-3 text-base">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Investment guidance and support</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-base">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Flexible payment plan options</span>
                    </div>
                    <div className="flex items-center gap-3 text-base">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Legal documentation assistance</span>
                    </div>
                    <div className="flex items-center gap-3 text-base">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">24/7 customer support</span>
                    </div>
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