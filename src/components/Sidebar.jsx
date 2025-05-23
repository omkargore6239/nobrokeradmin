import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="w-64 bg-gray-800 text-white fixed h-full p-6">
      <h1 className="text-2xl font-bold mb-6">NOBROKER ADMIN</h1>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">Dashboard</Link>
        </li>

        <li>
          <div
            className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-700 cursor-pointer transition-colors"
            onClick={() => toggleDropdown('enquiry')}
          >
            <span>All Enquiries</span>
            <span>{openDropdown === 'enquiry' ? '▼' : '▶'}</span>
          </div>
          {openDropdown === 'enquiry' && (
            <ul className="ml-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              <li>
                <Link to="/enquiries/list" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">List</Link>
              </li>
              <li>
                <Link to="/enquiries/add" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">Add</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div
            className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-700 cursor-pointer transition-colors"
            onClick={() => toggleDropdown('amenity')}
          >
            <span>Amenity</span>
            <span>{openDropdown === 'amenity' ? '▼' : '▶'}</span>
          </div>
          {openDropdown === 'amenity' && (
            <ul className="ml-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              <li>
                <Link to="/amenities/list" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">List</Link>
              </li>
              <li>
                <Link to="/amenities/add" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">Add</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div
            className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-700 cursor-pointer transition-colors"
            onClick={() => toggleDropdown('property')}
          >
            <span>Property</span>
            <span>{openDropdown === 'property' ? '▼' : '▶'}</span>
          </div>
          {openDropdown === 'property' && (
            <ul className="ml-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              <li>
                <Link to="/properties/list" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">List</Link>
              </li>
              <li>
                <Link to="/properties/add" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">Add</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div
            className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-700 cursor-pointer transition-colors"
            onClick={() => toggleDropdown('package')}
          >
            <span>Package</span>
            <span>{openDropdown === 'package' ? '▼' : '▶'}</span>
          </div>
          {openDropdown === 'package' && (
            <ul className="ml-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              <li>
                <Link to="/packages/list" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">List</Link>
              </li>
              <li>
                <Link to="/packages/add" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">Add</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div
            className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-700 cursor-pointer transition-colors"
            onClick={() => toggleDropdown('subscription')}
          >
            <span>Subscription</span>
            <span>{openDropdown === 'subscription' ? '▼' : '▶'}</span>
          </div>
          {openDropdown === 'subscription' && (
            <ul className="ml-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              <li>
                <Link to="/subscriptions/list" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">List</Link>
              </li>
              <li>
                <Link to="/subscriptions/add" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">Add</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div
            className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-700 cursor-pointer transition-colors"
            onClick={() => toggleDropdown('customer')}
          >
            <span>Customer</span>
            <span>{openDropdown === 'customer' ? '▼' : '▶'}</span>
          </div>
          {openDropdown === 'customer' && (
            <ul className="ml-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              <li>
                <Link to="/customers/list" className="block px-4 py-2 rounded hover:bg-gray-700 transition-colors">List</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
