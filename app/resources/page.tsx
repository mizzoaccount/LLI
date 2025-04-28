"use client";
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { FaRegFilePdf, FaRegFileWord, FaRegFileExcel, FaRegFilePowerpoint } from 'react-icons/fa';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RequestResourcesModal from '@/components/RequestResourcesModal';
import { useState } from 'react';

export default function ResourcesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const resourceCategories = [
    {
      title: "Legislative Tools",
      description: "Practical templates and frameworks for legislative work",
      icon: "📋",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Policy Briefs",
      description: "Concise analyses of current governance issues",
      icon: "📑",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Training Materials",
      description: "Resources for capacity building programs",
      icon: "🎓",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Research Papers",
      description: "In-depth studies on governance topics",
      icon: "🔍",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const resources = [
    {
      title: "County Budget Analysis Framework 2023",
      category: "Research Paper",
      description: "Comprehensive guide to effective fiscal management for county governments with updated 2023 regulations",
      link: "#",
      icon: <FaRegFilePdf className="w-6 h-6 text-red-500" />,
      date: "May 2023",
      pages: "42 pages"
    },
    {
      title: "Legislative Drafting Toolkit",
      category: "Template Pack",
      description: "Collection of 50+ customizable bill templates for various legislative needs with annotation guides",
      link: "#",
      icon: <FaRegFileWord className="w-6 h-6 text-blue-500" />,
      date: "April 2023",
      pages: "18 templates"
    },
    {
      title: "Public Participation Handbook",
      category: "Training Material",
      description: "Step-by-step guide to conducting effective public participation in legislative processes",
      link: "#",
      icon: <FaRegFilePdf className="w-6 h-6 text-red-500" />,
      date: "March 2023",
      pages: "36 pages"
    },
    {
      title: "Committee Oversight Template",
      category: "Legislative Tool",
      description: "Standardized templates for committee reports, hearings, and oversight documentation",
      link: "#",
      icon: <FaRegFileExcel className="w-6 h-6 text-green-500" />,
      date: "February 2023",
      pages: "15 templates"
    },
    {
      title: "CIDP Development Guide",
      category: "Policy Brief",
      description: "Updated methodology for County Integrated Development Plan formulation and review",
      link: "#",
      icon: <FaRegFilePowerpoint className="w-6 h-6 text-orange-500" />,
      date: "January 2023",
      pages: "28 slides"
    },
    {
      title: "Legislative Ethics Manual",
      category: "Training Material",
      description: "Comprehensive manual on parliamentary ethics and conduct for legislators",
      link: "#",
      icon: <FaRegFilePdf className="w-6 h-6 text-red-500" />,
      date: "December 2022",
      pages: "64 pages"
    }
  ];

  const events = [
    {
      title: "Legislative Drafting Masterclass",
      date: "June 15, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "Nairobi, Kenya",
      description: "Hands-on training on advanced legislative drafting techniques for county assemblies"
    },
    {
      title: "Public Finance Management Webinar",
      date: "July 7, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual",
      description: "Exploring innovative approaches to county budget formulation and execution"
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Legislative & Governance Knowledge Center</title>
        <meta name="description" content="Access our collection of legislative tools, policy briefs, research papers, and training materials for governance professionals." />
      </Head>

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
                Knowledge Hub
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Legislative <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resources</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                Practical tools, research, and insights to strengthen governance and legislative processes
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resources</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular downloads for legislative and governance professionals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative h-full p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${resource.category === "Research Paper" ? "bg-red-100 text-red-600" : 
                                      resource.category === "Template Pack" ? "bg-blue-100 text-blue-600" :
                                      resource.category === "Training Material" ? "bg-green-100 text-green-600" :
                                      "bg-purple-100 text-purple-600"}`}>
                        {resource.category}
                      </div>
                      <div className="text-gray-500 text-sm flex items-center">
                        <FiCalendar className="mr-1" />
                        {resource.date}
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <div className="mr-4 mt-1">
                        {resource.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-sm text-gray-500">{resource.pages}</span>
                      <a 
                        href={resource.link} 
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                      >
                        <span className="mr-2">Download</span>
                        <FiDownload className="w-4 h-4 group-hover:animate-bounce" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Events & Updates */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-12"
            >
              <div className="lg:w-2/3">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Upcoming <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</span>
                </h2>
                
                <div className="space-y-6">
                  {events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-4">{event.description}</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-sm min-w-[180px]">
                            <div className="flex items-center text-gray-600 mb-2">
                              <FiCalendar className="mr-2" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-600 mb-2">
                              <FiClock className="mr-2" />
                              <span>{event.time}</span>
                            </div>
                            <div className="text-gray-600">{event.location}</div>
                          </div>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                          Register Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Resource Newsletter</h3>
                  <p className="text-gray-600 mb-6">
                    Get our latest legislative resources, event invites, and policy updates delivered to your inbox monthly.
                  </p>
                  <div className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md">
                      Subscribe
                    </button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Recent Updates</h4>
                    <ul className="space-y-3">
                      <li className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        <a href="#" className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>New: County Legislative Oversight Guidelines (June 2023)</span>
                        </a>
                      </li>
                      <li className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        <a href="#" className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Updated: Public Participation Handbook v2.1</span>
                        </a>
                      </li>
                      <li className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        <a href="#" className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Recording available: PFM Webinar (May 2023)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Looking for specific resources?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team can help you find or develop the perfect tools for your legislative needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
              onClick={() => {
                window.location.href = '/resources';
              }}
            >
              View All Resources
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
              onClick={openModal}
            >
              Request Resources
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Requesting Resources */}
      <RequestResourcesModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
        {/*<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Looking for specific resources?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our team can help you find or develop the perfect tools for your legislative needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                >
                  Request Resources
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                >
                  View All Resources
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>*/}
      </div>
      <Footer />
    </>
  );
}