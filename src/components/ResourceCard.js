import React from 'react';

const ResourceCard = ({ title, description, link }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-400 hover:underline"
      >
        Learn More →
      </a>
    </div>
  );
};

export default ResourceCard;

