"use client";
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Data Protection
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Cookie <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-gray-600">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. What Are Cookies</h2>
              <p>
                Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences and enabling certain functions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Cookies</h2>
              <p>We use cookies for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Essential Operation:</strong> Necessary for website functionality</li>
                <li><strong>Performance:</strong> Analyze how visitors use our site</li>
                <li><strong>Functionality:</strong> Remember your preferences</li>
                <li><strong>Marketing:</strong> Show relevant content (if applicable)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 mt-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Cookie Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-sm border-b">Session Cookies</td>
                      <td className="px-4 py-3 text-sm border-b">Maintain your session</td>
                      <td className="px-4 py-3 text-sm border-b">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm border-b">Preference Cookies</td>
                      <td className="px-4 py-3 text-sm border-b">Remember your settings</td>
                      <td className="px-4 py-3 text-sm border-b">30 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm border-b">Analytics Cookies</td>
                      <td className="px-4 py-3 text-sm border-b">Understand site usage</td>
                      <td className="px-4 py-3 text-sm border-b">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Third-Party Cookies</h2>
              <p>
                We may use services like Google Analytics that set their own cookies to help us analyze site traffic and usage patterns. These third-party cookies are governed by the respective providers' privacy policies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Managing Cookies</h2>
              <p>You can control and/or delete cookies through your browser settings:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Delete all cookies from your device</li>
                <li>Block all cookies from being set</li>
                <li>Set warnings before cookies are placed</li>
              </ul>
              <p className="mt-4">
                Note that disabling cookies may affect the functionality of our website.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy periodically. Any changes will be posted on this page with an updated revision date.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Contact Us</h2>
              <p>
                For questions about our Cookie Policy:
              </p>
              <p className="mt-4">
                <strong>Governance Consulting Group</strong><br />
                Email: privacy@govconsulting.co.ke<br />
                Phone: +254 700 000000<br />
                Address: P.O. Box 0000-00100, Nairobi, Kenya
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cookie Consent Banner - Would be implemented separately */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
            </p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">
                Accept
              </button>
              <button className="px-4 py-2 border border-white rounded hover:bg-gray-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}