// components/ProfileForm/ProfileForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  photo: Yup.string().url('Invalid URL').required('Required'),
  description: Yup.string().required('Required'),
  address: Yup.object().shape({
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    lat: Yup.number().required('Required'),
    lng: Yup.number().required('Required'),
  }),
});

const ProfileForm = ({ onSubmit, initialData }) => {
  return (
    <Formik
      initialValues={initialData || {
        name: '',
        photo: '',
        description: '',
        address: { street: '', city: '', lat: '', lng: '' },
      }}
      validationSchema={ProfileSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            as={TextField}
            name="name"
            label="Name"
            fullWidth
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name}
          />
          <Field
            as={TextField}
            name="photo"
            label="Photo URL"
            fullWidth
            error={touched.photo && !!errors.photo}
            helperText={touched.photo && errors.photo}
          />
          <Field
            as={TextField}
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={4}
            error={touched.description && !!errors.description}
            helperText={touched.description && errors.description}
          />
          <Field
            as={TextField}
            name="address.street"
            label="Street"
            fullWidth
            error={touched.address?.street && !!errors.address?.street}
            helperText={touched.address?.street && errors.address?.street}
          />
          <Field
            as={TextField}
            name="address.city"
            label="City"
            fullWidth
            error={touched.address?.city && !!errors.address?.city}
            helperText={touched.address?.city && errors.address?.city}
          />
          <Field
            as={TextField}
            name="address.lat"
            label="Latitude"
            type="number"
            fullWidth
            error={touched.address?.lat && !!errors.address?.lat}
            helperText={touched.address?.lat && errors.address?.lat}
          />
          <Field
            as={TextField}
            name="address.lng"
            label="Longitude"
            type="number"
            fullWidth
            error={touched.address?.lng && !!errors.address?.lng}
            helperText={touched.address?.lng && errors.address?.lng}
          />
          <Button type="submit" variant="contained" color="primary">
            {initialData ? 'Update' : 'Create'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
