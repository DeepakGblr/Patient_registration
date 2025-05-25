import React from 'react';

const PatientForm = ({ patient, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.8rem' }}>
    <input name="name" placeholder="Name" value={patient.name} onChange={handleChange} required />
    <input name="age" type="number" placeholder="Age" value={patient.age} onChange={handleChange} required />
    <input name="gender" placeholder="Gender" value={patient.gender} onChange={handleChange} />
    <input name="contact" placeholder="Contact" value={patient.contact} onChange={handleChange} />
    <textarea name="history" placeholder="Medical History" value={patient.history} onChange={handleChange} />
    <textarea name="current_medications" placeholder="Current Medications" value={patient.current_medications} onChange={handleChange} />
    <textarea name="insurance_details" placeholder="Insurance Details" value={patient.insurance_details} onChange={handleChange} />
    <button type="submit" style={{ padding: '0.6rem', backgroundColor: '#0077cc', color: 'white' }}>Register</button>
  </form>
);

export default PatientForm;
