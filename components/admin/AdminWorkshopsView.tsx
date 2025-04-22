"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiCalendar, FiUsers, FiEdit2, FiTrash2 } from 'react-icons/fi';

type Workshop = {
  title: string;
  date: string;
  attendees: number;
  capacity: number;
};

type FullWorkshop = {
  title: string;
  date: string;
  location: string;
  description: string;
  image: File | null;
  seats: string;
  type: string;
  duration: string;
  price: string;
};

export default function AdminWorkshopsView({ workshops }: { workshops: Workshop[] }) {
  const [showForm, setShowForm] = useState(false);
  const [newWorkshop, setNewWorkshop] = useState<FullWorkshop>({
    title: '',
    date: '',
    location: '',
    description: '',
    image: null,
    seats: '',
    type: '',
    duration: '',
    price: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewWorkshop({ ...newWorkshop, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewWorkshop({ ...newWorkshop, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (!newWorkshop.image) {
        throw new Error('Image is required');
      }

      const formData = new FormData();
      formData.append('title', newWorkshop.title);
      formData.append('date', newWorkshop.date);
      formData.append('location', newWorkshop.location);
      formData.append('description', newWorkshop.description);
      formData.append('image', newWorkshop.image);
      formData.append('seats', newWorkshop.seats);
      formData.append('type', newWorkshop.type);
      formData.append('duration', newWorkshop.duration);
      formData.append('price', newWorkshop.price);

      const response = await fetch('https://lli-backend.onrender.com/api/v1/workshops', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create workshop');
      }

      const data = await response.json();
      console.log('Workshop created successfully:', data);
      
      // Reset form
      setNewWorkshop({
        title: '',
        date: '',
        location: '',
        description: '',
        image: null,
        seats: '',
        type: '',
        duration: '',
        price: '',
      });
      setShowForm(false);
      
      // TODO: You might want to refresh the workshops list here
      // You could add a callback prop or use a state management solution

    } catch (err) {
      console.error('Error creating workshop:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Workshops</h2>
        <p className="text-gray-600">Schedule and manage upcoming legislative training workshops.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Upcoming Workshops</h3>
              <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiPlus className="mr-2" /> Schedule Workshop
              </button>
            </div>

            {showForm && (
              <form onSubmit={handleSubmit} className="p-6 space-y-4 border-b border-gray-100 bg-gray-50">
                {[
                  { name: 'title', label: 'Title' },
                  { name: 'date', label: 'Date' },
                  { name: 'location', label: 'Location' },
                  { name: 'description', label: 'Description', type: 'textarea' },
                  { name: 'seats', label: 'Seats (e.g. 12/25 seats remaining)' },
                  { name: 'type', label: 'Type (e.g. Hands-on Workshop)' },
                  { name: 'duration', label: 'Duration (e.g. 3 Days)' },
                  { name: 'price', label: 'Price (e.g. KSh 25,000)' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        value={(newWorkshop as any)[field.name]}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                      />
                    ) : (
                      <input
                        type="text"
                        name={field.name}
                        value={(newWorkshop as any)[field.name]}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                      />
                    )}
                  </div>
                ))}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Workshop Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                    required
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm py-2">
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Add Workshop'}
                </button>
              </form>
            )}

            <div className="divide-y divide-gray-100">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-gray-50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{workshop.title}</h4>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <FiCalendar className="mr-1.5 flex-shrink-0" />
                        {workshop.date}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-medium text-gray-900">
                          {workshop.attendees}/{workshop.capacity}
                        </div>
                        <div className="text-xs text-gray-500">
                          <FiUsers className="inline mr-1" /> Attendees
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Workshop Statistics</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Upcoming Workshops</span>
                <span className="text-sm font-bold text-gray-900">5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Average Attendance</span>
                <span className="text-sm font-bold text-gray-900">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Client Participation</span>
                <span className="text-sm font-bold text-gray-900">18/24</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <FiCalendar className="mr-2" /> Generate Workshop Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 

{/*"use client";
import { motion } from 'framer-motion';
import { FiPlus, FiCalendar, FiUsers, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function AdminWorkshopsView({ workshops }: { workshops: { title: string; date: string; attendees: number; capacity: number }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Workshops</h2>
        <p className="text-gray-600">Schedule and manage upcoming legislative training workshops.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-lg font-medium text-gray-900">Upcoming Workshops</h3>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <FiPlus className="mr-2" /> Schedule Workshop
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 hover:bg-gray-50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{workshop.title}</h4>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <FiCalendar className="mr-1.5 flex-shrink-0" />
                        {workshop.date}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-medium text-gray-900">
                          {workshop.attendees}/{workshop.capacity}
                        </div>
                        <div className="text-xs text-gray-500">
                          <FiUsers className="inline mr-1" /> Attendees
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Workshop Statistics</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Upcoming Workshops</span>
                <span className="text-sm font-bold text-gray-900">5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Average Attendance</span>
                <span className="text-sm font-bold text-gray-900">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Client Participation</span>
                <span className="text-sm font-bold text-gray-900">18/24</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <FiCalendar className="mr-2" /> Generate Workshop Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}*/}