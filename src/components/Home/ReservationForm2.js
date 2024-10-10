// ReservationForm.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css'; // Custom CSS for styling

const ReservationForm2 = () => {
    const location = useLocation();
    const selectedDate = location.state?.date || new Date(); // Fallback to current date
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNo: '',
        time: '',
        numberOfPack: '',
        message: ''
    });
    const [reservations, setReservations] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedDateStr = selectedDate.toLocaleDateString();
        const timeKey = `${selectedDateStr}-${formData.time}`;

        if (formData.time) {
            setReservations((prev) => ({
                ...prev,
                [timeKey]: 'Booked'
            }));
        }

        // Reset form after submission
        setFormData({
            fullName: '',
            email: '',
            contactNo: '',
            time: '',
            numberOfPack: '',
            message: ''
        });
    };

    return (
        <div>
            <h1>Reservation Form for {selectedDate.toLocaleDateString()}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="contactNo" placeholder="Contact No" value={formData.contactNo} onChange={handleChange} required />
                <select name="time" value={formData.time} onChange={handleChange} required>
                    <option value="">Select Time</option>
                    <option value="Day Time">Day Time</option>
                    <option value="Night Time">Night Time</option>
                    <option value="Full Time">Full Time</option>
                </select>
                <input type="number" name="numberOfPack" placeholder="Number of Packs" value={formData.numberOfPack} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Reserve</button>
            </form>
            <div className="calendar-view">
                <h3>Reservations</h3>
                <div>
                    {Object.entries(reservations).map(([key, value]) => (
                        <div key={key}>{key}: {value}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReservationForm2;
