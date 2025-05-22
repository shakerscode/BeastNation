import { url } from "inspector";
import {
  Sparkles,
  Megaphone,
  TrendingUp,
  BarChart,
  Users,
  Lightbulb,
} from "lucide-react";

export const services = [
  {
    icon: <Megaphone className="h-8 w-8" />,
    url: "/services/influencer-marketing",
    title: "Influencer Campaigns",
    description:
      "Strategic partnerships with creators who authentically connect with your audience.",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    url: "/services/performance-marketing",
    title: "Performance Marketing",
    description:
      "Leverage machine learning to understand your brand perception and optimize strategy.",
  },

  {
    icon: <TrendingUp className="h-8 w-8" />,
    url: "/services/social-content-studio",
    title: "Social Content Studio",
    description:
      "Data-driven approaches to scale your brand presence across platforms.",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    url: "/services/experiential-marketing",
    title: "Experiential Marketing",
    description:
      "Targeted campaigns with measurable results and transparent reporting.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    url: "/services/community-management",
    title: "Community Management",
    description:
      "End-to-end creator support from contract negotiation to content strategy.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    url: "/services/business-intelligence",
    title: "Business Intelligence",
    description:
      "High-quality content creation tailored to your brand and audience.",
  },
];
