import { PGlite } from '@electric-sql/pglite';

export const initDb = async () => {
  const db = new PGlite('idb://my-patient-db', {
    bundleUrl: '/pglite-assets',
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS patients (
      id SERIAL PRIMARY KEY,
      name TEXT,
      age INTEGER,
      gender TEXT,
      contact TEXT,
      history TEXT,
      current_medications TEXT,
      insurance_details TEXT
    );
  `);

  return db;
};
