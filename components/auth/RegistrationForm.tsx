

"use client";
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiLock, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FormEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const recommendedPackage = searchParams.get('package');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    programInterest: recommendedPackage || ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://lli-backend.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Registration successful - show verification message
      setRegistrationSuccess(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error('Registration error:', err.message);
      } else {
        setError('Registration failed. Please try again.');
        console.error('Unknown error:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setResendLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://lli-backend.onrender.com/api/v1/auth/resend-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to resend verification email');
      }

      setResendSuccess(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to resend verification email');
      }
    } finally {
      setResendLoading(false);
    }
  };

  // Animation variants
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

  {/*if (registrationSuccess) {
    return (
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20 p-8 md:p-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <FiMail className="mx-auto text-5xl text-green-400 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Verify Your Email</h2>
              <p className="text-lg mb-6">
                We've sent a verification link to <span className="font-semibold">{formData.email}</span>.
                Please check your inbox and click the link to verify your account.
              </p>
              <p className="text-white/80 mb-6">
                Didn't receive the email? Check your spam folder or 
                <button 
                  className="text-blue-300 hover:underline ml-1"
                  onClick={() => setRegistrationSuccess(false)}
                >
                  try again
                </button>
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => router.push('/auth/login')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Go to Login
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
  */}

  if (registrationSuccess) {
    return (
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20 p-8 md:p-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <FiMail className="mx-auto text-5xl text-green-400 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Verify Your Email</h2>
              <p className="text-lg mb-6">
                We've sent a verification link to <span className="font-semibold">{formData.email}</span>.
                Please check your inbox and click the link to verify your account.
              </p>
              <div className="mb-6">
                <p className="text-white/80">
                  Didn't receive the email? Check your spam folder or
                </p>
                <button 
                  onClick={handleResendVerification}
                  disabled={resendLoading || resendSuccess}
                  className={`mt-2 text-blue-300 hover:underline ${resendLoading || resendSuccess ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {resendLoading ? 'Sending...' : resendSuccess ? 'Sent!' : 'Resend verification email'}
                </button>
                {resendSuccess && (
                  <p className="text-green-300 mt-2">A new verification email has been sent!</p>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => router.push('/auth/login')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Go to Login
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }


  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Staircase visualization (keep your existing visualization) */}
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
              
              {/* Registration process steps */}
              {[
                { cx: 50, cy: 50, text: "Details", delay: 0.2 },
                { cx: 150, cy: 50, text: "Verification", delay: 0.4 },
                { cx: 150, cy: 150, text: "Program", delay: 0.6 },
                { cx: 250, cy: 150, text: "Payment", delay: 0.8 },
                { cx: 250, cy: 250, text: "Complete", delay: 1.0 }
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

            {/* Floating info cards */}
            <motion.div 
              className="absolute top-20 left-20 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-blue-300 font-bold mb-2">Quick Registration</h3>
              <p className="text-white/80 text-sm">Complete in just 2 minutes</p>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 right-20 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <h3 className="text-blue-300 font-bold mb-2">Secure Data</h3>
              <p className="text-white/80 text-sm">256-bit encryption</p>
            </motion.div>
          </div>

          {/* Right side - Registration form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20 p-8 md:p-10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
              <p className="text-center text-white/80 mb-8">
                Join our legislative training platform
              </p>
            </motion.div>

            {/* Error message */}
            {error && (
              <motion.div 
                variants={itemVariants}
                className="bg-red-600/30 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg"
              >
                <p className="text-red-100">{error}</p>
              </motion.div>
            )}

            {/* Recommended package banner */}
            {recommendedPackage && (
              <motion.div
                variants={itemVariants}
                className="bg-blue-600/30 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg"
              >
                <div className="flex items-center">
                  <FiCheckCircle className="text-blue-300 mr-2" />
                  <div>
                    <p className="font-semibold text-blue-100">Recommended Program</p>
                    <p className="text-white">{decodeURIComponent(recommendedPackage)}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Full Name"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiUser className="text-white/50 text-lg" />
                  </div>
                </div>
              </motion.div>

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
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    placeholder="Phone Number"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiPhone className="text-white/50 text-lg" />
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
                <div
                  className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-white/50 hover:text-white"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </motion.div>
              {/* Program selection (hidden if coming from recommendation) */}
              {!recommendedPackage && (
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <label className="block text-white/80 mb-2">Program Interest</label>
                    <select
                      name="programInterest"
                      value={formData.programInterest}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white focus:ring-2 focus:ring-blue-300 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="" className="text-white/50 bg-indigo-900">Select a program</option>
                      <option value="Financial Management" className="text-white bg-indigo-900">Financial Management</option>
                      <option value="Policy Development" className="text-white bg-indigo-900">Policy Development</option>
                      <option value="Legislative Drafting" className="text-white bg-indigo-900">Legislative Drafting</option>
                      <option value="Public Engagement" className="text-white bg-indigo-900">Public Engagement</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none top-7">
                      <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    'Processing...'
                  ) : (
                    <>
                      Create Account <FiArrowRight className="ml-2" />
                    </>
                  )}
                </button>
              </motion.div>
            </form>

            <motion.div 
              variants={itemVariants}
              className="text-center mt-6 text-white/80"
            >
              Already have an account?{' '}
              <a href="/auth/login" className="text-blue-300 hover:underline font-medium">
                Sign in
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




// app/auth/register/RegistrationForm.tsx
{/*"use client";
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiLock, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FormEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const recommendedPackage = searchParams.get('package');

    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      programInterest: recommendedPackage || ''
    });
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(prev => !prev);
    };
  
    // Handle form input changes
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
    
  
    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError('');
    
      try {
        const response = await fetch('https://lli-backend.onrender.com/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.error || 'Registration failed');
        }
    
        // Registration successful - redirect or show success message
        router.push('/auth/login');
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.error('Registration error:', err.message);
        } else {
          setError('Registration failed. Please try again.');
          console.error('Unknown error:', err);
        }
      } finally {
        setLoading(false);
      }
    };
    // Animation variants
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-20"></div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl opacity-20"></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Staircase visualization (keep your existing visualization) *
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
                
                {/* Registration process steps *
                {[
                  { cx: 50, cy: 50, text: "Details", delay: 0.2 },
                  { cx: 150, cy: 50, text: "Verification", delay: 0.4 },
                  { cx: 150, cy: 150, text: "Program", delay: 0.6 },
                  { cx: 250, cy: 150, text: "Payment", delay: 0.8 },
                  { cx: 250, cy: 250, text: "Complete", delay: 1.0 }
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
  
              {/* Floating info cards *
              <motion.div 
                className="absolute top-20 left-20 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h3 className="text-blue-300 font-bold mb-2">Quick Registration</h3>
                <p className="text-white/80 text-sm">Complete in just 2 minutes</p>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-20 right-20 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl w-64 border border-white/20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <h3 className="text-blue-300 font-bold mb-2">Secure Data</h3>
                <p className="text-white/80 text-sm">256-bit encryption</p>
              </motion.div>
            </div>
  
            {/* Right side - Registration form *
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20 p-8 md:p-10"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
                <p className="text-center text-white/80 mb-8">
                  Join our legislative training platform
                </p>
              </motion.div>
  
              {/* Error message *
              {error && (
                <motion.div 
                  variants={itemVariants}
                  className="bg-red-600/30 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg"
                >
                  <p className="text-red-100">{error}</p>
                </motion.div>
              )}
  
              {/* Recommended package banner *
              {recommendedPackage && (
                <motion.div
                  variants={itemVariants}
                  className="bg-blue-600/30 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg"
                >
                  <div className="flex items-center">
                    <FiCheckCircle className="text-blue-300 mr-2" />
                    <div>
                      <p className="font-semibold text-blue-100">Recommended Program</p>
                      <p className="text-white">{decodeURIComponent(recommendedPackage)}</p>
                    </div>
                  </div>
                </motion.div>
              )}
  
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      placeholder="Full Name"
                      required
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiUser className="text-white/50 text-lg" />
                    </div>
                  </div>
                </motion.div>
  
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
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-white/50 focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      placeholder="Phone Number"
                      required
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiPhone className="text-white/50 text-lg" />
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
                  <div
                    className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-white/50 hover:text-white"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </motion.div>
                {/* Program selection (hidden if coming from recommendation) *
                {!recommendedPackage && (
                  <motion.div variants={itemVariants}>
                    <div className="relative">
                      <label className="block text-white/80 mb-2">Program Interest</label>
                      <select
                        name="programInterest"
                        value={formData.programInterest}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white focus:ring-2 focus:ring-blue-300 focus:border-transparent appearance-none"
                        required
                      >
                        <option value="" className="text-white/50 bg-indigo-900">Select a program</option>
                        <option value="Financial Management" className="text-white bg-indigo-900">Financial Management</option>
                        <option value="Policy Development" className="text-white bg-indigo-900">Policy Development</option>
                        <option value="Legislative Drafting" className="text-white bg-indigo-900">Legislative Drafting</option>
                        <option value="Public Engagement" className="text-white bg-indigo-900">Public Engagement</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none top-7">
                        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )}
  
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      'Processing...'
                    ) : (
                      <>
                        Create Account <FiArrowRight className="ml-2" />
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
  
              <motion.div 
                variants={itemVariants}
                className="text-center mt-6 text-white/80"
              >
                Already have an account?{' '}
                <a href="/auth/login" className="text-blue-300 hover:underline font-medium">
                  Sign in
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
}
*/}



















