import { motion } from "framer-motion";

interface ScheduleConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleConsultationModal({ isOpen, onClose }: ScheduleConsultationModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-white p-6 rounded-lg w-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside it
      >
        <h2 className="text-2xl font-bold mb-4">Schedule Consultation</h2>
        <p className="text-lg mb-6">Please fill out the form to schedule your consultation.</p>

        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Date and Time Picker */}
          <div className="mb-4">
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
              Preferred Time
            </label>
            <input
              type="datetime-local"
              id="preferredTime"
              className="mt-1 block w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          {/* Cancel and Submit Buttons */}
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
