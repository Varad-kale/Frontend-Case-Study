// pages/Home/Home.js (Updated with Loading Indicator)
import React, { useState, useEffect } from 'react';
import ProfileList from '../../components/ProfileList/ProfileList';
import MapComponent from '../../components/MapComponent/MapComponent';
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from 'axios';
import ErrorSnackbar from '../../components/ErrorSnackbar/ErrorSnackbar';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Home = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/profiles') // Replace with your API endpoint
      .then(response => {
        setProfiles(response.data);
        setFilteredProfiles(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Failed to fetch profiles. Please try again later.');
        setLoading(false);
      });
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProfiles(profiles);
    } else {
      const lowerQuery = query.toLowerCase();
      setFilteredProfiles(
        profiles.filter(profile =>
          profile.name.toLowerCase().includes(lowerQuery) ||
          profile.address.city.toLowerCase().includes(lowerQuery)
        )
      );
    }
  };

  const handleCloseError = () => {
    setError('');
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ProfileList profiles={filteredProfiles} onSummaryClick={handleSummaryClick} />
      {selectedProfile && <MapComponent selectedProfile={selectedProfile} />}
      <LoadingSpinner open={loading} />
      <ErrorSnackbar open={!!error} message={error} onClose={handleCloseError} />
    </div>
  );
};

export default Home;
