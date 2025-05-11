import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-beast-700 dark:text-beast-400">
                Beast<span className="text-black dark:text-white">Nation</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Connecting exceptional talent with world-class brands for
              impactful collaborations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/talent"
                  className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
                >
                  Talent
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
                >
                  For Brands
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
                >
                  For Creators
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-beast-700 dark:hover:text-beast-400"
                >
                  Blog
                </a>
              </li>
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
            &copy; {new Date().getFullYear()} BeastNation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
