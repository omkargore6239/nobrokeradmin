import React, { useState } from 'react';

const EnquiryList = () => {
  // Sample data (you can replace this with real API data)
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      customerName: 'Ramesh',
      contact: '9178****6512',
      propertyName: 'Katepuram',
      propertyAddress: 'New Sangvi',
      status: 'Pending',
    },
    {
      id: 2,
      customerName: '',
      contact: '',
      propertyName: '',
      propertyAddress: '',
      status: '',
    },
    {
      id: 3,
      customerName: '',
      contact: '',
      propertyName: '',
      propertyAddress: '',
      status: '',
    },
    {
      id: 4,
      customerName: '',
      contact: '',
      propertyName: '',
      propertyAddress: '',
      status: '',
    },
  ]);

  const handleStatusChange = (id, value) => {
    const updated = enquiries.map((enquiry) =>
      enquiry.id === id ? { ...enquiry, status: value } : enquiry
    );
    setEnquiries(updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Inquires List</h1>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 border">Sr No</th>
              <th className="px-4 py-2 border">Customer Name</th>
              <th className="px-4 py-2 border">Customer Contact</th>
              <th className="px-4 py-2 border">Property Name</th>
              <th className="px-4 py-2 border">Property Address</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry, index) => (
              <tr key={enquiry.id}>
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{enquiry.customerName}</td>
                <td className="px-4 py-2 border">{enquiry.contact}</td>
                <td className="px-4 py-2 border">{enquiry.propertyName}</td>
                <td className="px-4 py-2 border">{enquiry.propertyAddress}</td>
                <td className="px-4 py-2 border">
                  <select
                    className="border rounded px-2 py-1"
                    value={enquiry.status}
                    onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Pending">Pending</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>
                <td className="px-4 py-2 border">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnquiryList;
