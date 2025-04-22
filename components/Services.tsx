"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Public Finance Management and Budgeting",
      description:
        "Enhancing the budget-making and implementation process for National and County Governments through training, analysis, and policy advisory.",
      icon: "💰",
      features: [
        "Budget preparation and implementation training",
        "Pre and post-budget analysis",
        "Financial oversight capacity building",
        "Executive budget review and simplification"
      ],
      details: [
        "Support legislators in understanding complex budget processes",
        "Assist in developing clearer, more transparent executive budgets",
        "Conduct timely analysis before and after budget announcements",
        "Promote sound financial management at all government levels",
        "Offer recommendations to strengthen fiscal planning and execution"
      ]
    },
    {
      title: "Training and Capacity Building",
      description:
        "Empowering legislators and County Assembly staff through structured induction, workshops, and professional development programs.",
      icon: "📚",
      features: [
        "Orientation for new members",
        "Workshops for returning members",
        "Induction and seminars for staff",
        "Legislative and policy skills training"
      ],
      details: [
        "Train on legislative procedures, budgeting, and PFM",
        "Develop skills in time management and public engagement",
        "Collaborate with parliamentary staff for ongoing learning",
        "Promote effective committee operations and oversight",
        "Deliver customized training based on institutional needs"
      ]
    },
    {
      title: "Legislative Procedures Advocacy and Drafting",
      description:
        "Building capacity for quality law-making through expert training, legal drafting support, and policy advocacy frameworks.",
      icon: "⚖️",
      features: [
        "Support for legislative drafting",
        "Policy research and analysis",
        "Private and government bill development",
        "Legal compliance and conflict checks"
      ],
      details: [
        "Train legislators on drafting and amending legislation",
        "Assist in developing proposals aligned with constitutional law",
        "Identify ambiguities, conflicts, and interpretation risks",
        "Ensure laws meet democratic governance standards",
        "Respond to nationwide legislative development demands"
      ]
    },
    {
      title: "Governance and Accountability",
      description:
        "Promoting transparent, participatory, and accountable governance by bridging gaps between policy, legislation, and citizen needs.",
      icon: "🧭",
      features: [
        "Stakeholder engagement strategies",
        "Policy and legislative reviews",
        "Nonpartisan analysis and advisory",
        "Issue-based advocacy campaigns"
      ],
      details: [
        "Create awareness on constituency-specific issues",
        "Support evidence-driven public policy reforms",
        "Lobby for policy changes through legislative proposals",
        "Build base support for key public interest legislation",
        "Evaluate existing laws and propose necessary reforms"
      ]
    },
  ];
  const container = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to strengthen legislative and governance frameworks at all levels
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={hoverEffect}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full bg-white p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl opacity-10">{service.icon}</div>
                <div className="flex flex-col h-full">
                  <div className="text-5xl mb-6 text-blue-600">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className="mt-auto w-full py-3 px-4 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300 flex items-center justify-center">
            Learn more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
                  
                  {/*<button className="mt-auto w-full py-3 px-4 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300 flex items-center justify-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>*/}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your legislative processes?</h3>
            <p className="text-blue-100 mb-8 text-lg">Our experts are ready to provide customized solutions for your institution.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              {/*<button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                View All Services
              </button>*/}
              <Link href="/services">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  View All Services
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/*"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Define TypeScript interfaces for the service data
interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  details?: string[];
  active?: boolean;
  clients?: number;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://lli-backend.onrender.com/api/v1/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data: Service[] = await response.json();
        // Filter to only show active services and limit to 4
        const activeServices = data.filter(service => service.active).slice(0, 4);
        setServices(activeServices);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const container = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  if (loading) {
    return (
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p>Loading services...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements *
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to strengthen legislative and governance frameworks at all levels
          </p>
        </motion.div>

        {services.length > 0 ? (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service._id}
                  variants={item}
                  whileHover={hoverEffect}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative h-full bg-white p-8 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute top-4 right-4 text-5xl opacity-10">{service.icon}</div>
                    <div className="flex flex-col h-full">
                      <div className="text-5xl mb-6 text-blue-600">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="mt-auto w-full py-3 px-4 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300 flex items-center justify-center">
                        Learn more
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section *
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 shadow-xl"
            >
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your legislative processes?</h3>
                <p className="text-blue-100 mb-8 text-lg">Our experts are ready to provide customized solutions for your institution.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                    Schedule Consultation
                  </button>
                  <a 
                    href="/services" 
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    View All Services
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No services available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}*/