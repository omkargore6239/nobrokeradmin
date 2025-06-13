import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaFilter, FaFileCsv, FaFileImport, FaFileExport, FaSearch, FaUndo } from 'react-icons/fa';

const PropertyList = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Jhhh',
      customer: 'Ahmed Said',
      category: 'House',
      bhk: '1 BHK',
      price: '$36,360.00',
      address: '6 Gorji St, Tarabulus, Li...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'May 27, 2025 4:53 PM',
      totalView: '1'
    },
    {
      id: 2,
      name: 'Prop',
      customer: 'Ruchir Shah',
      category: 'Bungalow',
      bhk: '1 BHK',
      price: '$256,000,000.00',
      address: '3 Makram Ebeid, Al Mintaq...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'May 19, 2025 8:45 AM',
      totalView: '2'
    },
    // Additional properties...
  ]);

  const navigate = useNavigate();

  const handleEdit = (property) => {
    navigate('/properties/add', { state: { property } });
  };

  const handleDelete = (id) => {
    setProperties(properties.filter(property => property.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Property List</h1>
        <div className="flex space-x-2">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaUndo className="mr-2" /> Reset Filter
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaFilter className="mr-2" /> Filter
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaFileExport className="mr-2" /> Download Property CSV
          </button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaFileImport className="mr-2" /> Import Property
          </button>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaFileCsv className="mr-2" /> CSV
          </button>
          <button onClick={() => navigate('/properties/add')} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaPlus className="mr-2" /> Add Property
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200 overflow-auto">
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
              {['', 'No', 'Image', 'Name', 'Customer', 'Category', 'BHK', 'Price', 'Address', 'Premium Property', 'Status', 'Created Date', 'Total View', 'Action'].map((title) => (
                <th key={title} className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map((property, index) => (
              <tr key={property.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 whitespace-nowrap"><input type="checkbox" /></td>
                <td className="px-4 py-2 whitespace-nowrap">{index + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap"><img src={`https://via.placeholder.com/50?text=Img${index + 1}`} alt={property.name} /></td>
                <td className="px-4 py-2 whitespace-nowrap">{property.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{property.customer}</td>
                <td className="px-4 py-2 whitespace-nowrap">{property.category}</td>
                <td className="px-4 py-2 whitespace-nowrap">{property.bhk}</td>
                <td className="px-4 py-2 whitespace-nowrap">{property.price}</td>
                <td className="px-4 py-2 whitespace-nowrap">{property.address}</td>
                <td className="px-4 py-2 whitespace-nowrap">{property.premiumProperty}</td>
                <td className="px-4 py-2 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${property.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{property.status}</span></td>
                <td className="px-4 py-2 whitespace-nowrap">{property.createdDate}</td>
                <td className="px-4 py-2 whitespace-nowrap">{property.totalView}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <button onClick={() => handleEdit(property)} className="text-blue-600 hover:underline mr-2 flex items-center">
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button onClick={() => handleDelete(property.id)} className="text-red-600 hover:underline flex items-center">
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

export default PropertyList;
