"use client";
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import React from 'react';

export default function ForgotPasswordPage() {
  // Animation variants (consistent with other pages)
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

  // Unique to forgot password - recovery steps
  const recoverySteps = [
    "Enter your email",
    "Receive reset link",
    "Create new password",
    "Access your account"
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white min-h-screen flex items-center">
      {/* Consistent decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Recovery form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20 p-8 md:p-10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-center mb-2">Reset Password</h2>
              <p className="text-center text-white/80 mb-8">
                Enter your email to receive a password reset link
              </p>
            </motion.div>

            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Your Email Address"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="text-white/50 text-lg" />
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Send Reset Link <FiArrowRight className="ml-2" />
                </button>
              </motion.div>
            </form>

            <motion.div 
              variants={itemVariants}
              className="text-center mt-6 text-white/80"
            >
              Remember your password?{' '}
              <a href="/auth/login" className="text-blue-300 hover:underline font-medium">
                Sign in instead
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Adjusted recovery visualization */}
          <div className="relative hidden lg:block h-full min-h-[500px]">
            <motion.svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <motion.path
                d="M150,50 V350"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial="hidden"
                animate="visible"
                variants={pathVariants}
              />
              
              {/* Vertical recovery steps with improved spacing */}
              {recoverySteps.map((step, index) => {
                const yPos = 50 + (index * 100);
                return (
                  <React.Fragment key={index}>
                    <motion.circle
                      cx="150"
                      cy={yPos}
                      r="10"
                      fill="white"
                      stroke="#4ade80"
                      strokeWidth="3"
                      initial="hidden"
                      animate="visible"
                      variants={dotVariants}
                      transition={{ delay: 0.2 + (index * 0.3) }}
                    />
                    <motion.text
                      x="180"
                      y={yPos + 5}
                      fill="white"
                      fontSize="14"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (index * 0.3) }}
                    >
                      {step}
                    </motion.text>
                  </React.Fragment>
                );
              })}
            </motion.svg>

            {/* Repositioned floating cards */}
            <motion.div 
              className="absolute top-[0%] right-0 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-start">
                <FiCheckCircle className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-blue-300 font-bold mb-1">Secure Process</h3>
                  <p className="text-white/80 text-sm">Links expire in 1 hour</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-[0%] left-5 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="flex items-start">
                <FiCheckCircle className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-blue-300 font-bold mb-1">Instant Delivery</h3>
                  <p className="text-white/80 text-sm">Check your inbox</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}