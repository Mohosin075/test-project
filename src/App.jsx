import About from "./components/About";
import CallForAction from "./components/CallForAction";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
<Navbar/>

      {/* Hero Section */}
<HeroSection/>

      {/* Features */}
      <Features/>

      {/* About Section */}
     <About/>

      {/* Testimonials Section */}
     <Testimonial/>

      {/* Call to Action Section */}
      <CallForAction/>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default App;
