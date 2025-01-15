// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import CreateShipment from './pages/CreateShipment';
import CreateTrip from './pages/CreateTrip';
import InAppChat from './pages/InAppChat';
import TrackShipment from './pages/TrackShipment';
import Notifications from './pages/Notifications';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Set LandingPage as the default route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/create-shipment" element={<CreateShipment />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/chat" element={<InAppChat />} />
        <Route path="/track-shipment" element={<TrackShipment />} />
        <Route path="/notifications" element={<Notifications />} />
        {/* Fallback route for undefined paths */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
