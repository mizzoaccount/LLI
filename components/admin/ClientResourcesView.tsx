"use client";
import { motion } from 'framer-motion';
import { FiFileText, FiDownload, FiSearch, FiFilter } from 'react-icons/fi';

export default function ClientResourcesView({ resources }: { resources: { title: string; type: string; date: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Resources Library</h2>
        <p className="text-gray-600">Access all legislative resources and materials shared with you.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-900 mb-4 md:mb-0">Available Resources</h3>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
              />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              <FiFilter className="mr-2" /> Filter
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 hover:bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-50 rounded flex items-center justify-center text-blue-600 mr-4">
                    <FiFileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{resource.title}</h4>
                    <div className="mt-1 text-sm text-gray-500">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                        {resource.type}
                      </span>
                      Uploaded: {resource.date}
                    </div>
                  </div>
                </div>
                <button className="flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <FiDownload className="mr-1.5" /> Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> resources
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}