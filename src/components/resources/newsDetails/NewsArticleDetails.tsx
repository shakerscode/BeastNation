import { Link, useParams } from "react-router";
import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect } from "react";

const ArticlePage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",  
    });
  }, [slug]);

  const title = slug?.replace("-", " ");
  const newTitle = title
    ?.replace(/(?:^|-)([a-z])/g, (_, char) => ` ${char.toUpperCase()}`)
    .trim();

  return (
    <div className="bg-black/5 text-white w-full ">
      {/* Header Section */}
      <div className="pt-28 md:pt-40 px-4 md:px-0 max-w-7xl mx-auto">
        <div className="text-sm text-white/60 mb-4">
          <Link
            to="/resources/news-and-press"
            className="hover:underline text-xs"
          >
            Home / Trendy Nation News & Press
          </Link>
          <span className="text-xs"> / {newTitle}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          TrendyNation Announces Strategic Partnership with TikTok Stars
        </h1>

        <div className="text-xs text-white/60 mb-8">
          By{" "}
          <span className="text-beast-purple-light font-medium">
            Trendy Nation
          </span>{" "}
          • 3 min read • Mar 12, 2025
        </div>

        {/* <div className="mb-12">
          <img
            src="/images/trendynation-crackerbarrel.jpg"
            alt="Cracker Barrel partners"
            className="w-full rounded-xl"
          />
        </div> */}
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-start justify-start gap-10 md:gap-20">
        <div className="max-w-xl flex gap-4 items-center relative">
          <span className="text-white/60">Share this:</span>
          <Facebook className="w-5 h-5 hover:text-beast-purple-light cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:text-beast-purple-light cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-beast-purple-light cursor-pointer" />
          <Mail className="w-5 h-5 hover:text-beast-purple-light cursor-pointer" />
        </div>

        <div className="max-w-3xl space-y-8 text-sm prose prose-invert text-white/90 pb-20">
          <p className="text-lg italic text-white/80">
            Rooted in 55 years of tradition, Cracker Barrel’s rich history paves
            the way for a new chapter of growth.
          </p>

          <p>
            Cracker Barrel has appointed new{" "}
            <span className="text-beast-purple-light font-medium">
              industry-leading agencies
            </span>{" "}
            to support its brand refresh, an important milestone in Cracker
            Barrel’s journey to strengthen its connection with both loyal and
            new guests.
          </p>

          <p>
            Having named three new agencies of record—{" "}
            <span className="font-medium">Prophet, Trendy Nation</span>, and{" "}
            <span className="font-medium">Blue Engine</span>—this refresh is
            guided by extensive guest research and data-driven insights to
            preserve the brand’s authenticity while evolving for future
            audiences.
          </p>

          <p>
            "Cracker Barrel is iconic and beloved, and we’re honored to help
            shape its next chapter through the power of social-first
            storytelling," said Joe Gagliese, Co-Founder and CEO of Viral
            Nation.
          </p>

          <h3>More about the agencies:</h3>
          <ul>
            <li>
              <strong>Prophet</strong>: A global strategy and experience
              consultancy helping refresh the visual identity and guest
              experience.
            </li>
            <li>
              <strong>Trendy Nation</strong>: A leader in social-first
              influencer and content-led marketing, responsible for social media
              transformation and Gen-Z engagement.
            </li>
            <li>
              <strong>Blue Engine</strong>: A creative communications firm
              focused on storytelling, press, events, and stakeholder campaigns.
            </li>
          </ul>

          <h3>About Cracker Barrel Old Country Store®</h3>
          <p>
            Founded in 1969, Cracker Barrel serves up comfort food and a
            welcoming experience in over 650 stores across the U.S.
            <br /> Learn more:{" "}
            <a
              href="https://crackerbarrel.com"
              className="text-beast-purple-light underline"
            >
              crackerbarrel.com
            </a>
          </p>

          <h3>About Trendy Nation</h3>
          <p>
            Trendy Nation is a global leader in influencer marketing, content
            strategy, and performance-driven results for iconic brands
            worldwide.
            <br /> Visit us:{" "}
            <a
              href="https://trendynation.com"
              className="text-beast-purple-light underline"
            >
              trendynation.com
            </a>
          </p>

          <p>
            Follow us on{" "}
            <a className="underline" href="#">
              LinkedIn
            </a>
            ,{" "}
            <a className="underline" href="#">
              X
            </a>
            ,{" "}
            <a className="underline" href="#">
              Instagram
            </a>
            ,{" "}
            <a className="underline" href="#">
              TikTok
            </a>
            , and{" "}
            <a className="underline" href="#">
              YouTube
            </a>
            .
          </p>

          <h3 className="mt-10">Media Contacts</h3>
          <p className="text-sm">
            Media Relations:{" "}
            <a
              href="mailto:Media.Relations@crackerbarrel.com"
              className="text-beast-purple-light"
            >
              Media.Relations@crackerbarrel.com
            </a>
            <br />
            PR for Trendy Nation:{" "}
            <a
              href="mailto:vnationpr@sunshine.com"
              className="text-beast-purple-light"
            >
              tnationpr@sunshine.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
