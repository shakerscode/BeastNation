
import { create } from 'zustand';
import { Talent, TalentCategory } from '@/types/talent';

type TalentState = {
  talents: Talent[];
  filteredTalents: Talent[];
  categories: TalentCategory[];
  isLoading: boolean;
  activeCategory: string;
  searchQuery: string;
  setTalents: (talents: Talent[]) => void;
  setCategories: (categories: TalentCategory[]) => void;
  setActiveCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setLoading: (isLoading: boolean) => void;
  filterTalents: () => void;
};

export const useTalentStore = create<TalentState>((set, get) => ({
  talents: [],
  filteredTalents: [],
  categories: [],
  isLoading: false,
  activeCategory: 'All',
  searchQuery: '',
  setTalents: (talents) => set({ talents }),
  setCategories: (categories) => set({ categories }),
  setActiveCategory: (category) => {
    set({ activeCategory: category });
    get().filterTalents();
  },
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().filterTalents();
  },
  setLoading: (isLoading) => set({ isLoading }),
  filterTalents: () => {
    const { talents, activeCategory, searchQuery } = get();
    
    // Ensure talents is an array before filtering
    if (!Array.isArray(talents)) {
      set({ filteredTalents: [] });
      return;
    }
    
    let filtered = [...talents];
    
    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(talent => 
        talent.categories.some(cat => cat.toLowerCase() === activeCategory.toLowerCase())
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(talent => 
        talent.name.toLowerCase().includes(query) || 
        talent.location.toLowerCase().includes(query) ||
        talent.categories.some(cat => cat.toLowerCase().includes(query))
      );
    }
    
    set({ filteredTalents: filtered });
  },
}));
