import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const resources = [
  {
    title: 'Pension Guidelines PDF',
    description: 'Download the latest pension policy for ex-servicemen.',
    link: '/downloads/pension-guidelines.pdf',
  },
  {
    title: 'Medical Benefits Info',
    description: 'Overview of health schemes and benefits.',
    link: '/downloads/medical-benefits.pdf',
  },
  {
    title: 'Housing Assistance',
    description: 'Application process for military housing schemes.',
    link: '/downloads/housing-assistance.pdf',
  },
];

const Resources = () => {
  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand mb-0 h1">Resources</span>
      </nav>

      {/* Resources Cards */}
      <div className="container mt-4">
        <div className="row">
          {resources.map((res, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{res.title}</h5>
                  <p className="card-text">{res.description}</p>
                  <a
                    href={res.link}
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View / Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
