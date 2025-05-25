import { useState, useEffect } from 'react';
import { initDb } from './db/initDb';
import { usePatientForm } from './hooks/usePatientForm';
import PatientForm from './components/PatientForm';
import SqlRunner from './components/SqlRunner';

function App() {
  const [db, setDb] = useState(null);
  const [sql, setSql] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const channel = new BroadcastChannel('patient-sync');
  const { patient, handleChange, resetForm } = usePatientForm();

  useEffect(() => {
    initDb().then((dbInstance) => {
      setDb(dbInstance);
      setLoading(false);
    });

    channel.onmessage = () => {
      if (sql.trim().toLowerCase().startsWith('select')) {
        runSql();
      }
    };

    return () => channel.close();
  }, []);

  const escape = (s) => s?.replace(/'/g, "''") ?? '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!db) return;
    try {
      await db.exec(`
        INSERT INTO patients
          (name, age, gender, contact, history, current_medications, insurance_details)
        VALUES (
          '${escape(patient.name)}',
          ${parseInt(patient.age) || 0},
          '${escape(patient.gender)}',
          '${escape(patient.contact)}',
          '${escape(patient.history)}',
          '${escape(patient.current_medications)}',
          '${escape(patient.insurance_details)}'
        );
      `);
      resetForm();
      channel.postMessage('update');
      alert('Patient registered!');
    } catch (err) {
      alert('Failed to register: ' + err.message);
    }
  };

  const runSql = async () => {
    if (!db || !sql.trim()) return;
    try {
      const res = await db.query(sql);
      setResults(res.rows || []);
    } catch (err) {
      setResults([{ error: err.message }]);
    }
  };

  if (loading) return <div>Loading DB...</div>;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#0a2540', // Dark blue background
      }}
    >
      <div
        style={{
          maxWidth: 700,
          width: '100%',
          margin: '3rem auto',
          backgroundColor: '#cde9ff', // White card remains
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#0077b6' }}>
          🩺 MediTrack – Patient Registration App
        </h1>
  
        <PatientForm
          patient={patient}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
  
        <hr style={{ margin: '2rem 0', borderColor: '#b2ebf2' }} />
  
        <h2 style={{ textAlign: 'center', color: '#0077b6' }}>
          Run SQL Query
        </h2>
  
        <SqlRunner sql={sql} setSql={setSql} runSql={runSql} results={results} />
      </div>
    </div>
  );
  
  
}

export default App;
