const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
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

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg">
            DemoSite is a fictional modern web app designed to demonstrate the power of React + Tailwind CSS. 
            We focus on speed, simplicity, and developer happiness.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-gray-600">"This site is incredibly fast and easy to navigate!"</p>
              <p className="mt-4 font-semibold text-indigo-600">— Alex</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-gray-600">"I loved the responsive design and clean layout."</p>
              <p className="mt-4 font-semibold text-indigo-600">— Jamie</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-gray-600">"The best way to demo modern frontend tools!"</p>
              <p className="mt-4 font-semibold text-indigo-600">— Casey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-700 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to build your next project?</h2>
        <p className="mb-6">Start with our template and make it your own.</p>
        <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DemoSite. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
