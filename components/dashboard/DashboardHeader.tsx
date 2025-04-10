"use client";
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';
import Image from "next/image";

export default function DashboardHeader({ user, handleLogout }: { user: any, handleLogout: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="LLI Logo" 
                  width={90} 
                  height={50} 
                  className="object-contain"
                />
              </div>

              {/* Mobile Title */}
              <h1 className="text-xl font-bold text-gray-900 md:hidden">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LLI
                </span>{" "}
                Dashboard
              </h1>

              {/* Desktop Title */}
              <h1 className="hidden md:block text-xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Legislative Leadership Institute
                </span>{" "}
                Dashboard
              </h1>
            </Link>
          </motion.div>

          {/* User Info */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-xl shadow-sm"
          >
            <div className="text-sm text-gray-600">
              <span className="text-gray-500">Signed in as</span>{" "}
              <span className="font-semibold text-gray-800">{user.name}</span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center text-sm font-medium text-red-500 hover:text-red-600 transition duration-200"
            >
              <FiLogOut className="mr-1 h-4 w-4" /> Logout
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg overflow-hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <div className="px-3 py-3">
              <div className="text-sm text-gray-600">
                <span className="text-gray-500">Signed in as</span>{" "}
                <span className="font-semibold text-gray-800">{user.name}</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="pt-2"
            >
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-3 text-center rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <FiLogOut className="mr-2 h-4 w-4" /> Logout
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
}