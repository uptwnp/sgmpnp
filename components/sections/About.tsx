'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, Award, TrendingUp, ChevronRight, Target, Shield } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { 
      number: '15+', 
      label: 'Years of Excellence', 
      icon: <Award className="w-8 h-8" />,
      color: 'text-blue-600'
    },
    { 
      number: '11+', 
      label: 'Ongoing Projects', 
      icon: <Building2 className="w-8 h-8" />,
      color: 'text-green-600'
    },
    { 
      number: '50+', 
      label: 'Years Team Experience', 
      icon: <Users className="w-8 h-8" />,
      color: 'text-purple-600'
    },
    { 
      number: '100%', 
      label: 'Quality Commitment', 
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'text-amber-600'
    }
  ];

  const tabs = [
    {
      id: 'mission',
      label: 'Our Mission',
      icon: <Target className="w-5 h-5" />,
      content: 'To deliver high-quality industrial developments that offer unmatched value to our customers. We strive to create spaces designed to meet the evolving needs of modern businesses while ensuring environmental sustainability and community development.'
    },
    {
      id: 'vision',
      label: 'Our Vision',
      icon: <Building2 className="w-5 h-5" />,
      content: 'To be one of the most recognized, admired and loved companies in India for having constantly worked towards fulfilling people\'s dreams of owning premium industrial spaces that drive business growth and economic development.'
    },
    {
      id: 'values',
      label: 'Our Values',
      icon: <Shield className="w-5 h-5" />,
      content: 'Sigma upholds the highest standards in all endeavors, ensuring quality, reliability, and a positive impact on every project. Transparency, innovation, customer satisfaction, and environmental responsibility are at the core of everything Sigma does.'
    }
  ];

  return (
    <section className="section-spacing section-gradient">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-blue-600 border-blue-200 bg-white/50 px-4 py-2">
              About Sigma Group
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6">
              Building Dreams for Over a 
              <span className="gradient-text"> Decade</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sigma Group is a leading real estate development company with over 15+ years of experience in delivering high-quality projects across residential, commercial, and industrial sectors.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-gray-50 rounded-2xl flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <CardTitle className={`text-4xl font-bold font-poppins ${stat.color}`}>
                    {stat.number}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-medium text-gray-700">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold font-poppins text-gray-900 mb-6">
                  Who We Are
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Sigma Group has been the driving force behind the region's real estate growth, with a professional team boasting over 50+ years of combined experience.
                  </p>
                  <p>
                    Sigma is passionate about building a brighter future, acting as innovators crafting exceptional living and working spaces. Sigma's projects are renowned for their top quality and sustainability.
                  </p>
                  <p>
                    Through thoughtful development, Sigma believes they can improve lives and contribute to India's development by creating people-centric spaces that maximize functionality while fostering thriving communities.
                  </p>
                </div>
              </div>

              {/* Expertise Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Residential Brilliance',
                  'Commercial Excellence', 
                  'Industrial Development',
                  'Sustainable Construction'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/80 rounded-xl hover-lift shadow-sm">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Tabs */}
            <div className="space-y-6">
              {/* Tab Navigation */}
              <div className="flex flex-col gap-2 p-2 bg-white/80 rounded-2xl shadow-lg">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full justify-start gap-3 rounded-xl transition-all duration-300 py-4 text-base ${
                      activeTab === tab.id 
                        ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' 
                        : 'text-gray-600 hover:bg-white/80 hover:text-gray-900'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </Button>
                ))}
              </div>

              {/* Tab Content */}
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`transition-all duration-300 ${
                        activeTab === tab.id ? 'opacity-100' : 'opacity-0 hidden'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                          {tab.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 font-poppins">{tab.label}</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">{tab.content}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Awards & Recognition */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Awards & Recognition
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Excellence in Real Estate Development 2023</p>
                    <p>• Best Industrial Project Award 2022</p>
                    <p>• Customer Satisfaction Excellence 2021</p>
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