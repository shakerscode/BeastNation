import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, X } from 'lucide-react';

// Sample video data
const videos = [
  {
    id: 1,
    title: "Viral Campaign Strategy",
    creator: "Emma Johnson",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format",
    views: "1.2M",
    duration: "3:45"
  },
  {
    id: 2,
    title: "Influencer Marketing Secrets",
    creator: "Alex Thompson",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format",
    views: "875K",
    duration: "5:12"
  },
  {
    id: 3,
    title: "Building Your Creator Brand",
    creator: "Sara Williams",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format",
    views: "1.5M",
    duration: "4:30"
  },
  {
    id: 4,
    title: "Social Media Analytics Mastery",
    creator: "Mark Davis",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format",
    views: "950K",
    duration: "6:18"
  },
  {
    id: 5,
    title: "Content Creation Workshop",
    creator: "Priya Sharma",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format",
    views: "720K",
    duration: "8:45"
  },
  {
    id: 6,
    title: "TikTok Growth Hacking",
    creator: "James Wilson",
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format", 
    views: "2.1M",
    duration: "4:55"
  }
];

const FeaturedContent = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  
  return (
    <section id="content" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured <span className="text-gradient">Content</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">Explore our most popular videos showcasing the latest trends, insights, and success stories in the creator economy.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="glass-dark group relative cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-beast-purple flex items-center justify-center">
                  <Play className="h-8 w-8 text-white fill-white ml-1" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-lg">{video.title}</h3>
                    <p className="text-white/60 text-sm">{video.creator}</p>
                  </div>
                  <div className="text-sm text-white/60">
                    {video.duration}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-beast-purple/80 rounded-full py-1 px-2 text-xs font-medium">
                  {video.views} views
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Video Dialog/Lightbox */}
      <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[800px] p-0 bg-black border-none overflow-hidden">
          <div className="relative w-full">
            <button 
              className="absolute top-4 right-4 z-10 rounded-full bg-black/70 p-2"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full">
              <div className="flex items-center justify-center w-full h-full text-white/70">
                Video player would appear here
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedContent;