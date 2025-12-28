"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Building2, Star, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Industrial Parks",
      subtitle: "in Strategic Locations",
      description:
        "Discover world-class industrial developments with modern infrastructure, RERA compliance, and exceptional growth potential.",
      image:
        "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      title: "Smart Investment",
      subtitle: "Opportunities",
      description:
        "Secure your future with industrial plots starting from ₹27,000 per sq yard. Flexible payment plans and transparent pricing.",
      image:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      title: "Modern Infrastructure",
      subtitle: "Ready for Business",
      description:
        "24x7 security, power backup, water supply, and excellent connectivity to major highways and industrial hubs.",
      image:
        "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919138331357?text=Hi, I am interested in Sigma Industrial Parks. Please provide more information.",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-5xl mx-auto text-center text-white animate-slide-in-up">
          <div className="space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                Haryana, India
              </Badge>
              <Badge className="bg-green-600 text-white border-green-500/50 backdrop-blur-sm shadow-lg px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                RERA Approved
              </Badge>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight text-shadow">
                <span className="block text-white">
                  Sigma Industrial Park Panipat
                </span>
                <span className="block gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                  by Sigma Group
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto px-4">
                Premium RERA approved industrial plots in Panipat, Haryana with
                world-class infrastructure, strategic NH-07 location, and
                flexible payment plans starting ₹27,000 per sq yard.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              <div className="glass-effect rounded-2xl p-6 text-center hover-lift backdrop-blur-md">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-poppins">
                  15+
                </h3>
                <p className="text-sm sm:text-base text-blue-200 font-medium">
                  Years Experience
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center hover-lift backdrop-blur-md">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-poppins">
                  **,000
                </h3>
                <p className="text-sm sm:text-base text-blue-200 font-medium">
                  Starting Price/Sq Yd
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center hover-lift backdrop-blur-md">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-poppins">
                  2
                </h3>
                <p className="text-sm sm:text-base text-blue-200 font-medium">
                  Premium Locations
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 justify-center items-center px-4 max-w-md mx-auto sm:max-w-none sm:flex-row sm:gap-6">
              <Link href="/industrial-park-1">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Explore Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto border-2 border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Get Information
              </Button>
            </div>

            {/* Video CTA */}
            <div className="pt-8">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/15 hover:text-white rounded-full px-6 py-3 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                onClick={() => {
                  /* Add video modal logic */
                }}
              >
                <Play className="w-6 h-6 mr-3" />
                <span className="text-lg font-medium">Watch Project Tour</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
