
import './App.css'
import './Index.css'
import './components/Card/Card.css'; // Import the CSS for Card styles
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Card from './components/Card/Card';
import northvoltImage from './assets/casestudy2_img.png';  // Adjust path to your image

// Array of project data
const projects = [
  {
    title: "Northvolt Identity Page System: Creating a unified home for product information across company-wide production lines.",
    summary: "In the scope of Industry 4.0, production processes have become more reliant on interoperability and seamless interactions between smart systems and human operators.",
    link: "/project2",
    image: northvoltImage,
  },
  {
    title: "Master's Thesis Project",
    summary: "A short introduction to the project.",
    link: "/project1",
    image: northvoltImage,
  },
  {
    title: "Gjellestad Ship Excavation",
    summary: "A short introduction to the project.",
    link: "/project3",
    image: northvoltImage,
  },
  {
    title: "Pawse: Browser Extension",
    summary: "A short introduction to the project.",
    link: "/project4",
    image: northvoltImage,
  },
];

function App() {

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Cards Section */}
        <div className="app">
          <div className="cards-container">
            {projects.map((project, index) => (
             <Card
             key={index}
             {...project}
             position={index % 2 === 0 ? "left" : "right"} // Alternating "left" and "right"
             // Pass other properties like title, summary, etc. here as well
           />
            ))}
          </div>
        </div>

        <Footer />
      </Router>
    </>
  )
}

export default App
