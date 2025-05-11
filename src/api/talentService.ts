
import axios from 'axios';
import { Talent, TalentCategory } from '@/types/talent';

// Mock data for now, in a real app this would come from an API
const mockTalents: Talent[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    image: '/placeholder.svg', 
    location: 'Los Angeles, CA',
    followers: 5300000,
    categories: ['Fitness', 'Lifestyle'],
    bio: 'Fitness influencer and lifestyle enthusiast. Dedicated to inspiring others to live their best lives through sustainable health practices.',
    stats: {
      engagementRate: '3.8%',
      followers: {
        instagram: 2500000,
        tiktok: 1800000,
        youtube: 1000000
      },
      audienceAge: [
        { age: '18-24', percentage: 32 },
        { age: '25-34', percentage: 45 },
        { age: '35-44', percentage: 15 },
        { age: '45+', percentage: 8 }
      ],
      audienceGender: [
        { gender: 'Female', percentage: 65 },
        { gender: 'Male', percentage: 35 }
      ],
      audienceLocations: [
        { location: 'United States', percentage: 60 },
        { location: 'Canada', percentage: 15 },
        { location: 'UK', percentage: 10 },
        { location: 'Other', percentage: 15 }
      ]
    },
    socialLinks: {
      instagram: 'https://instagram.com',
      tiktok: 'https://tiktok.com',
      youtube: 'https://youtube.com'
    },
    featuredContent: [
      {
        title: 'Morning Routine 2023',
        image: '/placeholder.svg',
        link: '#'
      },
      {
        title: 'Workout Tips',
        image: '/placeholder.svg',
        link: '#'
      }
    ]
  },
  {
    id: '2',
    name: 'Marcus Chen',
    image: '/placeholder.svg',
    location: 'New York, NY',
    followers: 3700000,
    categories: ['Tech', 'Gaming'],
    bio: 'Tech reviewer and gaming enthusiast. Breaking down complex technologies into digestible content for everyone.',
    stats: {
      engagementRate: '4.2%',
      followers: {
        youtube: 2200000,
        twitter: 1500000
      },
      audienceAge: [
        { age: '18-24', percentage: 40 },
        { age: '25-34', percentage: 35 },
        { age: '35-44', percentage: 20 },
        { age: '45+', percentage: 5 }
      ],
      audienceGender: [
        { gender: 'Male', percentage: 75 },
        { gender: 'Female', percentage: 25 }
      ],
      audienceLocations: [
        { location: 'United States', percentage: 50 },
        { location: 'Europe', percentage: 25 },
        { location: 'Asia', percentage: 15 },
        { location: 'Other', percentage: 10 }
      ]
    },
    socialLinks: {
      youtube: 'https://youtube.com',
      twitter: 'https://twitter.com',
      website: 'https://example.com'
    },
    featuredContent: [
      {
        title: 'iPhone 15 Review',
        image: '/placeholder.svg',
        link: '#'
      },
      {
        title: 'Gaming Setup Tour',
        image: '/placeholder.svg',
        link: '#'
      }
    ]
  },
  {
    id: '3',
    name: 'Sophia Williams',
    image: '/placeholder.svg',
    location: 'Miami, FL',
    followers: 4200000,
    categories: ['Beauty', 'Fashion'],
    bio: 'Beauty guru and fashion trendsetter. Helping you discover your personal style and beauty routine.',
    stats: {
      engagementRate: '5.1%',
      followers: {
        instagram: 2800000,
        tiktok: 1400000
      },
      audienceAge: [
        { age: '18-24', percentage: 45 },
        { age: '25-34', percentage: 35 },
        { age: '35-44', percentage: 15 },
        { age: '45+', percentage: 5 }
      ],
      audienceGender: [
        { gender: 'Female', percentage: 85 },
        { gender: 'Male', percentage: 15 }
      ],
      audienceLocations: [
        { location: 'United States', percentage: 55 },
        { location: 'UK', percentage: 15 },
        { location: 'Australia', percentage: 10 },
        { location: 'Other', percentage: 20 }
      ]
    },
    socialLinks: {
      instagram: 'https://instagram.com',
      tiktok: 'https://tiktok.com'
    },
    featuredContent: [
      {
        title: 'Summer Look Book',
        image: '/placeholder.svg',
        link: '#'
      },
      {
        title: 'Skincare Routine',
        image: '/placeholder.svg',
        link: '#'
      }
    ]
  },
  {
    id: '4',
    name: 'James Rodriguez',
    image: '/placeholder.svg',
    location: 'Chicago, IL',
    followers: 2900000,
    categories: ['Food', 'Travel'],
    bio: 'Culinary explorer and travel enthusiast. Taking you on global adventures through food and culture.',
    stats: {
      engagementRate: '4.5%',
      followers: {
        instagram: 1500000,
        youtube: 1400000
      },
      audienceAge: [
        { age: '18-24', percentage: 20 },
        { age: '25-34', percentage: 45 },
        { age: '35-44', percentage: 25 },
        { age: '45+', percentage: 10 }
      ],
      audienceGender: [
        { gender: 'Female', percentage: 55 },
        { gender: 'Male', percentage: 45 }
      ],
      audienceLocations: [
        { location: 'United States', percentage: 45 },
        { location: 'Europe', percentage: 25 },
        { location: 'Asia', percentage: 20 },
        { location: 'Other', percentage: 10 }
      ]
    },
    socialLinks: {
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    },
    featuredContent: [
      {
        title: 'Tokyo Street Food Tour',
        image: '/placeholder.svg',
        link: '#'
      },
      {
        title: 'Homemade Pasta Recipes',
        image: '/placeholder.svg',
        link: '#'
      }
    ]
  },
  {
    id: '5',
    name: 'Emma Johnson',
    image: '/placeholder.svg',
    location: 'Seattle, WA',
    followers: 3100000,
    categories: ['Lifestyle', 'Parenting'],
    bio: 'Lifestyle blogger and mother of three. Sharing authentic family moments and practical parenting tips.',
    stats: {
      engagementRate: '6.2%',
      followers: {
        instagram: 1800000,
        youtube: 1300000
      },
      audienceAge: [
        { age: '18-24', percentage: 10 },
        { age: '25-34', percentage: 55 },
        { age: '35-44', percentage: 25 },
        { age: '45+', percentage: 10 }
      ],
      audienceGender: [
        { gender: 'Female', percentage: 90 },
        { gender: 'Male', percentage: 10 }
      ],
      audienceLocations: [
        { location: 'United States', percentage: 65 },
        { location: 'Canada', percentage: 15 },
        { location: 'Australia', percentage: 10 },
        { location: 'Other', percentage: 10 }
      ]
    },
    socialLinks: {
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    },
    featuredContent: [
      {
        title: 'Family Day in the Life',
        image: '/placeholder.svg',
        link: '#'
      },
      {
        title: 'Mom Hacks Everyone Needs',
        image: '/placeholder.svg',
        link: '#'
      }
    ]
  },
  {
    id: '6',
    name: 'Ryan Park',
    image: '/placeholder.svg',
    location: 'Austin, TX',
    followers: 2700000,
    categories: ['Music', 'Entertainment'],
    bio: 'Music producer and entertainment specialist. Creating rhythms and sharing industry insights.',
    stats: {
      engagementRate: '3.9%',
      followers: {
        instagram: 1200000,
        tiktok: 1500000
      },
      audienceAge: [
        { age: '18-24', percentage: 50 },
        { age: '25-34', percentage: 30 },
        { age: '35-44', percentage: 15 },
        { age: '45+', percentage: 5 }
      ],
      audienceGender: [
        { gender: 'Male', percentage: 60 },
        { gender: 'Female', percentage: 40 }
      ],
      audienceLocations: [
        { location: 'United States', percentage: 55 },
        { location: 'UK', percentage: 15 },
        { location: 'Canada', percentage: 10 },
        { location: 'Other', percentage: 20 }
      ]
    },
    socialLinks: {
      instagram: 'https://instagram.com',
      tiktok: 'https://tiktok.com'
    },
    featuredContent: [
      {
        title: 'Studio Session',
        image: '/placeholder.svg',
        link: '#'
      },
      {
        title: 'New Track Preview',
        image: '/placeholder.svg',
        link: '#'
      }
    ]
  }
];

// Extract unique categories from talents
const generateCategories = (talents: Talent[]): TalentCategory[] => {
  const categoriesMap: { [key: string]: number } = {};
  
  talents.forEach(talent => {
    talent.categories.forEach(category => {
      if (categoriesMap[category]) {
        categoriesMap[category]++;
      } else {
        categoriesMap[category] = 1;
      }
    });
  });
  
  const categories: TalentCategory[] = Object.keys(categoriesMap).map(name => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    count: categoriesMap[name]
  }));
  
  // Add "All" category
  categories.unshift({
    id: 'all',
    name: 'All',
    count: talents.length
  });
  
  return categories;
};

// In a real app, these would be API calls
export const talentService = {
  fetchTalents: async (): Promise<Talent[]> => {
    // Simulate API call with a delay
    return new Promise(resolve => {
      setTimeout(() => resolve(mockTalents), 800);
    });
  },
  
  fetchCategories: async (): Promise<TalentCategory[]> => {
    // Simulate API call with a delay
    return new Promise(resolve => {
      setTimeout(() => resolve(generateCategories(mockTalents)), 500);
    });
  },
  
  fetchTalentById: async (id: string): Promise<Talent | null> => {
    // Simulate API call with a delay
    return new Promise(resolve => {
      setTimeout(() => {
        const talent = mockTalents.find(t => t.id === id) || null;
        resolve(talent);
      }, 600);
    });
  }
};
