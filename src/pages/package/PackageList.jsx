import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';

const PackageList = () => {
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Premium',
      durationUnit: 'yearly',
      duration: 12,
      price: '$8999.00',
      viewPropertyLimit: 50,
      addPropertyLimit: 50,
      advertisementLimit: 50,
      createdDate: 'September 1, 2023 10:26 AM',
      updatedDate: 'December 8, 2024 8:07 AM',
      status: 'Inactive'
    },
    {
      id: 2,
      name: 'Gold Subscription Plan',
      durationUnit: 'monthly',
      duration: 1,
      price: '$2999.00',
      viewPropertyLimit: 50,
      addPropertyLimit: 10,
      advertisementLimit: 10,
      createdDate: 'September 1, 2023 10:35 AM',
      updatedDate: 'December 8, 2024 8:07 AM',
      status: 'Active'
    },
    // Additional packages...
  ]);

  const navigate = useNavigate();

  const handleEdit = (pkg) => {
    navigate('/packages/add', { state: { package: pkg } });
  };

  const handleDelete = (id) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Package List</h1>
        <button onClick={() => navigate('/packages/add')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
          <FaPlus className="mr-2" /> Add Package
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaTrash className="mr-2" /> Delete Selected
          </button>
          <div className="flex items-center border rounded p-2">
            <FaSearch className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search" className="outline-none" />
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration Unit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">View Property Limit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Add Property Limit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Advertisement Limit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {packages.map((pkg, index) => (
              <tr key={pkg.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.durationUnit}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.duration}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.viewPropertyLimit}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.addPropertyLimit}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.advertisementLimit}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.createdDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pkg.updatedDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${pkg.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {pkg.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleEdit(pkg)} className="text-blue-600 hover:underline mr-2 flex items-center">
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button onClick={() => handleDelete(pkg.id)} className="text-red-600 hover:underline flex items-center">
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageList;
