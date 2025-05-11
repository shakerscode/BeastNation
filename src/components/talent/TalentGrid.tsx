
import { TalentCard } from './TalentCard';
import { useTalentStore } from '@/store/useTalentStore';

export const TalentGrid = () => {
  const { filteredTalents, isLoading } = useTalentStore();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl aspect-[3/4]"
          />
        ))}
      </div>
    );
  }

  if (filteredTalents.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No talent found</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your filters or search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTalents.map((talent, index) => (
        <TalentCard key={talent.id} talent={talent} index={index} />
      ))}
    </div>
  );
};
