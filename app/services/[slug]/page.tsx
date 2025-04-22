/*"use client";
//import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailSection from '@/components/serviceComponents/ServiceDetailSection';
import { motion } from 'framer-motion';

type ServiceDetailPageProps = {
    params: {
      slug: string;
    };
  };
  
  export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
    const services = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
        {
            id: 6,
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
      
  const { slug } = params;
  const service = services.find(s => 
    s.title.toLowerCase().replace(/ /g, '-') === slug
  );

  if (!service) {
    return notFound();
  }

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section *
        <section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
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
                Service Details
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
              >
                {service.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Service Details *
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceDetailSection service={service} />
          </div>
        </section>

        {/* Related Services *
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explore Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Other Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of consulting services to meet your governance needs
              </p>
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
  }*/

"use client";
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailSection from '@/components/serviceComponents/ServiceDetailSection';
import { motion } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  details: string[];
}

// Define proper PageProps interface
interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}
export default function ServiceDetailPage({ params }: { params: any }) {
//export default function ServiceDetailPage({ params }: PageProps) {
  const services: Service[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
  {
      id: 6,
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

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');
  };

  const { slug } = params;
  const service = services.find(s => generateSlug(s.title) === slug);

  if (!service) {
    return notFound();
  }

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
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
                Service Details
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
              >
                {service.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceDetailSection service={service} />
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explore Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Other Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of consulting services to meet your governance needs
              </p>
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
