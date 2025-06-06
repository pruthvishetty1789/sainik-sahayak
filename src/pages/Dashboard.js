// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   return (
//     <div>
//       {/* Top Navbar */}
//       <nav className="navbar navbar-dark bg-dark px-3">
//         <span className="navbar-brand mb-0 h1">Sainik Sahayak</span>
//       </nav>

//       {/* Main Dashboard Content */}
//       <div className="container mt-4">
//         <div className="row g-4">
//           <div className="col-md-6 col-lg-4">
//             <div className="card text-white bg-primary h-100">
//               <div className="card-body">
//                 <h5 className="card-title">Schemes</h5>
//                 <p className="card-text">Explore available schemes and benefits.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-4">
//             <div className="card text-white bg-success h-100">
//               <div className="card-body">
//                 <h5 className="card-title">Resources</h5>
//                 <p className="card-text">Access resources tailored for ex-servicemen.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-4">
//             <div className="card text-white bg-danger h-100">
//               <div className="card-body">
//                 <h5 className="card-title">Grievances</h5>
//                 <p className="card-text">Submit and track your grievances here.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-4">
//             <div className="card text-white bg-warning h-100">
//               <div className="card-body">
//                 <h5 className="card-title">SOS Alert</h5>
//                 <p className="card-text">Emergency assistance at your fingertips.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-4">
//             <div className="card text-white bg-dark h-100">
//               <div className="card-body">
//                 <h5 className="card-title">Marketplace</h5>
//                 <p className="card-text">Buy, sell or offer services.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6 col-lg-4">
//             <div className="card bg-light h-100">
//               <div className="card-body">
//                 <h5 className="card-title">Admin Panel</h5>
//                 <p className="card-text">Admin controls and user management.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <h2 className="mb-4">Sainik Sahayak</h2>
      <div className="row g-4">

        <div className="col-md-4">
          <Link to="/schemes" className="text-decoration-none">
            <div className="card text-white bg-primary h-100">
              <div className="card-body">
                <h5 className="card-title">Schemes</h5>
                <p className="card-text">Explore available schemes and benefits.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/resources" className="text-decoration-none">
            <div className="card text-white bg-success h-100">
              <div className="card-body">
                <h5 className="card-title">Resources</h5>
                <p className="card-text">Access resources tailored for ex-servicemen.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/grievance" className="text-decoration-none">
            <div className="card text-white bg-danger h-100">
              <div className="card-body">
                <h5 className="card-title">Grievances</h5>
                <p className="card-text">Submit and track your grievances here.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/sosbutton" className="text-decoration-none">
            <div className="card text-dark bg-warning h-100">
              <div className="card-body">
                <h5 className="card-title">SOS Alert</h5>
                <p className="card-text">Emergency assistance at your fingertips.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/marketplace" className="text-decoration-none">
            <div className="card text-white bg-dark h-100">
              <div className="card-body">
                <h5 className="card-title">Marketplace</h5>
                <p className="card-text">Buy, sell or offer services.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/admin" className="text-decoration-none">
            <div className="card bg-light h-100">
              <div className="card-body">
                <h5 className="card-title">Admin Panel</h5>
                <p className="card-text">Admin controls and user management.</p>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
