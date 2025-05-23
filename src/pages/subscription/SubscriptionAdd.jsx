import React, { useState } from 'react';

const SubscriptionAdd = () => {
  const [formData, setFormData] = useState({
    user: '',
    package: '',
    totalAmount: '',
    paymentType: 'razorpay',
    subscriptionStartDate: '',
    subscriptionEndDate: '',
    cancelledDate: '',
    status: 'Active'
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
        <h1 className="text-3xl font-bold">Add Subscription</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow text-lg">
          Back
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="user">User *</label>
            <input
              type="text"
              id="user"
              name="user"
              value={formData.user}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="package">Package *</label>
            <input
              type="text"
              id="package"
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="totalAmount">Total Amount *</label>
            <input
              type="text"
              id="totalAmount"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="paymentType">Payment Type *</label>
            <select
              id="paymentType"
              name="paymentType"
              value={formData.paymentType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            >
              <option value="razorpay">Razorpay</option>
              <option value="paypal">PayPal</option>
              <option value="stripe">Stripe</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="subscriptionStartDate">Subscription Start Date *</label>
            <input
              type="datetime-local"
              id="subscriptionStartDate"
              name="subscriptionStartDate"
              value={formData.subscriptionStartDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="subscriptionEndDate">Subscription End Date *</label>
            <input
              type="datetime-local"
              id="subscriptionEndDate"
              name="subscriptionEndDate"
              value={formData.subscriptionEndDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="cancelledDate">Cancelled Date</label>
            <input
              type="datetime-local"
              id="cancelledDate"
              name="cancelledDate"
              value={formData.cancelledDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Status</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={formData.status === 'Active'}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <span className="ml-2 text-lg">Active</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={formData.status === 'Inactive'}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <span className="ml-2 text-lg">Inactive</span>
              </label>
            </div>
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

export default SubscriptionAdd;
