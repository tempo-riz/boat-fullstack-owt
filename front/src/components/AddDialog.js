import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import { useState } from 'react';

export default function AddDialog({ isOpen, onClose, onAdd }) {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      description: '',
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (formData.description.trim() === '') {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      onAdd(formData);
      //reset form
      setFormData({
        name: '',
        description: '',
      });
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add a new boat !</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your boat informations.
        </DialogContentText>
        <TextField
          error={errors.name !== ''}
          helperText={errors.name}
          required
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
          }}
        />
        <TextField
          error={errors.description !== ''}
          helperText={errors.description}
          required
          multiline
          rows={3}
          autoFocus
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          onChange={(event) => {
            setFormData({ ...formData, description: event.target.value });
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>)
}