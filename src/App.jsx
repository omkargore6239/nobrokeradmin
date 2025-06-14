// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login/Login';
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
import CustomerList from './pages/customer/CustomerList';
import MastercodeListPage from './pages/Mastercode/MastercodeListPage';
import MastercodeFormPage from './pages/Mastercode/MastercodeFormPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          //element={!isAuthenticated ? <Login onLogin={() => setIsAuthenticated(true)} /> : <Navigate to="/dashboard" />}
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/logout"
          element={<Login onLogin={() => setIsAuthenticated(false)} />}
        />
        <Route
          path="/*"
          element={isAuthenticated ? (
            <Layout>
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
                <Route path="/customers/list" element={<CustomerList />} />
                <Route path="/mastercodes/list" element={<MastercodeListPage />} />
                <Route path="/mastercodes/add" element={<MastercodeFormPage />} />
                <Route path="/mastercodes/edit/:id" element={<MastercodeFormPage />} />
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/login" />
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;
