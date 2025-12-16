import { Benefits } from "./components/Benefits";
import { Courses } from "./components/Courses";
import { Header } from "./components/Header"
import { Hero } from "./components/Hero";

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
      </main>
    </>
  );
}

export default App
