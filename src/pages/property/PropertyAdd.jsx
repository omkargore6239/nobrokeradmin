import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';

const PropertyAdd = ({ onAddProperty }) => {
  const [formData, setFormData] = useState({
    category: '',
    propertyName: '',
    price: '',
    furnishedType: 'Unfurnished',
    priceDuration: 'Daily',
    securityDeposit: '',
    squareFeetArea: '',
    description: '',
    sellerType: 'Owner',
    ageOfProperty: '',
    maintenanceCharges: '',
    brokerage: '',
    bhk: 'None',
    propertyFor: 'Rent',
    premiumProperty: 'No',
    status: 'Active',
    createdDate: new Date().toLocaleString(),
    totalView: '0',
    country: '',
    state: '',
    city: '',
    latitude: '',
    longitude: '',
    address: '',
    coverImage: null,
    propertyGallery: [],
    videoURL: '',
    amenities: []
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.property) {
      setFormData(location.state.property);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProperty(formData);
    setFormData({
      category: '',
      propertyName: '',
      price: '',
      furnishedType: 'Unfurnished',
      priceDuration: 'Daily',
      securityDeposit: '',
      squareFeetArea: '',
      description: '',
      sellerType: 'Owner',
      ageOfProperty: '',
      maintenanceCharges: '',
      brokerage: '',
      bhk: 'None',
      propertyFor: 'Rent',
      premiumProperty: 'No',
      status: 'Active',
      createdDate: new Date().toLocaleString(),
      totalView: '0',
      country: '',
      state: '',
      city: '',
      latitude: '',
      longitude: '',
      address: '',
      coverImage: null,
      propertyGallery: [],
      videoURL: '',
      amenities: []
    });
    navigate('/properties/list');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Add Property</h1>
        <button onClick={() => navigate('/properties/list')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow text-lg flex items-center">
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="category">Category *</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg">
              <option value="">Select Category</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Agricultural">Agricultural</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="propertyName">Property Name *</label>
            <input type="text" id="propertyName" name="propertyName" value={formData.propertyName} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="price">Price *</label>
            <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Furnished Type</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input type="radio" name="furnishedType" value="Unfurnished" checked={formData.furnishedType === 'Unfurnished'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">Unfurnished</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="furnishedType" value="Fully" checked={formData.furnishedType === 'Fully'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">Fully</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="furnishedType" value="Semi" checked={formData.furnishedType === 'Semi'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">Semi</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="priceDuration">Price Duration</label>
            <select id="priceDuration" name="priceDuration" value={formData.priceDuration} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg">
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="securityDeposit">Security Deposit *</label>
            <input type="text" id="securityDeposit" name="securityDeposit" value={formData.securityDeposit} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="squareFeetArea">Square Feet Area *</label>
            <input type="text" id="squareFeetArea" name="squareFeetArea" value={formData.squareFeetArea} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="description">Description *</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg"></textarea>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Seller Type</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input type="radio" name="sellerType" value="Owner" checked={formData.sellerType === 'Owner'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">Owner</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="sellerType" value="Broker" checked={formData.sellerType === 'Broker'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">Broker</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="sellerType" value="Builder" checked={formData.sellerType === 'Builder'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">Builder</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="ageOfProperty">Age of Property (Year) *</label>
            <input type="text" id="ageOfProperty" name="ageOfProperty" value={formData.ageOfProperty} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="maintenanceCharges">Maintenance Charges (Per Month) *</label>
            <input type="text" id="maintenanceCharges" name="maintenanceCharges" value={formData.maintenanceCharges} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="brokerage">Brokerage *</label>
            <input type="text" id="brokerage" name="brokerage" value={formData.brokerage} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="bhk">BHK *</label>
            <select id="bhk" name="bhk" value={formData.bhk} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg">
              <option value="None">None</option>
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Property For</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input type="radio" name="propertyFor" value="Rent" checked={formData.propertyFor === 'Rent'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">Rent</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="propertyFor" value="Sell" checked={formData.propertyFor === 'Sell'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">Sell</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="propertyFor" value="PG/Co-living" checked={formData.propertyFor === 'PG/Co-living'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">PG/Co-living</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Premium Property</label>
            <div className="mt-2 space-y-2">
              <label className="inline-flex items-center">
                <input type="radio" name="premiumProperty" value="Yes" checked={formData.premiumProperty === 'Yes'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="premiumProperty" value="No" checked={formData.premiumProperty === 'No'} onChange={handleChange} className="text-blue-600" />
                <span className="ml-2 text-lg">No</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="status">Status</label>
            <select id="status" name="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="country">Country *</label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="state">State *</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="city">City *</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="latitude">Latitude *</label>
            <input type="text" id="latitude" name="latitude" value={formData.latitude} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="longitude">Longitude *</label>
            <input type="text" id="longitude" name="longitude" value={formData.longitude} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="address">Address *</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="coverImage">Cover Image</label>
            <input type="file" id="coverImage" name="coverImage" onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="propertyGallery">Property Gallery</label>
            <input type="file" id="propertyGallery" name="propertyGallery" onChange={handleChange} multiple className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="videoURL">Video URL</label>
            <input type="text" id="videoURL" name="videoURL" value={formData.videoURL} onChange={handleChange} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="amenities">Amenities</label>
            <input type="text" id="amenities" name="amenities" value={formData.amenities.join(', ')} onChange={(e) => setFormData({ ...formData, amenities: e.target.value.split(', ') })} className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-lg" />
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow text-lg flex items-center">
              <FaSave className="mr-2" /> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyAdd;
