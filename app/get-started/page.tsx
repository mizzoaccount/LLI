"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiArrowLeft, FiCheckCircle, FiBarChart2, FiUsers, FiClock, FiBook, FiMapPin } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RecommendationButton } from '@/components/get-started/RecommendationButton';

export default function GetStarted() {
  // Onboarding slides
  const onboardingSlides = [
    {
      title: "Tailored Legislative Solutions",
      description: "We analyze your county's unique needs to deliver customized capacity building programs",
      icon: <FiBook className="w-8 h-8 text-blue-500" />,
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Proven Methodology",
      description: "Our framework has helped 30+ counties improve legislative efficiency by 40% on average",
      icon: <FiBarChart2 className="w-8 h-8 text-purple-500" />,
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Ongoing Support",
      description: "Get continuous support through our expert network and resource portal",
      icon: <FiUsers className="w-8 h-8 text-blue-600" />,
      color: "from-blue-100 to-purple-100"
    }
  ];

  // Quiz options
  const challenges = [
    { id: 1, name: "Budget Analysis & Implementation" },
    { id: 2, name: "Policy Formulation Gaps" },
    { id: 3, name: "Public Participation Frameworks" },
    { id: 4, name: "Legislative Drafting Skills" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);

  // Animation configs
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const recommendedPackage = selectedChallenge === 1 
    ? "Financial Management Masterclass" 
    : selectedChallenge === 2 
    ? "Policy Development Intensive" 
    : selectedChallenge === 3 
    ? "Public Engagement Toolkit" 
    : "Legislative Drafting Bootcamp";

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              >
                Get Started
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Legislative Journey</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                Let's explore how we can strengthen your county's governance
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!showQuiz ? (
              <motion.div
                key={`slide-${currentSlide}`}
                initial={{ opacity: 0, x: currentSlide === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-20"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h2 className="text-2xl font-bold text-center">
                    Step {currentSlide + 1} of {onboardingSlides.length}
                  </h2>
                </div>

                <div className="p-8 md:p-12 text-center">
                  <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                    {onboardingSlides[currentSlide].icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {onboardingSlides[currentSlide].title}
                  </h3>
                  
                  <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    {onboardingSlides[currentSlide].description}
                  </p>

                  <div className="flex justify-center space-x-4">
                    {currentSlide > 0 && (
                      <button
                        onClick={handlePrev}
                        className="px-6 py-3 border border-gray-300 rounded-lg font-medium flex items-center hover:bg-gray-50 transition-colors"
                      >
                        <FiArrowLeft className="mr-2" />
                        Back
                      </button>
                    )}

                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold flex items-center shadow-lg hover:shadow-xl transition-all"
                    >
                      {currentSlide < onboardingSlides.length - 1 ? 'Next' : 'Begin Assessment'}
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>

                  <div className="flex justify-center mt-8 space-x-2">
                    {onboardingSlides.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-20"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h2 className="text-2xl font-bold text-center">
                    What's your biggest legislative challenge?
                  </h2>
                </div>

                <div className="p-8 md:p-12">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {challenges.map((challenge) => (
                      <motion.div
                        key={challenge.id}
                        variants={item}
                        whileHover={hoverEffect}
                        onClick={() => setSelectedChallenge(challenge.id)}
                        className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                          selectedChallenge === challenge.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-full mr-4 flex items-center justify-center ${
                            selectedChallenge === challenge.id
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100 text-gray-400"
                          }`}>
                            {selectedChallenge === challenge.id && <FiCheckCircle className="w-4 h-4" />}
                          </div>
                          <h3 className="font-medium text-gray-900">{challenge.name}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="flex justify-center mt-10">
                    <button
                      onClick={() => setShowQuiz(false)}
                      className="px-6 py-3 mr-4 border border-gray-300 rounded-lg font-medium flex items-center hover:bg-gray-50 transition-colors"
                    >
                      <FiArrowLeft className="mr-2" />
                      Back
                    </button>
                    <RecommendationButton 
                      selectedChallenge={!!selectedChallenge}
                      recommendedPackage={recommendedPackage}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
                Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Counties Choose Us</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "92%", label: "Implementation Success", icon: <FiCheckCircle className="w-6 h-6 text-blue-500" /> },
                  { value: "15+", label: "Years Experience", icon: <FiClock className="w-6 h-6 text-purple-500" /> },
                  { value: "30+", label: "Counties Served", icon: <FiUsers className="w-6 h-6 text-blue-600" /> },
                  { value: "40%", label: "Efficiency Gains", icon: <FiBarChart2 className="w-6 h-6 text-purple-600" /> }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center p-4"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}