// import React, { useEffect, useState } from "react";
// import { useAuth } from '../contexts/AuthContext';
// import { fetchSchemes } from '../service/schemeService';
// import { viewGrievances } from '../service/grievanceService';
// // import { fetchSchemes, applyForScheme } from '../service/schemeService';

// const AdminPanel = () => {
//   const { logout } = useAuth();

//   const [users, setUsers] = useState([
//     { _id: "1", name: "Demo User", email: "demo@example.com", role: "admin" }
//   ]); // Static for frontend-only
//   const [schemes, setSchemes] = useState([]);
//   const [grievances, setGrievances] = useState([]);

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       const schemesData = await fetchSchemes();
//       const grievancesData = await viewGrievances();
//       setSchemes(schemesData);
//       setGrievances(grievancesData);
//     } catch (err) {
//       console.error("Failed to load data", err);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Admin Panel - Sainik Sahayak</h2>

//       <button className="btn btn-danger mb-4" onClick={handleLogout}>Logout</button>

//       <section className="mb-5">
//         <h4>Registered Users</h4>
//         <ul className="list-group">
//           {users.map((user) => (
//             <li key={user._id} className="list-group-item">
//               {user.name} ({user.email}) - Role: {user.role}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="mb-5">
//         <h4>Available Schemes</h4>
//         <ul className="list-group">
//           {schemes.map((scheme) => (
//             <li key={scheme._id} className="list-group-item">
//               {scheme.title} - {scheme.description}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h4>Grievances</h4>
//         <ul className="list-group">
//           {grievances.map((grievance) => (
//             <li key={grievance._id} className="list-group-item">
//               {grievance.userName}: {grievance.message}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default AdminPanel;
// src/pages/AdminPanel.js
// import React, { useEffect, useState } from "react";
// import { useAuth } from '../contexts/AuthContext'; 
// import { fetchSchemes } from '../service/schemeService'; 
// import { viewGrievances } from '../service/grievanceService'; 

// const AdminPanel = () => {
//   const { logout } = useAuth();

//   const [users, setUsers] = useState([
//     { _id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
//     { _id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user' }
//   ]);

//   const [schemes, setSchemes] = useState([]);
//   const [grievances, setGrievances] = useState([]);

//   useEffect(() => {
//     fetchAdminData();
//   }, []);

//   const fetchAdminData = async () => {
//     try {
//       const schemeRes = await fetchSchemes();
//       const grievanceRes = await viewGrievances();

//       setSchemes(schemeRes);
//       setGrievances(grievanceRes);
//     } catch (err) {
//       console.error("Failed to fetch admin data", err);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Admin Panel - Sainik Sahayak</h2>

//       <button className="btn btn-danger mb-4" onClick={handleLogout}>Logout</button>

//       <section className="mb-5">
//         <h4>Registered Users</h4>
//         <ul className="list-group">
//           {users.map((user) => (
//             <li key={user._id} className="list-group-item">
//               {user.name} ({user.email}) - Role: {user.role}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="mb-5">
//         <h4>Available Schemes</h4>
//         <ul className="list-group">
//           {schemes.map((scheme) => (
//             <li key={scheme._id} className="list-group-item">
//               {scheme.title} - {scheme.description}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h4>Grievances</h4>
//         <ul className="list-group">
//           {grievances.map((grievance) => (
//             <li key={grievance._id} className="list-group-item">
//               {grievance.userName}: {grievance.message}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default AdminPanel;


// src/pages/AdminPanel.js
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { fetchSchemes } from "../service/schemeService";
import { viewGrievances } from "../service/grievanceService";
import { getAllUsers } from "../service/AuthService";

const AdminPanel = () => {
  const { logout } = useAuth();

  const [users, setUsers] = useState([]);
  const [schemes, setSchemes] = useState([]);
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await getAllUsers();
        const schemeRes = await fetchSchemes();
        const grievanceRes = await viewGrievances();

        setUsers(userRes.data);
        setSchemes(schemeRes);
        setGrievances(grievanceRes);
      } catch (error) {
        console.error("Failed to fetch admin data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Panel - Sainik Sahayak</h2>
      <button className="btn btn-danger mb-4" onClick={logout}>Logout</button>

      <section className="mb-5">
        <h4>Registered Users</h4>
        <ul className="list-group">
          {users.map(user => (
            <li key={user._id} className="list-group-item">
              {user.name} ({user.email}) - Role: {user.role}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-5">
        <h4>Available Schemes</h4>
        <ul className="list-group">
          {schemes.map(scheme => (
            <li key={scheme._id} className="list-group-item">
              {scheme.title} - {scheme.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Grievances</h4>
        <ul className="list-group">
          {grievances.map(grievance => (
            <li key={grievance._id} className="list-group-item">
              {grievance.userName}: {grievance.message}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminPanel;
