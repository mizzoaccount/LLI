"use client";
import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiChevronRight, FiPlus } from 'react-icons/fi';

export default function ClientProgramsView({ programs }: { programs: { title: string; progress: number; deadline: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">My Programs</h2>
        <p className="text-gray-600">View and manage all your active legislative programs.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">Active Programs</h3>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <FiPlus className="mr-2" /> New Program
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 hover:bg-gray-50"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <FiBook className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{program.title}</h4>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <FiCalendar className="mr-1.5 flex-shrink-0" />
                      Deadline: {program.deadline}
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-500">
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-500">Progress</span>
                  <span className="text-sm font-bold text-gray-900">{program.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${program.progress}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}