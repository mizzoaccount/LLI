"use client";
import { motion } from 'framer-motion';
import { FiChevronRight, FiClock, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ClientsPage() {
  const projects = [
    {
      client: "County Government of Nakuru",
      logo: "https://assembly.nakuru.go.ke/web/wp-content/uploads/2022/09/CAN-LOGO.png",
      type: "County Government",
      project: "CIDP Review & Legislative Alignment",
      duration: "6 months",
      year: "2022",
      summary: "Comprehensive review of the County Integrated Development Plan to ensure alignment with national development goals and legislative requirements.",
      outcomes: [
        "Streamlined development priorities",
        "Improved public participation framework",
        "Enhanced budget alignment"
      ],
      testimonial: "The team's expertise in legislative alignment transformed our planning process."
    },
    {
      client: "National Assembly of Kenya",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_muTtZ7iJwNHDGO1eq6V2nx6CzH_dfubzfnm_dkl6j47yg=s900-c-k-c0x00ffffff-no-rj",
      type: "National Legislature",
      project: "Legislative Capacity Building Program",
      duration: "12 months",
      year: "2021-2022",
      summary: "Capacity building for 120 legislative staff on bill drafting, committee operations, and parliamentary procedures.",
      outcomes: [
        "Increased legislative drafting efficiency",
        "Improved committee oversight functions",
        "Enhanced public engagement processes"
      ],
      testimonial: "Our staff's competence improved remarkably after this training."
    },
    {
      client: "County Government of Mombasa",
      logo: "https://pbs.twimg.com/profile_images/1104381031275220992/5_04EI3h_400x400.jpg",
      type: "County Government",
      project: "Public Financial Management Reform",
      duration: "9 months",
      year: "2023",
      summary: "Implementation of modern public financial management systems for improved accountability and revenue collection.",
      outcomes: [
        "30% increase in revenue collection",
        "Automated budget tracking system",
        "Enhanced procurement transparency"
      ],
      testimonial: "Our financial processes have never been more efficient."
    },
    {
      client: "East African Legislative Assembly",
      logo: "https://cdn.worlddata.info/pics/alliances/eac.png",
      type: "Regional Body",
      project: "Regional Legislative Harmonization",
      duration: "18 months",
      year: "2020-2021",
      summary: "Facilitation of regional legislative harmonization across EAC member states.",
      outcomes: [
        "Common framework for trade legislation",
        "Standardized parliamentary procedures",
        "Enhanced cross-border cooperation"
      ],
      testimonial: "Instrumental in achieving legislative coherence across the region."
    },
    {
      client: "County Government of Kisumu",
      logo: "https://ik.imagekit.io/krfh4tnk7/printlion/2024/04/151702a6-government-vector-icons_kisumu-county-logo_kisumu-county-logo-500x500.webp",
      type: "County Government",
      project: "Urban Governance Policy Framework",
      duration: "8 months",
      year: "2021",
      summary: "Development of urban governance policies for smarter city management.",
      outcomes: [
        "Comprehensive urban policy framework",
        "Stakeholder engagement strategy",
        "Implementation roadmap"
      ],
      testimonial: "Transformed our approach to urban governance."
    },
    {
      client: "Senate of Kenya",
      logo: "https://pbs.twimg.com/profile_images/1222413896998379522/o6b37_G9_400x400.jpg",
      type: "National Legislature",
      project: "County Oversight Enhancement Program",
      duration: "10 months",
      year: "2022",
      summary: "Strengthening the Senate's capacity for effective county oversight.",
      outcomes: [
        "Enhanced oversight tools",
        "Improved reporting mechanisms",
        "Strengthened intergovernmental relations"
      ],
      testimonial: "Revolutionized our oversight approach with measurable results."
    }
  ];

  const stats = [
    { value: "24", label: "Counties Served" },
    { value: "15+", label: "National Institutions" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "50+", label: "Projects Completed" }
  ];

  return (
    <>
      <Head>
        <title>Our Clients | Legislative & Governance Consulting</title>
        <meta name="description" content="See the impactful work we've done with county governments, national assemblies, and regional bodies across East Africa." />
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
                Our Impact
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Governments</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                Delivering transformative legislative and governance solutions across East Africa
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center"
                >
                  <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
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
                Selected <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Highlighted engagements demonstrating our legislative and governance expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative h-full bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                          <img src={project.logo} alt={project.client} className="max-w-full max-h-full" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-gray-900">{project.client}</h3>
                          <p className="text-sm text-gray-500 flex items-center">
                            <FiMapPin className="mr-1" />
                            {project.type}
                          </p>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-blue-600 mb-3">{project.project}</h4>
                      <p className="text-gray-600 mb-4">{project.summary}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FiClock className="mr-2" />
                        {project.duration} • {project.year}
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Outcomes</h5>
                        <ul className="space-y-2">
                          {project.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start">
                              <FiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 italic">"{project.testimonial}"</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 md:p-12">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    Featured Case Study
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nakuru County CIDP Transformation</h2>
                  <p className="text-xl text-blue-600 mb-6">Legislative Alignment & Development Planning</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
                    <p className="text-gray-600">
                      Nakuru County needed to align its development plan with national goals while maintaining local priorities and ensuring legislative compliance.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Approach</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Comprehensive legislative gap analysis</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Stakeholder engagement framework development</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Capacity building for county officials</span>
                      </li>
                    </ul>
                  </div>

                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md flex items-center">
                    Read Full Case Study
                    <FiChevronRight className="ml-2" />
                  </button>
                </div>
                <div className="lg:w-1/2 bg-gray-100 min-h-96 flex items-center justify-center p-8">
                  <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Impact</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-3xl font-bold text-blue-600">40%</p>
                        <p className="text-gray-600">Increase in plan implementation rate</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-blue-600">100%</p>
                        <p className="text-gray-600">Legislative compliance achieved</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-blue-600">3x</p>
                        <p className="text-gray-600">More public participation</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-gray-600 italic">"The most comprehensive CIDP review we've ever had, with tangible results."</p>
                      <p className="text-sm font-medium text-gray-900 mt-2">- Nakuru County Executive</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your governance systems?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our expertise can address your specific legislative and development challenges.
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
                    window.location.href = '/clients';
                  }}
                >
                  View All Case Studies
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