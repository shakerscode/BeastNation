
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    title: "The Rise of Micro-Influencers in Brand Marketing",
    excerpt: "How smaller creators with highly engaged audiences are delivering better ROI than mega influencers.",
    category: "Trends",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=500&auto=format",
    date: "May 2, 2025"
  },
  {
    title: "AI in Influencer Marketing: Beyond the Hype",
    excerpt: "Practical applications of artificial intelligence that are transforming creator collaborations.",
    category: "Technology",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=500&auto=format",
    date: "April 28, 2025"
  },
  {
    title: "Building Long-term Creator Partnerships",
    excerpt: "Why one-off collaborations are being replaced by strategic, long-term creator relationships.",
    category: "Strategy",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=500&auto=format",
    date: "April 15, 2025"
  }
];

const BlogSection = () => {
  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Latest <span className="text-gradient">Insights</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">Stay ahead with our latest research, trends, and expert perspectives on the creator economy.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="glass border border-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-glow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">
                    {blog.category}
                  </div>
                  <div className="flex items-center text-white/60 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-white/70 text-sm mb-4">{blog.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-white/60 text-xs">{blog.date}</div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="p-0 h-auto hover:bg-transparent hover:text-beast-purple-light"
                  >
                    Read Article
                    <ArrowUpRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-white/20 hover:bg-white/10">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;