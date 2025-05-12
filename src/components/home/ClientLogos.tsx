import React from 'react';

const clients = [
  "Adidas", "Amazon", "Apple", "Coca-Cola", "Disney", 
  "Google", "Microsoft", "Netflix", "Nike", "Spotify"
];

const ClientLogos = () => {
  return (
    <section className="py-12 overflow-hidden bg-beast-black/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium text-white/70">Trusted by global brands</h2>
        </div>
        
        <div className="relative">
          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Marquee Animation */}
          <div className="flex overflow-hidden">
            <div className="flex items-center justify-around min-w-full animate-marquee">
              {clients.map((client) => (
                <div 
                  key={client}
                  className="mx-8 h-16 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <div className="font-bold text-xl">{client}</div>
                </div>
              ))}
            </div>
            
            {/* Duplicate for seamless looping */}
            <div className="flex items-center justify-around min-w-full animate-marquee">
              {clients.map((client) => (
                <div 
                  key={`dup-${client}`}
                  className="mx-8 h-16 w-32 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <div className="font-bold text-xl">{client}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;