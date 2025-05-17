import { motion } from "framer-motion";
import { detailedCaseStudy as data } from "@/constants/fakeCaseStudy";

const DetailedCaseStudy = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Cover Image */}
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${data.coverImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <img src={data.logo} alt="brand logo" className="w-32 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white text-center">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-sm text-gray-600">
        {data.breadcrumb.map((crumb, index) => (
          <span key={index}>
            <a href={crumb.href} className="hover:underline">
              {crumb.label}
            </a>
            {index < data.breadcrumb.length - 1 && " / "}
          </span>
        ))}
      </nav>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <p className="text-xl text-gray-700 mb-4">{data.subtitle}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 my-8 text-center">
          {Object.entries(data.metrics).map(([key, value]) => (
            <div key={key}>
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-xs uppercase text-gray-500">{key}</p>
            </div>
          ))}
        </div>

        {/* Sections */}
        {data.contentSections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}

        {/* Creators */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Featured Creators</h3>
          <ul className="space-y-3">
            {data.creators.map((c, i) => (
              <li key={i}>
                <p className="font-medium">
                  {c.name} ({c.platform})
                </p>
                <p className="text-sm text-gray-500">{c.style}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-2">{data.callToAction.text}</h4>
          <a
            href={data.callToAction.href}
            className="inline-block mt-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition"
          >
            {data.callToAction.buttonText}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailedCaseStudy;
