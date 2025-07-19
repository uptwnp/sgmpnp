'use client';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Shield, Zap, TrendingUp, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';

export default function HomeAdvantages() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const advantages = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Strategic Locations",
      shortDesc: "Prime locations with excellent connectivity to major highways and industrial hubs",
      fullDesc: "Our industrial parks are strategically located on NH-07 with direct connectivity to major cities. Sigma Industrial Park 1 is just 1 km from Mauli and 25 km from Panchkula, while Industrial Park 2 offers excellent access to Ambala and surrounding industrial areas. This strategic positioning ensures easy transportation of goods and raw materials.",
      color: "blue"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "RERA Compliance & Security",
      shortDesc: "All projects are RERA registered with 24x7 security and surveillance systems",
      fullDesc: "Complete transparency and legal compliance with RERA registration. Our parks feature comprehensive security infrastructure including 24x7 surveillance systems, trained security personnel, and controlled access points. We maintain zero-tolerance approach to safety, ensuring your investment and operations are fully protected.",
      color: "green"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "World-Class Infrastructure",
      shortDesc: "Modern amenities and facilities designed for industrial excellence",
      fullDesc: "State-of-the-art infrastructure including reliable power supply, water connections, sewage systems, and high-speed internet connectivity. Wide internal roads, proper drainage systems, green spaces, and modern utilities ensure your business operations run smoothly. All infrastructural facilities are in place before handover.",
      color: "amber"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High Growth Potential",
      shortDesc: "Located in rapidly developing industrial corridors with excellent appreciation potential",
      fullDesc: "Positioned in high-growth industrial corridors with government support and upcoming infrastructure developments. The region benefits from fiscal incentives under EPP (Export Promotion Policy) and proximity to major industrial hubs. Historical data shows consistent appreciation in industrial land values in these strategic locations.",
      color: "purple"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comprehensive Support",
      shortDesc: "End-to-end assistance from booking to possession and beyond",
      fullDesc: "Our experienced team provides comprehensive support throughout your investment journey. From initial consultation and site visits to documentation, approvals, and post-possession services, we ensure a hassle-free experience. Dedicated relationship managers assist with all queries and requirements.",
      color: "indigo"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      shortDesc: "15+ years of excellence with satisfied customers and successful projects",
      fullDesc: "With over 15 years in real estate development and 11+ ongoing projects, Sigma Group has established a reputation for quality and reliability. Our professional team brings 50+ years of combined experience, ensuring every project meets the highest standards of construction and customer satisfaction.",
      color: "rose"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' },
      rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-200' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Sigma Industrial Parks?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the competitive advantages that make our industrial developments the preferred choice for smart investors and growing businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color);
            const isExpanded = expandedCard === index;
            
            return (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${isExpanded ? colors.border : 'border-gray-200'}`}>
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-4 ${colors.text}`}>
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {isExpanded ? advantage.fullDesc : advantage.shortDesc}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpanded(index)}
                    className={`${colors.text} hover:${colors.bg}`}
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
      </div>
    </section>
  );
}