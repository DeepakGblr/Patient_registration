# 🩺 MediTrack – Patient Registration App

MediTrack is a frontend-only React application for registering patients and running SQL queries locally using **Pglite** (a WebAssembly version of SQLite). 

---

## 📁 Project Structure

patient-registration-app/
│
├── public/ # Static assets
│
├── src/
│ ├── assets/ # Images and icons
│ ├── components/
│ │ ├── PatientForm.jsx # Patient form for entering data
│ │ └── SqlRunner.jsx # SQL interface to run custom queries
│ ├── db/
│ │ └── initDb.js # Initializes and seeds the Pglite database
│ ├── hooks/
│ │ └── usePatientForm.js # Custom hook for form logic (state, handlers)
│ ├── App.jsx # Main app layout and styling
│ ├── main.jsx # React entry point
│ ├── index.css # TailwindCSS and global styles
│ └── App.css # Component-specific styling (optional)
│
├── package.json # Project metadata and dependencies
├── .gitignore # Ignored files/folders
├── eslint.config.js # ESLint config
└── README.md # Project documentation 



---

## ⚙️ Features

- ✅ **Patient Registration**  
  Input fields for name, age, gender, and contact information. Data is stored using Pglite.

- ✅ **SQL Query Runner**  
  Run SQL queries against the local database and display results in a styled table.

- ✅ **In-Memory  DB**  
  Uses [Pglite](https://github.com/lovasoa/pglite) to simulate SQL in the browser – no server needed.

- ✅ **Fully Responsive**  
  Clean UI centered with a card layout and accessible colors.

  ✅Support usage across multiple tabs (in the same browser) and make sure writes and reads are synchronized.

  ✅BroadcastChannel API — it lets different tabs/windows communicate in real-time.

---

## 🧠 Component Overview

### `PatientForm.jsx`

- Controlled form input for patient data.
- Handles validation and form submission.
- Submits data to `Pglite` using the custom hook.

### `SqlRunner.jsx`

- Text area for typing SQL queries.
- Button to execute the query.
- Dynamically renders result rows in a table.
- Auto-handles dark/light themes for visibility.

### `usePatientForm.js`

- Custom hook that:
  - Manages form state
  - Updates values
  - Submits and inserts data into the Pglite DB

### `initDb.js`

- Initializes Pglite database with a `patients` table.
- Seeds data if required.
- Exports the database instance.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/Patient_registration.git
cd patient-registration-app
2. Install dependencies
bash

npm install
3. Start the app
bash

npm run dev
The app will open at http://localhost:5173/.


### 2 . Vercel deployment url : patient-registration-pcn0o3lh9-deepak-gs-projects-ccd8fcfd.vercel.app

🗃️ Sample SQL Queries
sql

-- Get all patients
SELECT * FROM patients;

-- Find patients over 50
SELECT * FROM patients WHERE age > 50;



## 🛠️ Challenges Faced

During development and deployment of the Patient Registration App, several challenges was faced;

1. **Styling and Layout**  
   - Centering content responsively using Flexbox.  
   - Choosing background colors for readability, especially for SQL query results on dark themes.

2. **SQL Query Results Display**  
   - Custom styling to ensure query results are clear and visible on dark backgrounds.

3. **Data Persistence and Synchronization**  
   - Persisting patient data across page refreshes using PGlite with IndexedDB.  
   - Synchronizing data and UI state across multiple browser tabs via the BroadcastChannel API.

4. **Vercel Deployment**  
   - Configuring correct build output directory for Vite (`dist`).  
   - Adding rewrite rules to avoid 404 errors on SPA page refreshes.

5. **React Component Management**  
   - Ensuring proper props and state handling between components for smooth UI updates.  
   - Resolving JSX syntax errors to maintain successful builds.

---

📌 Notes

Ideal for testing UI behavior without backend.

Can be extended with backend integration or persistent local storage.

📄 License
This project is open-source and free to use.

🙌 Author
Built by Deepak G
GitHub: DeepakGblr/Patient_registration