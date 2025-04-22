"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const avatarUrls = [
    "https://meru.go.ke/assets/image/logo_meru_plain.png",
    "https://kakamega.go.ke/wp-content/uploads/2016/04/slide0003_image003-300x266.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQvkVLX2e3ehW7GV-BmsLKI8DH2WiNxKHeA&s",
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Coat_of_Arms_of_Kajiado_County.png",
  ];
  

  return (
    <section 
      className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24 md:py-32 overflow-hidden"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-700 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Legislative Excellence
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                Transforming Governance Through <span className="text-blue-300">Expert Training</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl"
                variants={itemVariants}
              >
                Building legislative capacity for effective governance, policy formulation, and sustainable development.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-12"
                variants={itemVariants}
              >
                <a
                  href="#services"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Contact Experts
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-6"
                variants={itemVariants}
              >

<div className="flex -space-x-2">
  {avatarUrls.map((url, index) => (
    <img
      key={index}
      src={url}
      alt={`Avatar ${index + 1}`}
      className="w-10 h-10 rounded-full border-2 border-blue-300 object-cover"
      style={{ zIndex: avatarUrls.length - index }}
    />
  ))}
</div>

                <div>
                  <p className="text-sm text-gray-300">Trusted by government institutions</p>
                  <p className="font-semibold">30+ years of combined experience</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Stair-like path with animated dots */}
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
                animate={controls}
                variants={pathVariants}
              />
              
              {/* Dots with highlights */}
              {[
                { cx: 50, cy: 50, text: "Leadership", delay: 0.2 },
                { cx: 150, cy: 50, text: "Governance", delay: 0.4 },
                { cx: 150, cy: 150, text: "Legislation", delay: 0.6 },
                { cx: 250, cy: 150, text: "Policy", delay: 0.8 },
                { cx: 250, cy: 250, text: "Training", delay: 1.0 },
                { cx: 350, cy: 250, text: "Research", delay: 1.2 },
                { cx: 350, cy: 350, text: "Impact", delay: 1.4 },
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
                    animate={controls}
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
            
            {/* Floating cards */}
            <motion.div 
              className="absolute top-20 left-20 bg-white p-6 rounded-xl shadow-2xl w-64"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-blue-900 font-bold mb-2">Workshops</h3>
              <p className="text-gray-700 text-sm">Capacity building for legislative bodies</p>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 right-20 bg-white p-6 rounded-xl shadow-2xl w-64"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <h3 className="text-blue-900 font-bold mb-2">Research</h3>
              <p className="text-gray-700 text-sm">Evidence-based policy recommendations</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Animated scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}