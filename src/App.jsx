import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="text-center py-6 text-sm text-gray-400 border-t border-gray-700 mt-12">
        © {new Date().getFullYear()} Gabriel Ejiro — Built with AWS Amplify 🚀
      </footer>
    </div>
  );
}

