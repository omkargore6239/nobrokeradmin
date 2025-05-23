import React from 'react';

const CustomerList = () => {
  // Sample data for customers
  const customers = [
    {
      id: 1,
      firstName: 'Said',
      lastName: 'Saud',
      email: 't********@gmail.com',
      contactNumber: '+05********53',
      createdDate: 'March 25, 2025 8:58 AM',
      status: 'Active'
    },
    {
      id: 2,
      firstName: 'Ahmed',
      lastName: 'Said',
      email: 'j************@gmail.com',
      contactNumber: '+05********56',
      createdDate: 'March 25, 2025 8:42 AM',
      status: 'Active'
    },
    {
      id: 3,
      firstName: 'lahcen',
      lastName: 'Ouchary',
      email: 's****@gmail.com',
      contactNumber: '+21********48',
      createdDate: 'March 12, 2025 5:21 PM',
      status: 'Active'
    },
    {
      id: 4,
      firstName: 'Ahmed',
      lastName: 'Said',
      email: 'u****@gmail.com',
      contactNumber: '+91********51',
      createdDate: 'March 4, 2025 1:23 PM',
      status: 'Active'
    },
    {
      id: 5,
      firstName: 'Dev',
      lastName: 'Acc',
      email: 'd***@yopmail.com',
      contactNumber: '-',
      createdDate: 'February 28, 2025 7:12 AM',
      status: 'Active'
    },
    {
      id: 6,
      firstName: 'zaayan',
      lastName: 'ahmed',
      email: 'A***@gmail.com',
      contactNumber: '+20********39',
      createdDate: 'February 21, 2025 12:33 PM',
      status: 'Active'
    },
    {
      id: 7,
      firstName: 'Donald',
      lastName: 'Trump',
      email: 't****@gmail.com',
      contactNumber: '+91********10',
      createdDate: 'January 16, 2025 9:41 AM',
      status: 'Active'
    },
    {
      id: 8,
      firstName: 'محمد',
      lastName: 'جنان',
      email: 'f****@gmail.com',
      contactNumber: '+96********60',
      createdDate: 'September 30, 2024 5:37 PM',
      status: 'Active'
    },
    {
      id: 9,
      firstName: 'Mohamed',
      lastName: 'M',
      email: 'h********@gmail.com',
      contactNumber: '+20********50',
      createdDate: 'September 24, 2024 4:15 PM',
      status: 'Active'
    },
    {
      id: 10,
      firstName: 'Salem',
      lastName: 'Haddara',
      email: 'h********@gmail.com',
      contactNumber: '+96********87',
      createdDate: 'September 20, 2024 5:54 PM',
      status: 'Active'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customer List</h1>
        <div className="flex space-x-2">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Delete Selected
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            CSV
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <input type="text" placeholder="Search" className="border rounded p-2" />
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer, index) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.contactNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.createdDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
