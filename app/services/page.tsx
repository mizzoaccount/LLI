"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
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
    {
      title: "Policy Formulation",
      description:
        "Equipping legislators and institutions with analytical tools and frameworks to create impactful, sustainable public policies.",
      icon: "📝",
      features: [
        "Policy research and advisory",
        "Constitutional and legal compliance",
        "High-level policy impact analysis",
        "Strategic institutional alignment"
      ],
      details: [
        "Analyze political, financial, and legal challenges in policy",
        "Support legislators in formulating and presenting policies",
        "Develop frameworks for ethical and inclusive policymaking",
        "Assist in implementation and monitoring of public policy",
        "Train leaders in leadership-focused policy design"
      ]
    },
    /*{
      title: "CIDP and Strategic Planning",
      description:
        "Providing expert assistance to County Governments in crafting Integrated Development and Strategic Plans aligned to vision and budget.",
      icon: "🗺️",
      features: [
        "CIDP and ADP development",
        "Strategic planning facilitation",
        "Public engagement frameworks",
        "M&E and performance tracking"
      ],
      details: [
        "Conduct countywide needs assessments",
        "Develop sectoral plans aligned with priorities",
        "Facilitate inclusive public participation sessions",
        "Prepare CIDPs and Strategic Plans compliant with national standards",
        "Build M&E tools for tracking implementation progress"
      ]
    },*/
    {
      title: "General Training Development",
      description:
        "Custom training solutions for government and private sector on emerging workplace and societal needs.",
      icon: "🎯",
      features: [
        "Team building programs",
        "Mental health awareness sessions",
        "Personal finance management",
        "Organizational development training"
      ],
      details: [
        "Deliver topical training based on organizational goals",
        "Promote well-being and cohesion within teams",
        "Enhance staff effectiveness through personal growth workshops",
        "Support cross-sectoral knowledge exchange",
        "Design tailored learning experiences for diverse clients"
      ]
    }
  ];
  

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true // Changed to trigger once to prevent repeated animations
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Smoother container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Reduced stagger for quicker appearance
        when: "beforeChildren"
      }
    }
  };

  // More controlled item animation
  const item = {
    hidden: { 
      y: 20, // Reduced initial y movement
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5, // Slightly faster
        ease: "easeOut" // Smoother easing
      }
    }
  };

  // More subtle hover effect
  const hoverEffect = {
    scale: 1.02, // Reduced scale
    y: -5, // Reduced y movement
    transition: { 
      duration: 0.2, // Faster
      ease: "easeOut" 
    }
  };

  // More controlled section variants
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 // Reduced initial y movement
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Our Services | Legislative & Governance Consulting</title>
        <meta name="description" content="Comprehensive legislative training, policy formulation, CIDP development, and financial management services for governments and institutions." />
      </Head>

      <Header /> {/* Added Header component */}

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section - More controlled animation */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="text-center py-12"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              >
                Expertise That Delivers Results
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Consulting Services</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
              >
                Specialized solutions to strengthen governance frameworks, enhance legislative effectiveness, and drive sustainable development
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
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
          </div>
        </section>

        {/* Detailed Services Sections - More controlled animations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Service Details</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each service is tailored to meet your specific institutional needs and development goals
              </p>
            </motion.div>

            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ delay: index * 0.15 }} // Reduced delay between items
                className={`mb-20 p-8 rounded-2xl ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white border border-gray-100 shadow-sm'}`}
              >
                <motion.div 
                  className="flex flex-col md:flex-row gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-6 text-blue-600">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <button className="w-full md:w-auto py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Request Service Info
                    </button>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Service Components</h4>
                        <ul className="space-y-3">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Delivery Approach</h4>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3 mt-0.5">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <span className="text-gray-700">Customized to your institutional context</span>
                            </li>
                            <li className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3 mt-0.5">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              </div>
                              <span className="text-gray-700">Combination of workshops, consultations, and technical support</span>
                            </li>
                            <li className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3 mt-0.5">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <span className="text-gray-700">Evidence-based methodologies</span>
                            </li>
                            <li className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3 mt-0.5">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <span className="text-gray-700">Flexible timelines to suit your schedule</span>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Training Services Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="text-center mb-16"
    >
      <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        Capacity Building
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Training Services</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Specialized training programs designed to enhance legislative effectiveness and institutional capacity
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Legislative Training */}
      <motion.div
        variants={item}
        className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300"
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Legislative Assemblies Training</h3>
        </div>
        <ul className="space-y-3">
          {[
            "The Law Making Process",
            "Mandates of Legislative Assemblies",
            "Mandates of Legislative Committees",
            "Parliamentary Ethics and Etiquette",
            "The Budget Making Process",
            "Programme Based Budgeting",
            "Training of Legislative Assembly Staff",
            "Mandates of Sectoral Committees",
            "Mandates of Select Committees",
            "Effective Management of Assemblies",
            "County Assembly Service Board (CASB)",
            "Parliamentary Records Management",
            "Committee Report Writing & Investigations"
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Corporate Training */}
      <motion.div
        variants={item}
        className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-purple-200 transition-all duration-300"
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Corporate Training</h3>
        </div>
        <ul className="space-y-3">
          {[
            "Personal Effectiveness",
            "Transformational Leadership",
            "Executive Coaching",
            "Time Management",
            "Customer Service Excellence",
            "Team Building Strategies",
            "Stress Management Techniques",
            "Effective Committee Management",
            "Professional Report Writing",
            "Lead Without a Title",
            "Strategic Planning Workshops",
            "Human Resource Management",
            "Customized Training Programs"
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Civil Society & Other Services */}
      <motion.div
        variants={item}
        className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-indigo-200 transition-all duration-300"
      >
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Additional Services</h3>
        </div>
        
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-3">Civil Society Training</h4>
          <ul className="space-y-3">
            {[
              "Campaign Manifesto Preparation",
              "Conducting Opinion Polls",
              "Voter Education Programs",
              "Political Campaigns Management",
              "Campaign Financing & Advisory",
              "Civil Society Leadership"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-3">Research Services</h4>
          <ul className="space-y-3">
            {[
              "All Kinds of Research & Feasibility Studies",
              "Environmental Impact Assessments (EIA)",
              "Environmental Audits (EA)",
              "Poll Research & Data Analysis"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Registration Services</h4>
          <ul className="space-y-3">
            {[
              "Company Registration",
              "Partnerships Registration",
              "NGO Registration",
              "CBO Registration",
              "Associations Registration",
              "Political Parties Registration"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-16 text-center"
    >
      <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
        Request Custom Training Program
        <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </motion.div>
  </div>
</section>

        {/* Methodology Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={sectionVariants}
              className="text-center mb-16"
            >
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Approach
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Proven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Methodology</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our structured approach ensures measurable results and sustainable impact
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  title: "Assessment",
                  description: "Comprehensive evaluation of your current systems, processes, and capacity needs through stakeholder interviews, document reviews, and benchmarking."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "Customization",
                  description: "Development of tailored solutions that align with your institutional context, legal framework, and development priorities."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Implementation",
                  description: "Hands-on support through workshops, technical assistance, and capacity building to ensure effective adoption and application."
                }
              ].map((itemData, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                    {itemData.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{itemData.title}</h3>
                  <p className="text-gray-600">{itemData.description}</p>
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
                Our team of experts is ready to discuss your specific needs and develop a customized solution for your institution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                >
                  Download Service Catalog
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