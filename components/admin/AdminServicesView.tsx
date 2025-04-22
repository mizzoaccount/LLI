"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiEdit2, FiToggleLeft, FiToggleRight, FiX } from "react-icons/fi";
import dynamic from "next/dynamic";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function AdminServicesView({ services }: { services: { title: string; active: boolean; clients: number }[] }) {
  const [showForm, setShowForm] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    icon: "",
    features: [""],
    details: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
    type?: "features" | "details"
  ) => {
    const { name, value } = e.target;
    if (type && index !== undefined) {
      setNewService((prev) => ({
        ...prev,
        [type]: prev[type].map((item, i) => (i === index ? value : item)),
      }));
    } else {
      setNewService((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddField = (type: "features" | "details") => {
    setNewService((prev) => ({ ...prev, [type]: [...prev[type], ""] }));
  };

  const handleRemoveField = (type: "features" | "details", index: number) => {
    setNewService((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  const handleEmojiClick = (emojiData: any) => {
    setNewService((prev) => ({ ...prev, icon: emojiData.emoji }));
    setShowEmojiPicker(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
    //const response = await fetch('https://lli-backend.onrender.com/api/v1/services', {
        const response = await fetch('https://lli-backend.onrender.com/api/v1/services', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newService),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create service');
      }
  
      console.log("✅ Service created successfully:", data);
      setShowForm(false);
      // Optional: Reset the form
      setNewService({
        title: "",
        description: "",
        icon: "",
        features: [""],
        details: [""],
      });
    } catch (error: any) {
      console.error("❌ Error creating service:", error.message);
      alert("Something went wrong while creating the service.");
    }
  };
  

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Services</h2>
        <p className="text-gray-600">View and manage all legislative consulting services offered to clients.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-medium text-gray-900">All Services</h3>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiPlus className="mr-2" /> Add Service
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 border-b border-gray-100">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newService.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newService.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            {/* Emoji Picker */}
            <div className="relative">
              <label className="block font-medium mb-1">Icon:</label>
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-2xl border rounded px-3 py-2 bg-gray-50 hover:bg-gray-100"
              >
                {newService.icon || "Pick Service Icon"}
              </button>
              {showEmojiPicker && (
                <div className="absolute z-10 mt-2">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
            </div>

            {/* Features */}
            <div>
              <label className="block font-medium">Features:</label>
              {newService.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleChange(e, idx, "features")}
                    className="flex-1 p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveField("features", idx)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiX />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddField("features")} className="text-sm text-blue-600 mt-1">
                + Add Feature
              </button>
            </div>

            {/* Details *
            <div>
              <label className="block font-medium">Details:</label>
              {newService.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={detail}
                    onChange={(e) => handleChange(e, idx, "details")}
                    className="flex-1 p-2 border rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveField("details", idx)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiX />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddField("details")} className="text-sm text-blue-600 mt-1">
                + Add Detail
              </button>
            </div>*/}

            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Save Service
            </button>
          </form>
        )}

        {/* Services List */}
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


{/*"use client";
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
}*/}

