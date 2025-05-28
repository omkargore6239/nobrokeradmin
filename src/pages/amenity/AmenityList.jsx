// src/pages/amenity/AmenityList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AmenityList = () => {
  const [amenities, setAmenities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('amenities')) || [];
    setAmenities(data);
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Amenities list</h1>
        <button
          onClick={() => navigate('/amenities/add')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Amenity
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Type Of Property: Image</th>
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
                <td colSpan="8" className="text-center py-4">No amenities found.</td>
              </tr>
            ) : (
              amenities.map((amenity, index) => (
                <tr key={amenity.id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{amenity.name}</td>
                  <td className="border px-4 py-2">
                    {amenity.image ? (
                      <img src={amenity.image} alt="Amenity" className="h-10" />
                    ) : (
                      'No Image'
                    )}
                  </td>
                  <td className="border px-4 py-2">{amenity.value}</td>
                  <td className="border px-4 py-2">{amenity.status}</td>
                  <td className="border px-4 py-2">{amenity.createdDate}</td>
                  <td className="border px-4 py-2">{amenity.updatedDate}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => navigate(`/amenities/edit/${amenity.id}`)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        // Handle delete logic here
                        console.log(`Delete amenity with id: ${amenity.id}`);
                      }}
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
