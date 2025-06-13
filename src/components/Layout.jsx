// src/components/Layout.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaEnvelope,
  FaList,
  FaPlus,
  FaBuilding,
  FaGift,
  FaCreditCard,
  FaUsers,
  FaSearch,
  FaBell,
  FaCog,
  FaUserCircle,
  FaChevronDown,
  FaChevronRight
} from 'react-icons/fa';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md z-30 border-b border-gray-200">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
            <FaBell className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            <FaCog className="text-xl" />
          </button>

          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <FaUserCircle className="text-blue-600 text-xl" />
              </div>
              <span className="text-gray-700 font-medium">Admin</span>
              <FaChevronDown className={`text-gray-500 text-sm transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-40 border border-gray-200">
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Settings</Link>
                <hr className="my-1" />
                <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (items) => items.some(item => location.pathname === item.path);

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <FaHome />,
      path: '/dashboard'
    },
    {
      name: 'All Enquiries',
      icon: <FaEnvelope />,
      dropdown: 'enquiry',
      items: [
        { name: 'List', icon: <FaList />, path: '/enquiries/list' },
        { name: 'Add', icon: <FaPlus />, path: '/enquiries/add' }
      ]
    },
    {
      name: 'Amenity',
      icon: <FaList />,
      dropdown: 'amenity',
      items: [
        { name: 'List', icon: <FaList />, path: '/amenities/list' },
        { name: 'Add', icon: <FaPlus />, path: '/amenities/add' }
      ]
    },
    {
      name: 'Property',
      icon: <FaBuilding />,
      dropdown: 'property',
      items: [
        { name: 'List', icon: <FaList />, path: '/properties/list' },
        { name: 'Add', icon: <FaPlus />, path: '/properties/add' }
      ]
    },
    {
      name: 'Package',
      icon: <FaGift />,
      dropdown: 'package',
      items: [
        { name: 'List', icon: <FaList />, path: '/packages/list' },
        { name: 'Add', icon: <FaPlus />, path: '/packages/add' }
      ]
    },
    {
      name: 'Subscribers',
      icon: <FaCreditCard />,
      dropdown: 'subscribers',
      items: [
        { name: 'List', icon: <FaList />, path: '/subscriptions/list' },
        // { name: 'Add', icon: <FaPlus />, path: '/subscriptions/add' }
      ]
    },
    {
      name: 'Customer',
      icon: <FaUsers />,
      dropdown: 'customer',
      items: [
        { name: 'List', icon: <FaList />, path: '/customers/list' }
      ]
    }
  ];

  return (
    <div className="w-64 bg-gray-800 text-white fixed h-full z-20 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-8 flex items-center">
          <FaBuilding className="mr-2 text-blue-400" />
          <span className="text-white">NOBROKER</span>
          <br />
          <span className="text-blue-400 text-sm block">ADMIN</span>
        </h1>

        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.path ? (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ) : (
                <>
                  <div
                    className={`flex justify-between items-center px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                      isDropdownActive(item.items)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => toggleDropdown(item.dropdown)}
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm transition-transform duration-200">
                      {openDropdown === item.dropdown ? <FaChevronDown /> : <FaChevronRight />}
                    </span>
                  </div>

                  {openDropdown === item.dropdown && (
                    <ul className="ml-6 mt-2 space-y-1 border-l border-gray-600 pl-4">
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.path}
                            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                              isActive(subItem.path)
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                          >
                            <span className="mr-3">{subItem.icon}</span>
                            <span>{subItem.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 ml-64 mt-16 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
