import { useEffect, useState } from "react";

export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!ids || ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const topVisibleId = visibleSections[0].target.id;
          setActiveId(topVisibleId);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      } else {
        console.warn("Element not found for ID:", id);
      }
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
