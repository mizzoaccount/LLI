"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPlus,
  FiUser,
  FiMail,
  FiPhone,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

export default function AdminExpertsView() {
  const [showForm, setShowForm] = useState(false);
  const [experts, setExperts] = useState([
    {
      name: "Dr. Rori Mwangi",
      role: "Legislative Drafting",
      experience: "10+ years",
      bio: "Expert legislative drafter with a strong portfolio.",
      image: "/dummy-expert.jpg",
      social: { twitter: "#", linkedin: "#" },
      specialties: ["Drafting Bills", "Parliamentary Law"],
      email: "rori@legisconsult.co.ke",
      phone: "+254712345678",
    },
  ]);

  const [newExpert, setNewExpert] = useState({
    name: "",
    role: "",
    experience: "",
    bio: "",
    image: "",
    social: { twitter: "", linkedin: "" },
    specialties: [""],
    email: "",
    phone: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "twitter" || name === "linkedin") {
      setNewExpert((prev) => ({
        ...prev,
        social: { ...prev.social, [name]: value },
      }));
    } else {
      setNewExpert((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSpecialtiesChange = (index: number, value: string) => {
    const updated = [...newExpert.specialties];
    updated[index] = value;
    setNewExpert((prev) => ({ ...prev, specialties: updated }));
  };

  const addSpecialty = () => {
    setNewExpert((prev) => ({
      ...prev,
      specialties: [...prev.specialties, ""],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setExperts((prev) => [...prev, newExpert]);
    setNewExpert({
      name: "",
      role: "",
      experience: "",
      bio: "",
      image: "",
      social: { twitter: "", linkedin: "" },
      specialties: [""],
      email: "",
      phone: "",
    });
    setShowForm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Experts</h2>
        <p className="text-gray-600">
          View and manage all legislative experts available for consultations.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">Expert Panel</h3>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiPlus className="mr-2" /> Add Expert
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <input
              type="text"
              name="name"
              value={newExpert.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="role"
              value={newExpert.role}
              onChange={handleInputChange}
              placeholder="Role"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="experience"
              value={newExpert.experience}
              onChange={handleInputChange}
              placeholder="Experience"
              className="w-full p-2 border rounded"
            />
            <textarea
              name="bio"
              value={newExpert.bio}
              onChange={handleInputChange}
              placeholder="Bio"
              className="w-full p-2 border rounded"
              rows={3}
            />
            <input
              type="text"
              name="image"
              value={newExpert.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              value={newExpert.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="phone"
              value={newExpert.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="twitter"
              value={newExpert.social.twitter}
              onChange={handleInputChange}
              placeholder="Twitter URL"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="linkedin"
              value={newExpert.social.linkedin}
              onChange={handleInputChange}
              placeholder="LinkedIn URL"
              className="w-full p-2 border rounded"
            />

            <div>
              <label className="font-medium text-sm mb-1 block">
                Specialties
              </label>
              {newExpert.specialties.map((specialty, index) => (
                <input
                  key={index}
                  type="text"
                  value={specialty}
                  onChange={(e) =>
                    handleSpecialtiesChange(index, e.target.value)
                  }
                  placeholder={`Specialty ${index + 1}`}
                  className="w-full p-2 border rounded mb-2"
                />
              ))}
              <button
                type="button"
                onClick={addSpecialty}
                className="text-blue-600 text-sm"
              >
                + Add Specialty
              </button>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save Expert
            </button>
          </form>
        )}

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
                  <p className="text-sm text-gray-500 mb-1">{expert.role}</p>
                  <p className="text-sm text-gray-500 mb-2">{expert.bio}</p>
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


{/*"use client";
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
}*/}