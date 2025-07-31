// pages/index.js

export default function Home() {
  return (
    <div className="min-h-screen bg-badger-white text-badger-black p-6">
      <header className="mb-8 border-b border-badger-gray pb-4">
        <h1 className="text-4xl font-bold text-badger-red">Badgineer</h1>
        <p className="text-lg text-badger-black mt-2">
          Custom 3D Prints. Built to Work.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-badger-red mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product card example */}
          <div className="border border-badger-gray p-4 rounded shadow hover:shadow-lg transition">
            <img
              src="/placeholder.png"
              alt="Product"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-badger-black">Product Name</h3>
            <p className="text-badger-gray text-sm">
              Short description of the product.
            </p>
          </div>

          {/* You can add more product cards here */}
        </div>
      </section>
    </div>
  );
}
