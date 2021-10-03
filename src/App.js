import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Form from "./components/Form/Form";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Capabilities />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
