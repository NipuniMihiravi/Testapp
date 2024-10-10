import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import './App.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    functionDate: '',
    event: '',
    specialNote: ''
  });

  const [errors, setErrors] = useState({}); // To store validation errors
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form data
  const validateForm = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.functionDate) {
      tempErrors.functionDate = "Function date is required";
    }

    if (!formData.event) {
      tempErrors.event = "Event is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('/contact', formData);
        console.log('Form Submitted:', response.data);
        setOpenConfirmDialog(false); // Close confirmation dialog
        setOpenSuccessDialog(true); // Open success dialog
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form.');
      }
    } else {
      setOpenConfirmDialog(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setOpenConfirmDialog(true); // Open the confirmation dialog if validation passes
    }
  };

  const handleCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
  };

  return (
    <div className="reservation-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleFormSubmit} className="form">
        {/* Name and Email in same row */}
        <div className="row">
          <div className="inputGroup">
            <label className="label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="inputGroup">
            <label className="label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>

        {/* Phone, Date, and Event selection in same row */}
        <div className="row">
          <div className="inputGroup">
            <label className="label">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="inputGroup">
            <label className="label">Function Date:</label>
            <input
              type="date"
              name="functionDate"
              value={formData.functionDate}
              onChange={handleChange}
              className="input"
              required
            />
            {errors.functionDate && <span className="error">{errors.functionDate}</span>}
          </div>
          <div className="inputGroup">
            <label className="label">Event:</label>
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              className="input"
              required
            >
              <option value="">Select an event</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="conference">Conference</option>
            </select>
            {errors.event && <span className="error">{errors.event}</span>}
          </div>
        </div>

        {/* Special Note */}
        <div className="inputGroup">
          <label className="label">Special Note:</label>
          <textarea
            name="specialNote"
            value={formData.specialNote}
            onChange={handleChange}
          />
        </div>

        {/* Consent Paragraph */}
        <p className="consent-paragraph">
          By giving your confirmation you explicitly give consent for us to store and use this information to service your requests.
          If you do not consent we will not store any personal information and will only send an email with the relevant details in order to service your requests.
        </p>

        <button type="submit" className="res-button">Submit</button>
      </form>

      {/* Confirmation Dialog */}
      <Dialog
        open={openConfirmDialog}
        onClose={handleCloseConfirmDialog}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-dialog-description"
      >
        <DialogTitle id="confirmation-dialog-title">Confirm Reservation</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirmation-dialog-description">
            Are you sure you want to proceed with this reservation?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog} color="secondary">
            No
          </Button>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Dialog */}
      <Dialog
        open={openSuccessDialog}
        onClose={handleCloseSuccessDialog}
        aria-labelledby="success-dialog-title"
        aria-describedby="success-dialog-description"
      >
        <DialogTitle id="success-dialog-title">Reservation Successful</DialogTitle>
        <DialogContent>
          <DialogContentText id="success-dialog-description">
            Your reservation was successful! We will inform you of further details through the email you provided.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReservationForm;
