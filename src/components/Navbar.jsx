
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">DemoSite</h1>
      <div className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
        <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
        <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar