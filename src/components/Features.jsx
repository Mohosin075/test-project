const Features = () => {
  return (
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
  )
}

export default Features