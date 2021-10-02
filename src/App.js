import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero/Hero";
import Capabilities from "./components/Capabilities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form/Form";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
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
