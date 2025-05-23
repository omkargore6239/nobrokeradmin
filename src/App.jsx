// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import EnquiryList from './pages/allenquiries/EnquiryList';
import AddEnquiry from './pages/allenquiries/AddEnquiry';
import AmenityList from './pages/amenity/AmenityList';
import AddAmenity from './pages/amenity/AmenityAdd';

import PropertyList from './pages/property/PropertyList';
import AddProperty from './pages/property/PropertyAdd';
import PackageList from './pages/package/PackageList';
import AddPackage from './pages/package/PackageAdd';
import SubscriptionList from './pages/subscription/SubscriptionList';
import AddSubscription from './pages/subscription/SubscriptionAdd';
import CustomerList from './pages/customer/CustomerList';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
         <div className="ml-64 p-6 w-full">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/enquiries/list" element={<EnquiryList />} />
            <Route path="/enquiries/add" element={<AddEnquiry />} />
            <Route path="/amenities/list" element={<AmenityList />} />
            <Route path="/amenities/add" element={<AddAmenity />} />
            <Route path="/properties/list" element={<PropertyList />} />
            <Route path="/properties/add" element={<AddProperty />} />
            <Route path="/packages/list" element={<PackageList />} />
            <Route path="/packages/add" element={<AddPackage />} />
            <Route path="/subscriptions/list" element={<SubscriptionList />} />
            <Route path="/subscriptions/add" element={<AddSubscription />} />
            <Route path="/customers/list" element={<CustomerList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
