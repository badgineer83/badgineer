
import React from 'react';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Pegboard Tool Holder Set',
      description: 'Modular 3D-printed tool holders for standard pegboards.',
      price: '18.00',
    },
    {
      id: 2,
      name: 'Custom Tractor Light Mount',
      description: 'Durable mount for LED work lights on farm equipment.',
      price: '25.00',
    },
    {
      id: 3,
      name: 'Stackable Toy Blocks',
      description: 'Colorful, interlocking blocks perfect for kids.',
      price: '12.00',
    },
    {
      id: 4,
      name: 'Wall Art: Wisconsin State',
      description: 'Layered 3D wall art shaped like Wisconsin with Badger accents.',
      price: '30.00',
    },
  ];

  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', color: 'green' }}>Badgineer</h1>
      <p style={{ marginBottom: '2rem' }}>
        Custom 3D Printed Pegboards, Farm Parts, Toys & More
      </p>
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '1rem',
            }}
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <strong>${product.price}</strong>
            </p>
            <button
              style={{
                marginTop: '0.5rem',
                backgroundColor: '#ffc107',
                border: 'none',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

