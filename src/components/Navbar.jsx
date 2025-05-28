import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BellIcon,
  UserCircleIcon,
  PowerIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = location.pathname.includes('/dashboard');

  const loggedInUser = {
    name: 'Admin User',
    email: 'admin@example.com',
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    // Here you can clear auth tokens/localStorage if needed
    navigate('/login');
  };

  return (
    <nav className="w-full bg-white text-gray-800 px-4 py-3 fixed top-0 left-0 z-30 shadow border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left - Brand */}
        <div className="text-xl font-bold tracking-wide">
          <Link to="/" className="hover:text-blue-600 transition">
            🏡 NOBROKER ADMIN
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {isLoggedIn ? (
            <>
              <BellIcon className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />

              <div className="flex flex-col text-right text-sm">
                <span className="font-medium">{loggedInUser.name}</span>
                <span className="text-gray-500 text-xs">{loggedInUser.email}</span>
              </div>

              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-blue-600"
                >
                  <UserCircleIcon className="w-6 h-6" />
                  <span>Account</span>
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded shadow-lg z-50 border">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                    >
                      <PowerIcon className="w-5 h-5" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Login
              </Link>
              {/* <Link
                to="/register"
                className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Register
              </Link> */}
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 space-y-3 border-t pt-3">
          {isLoggedIn ? (
            <>
              <div className="flex justify-between items-center px-2">
                <div>
                  <div className="font-medium">{loggedInUser.name}</div>
                  <div className="text-xs text-gray-500">{loggedInUser.email}</div>
                </div>
                <BellIcon className="w-6 h-6 text-gray-600 hover:text-blue-600" />
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-left text-red-600 hover:bg-gray-100"
              >
                <PowerIcon className="w-5 h-5" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Login
              </Link>
              {/* <Link
                to="/register"
                className="block text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Register
              </Link> */}
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
