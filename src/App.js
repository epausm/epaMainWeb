import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Admin/>} />
          <Route exact path="/about" element ={<About/>} />
          <Route exact path="/contact" element ={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;