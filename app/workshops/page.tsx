"use client";
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiUser, FiMail, FiPhone, FiArrowRight, FiClock, FiCheckCircle } from 'react-icons/fi';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WorkshopsPage() {
  const upcomingEvents = [
    {
      title: "Legislative Drafting Masterclass",
      date: "June 20-22, 2023",
      location: "Nairobi, Kenya",
      description: "3-day intensive workshop on modern legislative practices with international experts",
      image: "https://i.pinimg.com/736x/34/a7/7c/34a77ca015c897c676699b59bef36e2e.jpg",
      seats: "12/25 seats remaining",
      type: "Hands-on Workshop",
      duration: "3 Days",
      price: "KSh 25,000"
    },
    {
      title: "CIDP Strategy Summit",
      date: "July 10-12, 2023",
      location: "Virtual Event",
      description: "Annual county development planning conference featuring keynote speakers from 15 counties",
      image: "https://i.pinimg.com/736x/85/2b/2d/852b2db7e57d493bd034277dc6674ef0.jpg",
      seats: "Open registration",
      type: "Conference",
      duration: "3 Days",
      price: "Free"
    },
    {
      title: "Public Finance Management Intensive",
      date: "August 7-9, 2023",
      location: "Mombasa, Kenya",
      description: "Advanced training on budget preparation, execution and oversight for county officials",
      image: "https://i.pinimg.com/736x/ac/95/43/ac9543bfca7bc740bfd3b478e9386dad.jpg",
      seats: "8/15 seats remaining",
      type: "Training Program",
      duration: "3 Days",
      price: "KSh 30,000"
    }
  ];

  const pastEvents = [
    {
      title: "Ethics in Legislation Workshop",
      date: "May 15-16, 2023",
      location: "Nairobi, Kenya",
      description: "Training on ethical standards and conduct for legislative bodies",
      image: "https://i.pinimg.com/736x/10/24/e6/1024e66ae9c373e5c961616a770ad212.jpg",
      attendees: "28 participants",
      type: "Workshop",
      resources: ["Presentation Slides", "Case Studies", "Reference Materials"]
    },
    {
      title: "Digital Parliament Symposium",
      date: "April 5, 2023",
      location: "Virtual Event",
      description: "Exploring technology solutions for modern legislative processes",
      image: "https://i.pinimg.com/736x/18/56/6a/18566ae109b69b079d38e7884b2976df.jpg",
      attendees: "142 participants",
      type: "Symposium",
      resources: ["Recording", "Speaker Slides", "Resource List"]
    }
  ];

  const testimonials = [
    {
      quote: "The legislative drafting masterclass transformed our approach to bill formulation. Highly recommend for any parliamentary staff.",
      author: "Jane Mwangi",
      role: "Senior Legislative Draftsman, National Assembly"
    },
    {
      quote: "Practical, engaging, and immediately applicable. One of the best governance trainings I've attended in my career.",
      author: "David Omondi",
      role: "County Executive Committee Member"
    }
  ];

  return (
    <>
      <Head>
        <title>Workshops & Events | Legislative Capacity Building</title>
        <meta name="description" content="Join our upcoming legislative workshops and access materials from past events to strengthen your governance expertise." />
      </Head>

      <Header />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
                Capacity Building
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Legislative <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Workshops</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                Interactive learning experiences with leading governance experts and policymakers
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Upcoming <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our transformative workshops and conferences on legislative excellence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {upcomingEvents.map((event, index) => (
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
                  <div className="relative h-full flex flex-col">
                    <div className="w-full h-48 bg-gray-200 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.type === "Hands-on Workshop" ? "bg-blue-100 text-blue-600" :
                          event.type === "Conference" ? "bg-purple-100 text-purple-600" :
                          "bg-green-100 text-green-600"
                        }`}>
                          {event.type}
                        </span>
                        <span className="text-sm text-gray-500">{event.duration}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <FiCalendar className="w-5 h-5 text-blue-500 mr-3" />
                          <span className="text-gray-700">{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <FiMapPin className="w-5 h-5 text-blue-500 mr-3" />
                          <span className="text-gray-700">{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-5 h-5 mr-3 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{event.seats}</span>
                        </div>
                        {event.price !== "Free" && (
                          <div className="flex items-center">
                            <div className="w-5 h-5 mr-3 flex items-center justify-center text-blue-500">
                              $
                            </div>
                            <span className="text-gray-700">{event.price}</span>
                          </div>
                        )}
                      </div>

                      <button className="mt-auto w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                        Register Now
                        <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Past Events */}
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
                Past <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access materials and resources from our previous capacity building initiatives
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {pastEvents.map((event, index) => (
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
                  <div className="relative h-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 h-48 md:h-auto bg-gray-200 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="w-full md:w-2/3 p-6 flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.type === "Workshop" ? "bg-blue-100 text-blue-600" :
                          "bg-purple-100 text-purple-600"
                        }`}>
                          {event.type}
                        </span>
                        <span className="text-sm text-gray-500">{event.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <FiMapPin className="w-5 h-5 text-blue-500 mr-3" />
                          <span className="text-gray-700">{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-5 h-5 mr-3 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{event.attendees}</span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Available Resources</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.resources.map((resource, i) => (
                            <span key={i} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                              {resource}
                            </span>
                          ))}
                        </div>
                        <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-medium rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                          Access Materials
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Participants Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Feedback from government officials and legislative staff who attended our programs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 text-gray-300">"</div>
                    <p className="text-lg text-gray-700 italic">{testimonial.quote}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to enhance your legislative skills?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join our upcoming workshops or request customized training for your institution.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                >
                  View All Events
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                >
                  Request Custom Training
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