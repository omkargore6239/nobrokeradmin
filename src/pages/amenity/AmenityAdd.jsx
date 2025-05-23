// src/pages/amenity/AmenityAdd.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AmenityAdd = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: 'Active',
    type: 'Text Box',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amenities = JSON.parse(localStorage.getItem('amenities')) || [];
    const newAmenity = {
      ...formData,
      id: Date.now(),
      image: formData.image ? URL.createObjectURL(formData.image) : null,
    };

    amenities.push(newAmenity);
    localStorage.setItem('amenities', JSON.stringify(amenities));

    navigate('/amenities/list');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add Amenity</h1>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Amenity Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
              placeholder="Amenity Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Status <span className="text-red-500">*</span></label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option>Text Box</option>
              <option>Checkbox</option>
              <option>Dropdown</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="col-span-2 flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => navigate('/amenities/list')}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            >
              Back
            </button>
            <button
              type="submit"
              onClick={() => navigate('/amenities/list')}
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AmenityAdd;
