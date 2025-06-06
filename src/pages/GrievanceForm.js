import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Grievance submitted:', formData);
    // Add your API call here
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand mb-0 h1">Submit Grievance</span>
      </nav>

      {/* Form Section */}
      <div className="container mt-4">
        <div className="card shadow p-4">
          <h4 className="mb-4">Grievance Submission Form</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Short title of your issue"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select
                className="form-select"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="pension">Pension</option>
                <option value="health">Health</option>
                <option value="housing">Housing</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your grievance in detail"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit Grievance</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrievanceForm;




