import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from 'lucide-react';

const services = [
  {
    title: "AI-Powered Brand Management",
    description: "Leverage next-gen AI to elevate your brand visibility, streamline content workflows, and ensure your message stays consistent and impactful across every touch point.",
    icon: "✨"
  },
  {
    title: "Social Studio",
    description: "Create impactful content, curate it with intention, and analyze every insight to ensure your message truly resonates with the audience that matters most.",
    icon: "📱"
  },
  {
    title: "Influencer Agency",
    description: "Collaborate with influential creators who don’t just represent your brand — they live it, breathe it, and inspire real connection through authentic engagement",
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
    <section className="relative pt-40 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-beast-accent to-transparent opacity-30" />
        <div className="absolute top-2/4 left-[480px] w-72 h-72 rounded-full bg-beast-purple-dark blur-[100px] animate-pulse-gentle" />
        <div className="absolute bottom-[20%] right-1/4 w-96 h-96 rounded-full bg-beast-purple blur-[120px] animate-pulse-gentle" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[600px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 space-y-1.5 mt-14">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 mb-4">
              <Star className="w-4 h-4 mr-2 text-beast-purple-light" />
              <span>Revolutionizing Creator Economy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display ">
              <span className="text-gradient">Powering</span> The Next <br /> <p className='mt-2'>Generation Of</p> <span className="text-gradient">Creators</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-xl">
              We combine technology, creativity, and data to help brands and creators build meaningful connections and drive exceptional results.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary-gradient shadow-glow hover:shadow-glow-lg text-white text-base px-6 transition-all ease-in-out duration-300">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-base transition-all ease-in-out duration-300">
                Our Services
              </Button>
            </div>
          </div>
          
          {/* Right Column: Service Cards */}
          <div className="w-full lg:w-1/2 relative h-[400px] flex items-center justify-center">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`absolute glass w-[400px] h-[250px] p-6 rounded-xl transition-all duration-500 shadow-glow border border-white/20 ${
                  index === activeIndex 
                    ? "z-20 opacity-100 translate-y-0 rotate-0" 
                    : index === (activeIndex + 1) % services.length 
                    ? "z-10 opacity-70 translate-y-10 rotate-3" 
                    : "z-0 opacity-50 translate-y-20 rotate-6"
                }`}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
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