import React from 'react';

const PackageList = () => {
  // Sample data for packages
  const packages = [
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
    {
      id: 3,
      name: 'Advanced Listing Plan',
      durationUnit: 'monthly',
      duration: 1,
      price: '$1999.00',
      viewPropertyLimit: 50,
      addPropertyLimit: 5,
      advertisementLimit: 5,
      createdDate: 'September 1, 2023 11:01 AM',
      updatedDate: 'December 8, 2024 8:05 AM',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Golden',
      durationUnit: 'yearly',
      duration: 2,
      price: '$360.00',
      viewPropertyLimit: 2,
      addPropertyLimit: 2,
      advertisementLimit: 2,
      createdDate: 'December 12, 2023 3:56 AM',
      updatedDate: 'February 7, 2024 1:26 PM',
      status: 'Inactive'
    },
    {
      id: 5,
      name: 'Elite Property Plan',
      durationUnit: 'monthly',
      duration: 1,
      price: '$0.00',
      viewPropertyLimit: 50,
      addPropertyLimit: 3,
      advertisementLimit: 1,
      createdDate: 'February 7, 2024 1:28 PM',
      updatedDate: 'March 29, 2025 7:16 AM',
      status: 'Active'
    },
    {
      id: 6,
      name: 'test',
      durationUnit: 'monthly',
      duration: 1,
      price: '$0.00',
      viewPropertyLimit: 0,
      addPropertyLimit: 0,
      advertisementLimit: 0,
      createdDate: 'September 13, 2024 3:53 PM',
      updatedDate: 'December 8, 2024 6:38 AM',
      status: 'Inactive'
    },
    {
      id: 7,
      name: 'Mamiti',
      durationUnit: 'monthly',
      duration: 3,
      price: '$5000.00',
      viewPropertyLimit: 30,
      addPropertyLimit: 30,
      advertisementLimit: 15,
      createdDate: 'December 31, 2024 1:06 AM',
      updatedDate: 'December 31, 2024 1:06 AM',
      status: 'Active'
    },
    {
      id: 8,
      name: 'Vineet',
      durationUnit: 'monthly',
      duration: 1,
      price: '$99.00',
      viewPropertyLimit: 0,
      addPropertyLimit: 1,
      advertisementLimit: 0,
      createdDate: 'January 30, 2025 12:29 PM',
      updatedDate: 'January 30, 2025 12:29 PM',
      status: 'Active'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Package List</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Package
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Delete Selected
          </button>
          <input type="text" placeholder="Search" className="border rounded p-2" />
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

export default PackageList;
