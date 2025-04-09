"use client";
import { motion } from 'framer-motion';
import { FiPlus, FiUser, FiMail, FiPhone, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function AdminExpertsView() {
  const experts = [
    { name: "Dr. Rori Mwangi", email: "rori@legisconsult.co.ke", phone: "+254712345678", specialization: "Legislative Drafting" },
    { name: "Prof. Jane Kamau", email: "jane@legisconsult.co.ke", phone: "+254787654321", specialization: "Public Finance" },
    { name: "Adv. James Omondi", email: "james@legisconsult.co.ke", phone: "+254700112233", specialization: "Constitutional Law" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Experts</h2>
        <p className="text-gray-600">View and manage all legislative experts available for consultations.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">Expert Panel</h3>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <FiPlus className="mr-2" /> Add Expert
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 hover:bg-gray-50"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <FiUser className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900">{expert.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{expert.specialization}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <FiMail className="mr-1.5" /> {expert.email}
                    </span>
                    <span className="flex items-center">
                      <FiPhone className="mr-1.5" /> {expert.phone}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                    <FiEdit2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full">
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}