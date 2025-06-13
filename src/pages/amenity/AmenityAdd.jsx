import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AmenityAdd = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'dropdown',
    image: '',
    value: '',
    status: 'Active',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.amenity) {
      setFormData(location.state.amenity);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amenities = JSON.parse(localStorage.getItem('amenities')) || [];
    const existingAmenityIndex = amenities.findIndex(a => a.id === formData.id);

    if (existingAmenityIndex >= 0) {
      // Update existing amenity
      const updatedAmenities = [...amenities];
      updatedAmenities[existingAmenityIndex] = {
        ...formData,
        updatedDate: new Date().toLocaleString()
      };
      localStorage.setItem('amenities', JSON.stringify(updatedAmenities));
    } else {
      // Add new amenity
      const newAmenity = {
        ...formData,
        id: Date.now(),
        createdDate: new Date().toLocaleString(),
        updatedDate: new Date().toLocaleString(),
      };
      amenities.push(newAmenity);
      localStorage.setItem('amenities', JSON.stringify(amenities));
    }

    navigate('/amenities/list');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add Amenity</h1>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">
              Amenity Name <span className="text-red-500">*</span>
            </label>
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
            <label className="block mb-1 font-semibold">
              Type <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="dropdown">Dropdown</option>
              <option value="textarea">Textarea</option>
              <option value="textbox">Textbox</option>
              <option value="radiobutton">Radiobutton</option>
              <option value="checkbox">Checkbox</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Image URL"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Status <span className="text-red-500">*</span>
            </label>
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
            <label className="block mb-1 font-semibold">Value</label>
            <input
              type="text"
              name="value"
              value={formData.value}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Value"
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
