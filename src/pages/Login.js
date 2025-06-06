

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(true); // For error message

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSendOtp = () => {
    if (aadhaar.length === 12) {
      setIsOtpSent(true);
      alert('OTP sent successfully (123456 for demo)');
    } else {
      alert('Please enter a valid 12-digit Aadhaar number');
    }
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      login({ username: 'User', role: 'user' }); // ✅ set your role
      navigate('/');
    } else {
      setIsOtpValid(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh', background: '#dff9fb' }}>
      <div className="bg-white p-4 rounded shadow" style={{ minWidth: '320px' }}>
        <h4 className="mb-3 text-center">Sainik Sahayak Portal Login</h4>

        {!isOtpSent ? (
          <>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Aadhaar Number"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              maxLength={12}
              required
            />
            <button className="btn btn-primary w-100" onClick={handleSendOtp}>
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              className={`form-control mb-3 ${!isOtpValid ? 'is-invalid' : ''}`}
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
                setIsOtpValid(true);
              }}
              maxLength={6}
              required
            />
            {!isOtpValid && <div className="invalid-feedback">Invalid OTP. Try again.</div>}
            <button className="btn btn-success w-100" onClick={handleVerifyOtp}>
              Verify & Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;


