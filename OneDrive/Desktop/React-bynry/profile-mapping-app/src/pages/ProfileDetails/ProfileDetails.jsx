// pages/ProfileDetails/ProfileDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileById } from '../../services/api';
// import { createProfile } from '../../services/api';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorSnackbar from '../../components/ErrorSnackbar/ErrorSnackbar';

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getProfileById(id)
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError('Failed to fetch profile details.');
        setLoading(false);
      });
  }, [id]);

  const handleCloseError = () => {
    setError('');
  };

  if (loading) return <LoadingSpinner open={true} />;
  if (error) return <ErrorSnackbar open={!!error} message={error} onClose={handleCloseError} />;

  return (
    profile && (
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={profile.photo}
          alt={`${profile.name}'s photo`}
        />
        <CardContent>
          <Typography variant="h4">{profile.name}</Typography>
          <Typography variant="body1" paragraph>{profile.description}</Typography>
          <Typography variant="h6">Contact Information</Typography>
          <Typography>Email: {profile.contact.email}</Typography>
          <Typography>Phone: {profile.contact.phone}</Typography>
          <Typography variant="h6">Interests</Typography>
          <ul>
            {profile.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          {/* Add more detailed information as needed */}
        </CardContent>
      </Card>
    )
  );
};

export default ProfileDetails;
