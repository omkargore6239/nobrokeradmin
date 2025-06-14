import React, { useState } from 'react';
import { FaSave, FaTimes } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/Layout';

const MastercodeFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    code: isEditMode ? 'MC001' : '', // In a real app, you would fetch this data
    name: isEditMode ? 'Mastercode 1' : '',
    description: isEditMode ? 'Description for Mastercode 1' : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save the data to your backend
    console.log('Form submitted:', formData);
    navigate('/mastercodes/list');
  };

  return (
    
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {isEditMode ? 'Edit Mastercode' : 'Add Mastercode'}
          </h1>
          <button
            onClick={() => navigate('/mastercodes/list')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center"
          >
            <FaTimes className="mr-2" /> Cancel
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
              Mastercode Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Mastercode Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center"
            >
              <FaSave className="mr-2" /> Save
            </button>
          </div>
        </form>
      </div>
  );
};

export default MastercodeFormPage;
