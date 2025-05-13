import { featuredResources, quickLinks } from "@/constans/navLinks";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-beast-purple-dark dark:text-beast-400">
                Trendy<span className="text-black dark:text-white">Nation</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Connecting exceptional talent with world-class brands for
              impactful collaborations.
            </p>
            <div className="flex gap-4">
              <Link
                to={"#"}
                className="text-gray-600 dark:text-gray-400 hover:text-beast-purple-dark dark:hover:text-beast-400"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                to={"#"}
                className="text-gray-600 dark:text-gray-400 hover:text-beast-purple-dark dark:hover:text-beast-400"
              >
                <FaTiktok size={20} />
              </Link>
              <Link
                to={"#"}
                className="text-gray-600 dark:text-gray-400 hover:text-beast-purple-dark dark:hover:text-beast-400"
              >
                <FaYoutube size={20} />
              </Link>
              <Link
                to={"#"}
                className="text-gray-600 dark:text-gray-400 hover:text-beast-purple-dark dark:hover:text-beast-400"
              >
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((nav) => (
                <li key={nav.name}>
                  <Link
                    to={nav.path}
                    className="text-gray-600 hover:underline dark:text-gray-400 hover:text-beast-purple-dark dark:hover:text-beast-400"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Resources</h3>
            <ul className="space-y-2">
              {featuredResources.map((nav) => (
                <li key={nav.name}>
                  <Link
                    to={nav.path}
                    className="text-gray-600 dark:text-gray-400 hover:underline hover:text-beast-purple-dark dark:hover:text-beast-400"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              <p>123 Creator Avenue</p>
              <p>Los Angeles, CA 90210</p>
              <p className="mt-4">info@beastnation.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} TrendyNation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
