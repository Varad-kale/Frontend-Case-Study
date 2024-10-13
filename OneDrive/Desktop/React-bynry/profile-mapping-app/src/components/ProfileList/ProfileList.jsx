// components/ProfileList/ProfileList.js (Updated)
import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import { Grid } from '@mui/material';

const ProfileList = ({ profiles, onSummaryClick }) => {
  return (
    <Grid container spacing={2}>
      {profiles.map(profile => (
        <Grid item xs={12} sm={6} md={4} key={profile.id}>
          <ProfileCard profile={profile} onSummaryClick={onSummaryClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProfileList;
