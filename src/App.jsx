import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";  // Home page component
import Hero from "./Components/Hero";  // Hero component that includes MenuItems
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />          {/* Home page */}
          <Route path="/menu" element={<Hero />} />      {/* Hero page that includes MenuItems */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
