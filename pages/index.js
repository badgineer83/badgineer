export default function Home() {
  const products = [
    { name: 'Tractor Hitch Spacer', price: '$18.00' },
    { name: 'Garage Peg Hook System', price: '$12.00' },
    { name: 'Seed Plate Adapter', price: '$15.50' },
    { name: 'Tool Caddy Attachment', price: '$10.00' },
    { name: 'Livestock Gate Clip', price: '$6.75' },
    { name: 'Planter Bracket Mount', price: '$13.25' },
  ];

  return (
    <div className="bg-[#c5050c] min-h-screen text-white">
      {/* Header */}
      <header className="bg-white text-[#c5050c] py-6 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Badgineer</h1>
          <p className="text-lg text-gray-700">
            Custom 3D printed parts for farms, garages & more.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">
            Custom 3D Printed Products
          </h2>
          <p className="text-lg">Durable. Practical. Made in Wisconsin.</p>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white text-[#c5050c] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-[#c5050c] text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Badgineer. All rights reserved.</p>
      </footer>
    </div>
  );
}

