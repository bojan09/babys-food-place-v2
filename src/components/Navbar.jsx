// Component: Navbar
// Purpose: Top navigation bar (mobile-first, sticky, clean branding) - Tailwind v4

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-x-3 hover:scale-105 transition-transform duration-200"
          >
            <div className="w-9 h-9 bg-emerald-600 rounded-3xl flex items-center justify-center text-3xl shadow-inner">
              👶
            </div>
            <h1 className="text-2xl font-bold tracking-tighter text-gray-900">
              Baby’s Food Place
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-x-8 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-emerald-600 transition-colors">
              Browse Meals
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/add"
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-3xl transition-all active:scale-95 duration-200"
          >
            + Add Meal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
