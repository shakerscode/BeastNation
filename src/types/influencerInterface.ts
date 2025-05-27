export interface Influencer {
    id: string;
    name: string;
    platforms: string[];
    focus_areas: string[];
    image: string;
    highlights: string[]; // exactly two highlights
  }
  
  export interface InfluencerArticle {
    title: string;
    tags: string[];
    date: string;
    reading_time: string;
    key_points: string[];
    intro: string[];
    influencers: Influencer[];
  }
  