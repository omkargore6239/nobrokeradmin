import React from 'react';

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      name: 'Prop',
      customer: 'Ruchir Shah',
      category: 'Bungalow',
      bhk: '1 BHK',
      price: '$256,000,000.00',
      address: '3 Makram Ebeid, Al Mintaq...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'May 19, 2025 8:45 AM',
      totalView: '1'
    },
    {
      id: 2,
      name: 'Booking Flats',
      customer: 'Donald Trump',
      category: 'Agriculture Land',
      bhk: '2 BHK',
      price: '$500,000,000.00',
      address: '8QVF+X7G Rajkot, Gujarat...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'April 30, 2025 9:35 AM',
      totalView: '4'
    },
    {
      id: 3,
      name: 'Marvel Villa',
      customer: 'Hilda Blink',
      category: 'House',
      bhk: '3 BHK',
      price: '$247,000,000.00',
      address: '8QH5+MV4, Manharpura 1, M...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'April 9, 2025 9:06 AM',
      totalView: '7'
    },
    {
      id: 4,
      name: 'Golden Arm',
      customer: 'Hilda Blink',
      category: 'House',
      bhk: '1 BHK',
      price: '$250,000,000.00',
      address: '8P7V+RCF Rajkot, Gujarat...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'April 9, 2025 9:04 AM',
      totalView: '1'
    },
    {
      id: 5,
      name: "McDonald's Farm",
      customer: 'Hilda Blink',
      category: 'House',
      bhk: '1 BHK',
      price: '$150,050,000.00',
      address: '2, near madhuvan par, San...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'April 9, 2025 9:01 AM',
      totalView: '4'
    },
    {
      id: 6,
      name: 'Haritage Arcade',
      customer: 'Admin user',
      category: 'House',
      bhk: '3 BHK',
      price: '$320,000,000.00',
      address: '7RW2+427, Trikon Baug, Pa...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'April 9, 2025 5:04 AM',
      totalView: '2'
    },
    {
      id: 7,
      name: 'Cosmo Prime',
      customer: 'Admin user',
      category: 'House',
      bhk: '3 BHK',
      price: '$540,000,000.00',
      address: 'Hudco Quarters, A-246, Ko...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'April 9, 2025 5:03 AM',
      totalView: '2'
    },
    {
      id: 8,
      name: 'Vraj antica',
      customer: 'Admin user',
      category: 'House',
      bhk: '3 BHK',
      price: '$350,000,000.00',
      address: '2, 80 Feet Rd, Patel Naga...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'April 9, 2025 5:00 AM',
      totalView: '0'
    },
    {
      id: 9,
      name: 'Siddhi marble',
      customer: 'Admin user',
      category: 'House',
      bhk: '3 BHK',
      price: '$500,000,000.00',
      address: 'Amernatha Chowk, Katharoy...',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: 'April 9, 2025 4:58 AM',
      totalView: '2'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Property List</h1>
        <div className="flex space-x-2">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset Filter</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Filter</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download Property CSV</button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Import Property</button>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">CSV</button>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Add Property</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Delete Selected</button>
          <input type="text" placeholder="Search" className="border rounded p-2" />
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
                  <button className="text-blue-600 hover:underline mr-2">View</button>
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

export default PropertyList;
