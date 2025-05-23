import React from 'react';
import { FaUser, FaHome, FaHandHoldingUsd, FaBuilding } from 'react-icons/fa';

const Dashboard = () => {
  // Sample data for the dashboard
  const summaryData = [
    { title: 'Total Customer', value: '268', icon: <FaUser />, color: 'bg-blue-100', textColor: 'text-blue-600' },
    { title: 'Total Property', value: '88', icon: <FaHome />, color: 'bg-green-100', textColor: 'text-green-600' },
    { title: 'Sell Property', value: '35', icon: <FaHandHoldingUsd />, color: 'bg-yellow-100', textColor: 'text-yellow-600' },
    { title: 'Rent Property', value: '46', icon: <FaBuilding />, color: 'bg-purple-100', textColor: 'text-purple-600' },
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {summaryData.map((item, index) => (
          <div key={index} className={`${item.color} p-4 rounded-lg shadow border border-gray-200`}>
            <div className="flex items-center">
              <div className={`mr-2 ${item.textColor} text-2xl`}>
                {item.icon}
              </div>
              <div>
                <div className="text-lg font-semibold">{item.value}</div>
                <div className="text-gray-600">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Property List */}
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Property List</h2>
          <button className="text-blue-500 hover:text-blue-700">View All</button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total View</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {propertyList.map((property) => (
              <tr key={property.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={`https://via.placeholder.com/50?text=${property.name}`} alt={property.name} className="h-10 w-10 rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{property.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{property.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{property.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{property.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{property.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{property.totalView}</td>
                <td className="px-6 py-4 whitespace-nowrap">{property.createdDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer List and News & Article List */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Customer List</h2>
            <button className="text-blue-500 hover:text-blue-700">View All</button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customerList.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{customer.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">News & Article List</h2>
            <button className="text-blue-500 hover:text-blue-700">View All</button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {newsArticleList.map((article) => (
                <tr key={article.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{article.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{article.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{article.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
