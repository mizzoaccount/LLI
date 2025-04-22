"use client";
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
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
              Legal Terms
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Terms of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Service</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Effective: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-gray-600">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p>
                By accessing or using services from Governance Consulting Group ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Services Description</h2>
              <p>
                We provide governance consulting services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Public finance management and budgeting</li>
                <li>Legislative procedures advocacy</li>
                <li>Governance and accountability training</li>
                <li>Policy formulation support</li>
                <li>Capacity building programs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate and complete information</li>
                <li>Cooperate with our consultants as reasonably required</li>
                <li>Make timely payments for services rendered</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not reproduce or distribute our proprietary materials without permission</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Fees and Payment</h2>
              <p>
                Our fees are outlined in individual service agreements. Payment terms:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>50% deposit required to commence work</li>
                <li>Balance due upon completion or as per agreed milestones</li>
                <li>Late payments incur 2% monthly interest</li>
                <li>All fees are exclusive of applicable taxes</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of all proprietary information exchanged during the engagement, except:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Information already publicly available</li>
                <li>Information required to be disclosed by law</li>
                <li>Information independently developed without reference to confidential materials</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
              <p>
                All materials, methodologies, and tools developed by us remain our exclusive property. Clients receive a non-exclusive license to use deliverables for their intended purpose only.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
              <p>
                Our total liability for any claim shall not exceed the fees paid for the specific service giving rise to the claim. We shall not be liable for any indirect, incidental, or consequential damages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes shall be subject to the exclusive jurisdiction of the courts of Nairobi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Information</h2>
              <p>
                For questions about these Terms, please contact:
              </p>
              <p className="mt-4">
                <strong>Governance Consulting Group</strong><br />
                Email: legal@govconsulting.co.ke<br />
                Phone: +254 700 000000<br />
                Address: P.O. Box 0000-00100, Nairobi, Kenya
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}