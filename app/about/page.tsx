import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Target, Users, Award, MapPin, TrendingUp, Shield, Zap } from 'lucide-react';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'About Sigma Group Panipat | 15+ Years Industrial Development Experience',
  description: 'Learn about Sigma Group - Leading industrial park developer in Panipat with 15+ years experience. Discover our mission, values, and commitment to quality industrial projects in Haryana.',
  keywords: 'Sigma Group, Sigma Panipat, about sigma group, industrial developer panipat, real estate company haryana, sigma group history',
};

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: <Award className="w-6 h-6" /> },
    { number: '11+', label: 'Ongoing Projects', icon: <Building2 className="w-6 h-6" /> },
    { number: '50+', label: 'Years Team Experience', icon: <Users className="w-6 h-6" /> },
    { number: '100%', label: 'Quality Commitment', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'To provide premium industrial plots that enable businesses to grow and thrive in strategic locations with transparent pricing and flexible payment options.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Our Commitment',
      description: 'We are committed to delivering quality industrial infrastructure with all necessary approvals, clear documentation, and ongoing support throughout your investment journey.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Our Promise',
      description: 'Complete transparency in all dealings, competitive pricing, flexible payment plans, and dedicated customer service to ensure your investment success.'
    }
  ];

  return (
    <main className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
              About Sigma Group
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4 sm:mb-6 px-4">
              About Sigma Group Panipat
              <span className="gradient-text"> - Industrial Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
              Sigma Group is dedicated to developing premium industrial plots in Panipat and across Haryana, serving as the foundation for business growth and industrial development in strategic locations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4 px-4">
                About Sigma Group
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Your trusted partner for industrial plot investments
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Who We Are</h3>
                <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>
                    Sigma Group specializes in developing high-quality industrial plots in strategic locations across Haryana. We understand the growing demand for industrial infrastructure and have designed our projects to meet the diverse needs of modern businesses.
                  </p>
                  <p>
                    Sigma's flagship projects - Sigma Industrial Park 1 and Sigma Industrial Park 2 - offer a range of plot sizes from 300 to 3000 square yards, catering to businesses of all scales. With competitive pricing starting from ₹27,000 per square yard, Sigma makes industrial investment accessible and profitable.
                  </p>
                  <p>
                    Located in prime industrial corridors, Sigma's projects benefit from excellent connectivity to major highways, proximity to existing industrial clusters, and access to essential infrastructure including power, water, and transportation networks.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover-lift">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Key Highlights</h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Strategic locations in industrial belts</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Plot sizes from 300 to 3000 square yards</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Competitive pricing with flexible payment plans</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">All necessary approvals and clear documentation</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Excellent connectivity and infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 hover-lift">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-blue-600">
                      {value.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-poppins">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
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
                Why Haryana for Industrial Investment?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Strategic advantages that make Haryana an ideal location for industrial development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-3 font-poppins">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    Strategic Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-gray-600">• Located on major national highways</p>
                  <p className="text-sm sm:text-base text-gray-600">• Close proximity to Delhi and Chandigarh</p>
                  <p className="text-sm sm:text-base text-gray-600">• Well-connected by road and rail networks</p>
                  <p className="text-sm sm:text-base text-gray-600">• Access to major industrial hubs</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-3 font-poppins">
                    <Building2 className="w-6 h-6 text-green-600" />
                    Industrial Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-gray-600">• Established industrial ecosystem</p>
                  <p className="text-sm sm:text-base text-gray-600">• Reliable power and water supply</p>
                  <p className="text-sm sm:text-base text-gray-600">• Skilled workforce availability</p>
                  <p className="text-sm sm:text-base text-gray-600">• Government support for industries</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-3 font-poppins">
                    <TrendingUp className="w-6 h-6 text-amber-600" />
                    Growth Potential
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-gray-600">• Rapidly developing industrial corridor</p>
                  <p className="text-sm sm:text-base text-gray-600">• High appreciation potential</p>
                  <p className="text-sm sm:text-base text-gray-600">• Growing demand for industrial space</p>
                  <p className="text-sm sm:text-base text-gray-600">• Future infrastructure developments planned</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-3 font-poppins">
                    <Shield className="w-6 h-6 text-purple-600" />
                    Business Environment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <p className="text-sm sm:text-base text-gray-600">• Favorable industrial policies</p>
                  <p className="text-sm sm:text-base text-gray-600">• Easy regulatory approvals</p>
                  <p className="text-sm sm:text-base text-gray-600">• Supportive local administration</p>
                  <p className="text-sm sm:text-base text-gray-600">• Growing business community</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}