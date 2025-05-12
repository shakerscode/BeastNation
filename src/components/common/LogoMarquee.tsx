import React from "react";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
];

const LogoMarquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-white">
      <div className="animate-marquee inline-block">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="inline-block h-12 mx-8 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
        {/* Duplicate for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`logo-duplicate-${index}`}
            className="inline-block h-12 mx-8 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
