import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AmenityList = () => {
  const [amenities, setAmenities] = useState([
    {
      id: 1,
      name: 'Park',
      type: 'dropdown',
      image: 'path_to_image_1',
      value: '1,2,3,4,5,6',
      status: 'Active',
      createdDate: 'August 29, 2023 10:03 AM',
      updatedDate: 'January 27, 2025 12:10 PM'
    },
    {
      id: 2,
      name: 'Swimming Pool',
      type: 'textarea',
      image: 'path_to_image_2',
      value: '',
      status: 'Active',
      createdDate: 'August 29, 2023 10:12 AM',
      updatedDate: 'August 9, 2024 12:58 PM'
    },
    // Additional amenities...
  ]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    setAmenities(amenities.filter(amenity => amenity.id !== id));
  };

  const handleEdit = (amenity) => {
    navigate('/amenities/add', { state: { amenity } });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Amenity List</h1>
        <button
          onClick={() => navigate('/amenities/add')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Amenity
        </button>
      </div>
      <div className="mb-4">
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
          Delete Selected
        </button>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 px-4 py-2 rounded ml-4"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Value</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Created Date</th>
              <th className="border px-4 py-2">Updated Date</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {amenities.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center py-4">No amenities found.</td>
              </tr>
            ) : (
              amenities.map((amenity, index) => (
                <tr key={amenity.id}>
                  <td className="border px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{amenity.name}</td>
                  <td className="border px-4 py-2">{amenity.type}</td>
                  <td className="border px-4 py-2">
                    {amenity.image ? (
                      <img src={amenity.image} alt="Amenity" className="h-6" />
                    ) : (
                      'No Image'
                    )}
                  </td>
                  <td className="border px-4 py-2">{amenity.value}</td>
                  <td className="border px-4 py-2">
                    <span className={`px-2 py-1 rounded text-white ${amenity.status === 'Active' ? 'bg-blue-500' : 'bg-gray-500'}`}>
                      {amenity.status}
                    </span>
                  </td>
                  <td className="border px-4 py-2">{amenity.createdDate}</td>
                  <td className="border px-4 py-2">{amenity.updatedDate}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEdit(amenity)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(amenity.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AmenityList;
