import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [userType, setUserType] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get user type from localStorage
    const storedUserType = localStorage.getItem('userType');
    setUserType(storedUserType || '');
  }, []);

  const handleLogout = () => {
    // Clear localStorage and redirect to login
    localStorage.removeItem('userType');
    navigate('/login');
  };

  // Define menu items based on user type
  const getMenuItems = () => {
    if (userType === 'hotel') {
      return [
        { name: 'Dashboard', path: '/hotel-dashboard' },
        { name: 'Register Guest', path: '/register-guest' },
        { name: 'View Submissions', path: '/submissions' },
        { name: 'Reports', path: '/reports' }
      ];
    } else if (userType === 'police') {
      return [
        { name: 'Dashboard', path: '/police-dashboard' },
        { name: 'Search Records', path: '/search-records' },
        { name: 'Alerts', path: '/alerts' },
        { name: 'Analytics', path: '/analytics' }
      ];
    }
    return [];
  };

  const menuItems = getMenuItems();

  // Check if the current path matches the menu item path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to={userType === 'hotel' ? '/hotel-dashboard' : '/police-dashboard'} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="ml-2 text-white font-semibold text-lg">
                  {userType === 'hotel' ? 'Hotel Portal' : 'Police Portal'}
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isActive(item.path)
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-100 hover:bg-indigo-500 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Notification bell - visible for Police only */}
              {userType === 'police' && (
                <button className="p-1 mr-4 rounded-full text-indigo-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              )}

              {/* User menu */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-800">
                    <span className="text-sm font-medium leading-none text-white">
                      {userType === 'hotel' ? 'H' : 'P'}
                    </span>
                  </span>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {userType === 'hotel' ? 'Hotel User' : 'Police Admin'}
                  </div>
                  <div className="text-sm font-medium leading-none text-indigo-200 mt-1">
                    {userType === 'hotel' ? 'hotel1@gmail.com' : 'police-admin@gmail.com'}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-4 px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-indigo-800 hover:bg-indigo-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.path)
                  ? 'bg-indigo-700 text-white'
                  : 'text-indigo-100 hover:bg-indigo-500 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-indigo-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-800">
                <span className="text-sm font-medium leading-none text-white">
                  {userType === 'hotel' ? 'H' : 'P'}
                </span>
              </span>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                {userType === 'hotel' ? 'Hotel User' : 'Police Admin'}
              </div>
              <div className="text-sm font-medium leading-none text-indigo-200 mt-1">
                {userType === 'hotel' ? 'hotel1@gmail.com' : 'police-admin@gmail.com'}
              </div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;