// src/components/layout/Footer.tsx
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xl:col-span-2">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center text-white font-bold text-lg mr-2">
                SG
              </div>
              <span className="text-xl font-bold text-gray-900">
                StudyGlobal
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Making international education accessible and stress-free for
              students worldwide.
            </p>
            <div className="mt-6 flex space-x-6">
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/services/banking"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Banking
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sim-cards"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  SIM Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/services/insurance"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/housing"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Housing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/visas"
                  className="text-base text-gray-500 hover:text-gray-900"
                ></Link>
              </li>

              <li>
                <Link
                  href="/services/visas"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Visas & Immigration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Student Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} StudyGlobal. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
