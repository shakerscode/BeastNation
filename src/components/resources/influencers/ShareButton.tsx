import { Facebook, Instagram, Share2, } from "lucide-react";

const ShareButtons = () => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
  };

  return (
    <section className="flex items-center gap-2 mt-10 bg-white/10 rounded-lg p-4">
      <Share2 className="w-5 h-5 text-white" />
      <span className="text-white font-medium text-sm mr-5">
        Share This Post On:
      </span>

      <div className="flex items-center gap-2">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-black bg-black rounded-full hover:scale-105 transition"
        >
          {/* <span className="text-black font-bold">f</span> */}
          <Facebook className="w-5 h-5 text-white" />
        </a>

        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-black bg-black rounded-full hover:scale-105 transition"
        >
          <span className="text-white font-bold">X</span>
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-black bg-black rounded-full hover:scale-105 transition"
        >
          <Instagram className="w-5 h-5 text-white" />
        </a>

        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-black rounded-full hover:scale-105 transition"
        >
          <span className="text-white font-bold underline">in</span>
        </a>
      </div>
    </section>
  );
};

export default ShareButtons;
