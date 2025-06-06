import React, { useState } from 'react';

const ApplySchemeForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    serviceId: '',
    email: '',
    phone: '',
    schemeName: '',
    reason: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // TODO: Send data to backend using axios/fetch
    console.log('Form submitted:', formData);

    setSubmitted(true);
    setFormData({
      fullName: '',
      serviceId: '',
      email: '',
      phone: '',
      schemeName: '',
      reason: ''
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Apply for a Scheme</h2>

      {submitted && (
        <div className="alert alert-success text-center" role="alert">
          ✅ Your application has been submitted successfully!
        </div>
      )}

      <form className="card shadow p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Service ID</label>
          <input
            type="text"
            className="form-control"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Scheme Name</label>
          <input
            type="text"
            className="form-control"
            name="schemeName"
            value={formData.schemeName}
            onChange={handleChange}
            placeholder="e.g., Pension Scheme for Veterans"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason for Applying</label>
          <textarea
            className="form-control"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplySchemeForm;
