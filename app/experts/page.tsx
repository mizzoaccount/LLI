"use client";
import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiFileText, FiArrowRight } from 'react-icons/fi';
import Head from 'next/head';
import Header from '@/components/Header'; // Import your Header component
import Footer from '@/components/Footer';

export default function ExpertsPage() {
  const experts = [
    {
      name: "Consolata Munga",
      role: "Parliamentary Procedures Expert",
      experience: "30+ years legislative training",
      bio: "Former Clerk of the National Assembly with extensive experience in parliamentary procedure reform across East Africa.",
      image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
      social: { twitter: "#", linkedin: "#" },
      specialties: ["Legislative Drafting", "Committee Systems", "Parliamentary Reform"]
    },
    {
      name: "Dr. Rori Mwangi",
      role: "Public Finance Specialist",
      experience: "15+ years PFM consulting",
      bio: "Public finance management expert who has advised 8 national governments on budget process improvements.",
      image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
      social: { twitter: "#", linkedin: "#" },
      specialties: ["Budget Analysis", "Fiscal Decentralization", "Revenue Optimization"]
    },
    {
      name: "Prof. Kamau Goro",
      role: "Constitutional Law Expert",
      experience: "Author of 5 legislative textbooks",
      bio: "Leading constitutional scholar who has participated in 3 constitutional review processes in Africa.",
      image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
      social: { twitter: "#", linkedin: "#" },
      specialties: ["Constitutional Review", "Legislative Frameworks", "Governance Structures"]
    },
    {
      name: "Dr. Aisha Mohamed",
      role: "Governance Strategist",
      experience: "UN Development Policy Advisor",
      bio: "Former UNDP governance advisor with specialization in gender-responsive legislative processes.",
      image: "https://i.pinimg.com/736x/cc/b2/f7/ccb2f7ac902231def2ea5e938ae1eca4.jpg",
      social: { twitter: "#", linkedin: "#" },
      specialties: ["Policy Formulation", "Gender Mainstreaming", "SDG Implementation"]
    },
    {
      name: "James Kariuki",
      role: "Legislative Tech Innovator",
      experience: "Digital transformation specialist",
      bio: "Pioneer in digital parliament solutions with implementations in 5 African legislatures.",
      image: "https://i.pinimg.com/736x/6e/59/95/6e599501252c23bcf02658617b29c894.jpg",
      social: { twitter: "#", linkedin: "#" },
      specialties: ["E-Parliament", "Legislative Databases", "Public Engagement Platforms"]
    }
  ];

  return (
    <>
      <Head>
        <title>Our Experts | Legislative & Governance Specialists</title>
        <meta name="description" content="Meet our team of legislative experts, parliamentary procedure specialists, and governance advisors with decades of combined experience." />
      </Head>

      <Header />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

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
                Legislative Leadership
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                Seasoned professionals with proven track records in legislative strengthening and governance reform
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experts Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {experts.map((expert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative h-full bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Image with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      
                      {/* Social Links */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href={expert.social.twitter} className="p-2 bg-white rounded-full shadow-sm hover:bg-blue-50 transition-colors">
                          <FiTwitter className="w-5 h-5 text-blue-600" />
                        </a>
                        <a href={expert.social.linkedin} className="p-2 bg-white rounded-full shadow-sm hover:bg-blue-50 transition-colors">
                          <FiLinkedin className="w-5 h-5 text-blue-600" />
                        </a>
                      </div>
                    </div>

                    {/* Profile Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                      <p className="text-blue-600 mb-2 font-medium">{expert.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{expert.experience}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Specializations</h4>
                        <div className="flex flex-wrap gap-2">
                          {expert.specialties.map((specialty, i) => (
                            <span key={i} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                     {/*} <button className="mt-4 w-full flex items-center justify-between py-2 px-4 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                        View Full Profile
                        <FiArrowRight className="ml-2 w-4 h-4" />
                      </button>*/}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Expert Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 relative">
                  <img
                    src={experts[0].image}
                    alt={experts[0].name}
                    className="w-full h-full object-cover min-h-96"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="flex space-x-4">
                      <a href={experts[0].social.twitter} className="p-2 bg-white rounded-full shadow-sm hover:bg-blue-50 transition-colors">
                        <FiTwitter className="w-5 h-5 text-blue-600" />
                      </a>
                      <a href={experts[0].social.linkedin} className="p-2 bg-white rounded-full shadow-sm hover:bg-blue-50 transition-colors">
                        <FiLinkedin className="w-5 h-5 text-blue-600" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8 md:p-12">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    Featured Expert
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{experts[0].name}</h2>
                  <p className="text-xl text-blue-600 mb-6">{experts[0].role}</p>
                  <p className="text-gray-600 mb-6">{experts[0].bio}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Led parliamentary reform in 5 countries</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Trained over 1,000 legislators and staff</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Published 3 authoritative guides on parliamentary procedure</span>
                      </li>
                    </ul>
                  </div>

                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md">
                    Schedule Consultation
                  </button>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need specific expertise for your project?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our team can assemble the perfect combination of specialists to address your unique legislative challenges.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                >
                  Contact Our Team
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                  onClick={() => {
                    window.location.href = '/experts';
                  }}
                >
                  View All Experts
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