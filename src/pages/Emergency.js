import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Emergency() {
  const [sosSent, setSosSent] = useState(false);

  const handleSOS = () => {
    setSosSent(true);

    // Simulate sending SOS
    setTimeout(() => {
      alert('🚨 SOS alert sent to emergency responders!');
    }, 500);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-dark bg-danger px-4">
        <span className="navbar-brand mb-0 h1">Emergency Assistance</span>
      </nav>

      <div className="container text-center my-auto py-5">
        <h2 className="mb-4 text-danger">In an emergency? Press the SOS button!</h2>
        <button
          className="btn btn-danger btn-lg px-5 py-3 fw-bold"
          onClick={handleSOS}
        >
          🚨 Send SOS
        </button>

        {sosSent && (
          <div className="alert alert-success mt-4" role="alert">
            SOS alert has been triggered. Help is on the way.
          </div>
        )}
      </div>
    </div>
  );
}

export default Emergency;
