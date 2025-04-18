const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">DemoSite</h1>
          <div className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to DemoSite</h2>
        <p className="text-lg mb-6">A simple website built with React and Tailwind CSS</p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">Get Started</button>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">Fast</h3>
            <p>Experience blazing fast performance with optimized code.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">Responsive</h3>
            <p>Looks great on all devices, from desktops to mobiles.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2 text-indigo-600">Easy to Use</h3>
            <p>Clean and intuitive layout that’s simple to navigate.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DemoSite. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
