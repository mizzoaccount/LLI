"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUsers, FiSettings, FiCalendar, FiFileText, FiBook, FiLogOut, FiUser, FiDownload } from 'react-icons/fi';
import ClientProgramsView from '@/components/admin/ClientProgramsView';
import ClientResourcesView from '@/components/admin/ClientResourcesView';
import SettingsView from '@/components/admin/SettingsView';
import AdminServicesView from '@/components/admin/AdminServicesView';
import AdminExpertsView from '@/components/admin/AdminExpertsView';
import AdminClientsView from '@/components/admin/AdminClientsView';
import AdminWorkshopsView from '@/components/admin/AdminWorkshopsView';
import Link from 'next/link';



// Add custom hook for media queries
function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) setMatches(media.matches);
      
      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);
      
      return () => media.removeEventListener('change', listener);
    }, [matches, query]);
  
    return matches;
  }

export default function Dashboard() {
    const isMobile = useMediaQuery("(max-width: 768px)");
  
  // Simulated auth state - replace with your actual auth logic
  const [user, setUser] = useState<{
    role: 'admin' | 'client';
    name: string;
    email: string;
  } | null>(null);

  // Simulate login - in reality, this would come from your auth system
  useEffect(() => {
    // For demo purposes, we'll set a sample user after 1 second
    const timer = setTimeout(() => {
      setUser({
        role: 'admin', // Change to 'client' to see client view
        name: 'Consolata Munga',
        email: 'consolata@legisconsult.co.ke'
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

   // New navigation handler
   const handleNavigation = (view: string) => {
    setCurrentView(view);
    if (isMobile) setMobileMenuOpen(false);
  };

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Current view state
  const [currentView, setCurrentView] = useState('dashboard');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dummy data
  const dashboardData = {
    stats: [
      { title: "Upcoming Workshops", value: 5, change: "+2" },
      { title: "Active Clients", value: 24, change: "+4" },
      { title: "Resources Uploaded", value: 38, change: "+12" },
      { title: "Consultation Requests", value: 7, change: "-3" }
    ],
    recentActivities: [
      { action: "Created new workshop", date: "10 mins ago", user: "You" },
      { action: "Updated CIDP resources", date: "2 hours ago", user: "Dr. Rori" },
      { action: "Client registered", date: "1 day ago", user: "System" }
    ],
    upcomingWorkshops: [
      { title: "Legislative Drafting", date: "Jun 20-22", attendees: 12, capacity: 25 },
      { title: "Public Finance", date: "Jul 10-12", attendees: 18, capacity: 30 }
    ]
  };

  // Admin-specific data
  const adminData = {
    users: [
      { name: "Nakuru County", role: "client", joined: "2023-01-15" },
      { name: "National Assembly", role: "client", joined: "2022-11-03" },
      { name: "Dr. Rori Mwangi", role: "expert", joined: "2023-02-20" }
    ],
    services: [
      { title: "Legislative Training", active: true, clients: 18 },
      { title: "CIDP Development", active: true, clients: 12 },
      { title: "Policy Formulation", active: false, clients: 8 }
    ]
  };

  // Client-specific data
  const clientData = {
    activePrograms: [
      { title: "CIDP Review 2023", progress: 65, deadline: "2023-08-15" },
      { title: "Staff Training", progress: 30, deadline: "2023-07-01" }
    ],
    recentResources: [
      { title: "Budget Analysis Framework", type: "PDF", date: "2023-05-10" },
      { title: "Workshop Slides", type: "PPT", date: "2023-05-02" }
    ]
  };

  // Logout handler
  const handleLogout = () => {
    setUser(null);
    setCurrentView('dashboard');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full"
        >
          <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiUsers className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Dashboard</h2>
          <p className="text-gray-600 mb-6">Authenticating your session...</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-blue-600 h-2 rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
            <img src="/logo.png" alt="LLI Logo" className="h-10 w-16 object-contain" />

            {/* Mobile Title */}
            <h1 className="text-xl font-bold text-gray-900 md:hidden">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LLI
              </span>{" "}
              Dashboard
            </h1>

            {/* Desktop Title */}
            <h1 className="hidden md:block text-xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Legislative Leadership Institute
              </span>{" "}
              Dashboard
            </h1>
          </Link>           
            <div className="hidden md:flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-xl shadow-sm">
            <div className="text-sm text-gray-600">
                <span className="text-gray-500">Signed in as</span>{" "}
                <span className="font-semibold text-gray-800">{user.name}</span>
            </div>

            <button
                onClick={handleLogout}
                className="flex items-center text-sm font-medium text-red-500 hover:text-red-600 transition duration-200"
            >
                <FiLogOut className="mr-1 h-4 w-4" /> Logout
            </button>
            </div>

            {/* Mobile menu button */}
            <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
            </button>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <motion.aside 
          initial={{ x: -300 }}
          animate={{ 
            x: isMobile ? (mobileMenuOpen ? 0 : -300) : 0 
          }}
          className={`fixed md:relative z-20 md:z-0 w-64 h-full bg-white shadow-md md:shadow-none transition-transform duration-300 ease-in-out`}
        >
          <div className="h-full py-4 overflow-y-auto">
            <nav>
              <ul className="space-y-1 px-2">
                <li>
                  <button
                    onClick={() => handleNavigation('dashboard')}
                    className={`flex items-center w-full p-3 rounded-lg ${currentView === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiHome className="w-5 h-5 mr-3" />
                    Dashboard
                  </button>
                </li>

                {user.role === 'admin' && (
                  <>
                    <li>
                      <button
                        onClick={() => handleNavigation('services')}
                        className={`flex items-center w-full p-3 rounded-lg ${currentView === 'services' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <FiFileText className="w-5 h-5 mr-3" />
                        Manage Services
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavigation('experts')}
                        className={`flex items-center w-full p-3 rounded-lg ${currentView === 'experts' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <FiUsers className="w-5 h-5 mr-3" />
                        Manage Experts
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavigation('clients')}
                        className={`flex items-center w-full p-3 rounded-lg ${currentView === 'clients' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <FiUsers className="w-5 h-5 mr-3" />
                        Manage Clients
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavigation('workshops')}
                        className={`flex items-center w-full p-3 rounded-lg ${currentView === 'workshops' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <FiCalendar className="w-5 h-5 mr-3" />
                        Manage Workshops
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavigation('resources')}
                        className={`flex items-center w-full p-3 rounded-lg ${currentView === 'resources' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <FiCalendar className="w-5 h-5 mr-3" />
                        Manage Resources
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavigation('programs')}
                        className={`flex items-center w-full p-3 rounded-lg ${currentView === 'programs' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <FiCalendar className="w-5 h-5 mr-3" />
                        Manage Programmes
                      </button>
                    </li>
                  </>
                )}

                {user.role === 'client' && (
                  <>
                    <li>
                      <button
                        onClick={() => handleNavigation('programs')}
                        className={`flex items-center w-full p-3 rounded-lg ${currentView === 'programs' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <FiBook className="w-5 h-5 mr-3" />
                        My Programs
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavigation('resources')}
                        className={`flex items-center w-full p-3 rounded-lg ${currentView === 'resources' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        <FiFileText className="w-5 h-5 mr-3" />
                        Resources
                      </button>
                    </li>
                  </>
                )}

                <li>
                  <button
                    onClick={() => handleNavigation('settings')}
                    className={`flex items-center w-full p-3 rounded-lg ${currentView === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiSettings className="w-5 h-5 mr-3" />
                    Settings
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </motion.aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          {/* Dashboard Overview */}
          {currentView === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, {user.name}</h2>
                <p className="text-gray-600">
                  {user.role === 'admin' 
                    ? 'Here\'s what\'s happening with your legislative consulting services today.' 
                    : 'Here\'s an overview of your active programs and resources.'}
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {dashboardData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        stat.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Admin-Specific Content */}
              {user.role === 'admin' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-900">Recent Activities</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
                    </div>
                    <div className="space-y-4">
                      {dashboardData.recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-3">
                            <FiUser className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.date} • {activity.user}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-900">Upcoming Workshops</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
                    </div>
                    <div className="space-y-4">
                      {dashboardData.upcomingWorkshops.map((workshop, index) => (
                        <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{workshop.title}</p>
                            <p className="text-sm text-gray-500">{workshop.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{workshop.attendees}/{workshop.capacity}</p>
                            <p className="text-xs text-gray-500">Attendees</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Client-Specific Content */}
              {user.role === 'client' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-900">Active Programs</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
                    </div>
                    <div className="space-y-4">
                      {clientData.activePrograms.map((program, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900">{program.title}</p>
                            <span className="text-sm text-gray-500">Due: {program.deadline}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${program.progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-500 text-right">{program.progress}% complete</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-900">Recent Resources</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-700">View All</button>
                    </div>
                    <div className="space-y-3">
                      {clientData.recentResources.map((resource, index) => (
                        <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-50 rounded flex items-center justify-center text-blue-600 mr-3">
                            <FiFileText className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{resource.title}</p>
                            <p className="text-xs text-gray-500">{resource.type} • {resource.date}</p>
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 ml-2">
                            <FiDownload className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Admin Views */}
          {user.role === 'admin' && currentView === 'services' && (
            <AdminServicesView services={adminData.services} />
          )}

          {user.role === 'admin' && currentView === 'experts' && (
            <AdminExpertsView />
          )}

          {user.role === 'admin' && currentView === 'clients' && (
            <AdminClientsView clients={adminData.users.filter(u => u.role === 'client')} />
          )}

          {user.role === 'admin' && currentView === 'workshops' && (
            <AdminWorkshopsView workshops={dashboardData.upcomingWorkshops} />
          )}

          {/* Client Views */}
          {user.role === 'admin' && currentView === 'programs' && (
            <ClientProgramsView programs={clientData.activePrograms} />
          )}

          {user.role === 'admin' && currentView === 'resources' && (
            <ClientResourcesView resources={clientData.recentResources} />
          )}

          {/* Settings View (Common) */}
          {currentView === 'settings' && (
            <SettingsView user={user} />
          )}
        </main>
      </div>
    </div>
  );
}

/*const AdminServicesView = ({ services }: { services: Array<{
    title: string;
    active: boolean;
    clients: number;
  }> }) => {
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [editingService, setEditingService] = useState<null | any>(null);
    const [serviceList, setServiceList] = useState(services);
  
    const handleCreate = (newService: any) => {
      setServiceList([...serviceList, newService]);
      setCreateModalOpen(false);
    };
  
    const handleUpdate = (updatedService: any) => {
      setServiceList(serviceList.map(s => 
        s.title === editingService?.title ? updatedService : s
      ));
      setEditingService(null);
    };
  
    const handleDelete = (title: string) => {
      setServiceList(serviceList.filter(s => s.title !== title));
    };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Manage Services</h2>
          <button
            onClick={() => setCreateModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            + Add Service
          </button>
        </div>
  
        <div className="bg-white shadow-sm rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div className="col-span-5 font-medium text-gray-500">Service</div>
            <div className="col-span-3 font-medium text-gray-500">Status</div>
            <div className="col-span-2 font-medium text-gray-500">Clients</div>
            <div className="col-span-2"></div>
          </div>
  
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-12 items-center px-6 py-4 border-b border-gray-100 hover:bg-gray-50"
            >
              <div className="col-span-5 font-medium text-gray-900">
                {service.title}
              </div>
              <div className="col-span-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  service.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {service.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="col-span-2 text-gray-600">{service.clients}</div>
              <div className="col-span-2 flex justify-end space-x-2">
                <button
                  onClick={() => setEditingService(service)}
                  className="text-blue-600 hover:text-blue-800 p-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service.title)}
                  className="text-red-600 hover:text-red-800 p-1"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* Create/Edit Modal *
        {(isCreateModalOpen || editingService) && (
          <ServiceModal
            service={editingService}
            onClose={() => {
              setCreateModalOpen(false);
              setEditingService(null);
            }}
            onSubmit={editingService ? handleUpdate : handleCreate}
          />
        )}
      </motion.div>
    );
  };
  
  const ServiceModal = ({ service, onClose, onSubmit }: {
    service: any;
    onClose: () => void;
    onSubmit: (data: any) => void;
  }) => {
    const [formData, setFormData] = useState(service || {
      title: '',
      description: '',
      active: true,
      category: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target as HTMLInputElement;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
      
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-xl w-full max-w-md"
        >
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {service ? 'Edit Service' : 'Create New Service'}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select category</option>
                    <option value="training">Training</option>
                    <option value="consulting">Consulting</option>
                    <option value="development">Development</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="active"
                    name="active"
                    checked={formData.active}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="active" className="ml-2 block text-sm text-gray-700">
                    Active
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => onSubmit(formData)}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700"
            >
              {service ? 'Update' : 'Create'}
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  const AdminExpertsView = () => {
    const [experts, setExperts] = useState([
      {
        id: 1,
        name: "Dr. Rori Mwangi",
        specialty: "Public Finance",
        status: "active",
        email: "rori@legisconsult.co.ke"
      },
      {
        id: 2,
        name: "Prof. Kamau Goro",
        specialty: "Constitutional Law",
        status: "active",
        email: "kamau@legisconsult.co.ke"
      }
    ]);
  
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentExpert, setCurrentExpert] = useState<any>(null);
  
    // CRUD operations would be implemented similarly to ServicesView
    // with appropriate API calls in a real application
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Manage Experts</h2>
          <button
            onClick={() => {
              setCurrentExpert(null);
              setModalOpen(true);
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            + Add Expert
          </button>
        </div>
  
        <div className="bg-white shadow-sm rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div className="col-span-4 font-medium text-gray-500">Expert</div>
            <div className="col-span-3 font-medium text-gray-500">Specialty</div>
            <div className="col-span-3 font-medium text-gray-500">Status</div>
            <div className="col-span-2"></div>
          </div>
  
          {experts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-12 items-center px-6 py-4 border-b border-gray-100 hover:bg-gray-50"
            >
              <div className="col-span-4">
                <div className="font-medium text-gray-900">{expert.name}</div>
                <div className="text-sm text-gray-500">{expert.email}</div>
              </div>
              <div className="col-span-3 text-gray-600">{expert.specialty}</div>
              <div className="col-span-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  expert.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {expert.status}
                </span>
              </div>
              <div className="col-span-2 flex justify-end space-x-2">
                <button
                  onClick={() => {
                    setCurrentExpert(expert);
                    setModalOpen(true);
                  }}
                  className="text-blue-600 hover:text-blue-800 p-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => setExperts(experts.filter(e => e.id !== expert.id))}
                  className="text-red-600 hover:text-red-800 p-1"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
  
        {isModalOpen && (
          <ExpertModal
            expert={currentExpert}
            onClose={() => setModalOpen(false)}
            onSubmit={(data) => {
              if (currentExpert) {
                // Update existing expert
                setExperts(experts.map(e => e.id === currentExpert.id ? data : e));
              } else {
                // Add new expert
                setExperts([...experts, { ...data, id: experts.length + 1 }]);
              }
              setModalOpen(false);
            }}
          />
        )}
      </motion.div>
    );
  };
  
  const ExpertModal = ({ expert, onClose, onSubmit }: {
    expert: any;
    onClose: () => void;
    onSubmit: (data: any) => void;
  }) => {
    const [formData, setFormData] = useState(expert || {
      name: '',
      specialty: '',
      email: '',
      status: 'active'
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-xl w-full max-w-md"
        >
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {expert ? 'Edit Expert' : 'Add New Expert'}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                <input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => onSubmit(formData)}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700"
            >
              {expert ? 'Update' : 'Add'} Expert
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  const AdminClientsView = ({ clients }: { clients: Array<{
    name: string;
    role: string;
    joined: string;
  }> }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredClients = clients.filter(client =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Manage Clients</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
  
        <div className="bg-white shadow-sm rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div className="col-span-6 font-medium text-gray-500">Client</div>
            <div className="col-span-3 font-medium text-gray-500">Type</div>
            <div className="col-span-3 font-medium text-gray-500">Member Since</div>
          </div>
  
          {filteredClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-12 items-center px-6 py-4 border-b border-gray-100 hover:bg-gray-50"
            >
              <div className="col-span-6">
                <div className="font-medium text-gray-900">{client.name}</div>
                <div className="text-sm text-gray-500">Last active: 2 days ago</div>
              </div>
              <div className="col-span-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {client.role}
                </span>
              </div>
              <div className="col-span-3 text-gray-600">
                {new Date(client.joined).toLocaleDateString()}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const AdminWorkshopsView = ({ workshops }: { workshops: Array<{
    title: string;
    date: string;
    attendees: number;
    capacity: number;
  }> }) => {
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [workshopList, setWorkshopList] = useState(workshops);
  
    const handleCreate = (newWorkshop: any) => {
      setWorkshopList([...workshopList, newWorkshop]);
      setCreateModalOpen(false);
    };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Manage Workshops</h2>
          <button
            onClick={() => setCreateModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            + Schedule Workshop
          </button>
        </div>
  
        <div className="bg-white shadow-sm rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div className="col-span-5 font-medium text-gray-500">Workshop</div>
            <div className="col-span-2 font-medium text-gray-500">Date</div>
            <div className="col-span-3 font-medium text-gray-500">Attendance</div>
            <div className="col-span-2"></div>
          </div>
  
          {workshopList.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-12 items-center px-6 py-4 border-b border-gray-100 hover:bg-gray-50"
            >
              <div className="col-span-5 font-medium text-gray-900">
                {workshop.title}
              </div>
              <div className="col-span-2 text-gray-600">{workshop.date}</div>
              <div className="col-span-3">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(workshop.attendees / workshop.capacity) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">
                    {workshop.attendees}/{workshop.capacity}
                  </span>
                </div>
              </div>
              <div className="col-span-2 flex justify-end space-x-2">
                <button className="text-blue-600 hover:text-blue-800 p-1">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-800 p-1">
                  Cancel
                </button>
              </div>
            </motion.div>
          ))}
        </div>
  
        {isCreateModalOpen && (
          <WorkshopModal
            onClose={() => setCreateModalOpen(false)}
            onSubmit={handleCreate}
          />
        )}
      </motion.div>
    );
  };
  
  const WorkshopModal = ({ onClose, onSubmit }: {
    onClose: () => void;
    onSubmit: (data: any) => void;
  }) => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      date: '',
      location: '',
      capacity: '25'
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-xl w-full max-w-md"
        >
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Schedule New Workshop
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                  <select
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="15">15 attendees</option>
                    <option value="25">25 attendees</option>
                    <option value="50">50 attendees</option>
                    <option value="100">100 attendees</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => onSubmit(formData)}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700"
            >
              Schedule Workshop
            </button>
          </div>
        </motion.div>
      </div>
    );
  };*/


