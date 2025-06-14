import React, { useState } from 'react';
import { FaSearch, FaEdit, FaPlus, FaCheck, FaTimes } from 'react-icons/fa';

const MastercodeListPage = () => {
  const [propertyTypesSearchTerm, setPropertyTypesSearchTerm] = useState('');
  const [propertyAttributesSearchTerm, setPropertyAttributesSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
  const [isAttributeModalOpen, setIsAttributeModalOpen] = useState(false);
  const [isValueModalOpen, setIsValueModalOpen] = useState(false);
  const [typeModalData, setTypeModalData] = useState({ id: null, code: "", description: "", status: "Active" });
  const [attributeModalData, setAttributeModalData] = useState({ id: null, code: "", description: "", status: "Active" });
  const [valueModalData, setValueModalData] = useState({ id: null, value: "", description: "", status: "Active" });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Static data for property types with status
  const [propertyTypes, setPropertyTypes] = useState([
    { id: 1, code: 'Apartment', name: 'Apartment', description: 'Residential apartment units', status: 'Active' },
    { id: 2, code: 'House', name: 'House', description: 'Single family homes', status: 'Active' },
    { id: 3, code: 'Condo', name: 'Condo', description: 'Condominium units', status: 'Inactive' },
    { id: 4, code: 'Villa', name: 'Villa', description: 'Luxury villa properties', status: 'Active' },
  ]);

  // Static data for property attributes with status
  const [propertyAttributes, setPropertyAttributes] = useState([
    {
      id: 1,
      code: 'Apartment',
      description: 'Bedroom Count',
      status: 'Active',
      values: [
        { id: 1, value: '1', description: '1 Bedroom', status: 'Active' },
        { id: 2, value: '2', description: '2 Bedrooms', status: 'Active' },
        { id: 3, value: '3', description: '3 Bedrooms', status: 'Inactive' },
        { id: 4, value: '4+', description: '4 or more Bedrooms', status: 'Active' }
      ]
    },
    {
      id: 2,
      code: 'House',
      description: 'Bathroom Count',
      status: 'Active',
      values: [
        { id: 1, value: '1', description: '1 Bathroom', status: 'Active' },
        { id: 2, value: '1.5', description: '1.5 Bathrooms', status: 'Inactive' },
        { id: 3, value: '2', description: '2 Bathrooms', status: 'Active' },
        { id: 4, value: '2.5', description: '2.5 Bathrooms', status: 'Active' },
        { id: 5, value: '3+', description: '3 or more Bathrooms', status: 'Inactive' }
      ]
    },
    {
      id: 3,
      code: 'Condo',
      description: 'Condominium units',
      status: 'Active',
      values: [
        { id: 1, value: '1', description: '1 Bathroom', status: 'Active' },
        { id: 2, value: '1.5', description: '1.5 Bathrooms', status: 'Inactive' },
        { id: 3, value: '2', description: '2 Bathrooms', status: 'Active' },
        { id: 4, value: '2.5', description: '2.5 Bathrooms', status: 'Active' },
        { id: 5, value: '3+', description: '3 or more Bathrooms', status: 'Inactive' }
      ]
    },
    {
      id: 4,
      code: 'Villa',
      description: 'Luxury villa properties',
      status: 'Active',
      values: [
        { id: 1, value: '1', description: '1 Bathroom', status: 'Active' },
        { id: 2, value: '1.5', description: '1.5 Bathrooms', status: 'Inactive' },
        { id: 3, value: '2', description: '2 Bathrooms', status: 'Active' },
        { id: 4, value: '2.5', description: '2.5 Bathrooms', status: 'Active' },
        { id: 5, value: '3+', description: '3 or more Bathrooms', status: 'Inactive' }
      ]
    },
  ]);

  // Filtered data
  const filteredPropertyTypes = propertyTypes.filter(propertyType =>
    propertyType.code.toLowerCase().includes(propertyTypesSearchTerm.toLowerCase()) ||
    propertyType.name.toLowerCase().includes(propertyTypesSearchTerm.toLowerCase()) ||
    propertyType.description.toLowerCase().includes(propertyTypesSearchTerm.toLowerCase())
  );

  const filteredPropertyAttributes = propertyAttributes.filter(attribute =>
    attribute.code.toLowerCase().includes(propertyAttributesSearchTerm.toLowerCase()) ||
    attribute.description.toLowerCase().includes(propertyAttributesSearchTerm.toLowerCase())
  );

  // Get the selected group's attributes
  const selectedGroupData = propertyTypes.find(type => type.code === selectedGroup);
  const isSelectedGroupActive = selectedGroupData ? selectedGroupData.status === 'Active' : false;
  const selectedGroupAttributes = selectedGroupData ? propertyAttributes.find(attr => attr.code === selectedGroup) || { values: [] } : { values: [] };

  // Toggle status functions
  const toggleTypeStatus = (id) => {
    setPropertyTypes(propertyTypes.map(type =>
      type.id === id
        ? { ...type, status: type.status === 'Active' ? 'Inactive' : 'Active' }
        : type
    ));
  };

  const toggleAttributeStatus = (id) => {
    setPropertyAttributes(propertyAttributes.map(attr =>
      attr.id === id
        ? { ...attr, status: attr.status === 'Active' ? 'Inactive' : 'Active' }
        : attr
    ));
  };

  const toggleValueStatus = (attrId, valueId) => {
    setPropertyAttributes(propertyAttributes.map(attr =>
      attr.id === attrId
        ? {
            ...attr,
            values: attr.values.map(value =>
              value.id === valueId
                ? { ...value, status: value.status === 'Active' ? 'Inactive' : 'Active' }
                : value
            )
          }
        : attr
    ));
  };

  // Handle row click for property types
  const handleRowClick = (groupCode) => {
    setSelectedGroup(groupCode);
  };

  // Modal functions for Property Types
  const openTypeModal = (data = { id: null, code: "", description: "", status: "Active" }) => {
    setTypeModalData(data);
    setIsTypeModalOpen(true);
  };

  const closeTypeModal = () => {
    setIsTypeModalOpen(false);
    setTypeModalData({ id: null, code: "", description: "", status: "Active" });
  };

  const handleTypeSave = () => {
    if (typeModalData.id) {
      // Update existing item
      setPropertyTypes(prevData =>
        prevData.map(row => (row.id === typeModalData.id ? typeModalData : row))
      );
    } else {
      // Add new item
      setPropertyTypes([...propertyTypes, { ...typeModalData, id: propertyTypes.length + 1 }]);
    }
    closeTypeModal();
  };

  // Modal functions for Property Attributes
  const openAttributeModal = (data = { id: null, code: "", description: "", status: "Active" }) => {
    setAttributeModalData(data);
    setIsAttributeModalOpen(true);
  };

  const closeAttributeModal = () => {
    setIsAttributeModalOpen(false);
    setAttributeModalData({ id: null, code: "", description: "", status: "Active" });
  };

  const handleAttributeSave = () => {
    if (attributeModalData.id) {
      // Update existing item
      setPropertyAttributes(prevData =>
        prevData.map(row => (row.id === attributeModalData.id ? attributeModalData : row))
      );
    } else {
      // Add new item
      setPropertyAttributes([...propertyAttributes, { ...attributeModalData, id: propertyAttributes.length + 1 }]);
    }
    closeAttributeModal();
  };

  // Modal functions for Attribute Values
  const openValueModal = (data = { id: null, value: "", description: "", status: "Active" }) => {
    setValueModalData(data);
    setIsValueModalOpen(true);
  };

  const closeValueModal = () => {
    setIsValueModalOpen(false);
    setValueModalData({ id: null, value: "", description: "", status: "Active" });
  };

  const handleValueSave = () => {
    // This would need to be implemented based on your specific requirements
    // For now, we'll just close the modal
    closeValueModal();
  };

  // Pagination for property types
  const totalPages = Math.ceil(filteredPropertyTypes.length / rowsPerPage);
  const displayedPropertyTypes = filteredPropertyTypes.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Pagination component
  const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    return (
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="px-4 py-1">{currentPage}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Property Types Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="bg-green-600 text-white font-medium py-3 px-4 rounded-t-lg mb-4">
              <h2 className="text-xl font-bold">Property Types</h2>
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search property types..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={propertyTypesSearchTerm}
                onChange={(e) => setPropertyTypesSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Property Types Header */}
            <div className="grid grid-cols-5 bg-green-50 text-green-800 font-bold py-3 px-4 rounded-t-lg border-b border-green-200">
              <div className="p-2">S.No</div>
              <div className="p-2">Code</div>
              <div className="p-2">Description</div>
              <div className="p-2">Status</div>
              <div className="p-2">Actions</div>
            </div>

            {/* Property Types List */}
            {displayedPropertyTypes.length > 0 ? (
              displayedPropertyTypes.map((propertyType, index) => (
                <div
                  key={propertyType.id}
                  className={`grid grid-cols-5 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedGroup === propertyType.code ? 'bg-yellow-50 border-l-4 border-yellow-400' : ''
                  }`}
                  onClick={() => handleRowClick(propertyType.code)}
                >
                  <div className="p-2">{(currentPage - 1) * rowsPerPage + index + 1}</div>
                  <div className="p-2 font-medium">{propertyType.code}</div>
                  <div className="p-2 text-gray-600">{propertyType.description}</div>
                  <div className="p-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTypeStatus(propertyType.id);
                      }}
                      className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${
                        propertyType.status === 'Active'
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                      }`}
                    >
                      {propertyType.status}
                    </button>
                  </div>
                  <div className="p-2 flex justify-center">
                    <button
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        openTypeModal(propertyType);
                      }}
                    >
                      <FaEdit className="text-lg" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No property types found matching your search criteria.
              </div>
            )}

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />

            {/* Add Property Type button */}
            <div className="flex justify-end mt-4">
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
                onClick={() => openTypeModal()}
              >
                <FaPlus className="mr-2" />
                Add Property Type
              </button>
            </div>
          </div>
        </div>

        {/* Property Attributes Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="bg-green-600 text-white font-medium py-3 px-4 rounded-t-lg mb-4">
              <h2 className="text-xl font-bold">Property Attributes</h2>
            </div>

            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search property attributes..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={propertyAttributesSearchTerm}
                onChange={(e) => setPropertyAttributesSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Property Attributes List */}
            {selectedGroup ? (
              <>
                {filteredPropertyAttributes
                  .filter(attr => attr.code === selectedGroup)
                  .map((attribute) => (
                    <div key={attribute.id}>
                    

                      {/* Attribute Values */}
                      {isSelectedGroupActive && (
                        <div className="ml-2 mt-2 mb-2">
                          <div className="grid grid-cols-4 bg-blue-50 text-green-800 font-bold py-2 px-4 rounded-t-lg border-b border-blue-200">
                            <div className="p-2">Value</div>
                            <div className="p-2">Description</div>
                            <div className="p-2">Status</div>
                            <div className="p-2">Actions</div>
                          </div>

                          {attribute.values.map((value, valueIndex) => (
                            <div key={value.id} className={`grid grid-cols-4 py-2 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${valueIndex % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                              <div className="p-2 font-medium">{value.value}</div>
                              <div className="p-2">{value.description}</div>
                              <div className="p-2">
                                <button
                                  onClick={() => toggleValueStatus(attribute.id, value.id)}
                                  className={`px-2 py-1 rounded-md text-sm font-semibold transition-colors ${
                                    value.status === 'Active'
                                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                      : 'bg-red-100 text-red-800 hover:bg-red-200'
                                  }`}
                                >
                                  {value.status}
                                </button>
                              </div>
                              <div className="p-2 flex justify-center">
                                <button
                                  className="text-blue-500 hover:text-blue-700 transition-colors"
                                  onClick={() => openValueModal(value)}
                                >
                                  <FaEdit className="text-lg" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                {selectedGroup ? "No attributes found for this property type." : "Select a property type to view its attributes"}
              </div>
            )}

            {/* Add Property Attribute button */}
            <div className="flex justify-end mt-4">
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
                onClick={() => openAttributeModal()}
              >
                <FaPlus className="mr-2" />
                Add Property Attribute
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Type Modal */}
      {isTypeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-30 z-50">
          <div className="bg-neutral-300 rounded-xl shadow-xl w-96 p-6">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h2 className="text-xl font-bold text-gray-800">
                {typeModalData.id ? "Edit Property Type" : "Add Property Type"}
              </h2>
              <button
                onClick={closeTypeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Code</label>
              <input
                type="text"
                value={typeModalData.code}
                onChange={(e) => setTypeModalData({ ...typeModalData, code: e.target.value })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Description</label>
              <input
                type="text"
                value={typeModalData.description}
                onChange={(e) => setTypeModalData({ ...typeModalData, description: e.target.value })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Status</label>
              <select
                value={typeModalData.status}
                onChange={(e) => setTypeModalData({ ...typeModalData, status: e.target.value })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeTypeModal}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleTypeSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
              >
                <FaCheck className="mr-2" />
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Property Attribute Modal */}
      {isAttributeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-30 z-50">
          <div className="bg-neutral-300 rounded-xl shadow-xl w-96 p-6">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h2 className="text-xl font-bold text-gray-800">
                {attributeModalData.id ? "Edit Property Attribute" : "Add Property Attribute"}
              </h2>
              <button
                onClick={closeAttributeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Code</label>
              <input
                type="text"
                value={attributeModalData.code}
                onChange={(e) => setAttributeModalData({ ...attributeModalData, code: e.target.value })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Description</label>
              <input
                type="text"
                value={attributeModalData.description}
                onChange={(e) => setAttributeModalData({ ...attributeModalData, description: e.target.value })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Status</label>
              <select
                value={attributeModalData.status}
                onChange={(e) => setAttributeModalData({ ...attributeModalData, status: e.target.value })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeAttributeModal}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAttributeSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
              >
                <FaCheck className="mr-2" />
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Attribute Value Modal */}
      {isValueModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-30 z-50">
          <div className="bg-neutral-300 rounded-xl shadow-xl w-96 p-6">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h2 className="text-xl font-bold text-gray-800">
                {valueModalData.id ? "Edit Attribute Value" : "Add Attribute Value"}
              </h2>
              <button
                onClick={closeValueModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Value</label>
              <input
                type="text"
                value={valueModalData.value}
                onChange={(e) => setValueModalData({ ...valueModalData, value: e.target.value })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Description</label>
              <input
                type="text"
                value={valueModalData.description}
                onChange={(e) => setValueModalData({ ...valueModalData, description: e.target.value })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Status</label>
              <select
                value={valueModalData.status}
                onChange={(e) => setValueModalData({ ...valueModalData, status: e.target.value })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeValueModal}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleValueSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
              >
                <FaCheck className="mr-2" />
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MastercodeListPage;
