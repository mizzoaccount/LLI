/*"use client";
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
}*/

"use client";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiDownload,
  FiSearch,
  FiFilter,
  FiPlus,
  FiEdit,
  FiTrash,
} from "react-icons/fi";
import axios from 'axios';
import { FaRegFileExcel, FaRegFilePdf, FaRegFilePowerpoint, FaRegFileWord } from "react-icons/fa";

interface Resource {
  title: string;
  category: string;
  description: string;
  link: string;
  icon: JSX.Element;
  date: string;
  pages: string;
}

export default function ClientResourcesView({
  resources: initialResources,
}: {
  resources: Resource[];
}) {
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [showForm, setShowForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [newResource, setNewResource] = useState<Omit<Resource, "icon" | "link">>({
    title: "",
    category: "",
    description: "",
    date: "",
    pages: "",
  });

  const getIconByFileType = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "pdf":
        return <FaRegFilePdf className="w-6 h-6 text-red-500" />;
      case "doc":
      case "docx":
        return <FaRegFileWord className="w-6 h-6 text-blue-500" />;
      case "xls":
      case "xlsx":
        return <FaRegFileExcel className="w-6 h-6 text-green-500" />;
      case "ppt":
      case "pptx":
        return <FaRegFilePowerpoint className="w-6 h-6 text-orange-500" />;
      default:
        return <FiFileText className="w-6 h-6 text-gray-500" />;
    }
  };

 

  const handleAddResource = async () => {
    if (!selectedFile) return alert("Please select a file to upload");
  
    // Create a FormData object for file upload and resource data
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('title', newResource.title);
    formData.append('category', newResource.category);
    formData.append('description', newResource.description);
    formData.append('date', newResource.date);
    formData.append('pages', newResource.pages);
  
    try {
      // Upload file and resource to the server
      const response = await axios.post('https://lli-backend.onrender.com/api/v1/resources', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log("Resource creation response:", response);
  
      // Assuming the response contains the new resource data
      setResources([response.data.data, ...resources]);
  
      // Reset form state
      setShowForm(false);
      setNewResource({
        title: "",
        category: "",
        description: "",
        date: "",
        pages: "",
      });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading resource:", error);
      alert("Error uploading resource. Please try again.");
    }
  };
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Resources Library</h2>
          <p className="text-gray-600">Access all legislative resources and materials shared with you.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <FiPlus />
          <span>Add Resource</span>
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">New Resource</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              className="border p-2 rounded-md"
              value={newResource.title}
              onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className="border p-2 rounded-md"
              value={newResource.category}
              onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="border p-2 rounded-md col-span-1 md:col-span-2"
              value={newResource.description}
              onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
            />
            <input
              type="date"
              placeholder="Upload Date"
              className="border p-2 rounded-md"
              value={newResource.date}
              onChange={(e) => setNewResource({ ...newResource, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Pages"
              className="border p-2 rounded-md"
              value={newResource.pages}
              onChange={(e) => setNewResource({ ...newResource, pages: e.target.value })}
            />
            <input
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
              className="border p-2 rounded-md col-span-1 md:col-span-2"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setSelectedFile(file);
              }}
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleAddResource}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save Resource
            </button>
          </div>
        </div>
      )}

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
              <div className="flex items-start justify-between">
                <div className="flex">
                  <div className="h-12 w-12 bg-blue-50 rounded flex items-center justify-center mr-4">
                    {resource.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{resource.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    <div className="mt-1 text-sm text-gray-500">
                      <span className="inline-block bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium mr-2">
                        {resource.category}
                      </span>
                      Uploaded: {resource.date} | {resource.pages}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-1.5 border border-gray-300 text-sm rounded-md hover:bg-gray-100"
                  >
                    <FiDownload className="mr-1.5" /> Download
                  </a>
                  <button className="p-2 text-gray-500 hover:text-blue-600">
                    <FiEdit />
                  </button>
                  <button
                    className="p-2 text-gray-500 hover:text-red-600"
               
                  >
                    <FiTrash />
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
