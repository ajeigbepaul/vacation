import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/content/Hero";
import About from "./components/content/About";
import Newsletter from "./components/content/Newsletter";
import Footer from "./components/footer/Footer";
import "./App.css"
const App = () => {
  return (
    <main className="main__container">
      <Header />
      <div>
        <Hero />
        <About />
        <Newsletter />
      </div>
      <Footer />
    </main>
  );
};

export default App;
