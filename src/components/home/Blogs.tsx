import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import CommonSubHeading from "../common/CommonSubHeading";

const blogs = [
  {
    title: "The Rise of Micro-Influencers in Brand Marketing",
    excerpt:
      "How smaller creators with highly engaged audiences are delivering better ROI than mega influencers.",
    category: "Trends",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=500&auto=format",
    date: "May 2, 2025",
  },
  {
    title: "AI in Influencer Marketing: Beyond the Hype",
    excerpt:
      "Practical applications of artificial intelligence that are transforming creator collaborations.",
    category: "Technology",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=500&auto=format",
    date: "April 28, 2025",
  },
  {
    title: "Building Long-term Creator Partnerships",
    excerpt:
      "Why one-off collaborations are being replaced by strategic, long-term creator relationships.",
    category: "Strategy",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=500&auto=format",
    date: "April 15, 2025",
  },
];

const BlogSection = () => {
  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end">
          <div>
            <CommonSubHeading subHead="Blog" />
            <div className="text-start mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-5xl font-bold font-display mb-4"
              >
                Insights From the{" "}
                <span className="text-beast-purple-light">Creator</span> Economy
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white/70 max-w-3xl"
              >
                Explore strategies, trends, and success stories driving the
                future of influencer marketing, branded content, and digital
                storytelling.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 flex items-center gap-2 cursor-pointer hover:text-beast-purple-light duration-300 transition-all ease-in-out text-base font-medium"
          >
            <span className="whitespace-nowrap text-sm md:text-base">
              View All
            </span>
            <ArrowRight className="w-4 md:w-6 h-4 md:h-6" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="glass border border-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-glow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">
                    {blog.category}
                  </div>
                  <div className="flex items-center text-white/60 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-white/70 text-sm mb-4">{blog.excerpt}</p>

                <div className="flex justify-between items-center">
                  <div className="text-white/60 text-xs">{blog.date}</div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="p-0 h-auto hover:bg-transparent hover:text-beast-purple-light"
                  >
                    Read Article
                    <ArrowUpRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
