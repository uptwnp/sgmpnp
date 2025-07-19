'use client';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export default function HomeAbout() {
  const [isExpanded, setIsExpanded] = useState(false);

  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: <Award className="w-6 h-6" /> },
    { number: '11+', label: 'Ongoing Projects', icon: <Building2 className="w-6 h-6" /> },
    { number: '50+', label: 'Years Team Experience', icon: <Users className="w-6 h-6" /> },
    { number: '100%', label: 'Quality Commitment', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
              About Sigma Group
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Building Dreams for Over a Decade
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sigma Group is a leading real estate development company with over 15+ years of experience in delivering high-quality real estate projects across residential, commercial, and industrial sectors.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {stat.icon}
                  </div>
                  <CardTitle className="text-3xl font-bold text-blue-600">{stat.number}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-medium text-gray-700">
                    {stat.label}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sigma Group has been the driving force behind the region's real estate growth, with a professional team boasting over 50+ years of combined experience. We are passionate about building a brighter future, acting as innovators crafting exceptional living and working spaces.
                </p>
                <p>
                  Our projects are renowned for their top quality and sustainability. We create people-centric spaces that maximize functionality while fostering thriving communities. Through thoughtful development, we believe we can improve lives and contribute to India's development.
                </p>
                
                {isExpanded && (
                  <div className="space-y-4">
                    <p>
                      <strong>Our Mission:</strong> To deliver high-quality projects that offer unmatched value to our customers. We strive to create spaces designed to meet the evolving needs of modern businesses while ensuring environmental sustainability.
                    </p>
                    <p>
                      <strong>Our Vision:</strong> To be one of the most recognized, admired and loved companies in India for having constantly worked towards fulfilling people's dreams.
                    </p>
                    <p>
                      <strong>Our Commitment:</strong> We uphold the highest standards in all our endeavors, ensuring quality, reliability, and a positive impact on every project. As a forerunner in adopting global best practices and cutting-edge construction innovations, we combine speed and safety with deep understanding of evolving customer needs.
                    </p>
                    <p>
                      <strong>Leadership through Innovation:</strong> Our relentless pursuit of groundbreaking ideas has set new industry standards, earning us recognition and prestigious awards in the real estate sector.
                    </p>
                  </div>
                )}
              </div>
              
              <Button 
                variant="outline" 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                {isExpanded ? (
                  <>
                    Read Less
                    <ChevronUp className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Our Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-800">Residential Brilliance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-800">Commercial Excellence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-800">Industrial Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-800">Sustainable Construction</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-900">Our Values</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-green-800">Quality & Reliability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-green-800">Innovation & Excellence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-green-800">Customer Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-green-800">Environmental Responsibility</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}