"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiBook, FiCalendar, FiChevronRight, FiPlus } from "react-icons/fi";
import { Dialog } from "@headlessui/react";

type Program = {
  title: string;
  description: string;
  deadline: string;
  milestones: string[];
  progress: number;
};

export default function ClientProgramsView({
  programs: initialPrograms,
}: {
  programs: Program[];
}) {
  const [programs, setPrograms] = useState(initialPrograms);
  const [isOpen, setIsOpen] = useState(false);

  const [newProgram, setNewProgram] = useState({
    title: "",
    description: "",
    deadline: "",
    milestones: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;

    if (name === "milestone" && index !== undefined) {
      const updatedMilestones = [...newProgram.milestones];
      updatedMilestones[index] = value;
      setNewProgram((prev) => ({ ...prev, milestones: updatedMilestones }));
    } else {
      setNewProgram((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addMilestoneField = () => {
    setNewProgram((prev) => ({
      ...prev,
      milestones: [...prev.milestones, ""],
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      ...newProgram,
      milestones: newProgram.milestones.filter((m) => m.trim() !== ""),
    };
  
    try {
      const res = await fetch('https://lli-backend.onrender.com/api/v1/programs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) throw new Error('Failed to create program');
  
      const data = await res.json();
      setPrograms((prev) => [...prev, data]);
  
      // Reset form and close modal
      setNewProgram({
        title: "",
        description: "",
        deadline: "",
        milestones: [""],
      });
      setIsOpen(false);
    } catch (err) {
      console.error('Submit error:', err);
    }
  };
  

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">My Programs</h2>
        <p className="text-gray-600">View and manage all your active legislative programs.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">Active Programs</h3>
          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setIsOpen(true)}
          >
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
                    <p className="text-sm text-gray-500 mt-1">{program.description}</p>
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

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
  <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md z-50">
      <Dialog.Title className="text-lg font-bold text-gray-900 mb-4">
        New Program
      </Dialog.Title>
      <div className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={newProgram.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 rounded"
          value={newProgram.description}
          onChange={handleChange}
        />
        <div>
        <label htmlFor="deadline" className="block font-medium text-sm text-gray-700 mb-1">
          Deadline
        </label>
        <input
          type="date"
          name="deadline"
          id="deadline"
          className="w-full border p-2 rounded"
          value={newProgram.deadline}
          onChange={handleChange}
        />
      </div>

        <div>
          <label className="block font-medium text-sm text-gray-700 mb-1">Milestones</label>
          {newProgram.milestones.map((milestone, idx) => (
            <input
              key={idx}
              type="text"
              name="milestone"
              placeholder={`Milestone ${idx + 1}`}
              value={milestone}
              onChange={(e) => handleChange(e, idx)}
              className="w-full border p-2 rounded mb-2"
            />
          ))}
          <button
            type="button"
            className="text-blue-600 text-sm hover:underline"
            onClick={addMilestoneField}
          >
            + Add milestone
          </button>
        </div>
        <div className="flex justify-end space-x-3 pt-4">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Save Program
          </button>
        </div>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>


    </motion.div>
  );
}
