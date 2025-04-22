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

type Expert = {
  _id?: string; // Added for backend compatibility
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: File | string;
  social: {
    twitter: string;
    linkedin: string;
  };
  specialties: string[];
  email: string;
  phone: string;
};

export default function AdminExpertsView() {
  const [showForm, setShowForm] = useState(false);
  const [experts, setExperts] = useState<Expert[]>([
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

  const [newExpert, setNewExpert] = useState<Expert>({
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const removeSpecialty = (index: number) => {
    if (newExpert.specialties.length <= 1) return;
    const updated = newExpert.specialties.filter((_, i) => i !== index);
    setNewExpert((prev) => ({ ...prev, specialties: updated }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type and size
      if (!file.type.match("image.*")) {
        setError("Please upload an image file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError("Image size should be less than 5MB");
        return;
      }
      setError("");
      setNewExpert((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
  
    try {
      const formData = new FormData();
      
      // Append all fields to FormData
      formData.append("name", newExpert.name);
      formData.append("role", newExpert.role);
      formData.append("experience", newExpert.experience);
      formData.append("bio", newExpert.bio);
      formData.append("email", newExpert.email);
      formData.append("phone", newExpert.phone);
      formData.append("social[twitter]", newExpert.social.twitter);
      formData.append("social[linkedin]", newExpert.social.linkedin);
  
      // Append specialties as JSON string (more reliable than array format)
      formData.append("specialties", JSON.stringify(newExpert.specialties));
  
      // Append image file if it exists
      if (newExpert.image && typeof newExpert.image !== "string") {
        formData.append("image", newExpert.image);
      }
  
      // Debug: Log FormData contents
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
  
      const response = await fetch("https://lli-backend.onrender.com/api/v1/experts", {
        method: "POST",
        body: formData,
        credentials: "include",
        // DON'T set Content-Type header manually - let the browser set it with boundary
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to create expert");
      }
  
      const data = await response.json();
  
      // Update local state with new expert
      setExperts((prev) => [...prev, data.data]);
  
      // Reset form
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
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
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
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}

            <input
              type="text"
              name="name"
              value={newExpert.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              required
            />
            
            <select
              name="role"
              value={newExpert.role}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Role</option>
              <option value="Parliamentary Procedures Expert">Parliamentary Procedures Expert</option>
              <option value="Public Finance Specialist">Public Finance Specialist</option>
              <option value="Constitutional Law Expert">Constitutional Law Expert</option>
              <option value="Governance Strategist">Governance Strategist</option>
              <option value="Legislative Tech Innovator">Legislative Tech Innovator</option>
            </select>
            
            <input
              type="text"
              name="experience"
              value={newExpert.experience}
              onChange={handleInputChange}
              placeholder="Experience"
              className="w-full p-2 border rounded"
              required
            />
            
            <textarea
              name="bio"
              value={newExpert.bio}
              onChange={handleInputChange}
              placeholder="Bio"
              className="w-full p-2 border rounded"
              rows={3}
              required
            />
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-2 border rounded"
                required
              />
              {newExpert.image && typeof newExpert.image !== 'string' && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(newExpert.image)}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {newExpert.image.name} ({(newExpert.image.size / 1024).toFixed(2)} KB)
                  </p>
                </div>
              )}
            </div>

            <input
              type="email"
              name="email"
              value={newExpert.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-2 border rounded"
              required
            />
            
            <input
              type="tel"
              name="phone"
              value={newExpert.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="w-full p-2 border rounded"
              required
            />
            
            <input
              type="url"
              name="twitter"
              value={newExpert.social.twitter}
              onChange={handleInputChange}
              placeholder="Twitter URL"
              className="w-full p-2 border rounded"
            />
            
            <input
              type="url"
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
                <div key={index} className="flex mb-2">
                  <input
                    type="text"
                    value={specialty}
                    onChange={(e) => handleSpecialtiesChange(index, e.target.value)}
                    placeholder={`Specialty ${index + 1}`}
                    className="flex-1 p-2 border rounded"
                    required
                  />
                  {newExpert.specialties.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSpecialty(index)}
                      className="ml-2 p-2 text-red-600 hover:bg-red-50 rounded"
                    >
                      <FiTrash2 />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addSpecialty}
                className="text-blue-600 text-sm hover:text-blue-800"
              >
                + Add Specialty
              </button>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Expert"}
              </button>
            </div>
          </form>
        )}

        <div className="divide-y divide-gray-100">
          {experts.map((expert, index) => (
            <motion.div
              key={expert._id || index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 hover:bg-gray-50"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  {typeof expert.image === 'string' ? (
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <FiUser className="w-6 h-6" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900">{expert.name}</h4>
                  <p className="text-sm text-gray-500 mb-1">{expert.role}</p>
                  <p className="text-sm text-gray-500 mb-1">{expert.experience} experience</p>
                  <p className="text-sm text-gray-500 mb-2">{expert.bio}</p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                    <span className="flex items-center">
                      <FiMail className="mr-1.5" /> {expert.email}
                    </span>
                    <span className="flex items-center">
                      <FiPhone className="mr-1.5" /> {expert.phone}
                    </span>
                  </div>
                  {expert.specialties.length > 0 && (
                    <div className="mt-2">
                      <span className="text-xs font-medium text-gray-500">Specialties:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {expert.specialties.map((specialty, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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