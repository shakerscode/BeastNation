import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Instagram, Youtube, Share2 } from 'lucide-react';

const influencers = [
  {
    name: "Alex Morgan",
    category: "Lifestyle & Fashion",
    followers: "2.8M",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format",
    platforms: ["instagram", "tiktok"]
  },
  {
    name: "Sofia Chen",
    category: "Beauty & Wellness",
    followers: "1.5M",
    image: "https://images.unsplash.com/photo-1563306406-e66174fa3787?q=80&w=400&auto=format",
    platforms: ["youtube", "instagram"]
  },
  {
    name: "Marcus Johnson",
    category: "Gaming & Tech",
    followers: "3.2M",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format",
    platforms: ["youtube", "tiktok"]
  },
  {
    name: "Priya Patel",
    category: "Food & Travel",
    followers: "950K",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format",
    platforms: ["instagram", "youtube"]
  },
  {
    name: "Jordan Williams",
    category: "Fitness & Health",
    followers: "1.8M",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format",
    platforms: ["instagram", "tiktok"]
  },
  {
    name: "Emma Rodriguez",
    category: "Entertainment",
    followers: "4.1M",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format",
    platforms: ["youtube", "tiktok", "instagram"]
  }
];

const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'instagram':
      return <Instagram className="h-4 w-4" />;
    case 'youtube':
      return <Youtube className="h-4 w-4" />;
    case 'tiktok':
      return <Share2 className="h-4 w-4" />; // Replaced TikTok with Share2 as an alternative
    default:
      return null;
  }
};

const TalentSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };
  
  return (
    <section id="talent" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our <span className="text-gradient">Talent</span></h2>
            <p className="text-white/70 max-w-xl">Partnering with exceptional creators who drive authentic engagement and deliver real results for brands.</p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <Button size="icon" variant="outline" onClick={scrollLeft}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" onClick={scrollRight}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {influencers.map((influencer) => (
            <div 
              key={influencer.name}
              className="min-w-[280px] glass group snap-start"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">{influencer.name}</h3>
                  <p className="text-white/70 text-sm mb-2">{influencer.category}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-beast-purple-light font-medium">
                      {influencer.followers} followers
                    </div>
                    <div className="flex space-x-2">
                      {influencer.platforms.map((platform) => (
                        <div key={platform} className="bg-white/10 p-1.5 rounded-full">
                          {getPlatformIcon(platform)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-white/20 hover:bg-white/10">
            View All Talent
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TalentSection;