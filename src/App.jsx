import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/Navbar";
import TopBar from "./components/Topbar";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsappLogo";

import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contactus";
import Projects from "./pages/Projects";
import NotFound from "./components/NotFound";
// import Clients from "./pages/Clients";
// import Services from "./pages/Services";
// import NotFound from "./pages/NotFound";



function App() {
  return (
    <>
      <TopBar />
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="*" element={<NotFound />} /> 
      </Routes>

      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

export default App;