// components/MapComponent/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ selectedProfile }) => {
  if (!selectedProfile || !selectedProfile.address) return null;

  const position = [selectedProfile.address.lat, selectedProfile.address.lng];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {selectedProfile.name}<br />{selectedProfile.address.street}, {selectedProfile.address.city}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
