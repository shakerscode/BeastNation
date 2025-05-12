import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-beast-accent/20 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <div className="text-beast-purple-light font-medium mb-2">FEATURED CASE STUDY</div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Transforming <span className="text-gradient">Spotify's</span> <br />
                Influencer Strategy
              </h2>
              <div className="w-20 h-1 bg-primary-gradient rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-white/80">
                We partnered with Spotify to reimagine their approach to creator partnerships, 
                resulting in a 220% increase in engagement and 40% growth in premium subscriptions 
                driven by influencer marketing.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-beast-purple-light font-medium">Challenge</div>
                  <div className="text-white/70">Connect with Gen Z audiences authentically</div>
                </div>
                <div>
                  <div className="text-beast-purple-light font-medium">Solution</div>
                  <div className="text-white/70">Micro-influencer activation program</div>
                </div>
                <div>
                  <div className="text-beast-purple-light font-medium">Result</div>
                  <div className="text-white/70">220% increase in engagement</div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="bg-primary-gradient">
                  View Full Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video overflow-hidden rounded-xl relative group">
              <div className="absolute inset-0 bg-beast-purple/30 z-10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-20"></div>
              
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format"
                alt="Spotify Case Study"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute left-6 bottom-6 z-30">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/800px-Spotify_logo_without_text.svg.png" 
                  alt="Spotify"
                  className="w-12 h-12"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 border-2 border-beast-purple-light/30 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-beast-purple-light/30 rounded-full hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;