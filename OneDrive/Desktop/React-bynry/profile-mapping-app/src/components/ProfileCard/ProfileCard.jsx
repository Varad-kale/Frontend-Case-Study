// components/ProfileCard/ProfileCard.js (Updated to link to details)
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile, onSummaryClick }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/profiles/${profile.id}`);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={profile.photo}
        alt={`${profile.name}'s photo`}
      />
      <CardContent>
        <Typography variant="h5">{profile.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {profile.description}
        </Typography>
        <Button variant="contained" onClick={() => onSummaryClick(profile)}>
          Summary
        </Button>
        <Button variant="outlined" onClick={handleDetailsClick} style={{ marginLeft: '10px' }}>
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
