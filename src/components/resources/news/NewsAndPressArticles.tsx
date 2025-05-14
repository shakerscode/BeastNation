import { newsItems } from "@/constants/fakeNews";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

function NewsAndPressArticles() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = newsItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavigate = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    navigate(`/resources/news-press-releases/${slug}`);
  };

  return (
    <div className="w-full px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 pt-0  max-w-7xl mx-auto "
      >
        {newsItems.map((item, i) => (
          <div
            onClick={() => handleNavigate(item?.title)}
            key={i}
            className="group cursor-pointer rounded-xl overflow-hidden border border-white hover:border-beast-purple-light transition-all ease-in-out duration-500"
          >
            <div className="aspect-[3/2] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
          </div>
        ))}
      </motion.div>

      {/* Pagination */}
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
    </div>
  );
}

export default NewsAndPressArticles;
