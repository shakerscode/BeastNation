import { Talent, TalentCategory } from "@/types/talent";
import { mockTalents } from "@/utils/fakeData";

// Extract unique categories from talents
const generateCategories = (talents: Talent[]): TalentCategory[] => {
  const categoriesMap: { [key: string]: number } = {};

  talents.forEach((talent) => {
    talent.categories.forEach((category) => {
      if (categoriesMap[category]) {
        categoriesMap[category]++;
      } else {
        categoriesMap[category] = 1;
      }
    });
  });

  const categories: TalentCategory[] = Object.keys(categoriesMap).map(
    (name) => ({
      id: name.toLowerCase().replace(/\s+/g, "-"),
      name,
      count: categoriesMap[name],
    })
  );

  // Add "All" category
  categories.unshift({
    id: "all",
    name: "All",
    count: talents.length,
  });

  return categories;
};

// In a real app, these would be API calls
export const talentService = {
  fetchTalents: async (): Promise<Talent[]> => {
    // Simulate API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockTalents), 800);
    });
  },

  fetchCategories: async (): Promise<TalentCategory[]> => {
    // Simulate API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(generateCategories(mockTalents)), 500);
    });
  },

  fetchTalentById: async (id: string): Promise<Talent | null> => {
    // Simulate API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const talent = mockTalents.find((t) => t.id === id) || null;
        resolve(talent);
      }, 600);
    });
  },
};
