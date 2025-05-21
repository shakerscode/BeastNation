import BlogsHeader from "@/components/resources/blogs/BlogsHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Blog,
  Influencer,
  influencerBlogs,
  influencerList,
} from "@/utils/fakeData";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const BlogPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter lists based on search query
  const isBlogPage = pathname === "/resources/blogs";

  function isBlog(item: Blog | Influencer): item is Blog {
    return "title" in item;
  }

  function isInfluencer(item: Blog | Influencer): item is Influencer {
    return "name" in item;
  }

  const filteredLists = (isBlogPage ? influencerBlogs : influencerList).filter(
    (item) => {
      if (isBlogPage && isBlog(item)) {
        return (
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (!isBlogPage && isInfluencer(item)) {
        return (
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      return false;
    }
  );

  // Paginate results
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLists.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredLists.length / itemsPerPage);

  return (
    <>
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto space-y-8 md:space-y-12">
        <BlogsHeader />

        <div className="pb-12 pt-6">
          <div className="container mx-auto px-4">
            {/* Influencer Lists Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentItems.map((item) => (
                <Card
                  key={item?.id}
                  className="glass border border-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-glow cursor-pointer"
                  onClick={() => navigate(`/resources/blog/${item.id}`)}
                >
                  <div className="bg-gray-100 aspect-[16/9] dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={
                        isBlogPage && isBlog(item)
                          ? item.title
                          : isInfluencer(item)
                          ? item.name
                          : ""
                      }
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-3 left-3 bg-beast-600 text-white hover:bg-beast-700">
                      {item.category}
                    </Badge>
                  </div>

                  <CardContent className="flex-grow pt-6">
                    {isBlogPage && isBlog(item) && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {item.date}
                      </p>
                    )}
                    <h3 className="font-bold text-lg mb-2">
                      {isBlogPage && isBlog(item)
                        ? item.title
                        : isInfluencer(item)
                        ? item.name
                        : ""}
                    </h3>
                    {!isBlogPage && isInfluencer(item) && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.platform} • {item.followers} • {item.location}
                      </p>
                    )}
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-0 h-auto hover:bg-transparent hover:text-beast-purple-light"
                    >
                      {isBlogPage ? "Read More" : "View Profile"}{" "}
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                <Button
                  variant="outline"
                  className="border"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
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
                        ? "bg-beast-purple-light hover:bg-beast-purple-dark"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
