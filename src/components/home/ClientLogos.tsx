const clients = [
  "Adidas",
  "Amazon",
  "Apple",
  "Coca-Cola",
  "Disney",
  "Google",
  "Microsoft",
  "Netflix",
  "Nike",
  "Spotify",
];

const ClientLogos = () => {
  return (
    <section className="py-12 overflow-hidden bg-beast-black/30">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4">
        <div className="relative">
          {/* Edge fade */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee container */}
          <div className="marquee-container overflow-hidden relative">
            <div className="marquee-track">
              {/* First set of logos */}
              <div className="marquee-content flex gap-16 items-center">
                {clients.map((client, i) => (
                  <div
                    key={`first-${i}`}
                    className="text-white text-2xl font-bold opacity-60 hover:opacity-100 whitespace-nowrap"
                  >
                    {client}
                  </div>
                ))}
              </div>
              {/* Duplicate set of logos */}
              <div className="marquee-content flex gap-16 items-center ml-16">
                {clients.map((client, i) => (
                  <div
                    key={`second-${i}`}
                    className="text-white text-2xl font-bold opacity-60 hover:opacity-100 whitespace-nowrap"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
