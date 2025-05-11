
export interface Talent {
  id: string;
  name: string;
  image: string;
  location: string;
  followers: number;
  categories: string[];
  bio: string;
  stats: {
    engagementRate: string;
    followers: {
      instagram?: number;
      tiktok?: number;
      youtube?: number;
      twitter?: number;
    };
    audienceAge?: {
      age: string;
      percentage: number;
    }[];
    audienceGender?: {
      gender: string;
      percentage: number;
    }[];
    audienceLocations?: {
      location: string;
      percentage: number;
    }[];
  };
  socialLinks: {
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    twitter?: string;
    website?: string;
  };
  featuredContent?: {
    title: string;
    image: string;
    link: string;
  }[];
}

export interface TalentCategory {
  id: string;
  name: string;
  count: number;
}
