export default function Home() {
  const products = [
    { name: "Tractor Hitch Spacer", price: 18.0, description: "Heavy-duty spacer for Category 1 & 2 hitches" },
    { name: "Garage Peg Hook System", price: 12.0, description: "Modular hooks for organizing tools" },
    { name: "Seed Plate Adapter", price: 15.5, description: "Universal adapter for vintage planters" },
    { name: "Tool Caddy Attachment", price: 10.0, description: "Clip-on tray for storing bolts, tools, parts" },
    { name: "Livestock Gate Clip", price: 6.75, description: "Secure gate clip for fences or pens" },
    { name: "Planter Bracket Mount", price: 13.25, description: "Mount for plastic or metal planting equipment" },
  ];

  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">
      <header className="bg-[#c5050c] text-white px-6 py-4 shadow">
        <h1 className="text-3xl font-bold">Badgineer</h1>
        <p className="text-sm">Custom 3D printed parts for farms, garages & more.</p>
      </header>

      <main className="p-6 max-w-4xl mx-auto flex-grow">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#c5050c]">Custom 3D Printed Products</h2>
          <p className="text-gray-700">Durable. Practical. Made in Wisconsin.</p>
        </section>

        <div className="space-y-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
              <div className="text-[#c5050c] font-bold mt-2 md:mt-0">
                ${product.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        &copy; 2025 Badgineer. All rights reserved.
      </footer>
    </div>
  );
}
