"use client";
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Programmes() {
  const container = {
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

  const programmes = [
    {
      title: "Public Finance Management and Budgeting",
      description: "The budget process is no doubt the pillar of any Government. ..."
    },
    {
      title: "Training and Capacity Building",
      description: "Through the institute's pool of resource people and ongoing relationships ..."
    },
    {
      title: "Legislative Procedures, Advocacy and Drafting",
      description: "LLI works to strengthen County Legislatures by capacity building ..."
    },
    {
      title: "Governance and Accountability",
      description: "Working closely with stakeholders in various sectors of the economy ..."
    },
    {
      title: "Policy Formulation",
      description: "The tools and techniques of policy analysis are increasingly important ..."
    },
    {
      title: "Preparing County Integrated Development Plans (CIDPS) and Strategic Plans",
      description: "The Institute assists County Governments to prepare their CIDPS, ADPS and Strategic plans."
    },
    {
      title: "General Training",
      description: "The Institute trains government officials and private sector players on various issues ..."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

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
              Our Offerings
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Legislative <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programmes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive capacity building initiatives for effective governance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programmes List */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid grid-cols-1 gap-8"
          >
            {programmes.map((programme, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-6">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{programme.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">{programme.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
        <Footer />
    </div>
  );
}

