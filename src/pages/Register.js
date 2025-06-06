// import React, { useState } from 'react';
// import './Register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple prompt with user input
//     window.alert(`Submitted Info:\nName: ${formData.name}\nEmail: ${formData.email}`);
//   };

//   return (
//     <div className="register-container">
//       <form className="register-form" onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         <p className="subtext">Fill out the form carefully for registration</p>

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    aadhaar: '',
    password: '',
  });

  const navigate = useNavigate();
  const { login } = useAuth(); // Optional: auto-login after register

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate register logic (normally API call here)
    alert('Registration successful!');

    // Optionally log the user in
    login({ username: form.username, role: 'user' });

    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh', background: '#dff9fb' }}>
      <div className="bg-white p-4 rounded shadow" style={{ minWidth: '320px' }}>
        <h4 className="mb-3 text-center">Register</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            name="username"
            placeholder="Enter Full Name"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control mb-3"
            name="aadhaar"
            placeholder="Enter Aadhaar Number"
            value={form.aadhaar}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button className="btn btn-success w-100" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
