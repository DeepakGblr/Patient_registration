import { useState } from 'react';

export const usePatientForm = () => {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    history: '',
    current_medications: '',
    insurance_details: '',
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setPatient({
      name: '',
      age: '',
      gender: '',
      contact: '',
      history: '',
      current_medications: '',
      insurance_details: '',
    });
  };

  return { patient, handleChange, resetForm };
};
