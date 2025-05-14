import { newsItems } from "@/constants/fakeNews";
import useScrollToTop from "@/hooks/useScrollToTop";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";

function NewsAndPressArticles() {
  // 1. Keep all hooks at the top
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  useScrollToTop();

  // 2. Memoize calculations
  const { totalPages, currentItems } = useMemo(() => {
    const itemsPerPage = 6;
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = newsItems.slice(startIndex, startIndex + itemsPerPage);
    return { totalPages, currentItems };
  }, [currentPage]);

  // 3. Stable event handlers
  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [totalPages]
  );

  // 4. Safe navigation with cleanup
  const handleNavigate = useCallback(
    (title: string) => {
      let isMounted = true;

      const slug = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      if (isMounted) {
        navigate(`/resources/news-press-releases/${slug}`, {
          replace: false,
          preventScrollReset: true,
        });
      }

      return () => {
        isMounted = false;
      };
    },
    [navigate]
  );

  // 5. Optimized animations
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "100px" });

  return (
    <div className="w-full px-4 md:px-0" ref={containerRef}>
      {isInView && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 pt-0  max-w-7xl mx-auto "
        >
          {currentItems.map((item, i) => (
            <motion.div
              key={`${item.title}-${i}`} // Better key strategy
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNavigate(item?.title)}
              className="group cursor-pointer rounded-xl overflow-hidden border border-white hover:border-beast-purple-light transition-all ease-in-out duration-500"
            >
              <div className="aspect-[3/2] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/fallback-image.jpg";
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-between overflow-hidden p-4 h-[210px] md:h-[180px] transition-all duration-500  group-hover:bg-white">
                <div>
                  <p className="text-xs text-beast-purple-light font-display font-semibold uppercase mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-semibold text-white group-hover:text-black/80 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 group-hover:text-black/80">
                    {item.excerpt}
                  </p>
                </div>

                <div className="flex justify-between items-center text-beast-purple-light">
                  <span className="text-xs">{item.date}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Pagination */}
      {isInView && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={`w-9 h-9 rounded-lg border text-sm font-medium ${
                currentPage === idx + 1
                  ? "bg-beast-purple-light text-black"
                  : "border-white text-white hover:bg-white/10"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsAndPressArticles;
