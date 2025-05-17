import { Talent } from "@/types/talent";
import {
  BarChart3Icon,
  BrushIcon,
  ChartAreaIcon,
  Cpu,
  FileText,
  GlassesIcon,
  Globe,
  MegaphoneIcon,
  PlaySquareIcon,
  PuzzleIcon,
  RadioTower,
  Smartphone,
  SmartphoneNfcIcon,
  TargetIcon,
  TrendingUp,
  UserCircle,
  Users,
  Users2,
  UsersIcon,
  UsersRound,
  VideoIcon,
} from "lucide-react";
import { FaPhoneSlash, FaUserAltSlash } from "react-icons/fa";

export type Blog = {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
};

export type Influencer = {
  id: number;
  name: string;
  platform: string;
  followers: string;
  category: string;
  location: string;
  image: string;
  verified: boolean;
};

export const influencerBlogs = [
  {
    id: 1,
    title: "10 Mom Influencers Redefining Motherhood on Instagram in 2025",
    date: "JAN 28, 2025",
    image: "/img/blog/social.png",
    category: "Family",
  },
  {
    id: 2,
    title: "10 Instagram Influencers Shaping IG's Cultural Pulse In 2025",
    date: "JAN 17, 2025",
    image: "/img/blog/social-media-roi-long-term.png",
    category: "Social Media",
  },
  {
    id: 3,
    title: "20 Gaming Influencers Changing The Game In 2024",
    date: "AUG 14, 2024",
    image: "/img/blog/Blog_Image_Template_Thought-Leadership-Marketing.png",
    category: "Gaming",
  },
  {
    id: 4,
    title: "8 Top Dogs To Follow In 2024",
    date: "AUG 12, 2024",
    image: "/img/blog/Always-On_Trending_Featured.png",
    category: "Pets",
  },
  {
    id: 5,
    title: "15 Best People To Follow On X",
    date: "AUG 12, 2024",
    image: "/img/blog/Blog_Image_Template_Creators-Talent_Feature.png",
    category: "Social Media",
  },
  {
    id: 6,
    title:
      "15 Top Instagram Travel Influencers You Should Be Following In 2024",
    date: "AUG 12, 2024",
    image: "/img/blog/Always-On_Trending_Featured.png",
    category: "Travel",
  },
  {
    id: 7,
    title: "10 Food Influencers to Follow on Instagram",
    date: "AUG 12, 2024",
    image: "/img/blog/EDIT-THIS-ONE.png",
    category: "Food",
  },
  {
    id: 8,
    title: "The Top 15 Fitness Influencers on Instagram in 2024",
    date: "AUG 12, 2024",
    image: "/img/blog/Blog_Image_Template_B2B-Marketing_Feature.png",
    category: "Fitness",
  },
  {
    id: 9,
    title: "15 Of Latin America's Most Famous TikTok Influencers",
    date: "AUG 12, 2024",
    image: "/img/blog/Always-On_Trending_Featured.png",
    category: "Regional",
  },
];

export const influencerList = [
  {
    id: 1,
    name: "Sophia Ray",
    platform: "Instagram",
    followers: "1.2M",
    category: "Fashion",
    location: "Los Angeles, USA",
    image: "/img/influencers/insta_hero.png",
    verified: true,
  },
  {
    id: 2,
    name: "Liam Chowdhury",
    platform: "YouTube",
    followers: "850K",
    category: "Tech",
    location: "Dhaka, Bangladesh",
    image: "/img/influencers/Tyreek-Hill-superbowl-blog.png",
    verified: true,
  },
  {
    id: 3,
    name: "Ava Monroe",
    platform: "TikTok",
    followers: "3.1M",
    category: "Dance",
    location: "Toronto, Canada",
    image: "/img/influencers/Top Couples Blog Image _Noah and Lori.png",
    verified: false,
  },
  {
    id: 4,
    name: "Maya Torres",
    platform: "Instagram",
    followers: "780K",
    category: "Travel",
    location: "Barcelona, Spain",
    image: "/img/influencers/superbowl blog image.png",
    verified: false,
  },
  {
    id: 5,
    name: "Ethan Brooks",
    platform: "YouTube",
    followers: "1.9M",
    category: "Gaming",
    location: "Austin, USA",
    image: "/img/influencers/Steph-Grasso-Blog-Image.png",
    verified: true,
  },
  {
    id: 6,
    name: "Layla Khan",
    platform: "Instagram",
    followers: "620K",
    category: "Beauty",
    location: "Dubai, UAE",
    image: "/img/influencers/listicle image.png",
    verified: false,
  },
  {
    id: 7,
    name: "Carlos Mendoza",
    platform: "TikTok",
    followers: "2.4M",
    category: "Comedy",
    location: "Mexico City, Mexico",
    image: "/img/influencers/lifestyle influencer.png",
    verified: true,
  },
  {
    id: 8,
    name: "Elina Becker",
    platform: "Instagram",
    followers: "980K",
    category: "Fitness",
    location: "Berlin, Germany",
    image: "/img/influencers/Latinxlisticle_ javiera.png",
    verified: true,
  },
  {
    id: 9,
    name: "Ravi Sharma",
    platform: "YouTube",
    followers: "1.1M",
    category: "Education",
    location: "Mumbai, India",
    image: "/img/influencers/food influencer listicle.png",
    verified: false,
  },
  {
    id: 10,
    name: "Nora Jensen",
    platform: "Instagram",
    followers: "1.5M",
    category: "Lifestyle",
    location: "Stockholm, Sweden",
    image: "/img/influencers/Tyreek-Hill-superbowl-blog.png",
    verified: true,
  },
];

// Mock data for now, in a real app this would come from an API
export const mockTalents: Talent[] = [
  {
    id: "1",
    name: "Nora Jensen",
    image: "/img/influencers/food influencer listicle.png",
    location: "Los Angeles, CA",
    followers: 5300000,
    categories: ["Fitness", "Lifestyle"],
    bio: "Fitness influencer and lifestyle enthusiast. Dedicated to inspiring others to live their best lives through sustainable health practices.",
    stats: {
      engagementRate: "3.8%",
      followers: {
        instagram: 2500000,
        tiktok: 1800000,
        youtube: 1000000,
      },
      audienceAge: [
        { age: "18-24", percentage: 32 },
        { age: "25-34", percentage: 45 },
        { age: "35-44", percentage: 15 },
        { age: "45+", percentage: 8 },
      ],
      audienceGender: [
        { gender: "Female", percentage: 65 },
        { gender: "Male", percentage: 35 },
      ],
      audienceLocations: [
        { location: "United States", percentage: 60 },
        { location: "Canada", percentage: 15 },
        { location: "UK", percentage: 10 },
        { location: "Other", percentage: 15 },
      ],
    },
    socialLinks: {
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
      youtube: "https://youtube.com",
    },
    featuredContent: [
      {
        title: "Morning Routine 2023",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Workout Tips",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "2",
    name: "Marcus Chen",
    image: "/img/influencers/Latinxlisticle_ javiera.png",
    location: "New York, NY",
    followers: 3700000,
    categories: ["Tech", "Gaming"],
    bio: "Tech reviewer and gaming enthusiast. Breaking down complex technologies into digestible content for everyone.",
    stats: {
      engagementRate: "4.2%",
      followers: {
        youtube: 2200000,
        twitter: 1500000,
      },
      audienceAge: [
        { age: "18-24", percentage: 40 },
        { age: "25-34", percentage: 35 },
        { age: "35-44", percentage: 20 },
        { age: "45+", percentage: 5 },
      ],
      audienceGender: [
        { gender: "Male", percentage: 75 },
        { gender: "Female", percentage: 25 },
      ],
      audienceLocations: [
        { location: "United States", percentage: 50 },
        { location: "Europe", percentage: 25 },
        { location: "Asia", percentage: 15 },
        { location: "Other", percentage: 10 },
      ],
    },
    socialLinks: {
      youtube: "https://youtube.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
    featuredContent: [
      {
        title: "iPhone 15 Review",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Gaming Setup Tour",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "3",
    name: "James Rodriguez",
    image: "/img/influencers/insta_hero.png",
    location: "Miami, FL",
    followers: 4200000,
    categories: ["Beauty", "Fashion"],
    bio: "Beauty guru and fashion trendsetter. Helping you discover your personal style and beauty routine.",
    stats: {
      engagementRate: "5.1%",
      followers: {
        instagram: 2800000,
        tiktok: 1400000,
      },
      audienceAge: [
        { age: "18-24", percentage: 45 },
        { age: "25-34", percentage: 35 },
        { age: "35-44", percentage: 15 },
        { age: "45+", percentage: 5 },
      ],
      audienceGender: [
        { gender: "Female", percentage: 85 },
        { gender: "Male", percentage: 15 },
      ],
      audienceLocations: [
        { location: "United States", percentage: 55 },
        { location: "UK", percentage: 15 },
        { location: "Australia", percentage: 10 },
        { location: "Other", percentage: 20 },
      ],
    },
    socialLinks: {
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    featuredContent: [
      {
        title: "Summer Look Book",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Skincare Routine",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "4",
    name: "Sophia Williams",
    image: "/img/influencers/lifestyle influencer.png",
    location: "Chicago, IL",
    followers: 2900000,
    categories: ["Food", "Travel"],
    bio: "Culinary explorer and travel enthusiast. Taking you on global adventures through food and culture.",
    stats: {
      engagementRate: "4.5%",
      followers: {
        instagram: 1500000,
        youtube: 1400000,
      },
      audienceAge: [
        { age: "18-24", percentage: 20 },
        { age: "25-34", percentage: 45 },
        { age: "35-44", percentage: 25 },
        { age: "45+", percentage: 10 },
      ],
      audienceGender: [
        { gender: "Female", percentage: 55 },
        { gender: "Male", percentage: 45 },
      ],
      audienceLocations: [
        { location: "United States", percentage: 45 },
        { location: "Europe", percentage: 25 },
        { location: "Asia", percentage: 20 },
        { location: "Other", percentage: 10 },
      ],
    },
    socialLinks: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
    featuredContent: [
      {
        title: "Tokyo Street Food Tour",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Homemade Pasta Recipes",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "5",
    name: "Emma Johnson",
    image: "/img/influencers/Top Couples Blog Image _Noah and Lori.png",
    location: "Seattle, WA",
    followers: 3100000,
    categories: ["Lifestyle", "Parenting"],
    bio: "Lifestyle blogger and mother of three. Sharing authentic family moments and practical parenting tips.",
    stats: {
      engagementRate: "6.2%",
      followers: {
        instagram: 1800000,
        youtube: 1300000,
      },
      audienceAge: [
        { age: "18-24", percentage: 10 },
        { age: "25-34", percentage: 55 },
        { age: "35-44", percentage: 25 },
        { age: "45+", percentage: 10 },
      ],
      audienceGender: [
        { gender: "Female", percentage: 90 },
        { gender: "Male", percentage: 10 },
      ],
      audienceLocations: [
        { location: "United States", percentage: 65 },
        { location: "Canada", percentage: 15 },
        { location: "Australia", percentage: 10 },
        { location: "Other", percentage: 10 },
      ],
    },
    socialLinks: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
    featuredContent: [
      {
        title: "Family Day in the Life",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Mom Hacks Everyone Needs",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "6",
    name: "Ryan Park",
    image: "/img/influencers/Steph-Grasso-Blog-Image.png",
    location: "Austin, TX",
    followers: 2700000,
    categories: ["Music", "Entertainment"],
    bio: "Music producer and entertainment specialist. Creating rhythms and sharing industry insights.",
    stats: {
      engagementRate: "3.9%",
      followers: {
        instagram: 1200000,
        tiktok: 1500000,
      },
      audienceAge: [
        { age: "18-24", percentage: 50 },
        { age: "25-34", percentage: 30 },
        { age: "35-44", percentage: 15 },
        { age: "45+", percentage: 5 },
      ],
      audienceGender: [
        { gender: "Male", percentage: 60 },
        { gender: "Female", percentage: 40 },
      ],
      audienceLocations: [
        { location: "United States", percentage: 55 },
        { location: "UK", percentage: 15 },
        { location: "Canada", percentage: 10 },
        { location: "Other", percentage: 20 },
      ],
    },
    socialLinks: {
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    featuredContent: [
      {
        title: "Studio Session",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "New Track Preview",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "7",
    name: "Lila Ahmed",
    image: "/img/influencers/Latinxlisticle_ javiera.png",
    location: "San Francisco, CA",
    followers: 3400000,
    categories: ["Tech", "Education"],
    bio: "STEM educator and tech advocate. Simplifying tech education and motivating young girls to enter the tech field.",
    stats: {
      engagementRate: "4.8%",
      followers: {
        youtube: 2000000,
        instagram: 900000,
        twitter: 500000,
      },
      audienceAge: [
        { age: "18-24", percentage: 25 },
        { age: "25-34", percentage: 50 },
        { age: "35-44", percentage: 20 },
        { age: "45+", percentage: 5 },
      ],
      audienceGender: [
        { gender: "Female", percentage: 70 },
        { gender: "Male", percentage: 30 },
      ],
      audienceLocations: [
        { location: "United States", percentage: 60 },
        { location: "India", percentage: 15 },
        { location: "UK", percentage: 10 },
        { location: "Other", percentage: 15 },
      ],
    },
    socialLinks: {
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    featuredContent: [
      {
        title: "Coding Bootcamp Recap",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Top Tech Tools 2025",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "8",
    name: "Carlos Rivera",
    image: "/img/influencers/Tyreek-Hill-superbowl-blog.png",
    location: "Madrid, Spain",
    followers: 3900000,
    categories: ["Travel", "Photography"],
    bio: "Award-winning photographer capturing the essence of cultures and landscapes around the world.",
    stats: {
      engagementRate: "5.5%",
      followers: {
        instagram: 2400000,
        youtube: 1000000,
        twitter: 500000,
      },
      audienceAge: [
        { age: "18-24", percentage: 30 },
        { age: "25-34", percentage: 50 },
        { age: "35-44", percentage: 15 },
        { age: "45+", percentage: 5 },
      ],
      audienceGender: [
        { gender: "Male", percentage: 55 },
        { gender: "Female", percentage: 45 },
      ],
      audienceLocations: [
        { location: "Spain", percentage: 40 },
        { location: "Mexico", percentage: 20 },
        { location: "USA", percentage: 20 },
        { location: "Other", percentage: 20 },
      ],
    },
    socialLinks: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      twitter: "https://twitter.com",
    },
    featuredContent: [
      {
        title: "Morocco Travel Vlog",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Photo Editing Masterclass",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "9",
    name: "Jasmine Lee",
    image: "/img/influencers/Steph-Grasso-Blog-Image.png",
    location: "Toronto, Canada",
    followers: 2800000,
    categories: ["Beauty", "Skincare"],
    bio: "Certified esthetician sharing skincare routines, product reviews, and glowing skin secrets.",
    stats: {
      engagementRate: "6.1%",
      followers: {
        instagram: 1300000,
        youtube: 1000000,
        tiktok: 500000,
      },
      audienceAge: [
        { age: "18-24", percentage: 35 },
        { age: "25-34", percentage: 45 },
        { age: "35-44", percentage: 15 },
        { age: "45+", percentage: 5 },
      ],
      audienceGender: [
        { gender: "Female", percentage: 80 },
        { gender: "Male", percentage: 20 },
      ],
      audienceLocations: [
        { location: "Canada", percentage: 40 },
        { location: "USA", percentage: 35 },
        { location: "UK", percentage: 15 },
        { location: "Other", percentage: 10 },
      ],
    },
    socialLinks: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com",
    },
    featuredContent: [
      {
        title: "Night Routine for Dry Skin",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Drugstore vs Luxury Skincare",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "10",
    name: "Derek Woods",
    image: "/img/influencers/insta_hero.png",
    location: "Sydney, Australia",
    followers: 3200000,
    categories: ["Fitness", "Motivation"],
    bio: "Personal trainer and motivational speaker helping you stay strong—mind and body.",
    stats: {
      engagementRate: "5.3%",
      followers: {
        instagram: 1400000,
        youtube: 1000000,
        tiktok: 800000,
      },
      audienceAge: [
        { age: "18-24", percentage: 25 },
        { age: "25-34", percentage: 55 },
        { age: "35-44", percentage: 15 },
        { age: "45+", percentage: 5 },
      ],
      audienceGender: [
        { gender: "Male", percentage: 65 },
        { gender: "Female", percentage: 35 },
      ],
      audienceLocations: [
        { location: "Australia", percentage: 50 },
        { location: "USA", percentage: 30 },
        { location: "UK", percentage: 10 },
        { location: "Other", percentage: 10 },
      ],
    },
    socialLinks: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com",
    },
    featuredContent: [
      {
        title: "5AM Workout Challenge",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Mindset Monday Series",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "11",
    name: "Mei Tanaka",
    image: "/img/influencers/food influencer listicle.png",
    location: "Tokyo, Japan",
    followers: 3600000,
    categories: ["Fashion", "Lifestyle"],
    bio: "Street fashion curator and cultural explorer. Tokyo style and vibes, globally shared.",
    stats: {
      engagementRate: "4.7%",
      followers: {
        instagram: 1900000,
        tiktok: 1100000,
        youtube: 600000,
      },
      audienceAge: [
        { age: "18-24", percentage: 40 },
        { age: "25-34", percentage: 40 },
        { age: "35-44", percentage: 15 },
        { age: "45+", percentage: 5 },
      ],
      audienceGender: [
        { gender: "Female", percentage: 70 },
        { gender: "Male", percentage: 30 },
      ],
      audienceLocations: [
        { location: "Japan", percentage: 50 },
        { location: "South Korea", percentage: 20 },
        { location: "USA", percentage: 15 },
        { location: "Other", percentage: 15 },
      ],
    },
    socialLinks: {
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
      youtube: "https://youtube.com",
    },
    featuredContent: [
      {
        title: "Tokyo Fashion Week Recap",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Day in Harajuku",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
  {
    id: "12",
    name: "Oliver Scott",
    image: "/img/influencers/listicle image.png",
    location: "London, UK",
    followers: 3000000,
    categories: ["Finance", "Education"],
    bio: "Finance coach making money management easy and accessible for all ages.",
    stats: {
      engagementRate: "5.0%",
      followers: {
        youtube: 1600000,
        instagram: 800000,
        twitter: 600000,
      },
      audienceAge: [
        { age: "18-24", percentage: 35 },
        { age: "25-34", percentage: 45 },
        { age: "35-44", percentage: 15 },
        { age: "45+", percentage: 5 },
      ],
      audienceGender: [
        { gender: "Male", percentage: 60 },
        { gender: "Female", percentage: 40 },
      ],
      audienceLocations: [
        { location: "UK", percentage: 60 },
        { location: "USA", percentage: 20 },
        { location: "Europe", percentage: 10 },
        { location: "Other", percentage: 10 },
      ],
    },
    socialLinks: {
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    featuredContent: [
      {
        title: "Saving Tips in Your 20s",
        image: "/placeholder.svg",
        link: "#",
      },
      {
        title: "Investing Basics 101",
        image: "/placeholder.svg",
        link: "#",
      },
    ],
  },
];

export const bulletPoints = [
  {
    title: "Scaling Creator Marketing with Intention:",
    content:
      "Brands that invest in integrating technology, rights management, and platform-specific strategies will outperform competitors in scalability and cost-efficiency.",
  },
  {
    title: "Driving ROI Through Targeted Campaigns:",
    content:
      "Precision drives better ROI by focusing efforts on high-value opportunities, from careful creator selection to optimizing consumer touchpoints.",
  },
  {
    title: "Creators as Strategic Partners, Not Just Amplifiers:",
    content:
      "Building true partnerships with creators enhances campaign authenticity, fosters trust, and unlocks new forms of value across platforms and industries.",
  },
  {
    title: "2025 Creator Economy Playbook:",
    content:
      "We've handpicked the creator trends that will drive the greatest impact for brands.",
  },
];

export const ourWorkData = [
  {
    id: 1,
    src: "/img/influencers/insta_hero.png",
    label: "Smartwater",
    description:
      "We crafted an innovative social campaign integrating creators and hydration with style.",
  },
  {
    id: 2,
    src: "/img/influencers/Top Couples Blog Image _Noah and Lori.png",
    label: "Walmart Land",
    description:
      "An immersive virtual experience showcasing Walmart's community-driven activations.",
  },
  {
    id: 3,
    src: "/img/influencers/Steph-Grasso-Blog-Image.png",
    label: "Creating Fans for Call of Duty League",
    description:
      "Trendy Nation orchestrated an ambassador program with always-on coverage, converting hundreds of thousands of casual gamers into active fans.",
  },
  {
    id: 4,
    src: "/img/services/experiential_marketing.png",
    label: "PUBG",
    description:
      "From battleground to brand — this campaign brought the intensity of PUBG into real-world engagement.",
  },
];

export const influencerWorkData = [
  {
    id: 1,
    src: "/img/blog/Blog_Image_Template_B2B-Marketing_Feature.png",
    label: "7 Eleven Canada",
    description:
      "For highly targeted and seasonally optimized campaigns, Viral Nation consistently delivers versatile content creation across various formats. With their ability to handle large-scale operations, 7-Eleven turned to Viral Nation to enhance our social presence across targeted markets and demographics. Their comprehensive and integrated service model reduces the need for multiple service providers, adding value at every step.",
  },
  {
    id: 2,
    src: "/img/blog/Blog_Image_Template_Creators-Talent_Feature.png",
    label: "Chegg",
    description:
      "Trendy Nation has propelled Chegg into the social-first era, helping to transform our channel into a vibrant hub that resonates with our audience. With a deep understanding of our mission and goals, Viral Nation captures the essence of today’s college life, curating influencers and user-generated content that leverages trends and cultural moments. With their expertise and alliance with our marketing team, they have helped Chegg become a significant voice in the #EduTok space delivering impactful, relatable, viral, and memorable content that authentically supports students on their academic journeys.",
  },
  {
    id: 3,
    src: "/img/blog/VN-Blog_LatinX-Thought-LeadershipFeature.png",
    label: "Dairy Management Inc.",
    description:
      "Viral Nation transformed Undeniably Dairy’s approach to influencer content, identifying a diverse group of enthusiastic dairy-loving influencers for Undeniably Dairy’s roster as an ongoing partnership. The approach was all about identifying a wide breadth of authentic voices of all tiers and formalizing a partnership to bring their own, personal stories to life on an ongoing basis. Viral Nation coordinated with the influencers as they crafted innovative, seasonally relevant content and engaging activations transparently informed by the influencers’ own dairy-filled lives and storytelling angles, which Viral Nation supported with paid media amplification.",
  },
  {
    id: 4,
    src: "/img/blog/Blog_Image_Template_TikTok.png",
    label: "Modern States",
    description:
      "It matters to us that our ambassadors represent our values as an organization. Viral Nation Secure™ lets us quickly review prospective ambassadors’ social presence, with their permission, and make better decisions about who represents us.",
  },
];

export const performanceDrivenData = [
  {
    icon: <UserCircle className="w-20 h-20" />,
    title: "Be Authentic And Relatable",
    description:
      "Develop a personalized understanding of your audience to deliver high volume, lo-fi content that's timely, engaging, and shareable.",
  },
  {
    icon: <Users className="w-20 h-20" />,
    title: "Be Always-On",
    description:
      "Partner with our network of leading media and social publishers to connect with your most valuable audiences, everywhere it matters.",
  },
  {
    icon: <TrendingUp className="w-20 h-20" />,
    title: "Be Growth-Oriented",
    description:
      "Test different angles, audiences, and messaging to engage, convert, and expand: Doubling down on what works, round after round.",
  },
  {
    icon: <Smartphone className="w-20 h-20" />,
    title: "Be Cutting Edge",
    description:
      "Dig deep with robust custom reporting and AI-powered analytics that provide the data and insights you need to keep optimizing.",
  },
  {
    icon: <RadioTower className="w-20 h-20" />,
    title: "Be Endlessly Iterative",
    description:
      "Leverage social listening to build a feedback loop, fuelling continuously improving performance.",
  },
];

export const embeddingBrands = [
  {
    icon: <FaPhoneSlash className="" size={100} />,
    title: "Harness Authentic Creator Stories",
    description:
      "Posts with the highest social engagement have one thing in common: Great storytelling. By leveraging the authentic essence of creators, branded content becomes relatable, memorable, and shareable.",
  },
  {
    icon: <Cpu className="" size={100} />,
    title: "Move At The Speed Of Culture",
    description:
      "Social feeds are won with content that moves at the speed of trends. Viral Nation Studio team of designers, social experts, and strategists fuse stories with speed to amplify brand narrative.",
  },
  {
    icon: <Smartphone className="" size={100} />,
    title: "Everything, Everywhere All At Once",
    description:
      "A lethal amplification method – our paid and performance specialists push messaging out to broader target audience segments, facilitating maximum reach and enabling deeper insights about content performance and propensity.",
  },
  {
    icon: <GlassesIcon className="" size={100} />,
    title: "Shaped By Creativity And Culture",
    description:
      "Our wickedly talented community and social team are the ears to the ground, serving as a feedback loop on trends, audience behavior, and content performance to fuel iteration and innovation.",
  },
];

export const servicesShowcase = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Growth Consulting",
    description:
      "Drive continuous growth with the expert insights and experience that comes from powering the world's biggest brands.",
  },
  {
    icon: <PuzzleIcon className="w-8 h-8" />,
    title: "Always-on Content",
    description:
      "Deliver high volume, lo-fi social content with our award-winning marketing services team and exclusive access to our industry-leading talent roster.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Campaign Execution",
    description:
      "Unlock end-to-end campaign management, from ideation and strategy to execution and measurement, all under one roof.",
  },
  {
    icon: <ChartAreaIcon className="w-8 h-8" />,
    title: "Reporting & Analytics",
    description:
      "Tap into AI-powered analytics tools to help you analyze, optimize, and scale your data-driven decision making.",
  },
];

export const servicesShowcaseSocial = [
  {
    icon: <TargetIcon className="w-8 h-8" />,
    title: "Strategy",
    description:
      "From award shows to convenience store activations or back-to-college tentpoles, we leverage the cultural calendar, SEO, and market insights to ensure content is delivered for maximum impact.",
  },
  {
    icon: <UsersIcon className="w-8 h-8" />,
    title: "Creative",
    description:
      "Social content is a craft that immerses audiences in the product, messaging, and narrative. Choose between two tracks: In-house content or creator-led content, or both.",
  },
  {
    icon: <VideoIcon className="w-8 h-8" />,
    title: "Production",
    description:
      "Beautiful visual storytelling begins with high-quality production. Our agile on-site shoots and post-production specialists work efficiently to hit deadlines.",
  },
  {
    icon: <BarChart3Icon className="w-8 h-8" />,
    title: "Measurement",
    description:
      "Leveraging our AI-powered Creator OS, clients enjoy exclusive access to data and insights to track a campaign’s success defined by previously agreed goals and KPIs.",
  },
];

export const experientialMarketingData = [
  {
    icon: <UsersRound className="w-8 h-8 text-beast-purple" />,
    title: "Experiential Halo Effect",
    description:
      "Viral Nation’s Experiential Halo Effect creates wave after wave of virality during the live buzz of the event by partnering with some of the best-known icons in each vertical.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-beast-purple" />,
    title: "Full-Service Experiential",
    description:
      "From designing and sourcing a jaw-dropping convention booth to measuring the impact of an event, our experiential team takes care of all the heavy lifting.",
  },
  {
    icon: <FaUserAltSlash className="w-8 h-8 text-beast-purple" />,
    title: "Hit at an Emotional Level",
    description:
      "Every event is an opportunity to surround audiences with targeted content that connects with audiences at an emotional level, generating content that extends your brand across channels and beyond.",
  },
  {
    icon: <Users2 className="w-8 h-8 text-beast-purple" />,
    title: "Lean Into Community",
    description:
      "Listen, learn, and lean into the communities that define each vertical. Feedback gathered from events contains vital information about a target audience’s wants and needs that can’t be found online.",
  },
];

export const experienceExecutionData = [
  {
    icon: <PlaySquareIcon className="" size={100} />,
    title: "Creative Strategy",
    description:
      "The mission: Create experiences with purpose that inspire and create emotional engagement. Core to the mission is our network of creators who bridge the offline/online experience with User-Generated Content (UGC) or hosting as brand ambassadors.",
  },
  {
    icon: <BrushIcon className="" size={100} />,
    title: "Activation Experience",
    description:
      "Break the brick-and-mortar or online shopping deadlock with pop-ups, AR and MR experiences, or spectacular drone shows. Every immersive experience comes with ‘wow’ moments attendees can’t help but share with those who aren’t there.",
  },
  {
    icon: <MegaphoneIcon className="" size={100} />,
    title: "Distribute & Amplify",
    description:
      "With anticipation building pre-event, video production on-site ensures cameras are always rolling so viewers feel like VIPs. Interactive photo moments and live streaming provide touchpoints to extract maximum buzz from the experience. Paid ads are loaded and ready to boost branded content far and wide.",
  },
  {
    icon: <SmartphoneNfcIcon className="" size={100} />,
    title: "Measurement Technology",
    description:
      "After the dust has settled, we wrap the experience up with our best-in-class business intelligence service that provides measurement modeling, custom playbooks, and attribution technology to ensure each experience builds on the learnings of the last.",
  },
];
