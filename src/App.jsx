import { Benefits } from "./components/Benefits";
import { Courses } from "./components/Courses";
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
      </main>
    </>
  );
}

export default App
