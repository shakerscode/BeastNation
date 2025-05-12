import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from 'lucide-react';

const services = [
  {
    title: "AI-Powered Brand Management",
    description: "Leverage cutting-edge AI to manage and optimize your brand presence across platforms.",
    icon: "✨"
  },
  {
    title: "Social Studio",
    description: "Create, curate, and analyze content that resonates with your target audience.",
    icon: "📱"
  },
  {
    title: "Influencer Agency",
    description: "Connect with top-tier influencers that align with your brand identity and goals.",
    icon: "🌟"
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-beast-accent to-transparent opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-beast-purple-dark blur-[100px] animate-pulse-gentle" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-beast-purple blur-[120px] animate-pulse-gentle" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 mb-4">
              <Star className="w-4 h-4 mr-2 text-beast-purple-light" />
              <span>Revolutionizing Creator Economy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight">
              <span className="text-gradient">Powering</span> The Next <br /> Generation Of <span className="text-gradient">Creators</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-xl">
              We combine technology, creativity, and data to help brands and creators build meaningful connections and drive exceptional results.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary-gradient shadow-glow hover:shadow-glow-lg transition-all duration-300 text-white px-6">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Our Services
              </Button>
            </div>
          </div>
          
          {/* Right Column: Service Cards */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`absolute glass w-80 p-6 rounded-xl transition-all duration-500 shadow-glow border border-white/20 ${
                  index === activeIndex 
                    ? "z-20 opacity-100 translate-y-0 rotate-0" 
                    : index === (activeIndex + 1) % services.length 
                    ? "z-10 opacity-70 translate-y-10 rotate-3" 
                    : "z-0 opacity-50 translate-y-20 rotate-6"
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;