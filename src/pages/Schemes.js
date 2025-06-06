// import React from 'react';
// import SchemeCard from '../components/SchemeCard';

// const schemes = [
//   {
//     title: 'Pension Scheme for Veterans',
//     description: 'Monthly financial aid for retired personnel.',
//     eligibility: 'Ex-servicemen with 10+ years of service.',
//     link: 'https://example.com/pension'
//   },
//   {
//     title: 'Education Scholarship',
//     description: 'Provides financial assistance for children’s education.',
//     eligibility: 'Children of armed forces personnel.',
//     link: 'https://example.com/scholarship'
//   }
// ];

// const Schemes = () => {
//   return (
//     <div className="container mt-6">
//       <h2 className="text-dark text-3xl mb-6">Government Schemes</h2>
//       {schemes.map((scheme, index) => (
//         <SchemeCard key={index} {...scheme} />
//       ))}
//     </div>
//   );
// };

// export default Schemes;
import React from 'react';

const schemes = [
  {
    title: 'Pension Scheme for Veterans',
    description: 'Monthly financial aid for retired personnel.',
    eligibility: 'Ex-servicemen with 10+ years of service.',
    link: 'https://example.com/pension',
  },
  {
    title: 'Education Scholarship',
    description: 'Provides financial assistance for children’s education.',
    eligibility: 'Children of armed forces personnel.',
    link: 'https://example.com/scholarship',
  },
];

const Schemes = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Available Schemes</h2>
      <div className="row">
        {schemes.map((scheme, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-success">{scheme.title}</h5>
                <p className="card-text text-dark">{scheme.description}</p>
                <p className="card-text text-secondary">
                  <strong>Eligibility:</strong> {scheme.eligibility}
                </p>
                <a href={scheme.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
