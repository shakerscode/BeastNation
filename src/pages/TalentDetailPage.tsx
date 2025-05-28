import { talentService } from "@/api/talentService";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useScrollToTop from "@/hooks/useScrollToTop";
import { Talent } from "@/types/talent";
import { formatNumber } from "@/utils/formatters";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGlobe,
  FaInstagram,
  FaMapMarkerAlt,
  FaTiktok,
  FaTwitter,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { Link, useParams } from "react-router";

export const TalentDetailPage = () => {
  useScrollToTop();
  const { id } = useParams<{ id: string }>();
  const [talent, setTalent] = useState<Talent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTalent = async () => {
      if (!id) return;

      setIsLoading(true);
      setError(null);

      try {
        const data = await talentService.fetchTalentById(id);

        if (!data) {
          setError("Talent not found");
        } else {
          setTalent(data);
        }
      } catch (error) {
        console.error("Failed to fetch talent:", error);
        setError("Failed to load talent information");
      } finally {
        setIsLoading(false);
      }
    };

    loadTalent();
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-24 pb-12 min-h-screen bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl mb-8"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !talent) {
    return (
      <div className="pt-24 pb-12 min-h-screen bg-white dark:bg-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {error || "Talent not found"}
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find the talent you're looking for.
          </p>
          <Button asChild>
            <Link to="/talent">View All Talent</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="px-0 hover:bg-transparent">
            <Link
              to="/talent/find-talent"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Talent
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Image and Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6">
              <img
                src={talent.image}
                alt={talent.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-1 text-beast-700 dark:text-beast-400">
                  <FaUsers className="mr-2" />
                  <span className="font-medium">Total Followers</span>
                </div>
                <div className="text-2xl font-bold">
                  {formatNumber(talent.followers)}
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-1 text-beast-700 dark:text-beast-400">
                  <FaMapMarkerAlt className="mr-2" />
                  <span className="font-medium">Location</span>
                </div>
                <div className="text-lg font-medium">{talent.location}</div>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {talent.categories.map((category) => (
                  <span
                    key={category}
                    className="bg-beast-100 text-beast-800 dark:bg-beast-900 dark:text-beast-100 px-3 py-1 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-medium mb-2">Connect</h3>
              <div className="flex gap-3">
                {talent.socialLinks.instagram && (
                  <a
                    href={talent.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                )}
                {talent.socialLinks.tiktok && (
                  <a
                    href={talent.socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-black hover:text-white transition-colors"
                  >
                    <FaTiktok size={20} />
                  </a>
                )}
                {talent.socialLinks.youtube && (
                  <a
                    href={talent.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <FaYoutube size={20} />
                  </a>
                )}
                {talent.socialLinks.twitter && (
                  <a
                    href={talent.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {talent.socialLinks.website && (
                  <a
                    href={talent.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-400 hover:text-white transition-colors"
                  >
                    <FaGlobe size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Talent Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {talent.name}
            </h1>

            <div className="mb-6">
              <div className="inline-block bg-beast-100 text-beast-800 dark:bg-beast-900 dark:text-beast-100 px-3 py-1 rounded text-sm">
                Engagement Rate: {talent.stats.engagementRate}
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="text-gray-700 dark:text-gray-300">{talent.bio}</p>
            </div>

            {/* Detailed Info Tabs */}
            <Tabs defaultValue="audience" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="audience">Audience</TabsTrigger>
                <TabsTrigger value="stats">Platform Stats</TabsTrigger>
                <TabsTrigger value="content">Featured Content</TabsTrigger>
              </TabsList>

              <TabsContent value="audience" className="pt-4">
                {talent.stats.audienceGender && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">
                      Gender Distribution
                    </h3>
                    <div className="flex flex-col gap-3">
                      {talent.stats.audienceGender.map((item) => (
                        <div key={item.gender} className="w-full">
                          <div className="flex justify-between mb-1">
                            <span>{item.gender}</span>
                            <span>{item.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-beast-600 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {talent.stats.audienceAge && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">
                      Age Distribution
                    </h3>
                    <div className="flex flex-col gap-3">
                      {talent.stats.audienceAge.map((item) => (
                        <div key={item.age} className="w-full">
                          <div className="flex justify-between mb-1">
                            <span>{item.age}</span>
                            <span>{item.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-beast-600 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {talent.stats.audienceLocations && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">
                      Geographic Distribution
                    </h3>
                    <div className="flex flex-col gap-3">
                      {talent.stats.audienceLocations.map((item) => (
                        <div key={item.location} className="w-full">
                          <div className="flex justify-between mb-1">
                            <span>{item.location}</span>
                            <span>{item.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-beast-600 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="stats" className="pt-4">
                <div className="grid grid-cols-2 gap-4">
                  {talent.stats.followers.instagram && (
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center mb-2 text-pink-600">
                        <FaInstagram size={24} className="mr-2" />
                        <span className="font-medium">Instagram</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {formatNumber(talent.stats.followers.instagram)}
                      </div>
                    </div>
                  )}

                  {talent.stats.followers.tiktok && (
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <FaTiktok size={24} className="mr-2" />
                        <span className="font-medium">TikTok</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {formatNumber(talent.stats.followers.tiktok)}
                      </div>
                    </div>
                  )}

                  {talent.stats.followers.youtube && (
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center mb-2 text-red-600">
                        <FaYoutube size={24} className="mr-2" />
                        <span className="font-medium">YouTube</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {formatNumber(talent.stats.followers.youtube)}
                      </div>
                    </div>
                  )}

                  {talent.stats.followers.twitter && (
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center mb-2 text-blue-400">
                        <FaTwitter size={24} className="mr-2" />
                        <span className="font-medium">Twitter</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {formatNumber(talent.stats.followers.twitter)}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="content" className="pt-4">
                {talent.featuredContent ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {talent.featuredContent.map((content, index) => (
                      <a
                        key={index}
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="rounded-lg overflow-hidden">
                          <img
                            src={content.image}
                            alt={content.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="p-3 bg-gray-100 dark:bg-gray-800">
                            <h4 className="font-medium group-hover:text-beast-600 dark:group-hover:text-beast-400">
                              {content.title}
                            </h4>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-8 text-gray-500">
                    No featured content available
                  </p>
                )}
              </TabsContent>
            </Tabs>

            {/* Contact CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-medium mb-3">
                Interested in working with {talent.name}?
              </h3>
              <Button asChild className="bg-beast-600 hover:bg-beast-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
