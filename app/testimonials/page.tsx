"use client";
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  const testimonials = [
    {
      client: "Meru County Assembly",
      role: "County Speaker",
      quote: "The capacity building programs transformed our budget approval process, reducing deliberation time by 40% while improving quality of oversight.",
      rating: 5
    },
    {
      client: "Mandera County Assembly",
      role: "Clerk of the Assembly",
      quote: "Their legislative drafting support helped us streamline 15 key county laws, making them more aligned with national standards.",
      rating: 4
    },
    {
      client: "Kajiado County Assembly",
      role: "Majority Leader",
      quote: "The governance training brought unprecedented cohesion between the executive and legislature in our county.",
      rating: 5
    },
    {
      client: "Kiambu County Assembly",
      role: "Finance Committee Chair",
      quote: "Our public participation scores improved by 65% after implementing their stakeholder engagement framework.",
      rating: 5
    },
    {
      client: "Kirinyaga County Assembly",
      role: "County Executive",
      quote: "The policy formulation workshops enabled us to develop our first 5-year integrated development plan.",
      rating: 4
    },
    {
      client: "Nyeri County Assembly",
      role: "Budget Officer",
      quote: "Their budget analysis tools helped us identify and plug fiscal loopholes worth KES 120 million annually.",
      rating: 5
    },
    {
      client: "Samburu County Government",
      role: "County Secretary",
      quote: "The anti-corruption framework they helped develop reduced procurement complaints by 75% in one year.",
      rating: 4
    },
    {
      client: "Lewa Wildlife Conservancy",
      role: "Executive Director",
      quote: "Their governance training for our board improved decision-making efficiency and stakeholder relations.",
      rating: 5
    },
    {
      client: "Child Welfare Society of Kenya",
      role: "Programs Director",
      quote: "The policy alignment workshop helped us harmonize our child protection framework with international standards.",
      rating: 4
    },
    {
      client: "Lankely Foundation",
      role: "Country Director",
      quote: "Their monitoring and evaluation system design brought rigor to our governance programs across 8 counties.",
      rating: 5
    },
    {
      client: "Kakuma Solidarity Movement",
      role: "Coordinator",
      quote: "The refugee governance training empowered our community leaders with crucial decision-making skills.",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center mt-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

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
              Client Voices
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Trusted by government institutions and NGOs across Kenya
            </motion.p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Client <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear how we've helped transform governance and institutional capacity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-bold text-gray-900">{testimonial.client}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    {renderStars(testimonial.rating)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">11+</div>
                <div className="text-blue-100">Satisfied Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">47+</div>
                <div className="text-blue-100">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-4xl font-bold mb-2">4.8</div>
                <div className="text-blue-100">Average Rating</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Repeat Business</div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}