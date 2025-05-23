import React, { useState } from 'react';

const PackageAdd = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration: '1',
    durationUnit: 'Monthly',
    status: 'Active',
    addPropertyLimitType: 'Limit',
    addPropertyLimit: '',
    viewPropertyLimitType: 'Limit',
    viewPropertyLimit: '',
    advertisementLimitType: 'Limit',
    advertisementLimit: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Add Package</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow text-lg">
          Back
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="price">Price *</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="duration">Duration *</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="durationUnit">Duration Unit</label>
            <select
              id="durationUnit"
              name="durationUnit"
              value={formData.durationUnit}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            >
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="status">Status *</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Add Property Limit</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="addPropertyLimitType"
                  value="Limit"
                  checked={formData.addPropertyLimitType === 'Limit'}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <span className="ml-2 text-lg">Limit</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="addPropertyLimitType"
                  value="Unlimited"
                  checked={formData.addPropertyLimitType === 'Unlimited'}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <span className="ml-2 text-lg">Unlimited</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="addPropertyLimit">Limit *</label>
            <input
              type="text"
              id="addPropertyLimit"
              name="addPropertyLimit"
              value={formData.addPropertyLimit}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">View Property Limit</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="viewPropertyLimitType"
                  value="Limit"
                  checked={formData.viewPropertyLimitType === 'Limit'}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <span className="ml-2 text-lg">Limit</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="viewPropertyLimitType"
                  value="Unlimited"
                  checked={formData.viewPropertyLimitType === 'Unlimited'}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <span className="ml-2 text-lg">Unlimited</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="viewPropertyLimit">Limit *</label>
            <input
              type="text"
              id="viewPropertyLimit"
              name="viewPropertyLimit"
              value={formData.viewPropertyLimit}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Advertisement Limit</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="advertisementLimitType"
                  value="Limit"
                  checked={formData.advertisementLimitType === 'Limit'}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <span className="ml-2 text-lg">Limit</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="advertisementLimitType"
                  value="Unlimited"
                  checked={formData.advertisementLimitType === 'Unlimited'}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <span className="ml-2 text-lg">Unlimited</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="advertisementLimit">Limit *</label>
            <input
              type="text"
              id="advertisementLimit"
              name="advertisementLimit"
              value={formData.advertisementLimit}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow text-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageAdd;
