import "./App.css";
import HeroSection from "./components/pages/HeroSection";
import Navbar from "./components/layout/Navbar";
import Products from "./components/fragments/Products";
import Testimoni from "./components/fragments/Testimoni";
import Footer from "./components/layout/Footer";
import Description from "./components/fragments/Description";

function App() {
  return (
    <div className="font-roboto overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Products />
      <Testimoni />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
