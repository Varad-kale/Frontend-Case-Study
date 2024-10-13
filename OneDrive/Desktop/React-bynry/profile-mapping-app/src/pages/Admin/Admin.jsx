// pages/Admin/Admin.js
import React, { useEffect, useState } from 'react';
import { getProfiles, createProfile, updateProfile, deleteProfile } from '../../services/api';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const Admin = () => {
  const [profiles, setProfiles] = useState([]);
  const [editingProfile, setEditingProfile] = useState(null);

  const fetchProfiles = () => {
    getProfiles()
      .then(response => setProfiles(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleDelete = (id) => {
    deleteProfile(id)
      .then(() => fetchProfiles())
      .catch(error => console.error(error));
  };

  const handleEdit = (profile) => {
    setEditingProfile(profile);
  };

  const handleFormSubmit = (profile) => {
    if (profile.id) {
      updateProfile(profile.id, profile).then(() => {
        setEditingProfile(null);
        fetchProfiles();
      });
    } else {
      createProfile(profile).then(() => fetchProfiles());
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ProfileForm onSubmit={handleFormSubmit} initialData={editingProfile} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profiles.map(profile => (
            <TableRow key={profile.id}>
              <TableCell>{profile.name}</TableCell>
              <TableCell>{profile.address.city}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(profile)}>Edit</Button>
                <Button color="secondary" onClick={() => handleDelete(profile.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Admin;
