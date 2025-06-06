import React from 'react';

const SchemeCard = ({ title, description, eligibility, link }) => {
  return (
    <div className="bg-gray-800 text-white p-5 rounded-xl shadow-lg mb-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-3">{description}</p>
      {eligibility && (
        <p className="text-sm italic text-gray-300 mb-3">
          <span className="font-semibold">Eligibility:</span> {eligibility}
        </p>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Learn More →
        </a>
      )}
    </div>
  );
};

export default SchemeCard;
