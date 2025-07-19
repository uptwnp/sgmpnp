'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MapPin, Calculator, Phone, MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function HomeLeadMagnets() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919404394043?text=Hi, I am interested in Sigma Industrial Parks. Please provide more information.', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919404394043', '_self');
  };

  const leadMagnets = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Download Project Brochure",
      description: "Get detailed information about both industrial parks, site plans, and specifications",
      action: "Download Now",
      color: "blue"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Investment Calculator",
      description: "Calculate your investment returns and payment schedules for both parks",
      action: "Calculate ROI",
      color: "green"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Site Location Maps",
      description: "View detailed location maps, connectivity, and nearby amenities",
      action: "View Maps",
      color: "amber"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Site Visit",
      description: "Book a free site visit with our expert team to explore the parks",
      action: "Book Visit",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
      green: { bg: 'bg-green-100', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-600', button: 'bg-amber-600 hover:bg-amber-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Complete Information
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive resources to make an informed investment decision. Download brochures, calculate returns, and schedule site visits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {leadMagnets.map((magnet, index) => {
            const colors = getColorClasses(magnet.color);
            
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4 ${colors.text}`}>
                    {magnet.icon}
                  </div>
                  <CardTitle className="text-lg">{magnet.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {magnet.description}
                  </CardDescription>
                  <Link href="/contact">
                    <Button className={`w-full ${colors.button} text-white`}>
                      {magnet.action}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Invest in Your Future?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join successful investors who have chosen Sigma Industrial Parks. Get instant support and detailed information about our premium industrial developments.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="w-8 h-8 mx-auto mb-4 text-green-600" />
                    <h4 className="font-semibold mb-2">WhatsApp Support</h4>
                    <p className="text-sm text-gray-600 mb-4">Get instant responses to your queries</p>
                    <Button 
                      onClick={handleWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Chat Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                    <h4 className="font-semibold mb-2">Call Our Experts</h4>
                    <p className="text-sm text-gray-600 mb-4">Speak directly with our investment team</p>
                    <Button 
                      onClick={handleCall}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Call Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-8 h-8 mx-auto mb-4 text-amber-600" />
                    <h4 className="font-semibold mb-2">Site Visit</h4>
                    <p className="text-sm text-gray-600 mb-4">Schedule a free guided tour</p>
                    <Link href="/contact">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                        Book Visit
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}