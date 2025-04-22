/*"use client";
import { useState, useEffect, JSX } from 'react';
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
import { FaRegFilePdf } from 'react-icons/fa';

interface Resource {
  title: string;
  category: string;
  description: string;
  link: string;
  icon: JSX.Element;
  date: string;
  pages: string;
}

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

  // Admin-specific data
  const adminData = {
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

  const mappedResources: Resource[] = clientData.recentResources.map((item) => ({
    title: item.title,
    category: item.type ?? "General",
    description: "No description available",
    link: "#",
    icon: <FaRegFilePdf className="text-red-500 w-5 h-5" />,
    date: item.date,
    pages: "N/A",
  }));

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
      {/* Dashboard Header *
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
            <img src="/logo.png" alt="LLI Logo" className="h-10 w-16 object-contain" />

            {/* Mobile Title *
            <h1 className="text-xl font-bold text-gray-900 md:hidden">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LLI
              </span>{" "}
              Dashboard
            </h1>

            {/* Desktop Title *
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

            {/* Mobile menu button *
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

      {/* Main Content *
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar *
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

        {/* Main Content Area *
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          {/* Dashboard Overview *
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

              {/* Stats Cards *
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

              {/* Admin-Specific Content *
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

              {/* Client-Specific Content *
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

          {/* Admin Views *
          {user.role === 'admin' && currentView === 'services' && (
            <AdminServicesView
              services={[
                { title: "Legislative Training", active: true, clients: 18 },
                { title: "CIDP Development", active: true, clients: 12 },
                { title: "Policy Formulation", active: false, clients: 8 }
              ]}
            />
          )}

          {user.role === 'admin' && currentView === 'experts' && (
            <AdminExpertsView />
          )}

          {user.role === 'admin' && currentView === 'clients' && (
            <AdminClientsView clients={[
              { name: "Nakuru County", role: "client", joined: "2023-01-15" },
              { name: "National Assembly", role: "client", joined: "2022-11-03" }
            ]} />
          )}

          {user.role === 'admin' && currentView === 'workshops' && (
            <AdminWorkshopsView workshops={dashboardData.upcomingWorkshops} />
          )}

          {/* Client Views *
          {user.role === 'admin' && currentView === 'programs' && (
          
          <ClientProgramsView
            programs={clientData.activePrograms.map(p => ({
              ...p,
              description: "No description provided",
              milestones: [],
            }))}
          />
          )}

          {user.role === 'admin' && currentView === 'resources' && (
            <ClientResourcesView resources={mappedResources} />
           
          )}

          {/* Settings View (Common) *
          {currentView === 'settings' && (
            <SettingsView user={{ fullName: user.fullName, email: user.email, role: user.role }} />
          )}
        </main>
      </div>
    </div>
  );
}
*/

"use client";
import { useState, useEffect, JSX } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUsers, FiSettings, FiCalendar, FiFileText, FiBook, FiLogOut, FiUser, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import ClientProgramsView from '@/components/admin/ClientProgramsView';
import ClientResourcesView from '@/components/admin/ClientResourcesView';
import SettingsView from '@/components/admin/SettingsView';
import AdminServicesView from '@/components/admin/AdminServicesView';
import AdminExpertsView from '@/components/admin/AdminExpertsView';
import AdminClientsView from '@/components/admin/AdminClientsView';
import AdminWorkshopsView from '@/components/admin/AdminWorkshopsView';
import Link from 'next/link';
import { FaRegFilePdf } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface Resource {
  title: string;
  category: string;
  description: string;
  link: string;
  icon: JSX.Element;
  date: string;
  pages: string;
}

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
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation handler
  const handleNavigation = (view: string) => {
    setCurrentView(view);
    if (isMobile) setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login');
    }
  }, [user, isLoading, router]);

  // Logout handler
  const handleLogout = () => {
    logout();
    router.push('/auth/login');
  };

  // Dashboard data
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

  const mappedResources: Resource[] = clientData.recentResources.map((item) => ({
    title: item.title,
    category: item.type ?? "General",
    description: "No description available",
    link: "#",
    icon: <FaRegFilePdf className="text-red-500 w-5 h-5" />,
    date: item.date,
    pages: "N/A",
  }));

  if (isLoading || !user) {
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

              <h1 className="text-xl font-bold text-gray-900 md:hidden">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LLI
                </span> Dashboard
              </h1>

              <h1 className="hidden md:block text-xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Legislative Leadership Institute
                </span> Dashboard
              </h1>
            </Link>           
            
            <div className="hidden md:flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-xl shadow-sm">
              <div className="text-sm text-gray-600">
                <span className="text-gray-500">Signed in as</span>{" "}
                <span className="font-semibold text-gray-800">{user.role}</span>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center text-sm font-medium text-red-500 hover:text-red-600 transition duration-200"
              >
                <FiLogOut className="mr-1 h-4 w-4" /> Logout
              </button>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
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
                  </>
                )}

                <li>
                  <button
                    onClick={() => handleNavigation('programs')}
                    className={`flex items-center w-full p-3 rounded-lg ${currentView === 'programs' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiBook className="w-5 h-5 mr-3" />
                    {user.role === 'admin' ? 'Manage Programmes' : 'My Programs'}
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleNavigation('resources')}
                    className={`flex items-center w-full p-3 rounded-lg ${currentView === 'resources' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    <FiFileText className="w-5 h-5 mr-3" />
                    {user.role === 'admin' ? 'Manage Resources' : 'Resources'}
                  </button>
                </li>

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
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, {user.fullName}</h2>
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
              {user.role === 'user' && (
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
            <AdminClientsView clients={[
              { name: "Nakuru County", role: "client", joined: "2023-01-15" },
              { name: "National Assembly", role: "client", joined: "2022-11-03" },
              { name: "Dr. Rori Mwangi", role: "expert", joined: "2023-02-20" }
            ]} />
          )}

          {user.role === 'admin' && currentView === 'workshops' && (
            <AdminWorkshopsView workshops={dashboardData.upcomingWorkshops} />
          )}

          {/* Program Views */}
          {currentView === 'programs' && (
            <ClientProgramsView
              programs={clientData.activePrograms.map(p => ({
                ...p,
                description: "No description provided",
                milestones: [],
              }))}
            />
          )}

          {/* Resource Views */}
          {currentView === 'resources' && (
            <ClientResourcesView resources={mappedResources} />
          )}

          {/* Settings View */}
          {currentView === 'settings' && (
            <SettingsView user={{ name: user.fullName, email: user.email, role: user.role }} />
          )}
        </main>
      </div>
    </div>
  );
}