// src/components/ProfileList.js
import React, { useContext, useState } from 'react';
import { ProfileContext } from '../ProfileContext';
import { Link } from 'react-router-dom';

const ProfileList = () => {
  const { profiles } = useContext(ProfileContext);
  const [nameFilter, setNameFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [otherFilter, setOtherFilter] = useState('');

  const openMap = (address) => {
    const formattedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(googleMapsUrl, '_blank'); // Open in a new tab
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    profile.address.toLowerCase().includes(locationFilter.toLowerCase()) &&
    (profile.description.toLowerCase().includes(otherFilter.toLowerCase()) ||
      profile.address.toLowerCase().includes(otherFilter.toLowerCase()))
  );

  return (
    <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-700 mb-6">Profiles Map App</h1>
      <div className="flex flex-col sm:flex-row justify-center mb-6 gap-3">
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="p-3 w-full sm:w-1/3 border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Search by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="p-3 w-full sm:w-1/3 border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Search by keyword"
          value={otherFilter}
          onChange={(e) => setOtherFilter(e.target.value)}
          className="p-3 w-full sm:w-1/3 border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex justify-center mb-6">
        <Link 
          to="/admin/login" 
          className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Admin Panel
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map(profile => (
            <div 
              key={profile.id} 
              className="profile-card bg-white rounded-2xl shadow-lg p-6 border border-indigo-100 transition-transform transform hover:scale-105"
              title='Show Details'
            >
              <Link to={`/profile/${profile.id}`} className="flex flex-col items-center">
                <img
                  src={profile.photo ? profile.photo : '/images/placeholder-profile.png'}
                  alt={profile.name}
                  className="w-28 h-28 rounded-full border-4 border-indigo-500 mb-4 object-cover"
                />
                <h2 className="text-xl font-bold text-indigo-600">{profile.name}</h2>
                <p className="text-md text-gray-700 text-center mt-2">
                  {profile.description.length > 100 ? `${profile.description.slice(0, 100)}...` : profile.description}
                </p>
                <p className="text-sm text-gray-500 mt-1">{profile.address}</p>
                <button 
                  onClick={() => openMap(profile.address)} 
                  className="mt-4 bg-indigo-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-indigo-600 transition duration-300"
                >
                  View on Map
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No profiles available. Please add some!</p>
        )}
      </div>
    </div>
  );
};

export default ProfileList;
