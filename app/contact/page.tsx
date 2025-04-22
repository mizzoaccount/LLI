"use client";
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiCheckCircle } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      description: "Our team will respond within 24 hours",
      details: "info@legisconsult.co.ke",
      action: "Send Message"
    },
    {
      icon: <FiPhone className="w-6 h-6 text-purple-600" />,
      title: "Call Us",
      description: "Speak directly with our support team",
      details: "+254 700 123 456",
      action: "Call Now"
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-green-600" />,
      title: "Visit Us",
      description: "Schedule an in-person consultation",
      details: "Ushirika House, 3rd Floor, Nairobi",
      action: "Get Directions"
    }
  ];

  const socialLinks = [
    {
      icon: <FaTwitter className="w-5 h-5" />,
      name: "Twitter",
      url: "#"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "#"
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      name: "Facebook",
      url: "#"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/254722789012`, '_blank');
  };

  return (
    <>
      <Head>
        <title>Contact Us | Legislative & Governance Consultants</title>
        <meta name="description" content="Get in touch with our team of legislative experts and governance consultants for inquiries and consultations." />
      </Head>

      <Header />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Floating WhatsApp Button */}
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <button
              onClick={handleWhatsAppClick}
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 group"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="w-8 h-8 text-white" />
              <span className="absolute -left-2 -top-2 bg-white text-green-600 text-xs font-bold px-2 py-1 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                Chat
              </span>
            </button>
          </motion.div>
        )}

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
                Get In Touch
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                Reach out for consultations, inquiries, or to learn more about our legislative and governance services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {contactMethods.map((method, index) => (
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
                  <div className="relative p-8">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                      {method.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="text-lg font-medium text-gray-900 mb-6">{method.details}</p>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      {method.action}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-12"
            >
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-2/3"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                    <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you promptly</p>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                          placeholder="How can we help?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                          placeholder="Tell us about your legislative or governance needs..."
                        ></textarea>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                        >
                          <span className="mr-2">Send Message</span>
                          <FiSend className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:w-1/3"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Office Hours</h4>
                      <ul className="space-y-3">
                        {officeHours.map((hours, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <FiClock className="mr-3 text-blue-500" />
                            <span className="font-medium">{hours.day}:</span>
                            <span className="ml-2">{hours.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Social Media</h4>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 text-blue-600 hover:text-blue-700"
                            aria-label={social.name}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Why Contact Us?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Free initial consultation for government institutions</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Customized solutions for your legislative needs</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Experienced team with 30+ years combined expertise</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Emergency Contact</h4>
                      <p className="text-gray-600 mb-2">For urgent legislative matters outside office hours:</p>
                      <p className="text-blue-600 font-medium">+254 722 789 012</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-96 bg-gray-100">
                  {/* Replace with your actual map component or iframe */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="text-center p-6">
                      <FiMapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Our Headquarters</h3>
                      <p className="text-gray-600 mb-4">Ushirika House, 3rd Floor, Nairobi, Kenya</p>
                      <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                        View on Google Maps
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Visit Our Offices</h2>
                  <p className="text-gray-600 mb-6">Schedule an in-person consultation with our legislative experts</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Nairobi Headquarters</h3>
                      <p className="text-gray-600 mb-2">Ushirika House, 3rd Floor</p>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Regional Offices</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <FiMapPin className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Mombasa Office</p>
                            <p className="text-gray-600">Nyali Centre, 2nd Floor</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <FiMapPin className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Kisumu Office</p>
                            <p className="text-gray-600">West End Towers, Suite 5</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Parking Information</h3>
                      <p className="text-gray-600 mb-2">Secure parking available at Ushirika House basement</p>
                      <p className="text-sm text-gray-500">Please inform security you're visiting Legislative Consultants</p>
                    </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to strengthen your governance systems?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our team of experts is ready to discuss your specific legislative challenges and needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                >
                  Call Our Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

{/*"use client";
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiCheckCircle } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      description: "Our team will respond within 24 hours",
      details: "info@legisconsult.co.ke",
      action: "Send Message"
    },
    {
      icon: <FiPhone className="w-6 h-6 text-purple-600" />,
      title: "Call Us",
      description: "Speak directly with our support team",
      details: "+254 700 123 456",
      action: "Call Now"
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-green-600" />,
      title: "Visit Us",
      description: "Schedule an in-person consultation",
      details: "Ushirika House, 3rd Floor, Nairobi",
      action: "Get Directions"
    }
  ];

  const socialLinks = [
    {
      icon: <FaTwitter className="w-5 h-5" />,
      name: "Twitter",
      url: "#"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "#"
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      name: "Facebook",
      url: "#"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Legislative & Governance Consultants</title>
        <meta name="description" content="Get in touch with our team of legislative experts and governance consultants for inquiries and consultations." />
      </Head>

      <Header />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section *
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
                Get In Touch
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                Reach out for consultations, inquiries, or to learn more about our legislative and governance services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods *
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {contactMethods.map((method, index) => (
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
                  <div className="relative p-8">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                      {method.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="text-lg font-medium text-gray-900 mb-6">{method.details}</p>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      {method.action}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form + Info *
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-12"
            >
              {/* Contact Form *
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-2/3"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                    <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you promptly</p>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                          placeholder="How can we help?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                          placeholder="Tell us about your legislative or governance needs..."
                        ></textarea>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                        >
                          <span className="mr-2">Send Message</span>
                          <FiSend className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info *
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:w-1/3"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Office Hours</h4>
                      <ul className="space-y-3">
                        {officeHours.map((hours, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <FiClock className="mr-3 text-blue-500" />
                            <span className="font-medium">{hours.day}:</span>
                            <span className="ml-2">{hours.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Social Media</h4>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 text-blue-600 hover:text-blue-700"
                            aria-label={social.name}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Why Contact Us?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Free initial consultation for government institutions</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Customized solutions for your legislative needs</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Experienced team with 30+ years combined expertise</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Emergency Contact</h4>
                      <p className="text-gray-600 mb-2">For urgent legislative matters outside office hours:</p>
                      <p className="text-blue-600 font-medium">+254 722 789 012</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Map Section *
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-96 bg-gray-100">
                  {/* Replace with your actual map component or iframe *
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="text-center p-6">
                      <FiMapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Our Headquarters</h3>
                      <p className="text-gray-600 mb-4">Ushirika House, 3rd Floor, Nairobi, Kenya</p>
                      <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                        View on Google Maps
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Visit Our Offices</h2>
                  <p className="text-gray-600 mb-6">Schedule an in-person consultation with our legislative experts</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Nairobi Headquarters</h3>
                      <p className="text-gray-600 mb-2">Ushirika House, 3rd Floor</p>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Regional Offices</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <FiMapPin className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Mombasa Office</p>
                            <p className="text-gray-600">Nyali Centre, 2nd Floor</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <FiMapPin className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Kisumu Office</p>
                            <p className="text-gray-600">West End Towers, Suite 5</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Parking Information</h3>
                      <p className="text-gray-600 mb-2">Secure parking available at Ushirika House basement</p>
                      <p className="text-sm text-gray-500">Please inform security you're visiting Legislative Consultants</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section *
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to strengthen your governance systems?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our team of experts is ready to discuss your specific legislative challenges and needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                >
                  Call Our Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}*/}