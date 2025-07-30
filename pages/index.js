// pages/index.js

export default function Home() {
  const products = [
    { name: "Tractor Hitch", price: "$49.99", image: "/placeholder.jpg" },
    { name: "3D Printed Cow", price: "$15.00", image: "/placeholder.jpg" },
    { name: "Peg Board Organizer", price: "$25.00", image: "/placeholder.jpg" },
    { name: "Planter Clip", price: "$5.00", image: "/placeholder.jpg" },
    { name: "Custom Sign", price: "$35.00", image: "/placeholder.jpg" },
    { name: "Tool Holder", price: "$20.00", image: "/placeholder.jpg" },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="bg-[#c5050c] text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Badgineer</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Shop</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">Custom 3D Printed
