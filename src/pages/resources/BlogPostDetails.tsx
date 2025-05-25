import { BlogSubFooter } from "@/components/resources/blogs/SubFooter";
import NotFound from "@/pages/NotFound";
import { blogPosts } from "@/utils/fakeBlogPost";
import { motion } from "framer-motion";
import { useParams } from "react-router";

const BlogPostDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) return <NotFound />;

  return (
    <>
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto pt-16 lg:pt-32">
        <div className="px-4 md:px-10 grid md:grid-cols-2 gap-10">
          <div className="pt-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-beast-purple-dark text-white text-xs px-3 py-1 rounded-full font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>

            <h3 className="font-semibold mb-3 text-lg">Key Talking Points</h3>
            <ul className="list-disc list-inside space-y-2 text-white/90">
              {post.highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-white/50 mb-2">
              {post.date} &nbsp; | &nbsp; {post.readingTime || "~ 3 min read"}
            </p>
            <img
              src={post.coverImage}
              alt={post.title}
              className="rounded-xl w-full max-h-[500px] object-cover shadow-xl"
            />
          </div>
        </div>

        <div className="px-4 md:px-6 mt-16">
          {post.contentSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="mb-4 text-gray-300 text-base leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      <BlogSubFooter />
    </>
  );
};

export default BlogPostDetails;
