// src/pages/Dashboard.jsx
import React from 'react';
import { FaUser, FaHome, FaHandHoldingUsd, FaBuilding, FaEye } from 'react-icons/fa';

const Dashboard = () => {
  const summaryData = [
    { title: 'Total Customer', value: '268', icon: <FaUser />, color: 'bg-blue-50', iconColor: 'text-blue-600', borderColor: 'border-blue-200' },
    { title: 'Total Property', value: '88', icon: <FaHome />, color: 'bg-green-50', iconColor: 'text-green-600', borderColor: 'border-green-200' },
    { title: 'Sell Property', value: '35', icon: <FaHandHoldingUsd />, color: 'bg-yellow-50', iconColor: 'text-yellow-600', borderColor: 'border-yellow-200' },
    { title: 'Rent Property', value: '46', icon: <FaBuilding />, color: 'bg-purple-50', iconColor: 'text-purple-600', borderColor: 'border-purple-200' },
  ];

  const propertyList = [
    { id: 1, name: 'Prop', customer: 'Ruchir Shah', category: 'Bungalow', price: '$256,000,000.00', location: 'Egypt, Cairo Governorate, Nasr City', totalView: '1', createdDate: 'May 19, 2025 8:45 AM' },
    { id: 2, name: 'Booking Flats', customer: 'Donald Trump', category: 'Agriculture Land', price: '$5,000,000.00', location: 'India, Gujarat, 8QVF+X7G Rajkot', totalView: '4', createdDate: 'April 30, 2025 9:35 AM' },
    { id: 3, name: 'Marvel Villa', customer: 'Hilda Blick', category: 'House', price: '$24,700,000.00', location: 'India, Gujarat, Rajkot', totalView: '7', createdDate: 'April 9, 2025 9:06 AM' },
    { id: 4, name: 'Golden Arm', customer: 'Hilda Blick', category: 'House', price: '$25,000,000.00', location: 'India, Gujarat, 8P7V+RCF Rajkot', totalView: '1', createdDate: 'April 9, 2025 9:04 AM' },
    { id: 5, name: "McDonald's Farm", customer: 'Hilda Blick', category: 'House', price: '$15,050,50.00', location: 'India, Gujarat, Rajkot', totalView: '4', createdDate: 'April 9, 2025 9:01 AM' },
  ];

  const customerList = [
    { id: 1, name: 'Said Saud', email: 't********@gmail.com', createdDate: 'March 25, 2025 8:58 AM' },
    { id: 2, name: 'Ahmed Said', email: 'j****************@gmail.com', createdDate: 'March 25, 2025 8:42 AM' },
  ];

  const newsArticleList = [
    { id: 1, name: 'test', description: 'www.gossdhosting.com', createdDate: 'April 2, 2024' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Welcome back, Admin
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <div key={index} className={`${item.color} ${item.borderColor} border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{item.title}</p>
                <p className="text-3xl font-bold text-gray-800">{item.value}</p>
              </div>
              <div className={`${item.iconColor} text-3xl opacity-80`}>
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Property List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Property List</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Created</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {propertyList.map((property) => (
                <tr key={property.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={`https://via.placeholder.com/60x40/4F46E5/FFFFFF?text=${property.name.charAt(0)}`}
                      alt={property.name}
                      className="h-10 w-12 rounded-lg object-cover border border-gray-200"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{property.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{property.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {property.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-green-600">{property.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{property.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-gray-500">
                      <FaEye className="mr-1" />
                      <span>{property.totalView}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer List and News & Article List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Customer List</h2>
            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Created</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customerList.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{customer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{customer.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.createdDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">News & Article List</h2>
            <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Created</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {newsArticleList.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{article.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{article.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{article.createdDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
