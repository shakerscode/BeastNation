import { motion } from "framer-motion";

export default function Representation() {
  return (
    <section className="py-20 px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-full p-0 md:p-5">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            src="/img/marketing_services/kids-and-family.png"
            alt="Creator Family"
            className="relative z-10 rounded-xl object-cover shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            360° Creator <span className="text-beast-purple-light">Representation</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-base text-gray-200">
            <ul className="space-y-2 list-disc list-inside">
              <li>Brand deals and partnerships</li>
              <li>Inbox management</li>
              <li>Brand outreach</li>
              <li>Contract and payment support</li>
              <li>Bespoke content strategy</li>
              <li>Production & content management</li>
              <li>Dedicated talent publicity</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Content syndication</li>
              <li>Platform diversification</li>
              <li>Revenue diversification</li>
              <li>OTT & Licensing</li>
              <li>Original programming</li>
              <li>Podcasting</li>
              <li>Channel management & distribution</li>
              <li>Merchandising ventures</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
