const Testimonial = () => {
  return (
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
  )
}

export default Testimonial