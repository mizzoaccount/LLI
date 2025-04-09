"use client";
import { motion } from 'framer-motion';
import { FiPlus, FiEdit2, FiToggleLeft, FiToggleRight } from 'react-icons/fi';

export default function AdminServicesView({ services }: { services: { title: string; active: boolean; clients: number }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Services</h2>
        <p className="text-gray-600">View and manage all legislative consulting services offered to clients.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">All Services</h3>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <FiPlus className="mr-2" /> Add Service
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between p-6 hover:bg-gray-50"
            >
              <div>
                <h4 className="font-medium text-gray-900">{service.title}</h4>
                <p className="text-sm text-gray-500">{service.clients} active clients</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {service.active ? (
                    <>
                      <FiToggleRight className="w-6 h-6 text-green-500" />
                      <span className="ml-2 text-sm text-gray-500">Active</span>
                    </>
                  ) : (
                    <>
                      <FiToggleLeft className="w-6 h-6 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-500">Inactive</span>
                    </>
                  )}
                </div>
                <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                  <FiEdit2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}