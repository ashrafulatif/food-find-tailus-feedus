"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, ChefHat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-50 to-red-50 border-t border-orange-100 ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <ChefHat className="h-8 w-8 text-orange-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Recipo</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Discover delicious recipes and share your culinary adventures with
              food lovers worldwide.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-orange-500"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-orange-500"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 text-orange-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/all-recipes"
                className="block text-gray-600 hover:text-orange-500 transition-colors"
              >
                Browse Recipes
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-orange-500 transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="block text-gray-600 hover:text-orange-500 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-600 hover:text-orange-500 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-orange-500 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/"
                className="block text-gray-600 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FeedUs - Food Recipe Platform. Made
            with love for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
