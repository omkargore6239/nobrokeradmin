// src/pages/enquiries/EnquiryList.jsx
import React from 'react';

const EnquiryList = () => {
  // Sample data for enquiries
  const enquiries = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', message: 'Interested in property details', createdDate: 'May 22, 2025' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '098-765-4321', message: 'Need more information', createdDate: 'May 21, 2025' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Enquiries</h1>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">{enquiry.createdDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnquiryList;
