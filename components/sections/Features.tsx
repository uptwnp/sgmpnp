'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, Shield, Zap, TrendingUp, Users, Award, 
  ChevronDown, ChevronUp, CheckCircle, Star 
} from 'lucide-react';

export default function Features() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Strategic Locations",
      shortDesc: "Prime locations with excellent connectivity to major highways and industrial hubs",
      fullDesc: "Our industrial parks are strategically positioned on NH-07 with direct connectivity to major cities. Sigma Industrial Park 1 is just 1 km from Mauli and 25 km from Panchkula, while Industrial Park 2 offers excellent access to Ambala and surrounding industrial areas. This strategic positioning ensures easy transportation of goods, raw materials, and workforce accessibility.",
      color: "blue",
      benefits: ["Highway Connectivity", "Major City Access", "Transportation Hub", "Logistics Advantage"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "RERA Compliance & Security",
      shortDesc: "All projects are RERA registered with 24x7 security and surveillance systems",
      fullDesc: "Complete transparency and legal compliance with RERA registration ensures your investment is protected. Our parks feature comprehensive security infrastructure including 24x7 surveillance systems, trained security personnel, controlled access points, and emergency response systems. We maintain zero-tolerance approach to safety.",
      color: "green",
      benefits: ["RERA Registered", "24x7 Security", "CCTV Surveillance", "Legal Compliance"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "World-Class Infrastructure",
      shortDesc: "Modern amenities and facilities designed for industrial excellence",
      fullDesc: "State-of-the-art infrastructure including reliable power supply with backup, water connections, sewage systems, and high-speed internet connectivity. Wide internal roads, proper drainage systems, green spaces, and modern utilities ensure your business operations run smoothly. All infrastructural facilities are in place before handover.",
      color: "amber",
      benefits: ["Power Backup", "Water Supply", "Internet Ready", "Modern Utilities"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High Growth Potential",
      shortDesc: "Located in rapidly developing industrial corridors with excellent appreciation potential",
      fullDesc: "Positioned in high-growth industrial corridors with government support and upcoming infrastructure developments. The region benefits from fiscal incentives under EPP (Export Promotion Policy) and proximity to major industrial hubs. Historical data shows consistent appreciation in industrial land values in these strategic locations.",
      color: "purple",
      benefits: ["High ROI", "Government Support", "Industrial Growth", "Value Appreciation"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comprehensive Support",
      shortDesc: "End-to-end assistance from booking to possession and beyond",
      fullDesc: "Our experienced team provides comprehensive support throughout your investment journey. From initial consultation and site visits to documentation, approvals, and post-possession services, we ensure a hassle-free experience. Dedicated relationship managers assist with all queries and requirements.",
      color: "indigo",
      benefits: ["Expert Guidance", "Documentation Help", "Site Assistance", "Post-Sale Support"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      shortDesc: "15+ years of excellence with satisfied customers and successful projects",
      fullDesc: "With over 15 years in real estate development and 11+ ongoing projects, Sigma Group has established a reputation for quality and reliability. Our professional team brings 50+ years of combined experience, ensuring every project meets the highest standards of construction and customer satisfaction.",
      color: "rose",
      benefits: ["15+ Years Experience", "11+ Projects", "Quality Assurance", "Customer Satisfaction"]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { 
        bg: 'bg-blue-50', 
        text: 'text-blue-600', 
        border: 'border-blue-200',
        gradient: 'from-blue-50 to-blue-100'
      },
      green: { 
        bg: 'bg-green-50', 
        text: 'text-green-600', 
        border: 'border-green-200',
        gradient: 'from-green-50 to-green-100'
      },
      amber: { 
        bg: 'bg-amber-50', 
        text: 'text-amber-600', 
        border: 'border-amber-200',
        gradient: 'from-amber-50 to-amber-100'
      },
      purple: { 
        bg: 'bg-purple-50', 
        text: 'text-purple-600', 
        border: 'border-purple-200',
        gradient: 'from-purple-50 to-purple-100'
      },
      indigo: { 
        bg: 'bg-indigo-50', 
        text: 'text-indigo-600', 
        border: 'border-indigo-200',
        gradient: 'from-indigo-50 to-indigo-100'
      },
      rose: { 
        bg: 'bg-rose-50', 
        text: 'text-rose-600', 
        border: 'border-rose-200',
        gradient: 'from-rose-50 to-rose-100'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="section-spacing section-gradient">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200 bg-white/50 px-4 py-2">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6">
              Why Choose Sigma 
              <span className="gradient-text"> Industrial Parks?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the competitive advantages that make our industrial developments the preferred choice for smart investors and growing businesses.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              const isExpanded = expandedCard === index;
              
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 border-0 bg-white overflow-hidden shadow-lg ${
                    isExpanded ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-center font-poppins text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center space-y-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {isExpanded ? feature.fullDesc : feature.shortDesc}
                    </p>
                    
                    {isExpanded && (
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <div className={`bg-gradient-to-r ${colors.gradient} rounded-xl p-4`}>
                          <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
                            <Star className="w-4 h-4 text-amber-600" />
                            Key Benefits
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {feature.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(index)}
                      className={`${colors.text} hover:${colors.bg} transition-all duration-300 hover:scale-105 font-medium text-sm`}
                    >
                      {isExpanded ? (
                        <>
                          Show Less
                          <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          Learn More
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
                  Experience the Sigma Advantage
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Join hundreds of successful investors who have chosen Sigma Industrial Parks for their business growth and investment success.
                </p>
                <div className="flex flex-col gap-4 justify-center">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                    Schedule Site Visit
                  </Button>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 font-medium">
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}