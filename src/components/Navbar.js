// // // components/Navbar.js
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../contexts/AuthContext';

// // function Navbar() {
// //   const { user, logout } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/');
// //   };

// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
// //       <Link className="navbar-brand" to="/">Sainik Sahayak</Link>
// //       <div className="collapse navbar-collapse">
// //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //           {user && (
// //             <>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/dashboard">Dashboard</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/schemes">Schemes</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/marketplace">Marketplace</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/emergency">Emergency</Link>
// //               </li>
// //               <li className="nav-item">
// //                 <Link className="nav-link" to="/grievance">Grievances</Link>
// //               </li>
// //               {user.role === 'admin' && (
// //                 <li className="nav-item">
// //                   <Link className="nav-link" to="/admin">Admin Panel</Link>
// //                 </li>
// //               )}
// //             </>
// //           )}
// //         </ul>
// //         <div className="d-flex">
// //           {user ? (
// //             <>
// //               <span className="navbar-text me-3 text-white">Hi, {user.username}</span>
// //               <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
// //             </>
// //           ) : (
// //             <>
// //               <Link to="/login" className="btn btn-outline-light btn-sm me-2">Login</Link>
// //               <Link to="/register" className="btn btn-outline-light btn-sm">Register</Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//       <Link className="navbar-brand" to="/">Sainik Sahayak</Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarContent"
//         aria-controls="navbarContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           {user && (
//             <>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/dashboard">Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/schemes">Schemes</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/marketplace">Marketplace</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/emergency">Emergency</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/grievance">Grievances</Link>
//               </li>
//               {user.role === 'admin' && (
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/admin">Admin Panel</Link>
//                 </li>
//               )}
//             </>
//           )}
//         </ul>
//         <div className="d-flex">
//           {user ? (
//             <>
//               <span className="navbar-text me-3 text-white">Hi, {user.username}</span>
//               <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="btn btn-outline-light btn-sm me-2">Login</Link>
//               <Link to="/register" className="btn btn-outline-light btn-sm">Register</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     // <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

//       <Link className="navbar-brand" to="/">Sainik Sahayak</Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarContent"
//         aria-controls="navbarContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           {user && (
//             <>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/dashboard">Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/schemes">Schemes</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/marketplace">Marketplace</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/emergency">Emergency</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/grievance">Grievances</Link>
//               </li>
//               {user.role === 'admin' && (
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/admin">Admin Panel</Link>
//                 </li>
//               )}
//             </>
//           )}
//         </ul>
//         <div className="d-flex">
//           {user ? (
//             <>
//               <span className="navbar-text me-3 text-white">Hi, {user.username}</span>
//               <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="btn btn-outline-light btn-sm me-2">Login</Link>
//               <Link to="/register" className="btn btn-outline-light btn-sm">Register</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm" style={{ height: '60px' }}>
//       <div className="container-fluid">
//         <Link className="navbar-brand fw-bold" to="/">Sainik Sahayak</Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {user && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/dashboard">Dashboard</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/schemes">Schemes</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/marketplace">Marketplace</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/emergency">Emergency</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/grievance">Grievances</Link>
//                 </li>
//                 {user.role === 'admin' && (
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/admin">Admin Panel</Link>
//                   </li>
//                 )}
//               </>
//             )}
//           </ul>
//           <div className="d-flex align-items-center">
//             {user ? (
//               <>
//                 <span className="navbar-text text-white me-3">Hi, {user.username}</span>
//                 <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="btn btn-outline-light btn-sm me-2">Login</Link>
//                 <Link to="/register" className="btn btn-outline-light btn-sm">Register</Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4" style={{ height: '60px' }}>
//       <div className="container-fluid">
//         <Link className="navbar-brand fw-bold text-white" to="/">Sainik Sahayak</Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {user && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white" to="/schemes">Schemes</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white" to="/resources">Resources</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white" to="/grievances">Grievances</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white" to="/sos">SOS</Link>
//                 </li>
//                 {user.role === 'admin' && (
//                   <li className="nav-item">
//                     <Link className="nav-link text-warning fw-bold" to="/admin">Admin Panel</Link>
//                   </li>
//                 )}
//               </>
//             )}
//           </ul>

//           <div className="d-flex align-items-center">
//             {user ? (
//               <>
//                 <span className="navbar-text text-white me-3">
//                   Hi, {user.username || user.name}
//                 </span>
//                 <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="btn btn-outline-light btn-sm me-2">Login</Link>
//                 <Link to="/register" className="btn btn-outline-light btn-sm">Register</Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Sainik Sahayak</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            {user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/schemes">Schemes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/resources">Resources</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/grievance">Grievance</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sosbutton">SOS</NavLink>
                </li>
                {user.role === 'admin' && (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">Admin Panel</NavLink>
                  </li>
                )}
              </>
            )}
          </ul>

          <div className="d-flex">
            {user ? (
              <>
                <span className="navbar-text text-white me-3">
                  Hi, {user.username || user.name}
                </span>
                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm me-2">Login</Link>
                <Link to="/register" className="btn btn-outline-light btn-sm">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
