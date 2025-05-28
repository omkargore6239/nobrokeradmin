import React, { useState } from 'react';

const AddEnquiry = () => {
  const [formData, setFormData] = useState({
    inquiryId: '',
    inquiryDate: '',
    propertyId: '',
    propertyImage: null,
    propertyName: '',
    propertyAddress: '',
    addressLine1: '',
    city: '',
    pincode: '',
    propertyType: '',
    amenities: '',
    price: '',
    customerId: '',
    customerName: '',
    customerContact: '',
    brokerId: '',
    brokerName: '',
    brokerContact: '',
    brokerAddress: '',
    brokerSubscription: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'propertyImage') {
      setFormData({
        ...formData,
        propertyImage: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.inquiryId = formData.inquiryId ? '' : 'Inquiry ID is required';
    tempErrors.inquiryDate = formData.inquiryDate ? '' : 'Inquiry Date is required';
    tempErrors.propertyId = formData.propertyId ? '' : 'Property ID is required';
    tempErrors.propertyName = formData.propertyName ? '' : 'Property Name is required';
    tempErrors.customerId = formData.customerId ? '' : 'Customer ID is required';
    tempErrors.customerName = formData.customerName ? '' : 'Customer Name is required';
    tempErrors.customerContact = formData.customerContact ? '' : 'Customer Contact is required';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add Enquiry</h1>
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inquiry Details Section */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">Inquiry Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Inquiry ID</label>
                <input
                  name="inquiryId"
                  value={formData.inquiryId}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.inquiryId && <p className="text-red-500 text-xs">{errors.inquiryId}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Inquiry Date</label>
                <input
                  type="date"
                  name="inquiryDate"
                  value={formData.inquiryDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.inquiryDate && <p className="text-red-500 text-xs">{errors.inquiryDate}</p>}
              </div>
            </div>
          </div>

          {/* Property Details Section */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">Property Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Property ID</label>
                <input
                  name="propertyId"
                  value={formData.propertyId}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.propertyId && <p className="text-red-500 text-xs">{errors.propertyId}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Property Image</label>
                <input
                  type="file"
                  name="propertyImage"
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Property Name</label>
                <input
                  name="propertyName"
                  value={formData.propertyName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.propertyName && <p className="text-red-500 text-xs">{errors.propertyName}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Property Type</label>
                <input
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Amenities</label>
                <input
                  name="amenities"
                  value={formData.amenities}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Price</label>
                <input
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Property Address</label>
                <input
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address Line 1</label>
                <input
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Pincode</label>
                <input
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Customer and Broker Details Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Customer and Broker Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Customer ID</label>
                <input
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.customerId && <p className="text-red-500 text-xs">{errors.customerId}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Customer Name</label>
                <input
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.customerName && <p className="text-red-500 text-xs">{errors.customerName}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Customer Contact</label>
                <input
                  name="customerContact"
                  value={formData.customerContact}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                {errors.customerContact && <p className="text-red-500 text-xs">{errors.customerContact}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Broker ID</label>
                <input
                  name="brokerId"
                  value={formData.brokerId}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Broker Name</label>
                <input
                  name="brokerName"
                  value={formData.brokerName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Broker Contact</label>
                <input
                  name="brokerContact"
                  value={formData.brokerContact}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Broker Address</label>
                <input
                  name="brokerAddress"
                  value={formData.brokerAddress}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Broker Subscription Type</label>
                <input
                  name="brokerSubscription"
                  value={formData.brokerSubscription}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEnquiry;
