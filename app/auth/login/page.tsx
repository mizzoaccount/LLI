
"use client";
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const { login, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // start loading
    const { email, password } = formData;
    try {
      await login(email, password);
      // Optionally navigate or reset form after success
    } catch (err) {
      // Error already handled in context
    } finally {
      setLoading(false); // stop loading
    }
  };
  

  // ... (keep your existing animation variants)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white min-h-screen flex items-center">
      {/* ... (keep your decorative elements) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Login form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20 p-8 md:p-10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
              <p className="text-center text-white/80 mb-8">
                Sign in to your legislative training account
              </p>
            </motion.div>

            {error && (
              <motion.div 
                variants={itemVariants}
                className="bg-red-600/30 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg"
              >
                <p className="text-red-100">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Email Address"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="text-white/50 text-lg" />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="Password"
                  required
                  minLength={8}
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiLock className="text-white/50 text-lg" />
                </div>

                {/* Toggle show/hide password */}
                <div
                  className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-white/50 hover:text-white"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </motion.div>

              <motion.div variants={itemVariants} className="flex justify-end">
                <a href="/auth/forgot-password" className="text-blue-300 text-sm hover:underline">
                  Forgot password?
                </a>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Signing In...' : (
                    <>
                      Sign In <FiArrowRight className="ml-2" />
                    </>
                  )}
                </button>
              </motion.div>
            </form>

            <motion.div 
              variants={itemVariants}
              className="text-center mt-6 text-white/80"
            >
              Don't have an account?{' '}
              <a href="/auth/register" className="text-blue-300 hover:underline font-medium">
                Create account
              </a>
            </motion.div>
          </motion.div>
          <div className="relative hidden lg:block h-full min-h-[500px]">
            <motion.svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <motion.path
                d="M50,50 H150 V150 H250 V250 H350 V350"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial="hidden"
                animate="visible"
                variants={pathVariants}
              />
              
              {/* Login process steps */}
              {[
                { cx: 50, cy: 50, text: "Credentials", delay: 0.2 },
                { cx: 150, cy: 50, text: "Verification", delay: 0.4 },
                { cx: 150, cy: 150, text: "Security", delay: 0.6 },
                { cx: 250, cy: 150, text: "Session", delay: 0.8 },
                { cx: 250, cy: 250, text: "Dashboard", delay: 1.0 }
              ].map((point, index) => (
                <React.Fragment key={index}>
                  <motion.circle
                    cx={point.cx}
                    cy={point.cy}
                    r="8"
                    fill="white"
                    stroke="#4ade80"
                    strokeWidth="3"
                    initial="hidden"
                    animate="visible"
                    variants={dotVariants}
                    transition={{ delay: point.delay }}
                  />
                  <motion.text
                    x={point.cx}
                    y={point.cy - 15}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: point.delay + 0.3 }}
                  >
                    {point.text}
                  </motion.text>
                </React.Fragment>
              ))}
            </motion.svg>

            {/* Floating info cards with login-specific content */}
            <motion.div 
              className="absolute top-0 left-80 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-blue-300 font-bold mb-2">Secure Login</h3>
              <p className="text-white/80 text-sm">End-to-end encrypted</p>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 right-20 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <h3 className="text-blue-300 font-bold mb-2">Quick Access</h3>
              <p className="text-white/80 text-sm">To your training materials</p>
            </motion.div>
          </div>
         
        </div>
      </div>
    </section>
  );
}



{/*"use client";
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import React from 'react';

export default function LoginPage() {
  // Animation variants (same as registration page)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white min-h-screen flex items-center">
      {/* Decorative elements (same as registration) *
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Login form (now first in DOM order) *
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20 p-8 md:p-10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
              <p className="text-center text-white/80 mb-8">
                Sign in to your legislative training account
              </p>
            </motion.div>

            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Email Address"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="text-white/50 text-lg" />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Password"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiLock className="text-white/50 text-lg" />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex justify-end">
                <a href="/auth/forgot-password" className="text-blue-300 text-sm hover:underline">
                  Forgot password?
                </a>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Sign In <FiArrowRight className="ml-2" />
                </button>
              </motion.div>
            </form>

            <motion.div 
              variants={itemVariants}
              className="text-center mt-6 text-white/80"
            >
              Don't have an account?{' '}
              <a href="/auth/register" className="text-blue-300 hover:underline font-medium">
                Create account
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Staircase visualization (now second in DOM order) *
          <div className="relative hidden lg:block h-full min-h-[500px]">
            <motion.svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <motion.path
                d="M50,50 H150 V150 H250 V250 H350 V350"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial="hidden"
                animate="visible"
                variants={pathVariants}
              />
              
              {/* Login process steps *
              {[
                { cx: 50, cy: 50, text: "Credentials", delay: 0.2 },
                { cx: 150, cy: 50, text: "Verification", delay: 0.4 },
                { cx: 150, cy: 150, text: "Security", delay: 0.6 },
                { cx: 250, cy: 150, text: "Session", delay: 0.8 },
                { cx: 250, cy: 250, text: "Dashboard", delay: 1.0 }
              ].map((point, index) => (
                <React.Fragment key={index}>
                  <motion.circle
                    cx={point.cx}
                    cy={point.cy}
                    r="8"
                    fill="white"
                    stroke="#4ade80"
                    strokeWidth="3"
                    initial="hidden"
                    animate="visible"
                    variants={dotVariants}
                    transition={{ delay: point.delay }}
                  />
                  <motion.text
                    x={point.cx}
                    y={point.cy - 15}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: point.delay + 0.3 }}
                  >
                    {point.text}
                  </motion.text>
                </React.Fragment>
              ))}
            </motion.svg>

            {/* Floating info cards with login-specific content *
            <motion.div 
              className="absolute top-0 left-80 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-blue-300 font-bold mb-2">Secure Login</h3>
              <p className="text-white/80 text-sm">End-to-end encrypted</p>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 right-20 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <h3 className="text-blue-300 font-bold mb-2">Quick Access</h3>
              <p className="text-white/80 text-sm">To your training materials</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}*/}
























