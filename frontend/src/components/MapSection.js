// src/components/MapSection.js
import React, { useEffect } from 'react';
import L from 'leaflet';

const MapSection = () => {
  useEffect(() => {
    // Check if the map has already been initialized to prevent reinitializing
    if (!document.getElementById('map')._leaflet_id) {  // Check if map is already initialized
      const map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }
  }, []);

  return (
    <div id="map" style={{ height: '500px', width: '100%' }}></div>
  );
};

export default MapSection;
