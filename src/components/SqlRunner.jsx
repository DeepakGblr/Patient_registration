import React from 'react';

const SqlRunner = ({ sql, setSql, runSql, results }) => (
  <>
    <textarea
      rows={4}
      placeholder="SELECT * FROM patients;"
      value={sql}
      onChange={(e) => setSql(e.target.value)}
      style={{
        width: '100%',
        backgroundColor: '#1e1e1e',
        color: '#eee',
        border: '1px solid #444',
        borderRadius: '4px',
        padding: '8px',
        fontFamily: 'monospace',
        fontSize: '14px',
      }}
    />
    <button
      onClick={runSql}
      style={{
        marginTop: '0.5rem',
        padding: '0.6rem 1rem',
        backgroundColor: '#0077cc',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Run
    </button>
    {results.length > 0 && (
      <div style={{ marginTop: '1rem' }}>
        <h3 style={{ color: '#fff' }}>Results:</h3>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#222',
            color: '#eee',
          }}
          border="1"
        >
          <thead>
            <tr>
              {Object.keys(results[0]).map((key) => (
                <th
                  key={key}
                  style={{
                    padding: '8px',
                    border: '1px solid #555',
                    backgroundColor: '#333',
                    color: '#fff',
                  }}
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td
                    key={j}
                    style={{
                      padding: '8px',
                      border: '1px solid #555',
                      color: '#ddd',
                    }}
                  >
                    {val === null ? 'NULL' : val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </>
);

export default SqlRunner;
