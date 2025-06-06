import React from 'react';

const Marketplace = () => {
  const items = [
    {
      id: 1,
      name: 'Army Boots',
      description: 'Durable boots for all terrains.',
      price: '₹2,500',
      image: 'src/assets/shoe.jpg'
    },
    {
      id: 2,
      name: 'Camouflage Jacket',
      description: 'Comfortable and weather-resistant.',
      price: '₹3,000',
      image: 'src/assets/cam.jpg'
    },
    {
      id: 3,
      name: 'Tactical Backpack',
      description: 'Multiple compartments with high durability.',
      price: '₹2,000',
      image: 'src/assets/bag.jpg'
      
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Sainik Marketplace</h2>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <h6 className="text-success">{item.price}</h6>
                <button className="btn btn-primary mt-auto">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;

