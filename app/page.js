import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <Hero />
      
      {/* White Card Section */}
      <div className="py-20 bg-white">
     
         
              <About />
            
         
      </div>
      
      <Skills />
      
      {/* White Card Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
          
              <Projects />
          
          </div>
        </div>
      </div>
      
      <Contact />
   
     
         
              <Footer />
            

    </div>
  );
}
