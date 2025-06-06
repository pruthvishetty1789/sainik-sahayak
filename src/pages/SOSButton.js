import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Emergency = () => {
  const [sosSent, setSosSent] = useState(false);

  const handleSOS = () => {
    setSosSent(true);

    // Simulate an API call or alert
    setTimeout(() => {
      alert('Emergency alert sent to nearest help center!');
    }, 500);
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar navbar-dark bg-danger px-3">
        <span className="navbar-brand mb-0 h1">Emergency Help</span>
      </nav>

      {/* Main Content */}
      <div className="container text-center my-5">
        <h2 className="mb-4">Press the SOS button in case of emergency</h2>
        <button
          className="btn btn-lg btn-danger shadow-lg px-5 py-3"
          onClick={handleSOS}
        >
          🚨 Send SOS
        </button>

        {sosSent && (
          <div className="alert alert-success mt-4" role="alert">
            SOS alert has been sent! Help is on the way.
          </div>
        )}
      </div>
    </div>
  );
};

export default Emergency;
