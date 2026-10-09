
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicePage";

import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";

function GalleryPage() {
  return (
    <main>
      <Gallery />
    </main>
  );
}

function BookingPage() {
  return (
    <main>
      <Booking />
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;