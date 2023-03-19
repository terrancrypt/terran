import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
