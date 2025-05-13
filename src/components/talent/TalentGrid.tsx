import { useTalentStore } from "@/store/useTalentStore";
import { useState } from "react";
import { Button } from "../ui/button";
import { TalentCard } from "./TalentCard";

export const TalentGrid = () => {
  const { filteredTalents, isLoading } = useTalentStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  // Paginate results
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTalents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTalents.length / itemsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((talent, index) => (
          <TalentCard key={talent.id} talent={talent} index={index} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <Button
            variant="outline"
            className="border"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </Button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "default" : "outline"}
              className={
                currentPage === index + 1
                  ? "bg-beast-purple-dark hover:bg-beast-accent"
                  : "border"
              }
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            className="border"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </>
  );
};
