import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const itemsForSale = [
  {
    id: 1,
    name: 'Army Boots',
    description: 'Durable combat boots for daily use.',
    price: '₹1,200',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Military Backpack',
    description: 'Spacious and rugged for outdoor missions.',
    price: '₹950',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Camouflage Jacket',
    description: 'All-weather tactical jacket.',
    price: '₹1,500',
    image: 'https://via.placeholder.com/150'
  }
];

function Marketplace() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🛒 Sainik Marketplace</h2>
      <div className="row">
        {itemsForSale.map(item => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">{item.description}</p>
                <div className="mt-auto">
                  <p className="fw-bold mb-2">{item.price}</p>
                  <button className="btn btn-primary w-100">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
