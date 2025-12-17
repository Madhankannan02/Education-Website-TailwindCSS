import { Benefits } from "./components/Benefits";
import { Courses } from "./components/Courses";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header"
import { Hero } from "./components/Hero";
import { Testimonial } from "./components/Testimonial";

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
        <Testimonial />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
}

export default App
