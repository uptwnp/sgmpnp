'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, MapPin, Calculator, Phone, MessageCircle, Calendar,
  ArrowRight, Download, Eye, PhoneCall
} from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919138331357?text=Hi, I am interested in Sigma Industrial Parks. Please provide more information.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919138331357', '_self');
  };

  const leadMagnets = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Project Brochure",
      description: "Detailed information about both industrial parks, site plans, and specifications",
      action: "Download Now",
      color: "blue",
      actionIcon: <Download className="w-4 h-4" />
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "ROI Calculator",
      description: "Calculate your investment returns and payment schedules for both parks",
      action: "Calculate ROI",
      color: "green",
      actionIcon: <ArrowRight className="w-4 h-4" />
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location Maps",
      description: "View detailed location maps, connectivity, and nearby amenities",
      action: "View Maps",
      color: "amber",
      actionIcon: <Eye className="w-4 h-4" />
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Site Visit",
      description: "Book a free guided tour with our expert team to explore the parks",
      action: "Book Visit",
      color: "purple",
      actionIcon: <Calendar className="w-4 h-4" />
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { 
        bg: 'bg-blue-50', 
        text: 'text-blue-600', 
        button: 'bg-blue-600 hover:bg-blue-700',
        gradient: 'from-blue-50 to-blue-100'
      },
      green: { 
        bg: 'bg-green-50', 
        text: 'text-green-600', 
        button: 'bg-green-600 hover:bg-green-700',
        gradient: 'from-green-50 to-green-100'
      },
      amber: { 
        bg: 'bg-amber-50', 
        text: 'text-amber-600', 
        button: 'bg-amber-600 hover:bg-amber-700',
        gradient: 'from-amber-50 to-amber-100'
      },
      purple: { 
        bg: 'bg-purple-50', 
        text: 'text-purple-600', 
        button: 'bg-purple-600 hover:bg-purple-700',
        gradient: 'from-purple-50 to-purple-100'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200 bg-white/50 px-4 py-2">
              Get Complete Information
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6">
              Make an <span className="gradient-text">Informed Decision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive resources to evaluate your investment opportunity. Download brochures, calculate returns, and schedule site visits.
            </p>
          </div>

          {/* Lead Magnets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {leadMagnets.map((magnet, index) => {
              const colors = getColorClasses(magnet.color);
              
              return (
                <Card key={index} className="group text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                      {magnet.icon}
                    </div>
                    <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-3">
                      {magnet.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {magnet.description}
                    </p>
                    <Link href="/contact">
                      <Button className={`w-full ${colors.button} text-white transition-all duration-300 hover:scale-105 rounded-full font-medium shadow-lg hover:shadow-xl`}>
                        {magnet.action}
                        {magnet.actionIcon && <span className="ml-2">{magnet.actionIcon}</span>}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main CTA Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Content */}
                  <div className="p-10 space-y-6">
                    <div>
                      <Badge className="bg-green-600 text-white mb-4 px-3 py-1">
                        Limited Time Offer
                      </Badge>
                      <h3 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
                        Ready to Invest in Your Future?
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Join successful investors who have chosen Sigma Industrial Parks. Get instant support and detailed information about Sigma's premium industrial developments.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-base text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>RERA approved projects with legal compliance</span>
                      </div>
                      <div className="flex items-center gap-3 text-base text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>Flexible payment plans starting ₹5 Lakhs</span>
                      </div>
                      <div className="flex items-center gap-3 text-base text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>24x7 customer support and guidance</span>
                      </div>
                      <div className="flex items-center gap-3 text-base text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>Free site visits and expert consultation</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Contact Options */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-10 text-white">
                    <h4 className="text-2xl font-bold font-poppins mb-6">
                      Get Instant Support
                    </h4>
                    
                    <div className="space-y-4">
                      {/* WhatsApp */}
                      <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105" onClick={handleWhatsApp}>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                              <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h5 className="text-base font-semibold mb-1">WhatsApp Support</h5>
                              <p className="text-sm text-white/80">Get instant responses to your queries</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Phone */}
                      <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105" onClick={handleCall}>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                              <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h5 className="text-base font-semibold mb-1">Call Our Experts</h5>
                              <p className="text-sm text-white/80">Speak directly with our investment team</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Site Visit */}
                      <Link href="/contact">
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Calendar className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h5 className="text-base font-semibold mb-1">Schedule Site Visit</h5>
                                <p className="text-sm text-white/80">Book a free guided tour</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/20">
                      <p className="text-center text-white/80 text-sm">
                        Available 24/7 • Response within 5 minutes
                      </p>
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