// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import navy from '../assets/navy.png';
// import soldier from '../assets/soldier.jpg';
// import army from '../assets/army.webp';
// // import Navbar from '../components/Navbar';

// function Home() {
//   return (
//     <>
     

//       {/* Carousel */}
//       <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={navy} className="d-block w-100" alt="Slide 1" style={{ height: '450px', objectFit: 'cover' }} />
            
//           </div>
//           <div className="carousel-item">
//             <img src={soldier} className="d-block w-100" alt="Slide 2" style={{ height: '450px', objectFit: 'cover' }} />
//             <div className="carousel-caption text-white bg-dark bg-opacity-50 p-3 rounded">
//               <h5>Strong. Brave. Resilient.</h5>
//               <p>We Salute Our Armed Forces</p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img src={army} className="d-block w-100" alt="Slide 3" style={{ height: '450px', objectFit: 'cover' }} />
//             <div className="carousel-caption text-white bg-dark bg-opacity-50 p-3 rounded">
//               <h5>Secure and Serve</h5>
//               <p>Join Our Mission for a Stronger Nation</p>
//             </div>
//           </div>
//         </div>

//         <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         </button>
//       </div>

//       {/* Welcome Message */}
//       <div style={{
//   position: 'absolute',
//   top: '20%', // ← lowered from 30% to 20% to move it up
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: 'rgba(0, 0, 0, 0.6)',
//   color: '#fff',
//   padding: '20px 40px',
//   borderRadius: '10px',
//   fontSize: '24px',
//   fontWeight: 'bold'
// }}>
//   Welcome to Sainik Sahayak Portal
// </div>

//     </>
//   );
// }

// export default Home;

// import React from 'react';
// import army from '../assets/army.webp';
// import soldier from '../assets/soldier.jpg';
// import navy from '../assets/navy.png';

// const Home = () => {
//   return (
//     <div>
//       <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={army} className="d-block w-100" alt="Army" />
//           </div>
//           <div className="carousel-item">
//             <img src={soldier} className="d-block w-100" alt="Soldier" />
//           </div>
//           <div className="carousel-item">
//             <img src={navy} className="d-block w-100" alt="Navy" />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       <div className="text-center mt-4">
//         <h1 className="display-5 fw-bold">Welcome to Sainik Sahayak</h1>
//         <p className="lead">Empowering our heroes with resources, schemes, and support.</p>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import army from '../assets/army.webp';
// import soldier from '../assets/soldier.jpg';
// import navy from '../assets/navy.png';

// const Home = () => {
//   return (
//     <div className="text-light bg-dark min-vh-100 py-4">
//       <div className="container">

//         {/* Carousel */}
//         <div id="carouselExampleFade" className="carousel slide carousel-fade mb-5" data-bs-ride="carousel">
//           <div className="carousel-inner rounded shadow" style={{ height: '400px', overflow: 'hidden' }}>
//             <div className="carousel-item active">
//               <img src={army} className="d-block w-100 h-100 object-fit-cover" alt="Army" />
//             </div>
//             <div className="carousel-item">
//               <img src={soldier} className="d-block w-100 h-100 object-fit-cover" alt="Soldier" />
//             </div>
//             <div className="carousel-item">
//               <img src={navy} className="d-block w-100 h-100 object-fit-cover" alt="Navy" />
//             </div>
//           </div>

//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon"></span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon"></span>
//           </button>
//         </div>

//         {/* Welcome Message */}
//         <div className="text-center">
//           <h1 className="display-5 fw-bold text-warning">Welcome to Sainik Sahayak</h1>
//           <p className="lead text-light">
//             Serving those who served us. Access schemes, resources, and real-time support tailored for our brave defense personnel.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// // export default Home;
// import React from 'react';
// import army from '../assets/army.webp';
// import soldier from '../assets/soldier.jpg';
// import navy from '../assets/navy.png';

// const Home = () => {
//   return (
//     <div className="text-light bg-dark min-vh-100 pt-3">
//       <div className="container">

//         {/* Carousel */}
//         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//           <div className="carousel-inner rounded shadow" style={{ height: '450px', overflow: 'hidden' }}>
//             <div className="carousel-item active">
//               <img src={army} className="d-block w-100 h-100 object-fit-cover" alt="Army" />
//             </div>
//             <div className="carousel-item">
//               <img src={soldier} className="d-block w-100 h-100 object-fit-cover" alt="Soldier" />
//             </div>
//             <div className="carousel-item">
//               <img src={navy} className="d-block w-100 h-100 object-fit-cover" alt="Navy" />
//             </div>
//           </div>

//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon"></span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon"></span>
//           </button>
//         </div>

//         {/* Welcome Section */}
//         <div className="text-center mt-5">
//           <h1 className="display-5 fw-bold text-warning">Welcome to Sainik Sahayak</h1>
//           <p className="lead text-light">
//             Serving those who served us. Access schemes, resources, and real-time support tailored for our brave defense personnel.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// // export default Home;
// import React from 'react';
// import army from '../assets/army.webp';
// import soldier from '../assets/soldier.jpg';
// import navy from '../assets/navy.png';

// const Home = () => {
//   return (
//     <div className="text-light bg-dark min-vh-100 pt-2">
//       <div className="container">

//         {/* Carousel */}
//         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
//           <div className="carousel-inner rounded shadow" style={{ height: '360px', overflow: 'hidden' }}>
//             <div className="carousel-item active">
//               <img src={army} className="d-block w-100 h-100 object-fit-cover" alt="Army" />
//             </div>
//             <div className="carousel-item">
//               <img src={soldier} className="d-block w-100 h-100 object-fit-cover" alt="Soldier" />
//             </div>
//             <div className="carousel-item">
//               <img src={navy} className="d-block w-100 h-100 object-fit-cover" alt="Navy" />
//             </div>
//           </div>

//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon"></span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon"></span>
//           </button>
//         </div>

//         {/* Welcome Section */}
//         <div className="text-center mt-4">
//           <h1 className="fw-bold text-warning">Welcome to Sainik Sahayak</h1>
//           <p className="lead text-light">
//             Serving those who served us. Access schemes, resources, and real-time support tailored for our brave defense personnel.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import army from '../assets/army.webp';
import soldier from '../assets/soldier.jpg';
import navy from '../assets/navy.png';

const Home = () => {
  return (
    <div className="bg-dark text-white text-center">
      <div className="container py-2">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner rounded shadow" style={{ height: '360px', overflow: 'hidden' }}>
            <div className="carousel-item active">
              <img src={army} className="d-block w-100 h-100 object-fit-cover" alt="Army" />
            </div>
            <div className="carousel-item">
              <img src={soldier} className="d-block w-100 h-100 object-fit-cover" alt="Soldier" />
            </div>
            <div className="carousel-item">
              <img src={navy} className="d-block w-100 h-100 object-fit-cover" alt="Navy" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        <div className="mt-3">
          <h1 className="fw-bold text-warning">Welcome to Sainik Sahayak</h1>
          <p className="text-white fs-5">Serving those who served us. Access schemes, resources, and real-time support tailored for our brave defense personnel.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
