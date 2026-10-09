import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
    </>
  );
}

export default Home;