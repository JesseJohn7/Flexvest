// components/Footer.tsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-900 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Company Info */}
        <div>
          <h3 className="text-blue-500 text-xl font-bold mb-4">FlexVest</h3>
          <p className="text-gray-600 mb-4">
            Empowering Nigerians to save in USDC and beat inflation and excessive bank charges with Solana speed.
          </p>
          <div className="flex gap-4">
            <a href="https://x.com/Flex_vest" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-blue-500 text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a></li>
            <li><a href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-500 transition-colors">How it Works</a></li>
            <li><a href="#faqs" className="text-gray-600 hover:text-blue-500 transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-blue-500 text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-600 mb-1">Email: JesseJohn260@gmail.com</p>
          <p className="text-gray-600 mb-1">Phone: +234 8038509708</p>
          <p className="text-gray-600 mb-2">Lagos, Nigeria</p>
          <a
            href="mailto:JesseJohn260@gmail.com"
            className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
          >
            <FaEnvelope size={16} className="mr-1" /> Get in Touch
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm space-y-1">
        <p>&copy; {new Date().getFullYear()} FlexVest. All rights reserved.</p>
        <p>
          Built on Solana by{" "}
          <a href="https://x.com/Jesse_can_code" className="text-blue-500 hover:text-blue-700 underline">
            Jesse John
          </a>
          , for Africans.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
