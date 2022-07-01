import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Login from "./components/Login"
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
//import Course from "./pages/Course";
//import Advisor from "./pages/Advisor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element ={<About/>} />
          <Route exact path="/contact" element ={<Contact/>} />
          <Route exact path="/admin" element ={<Admin/>} />
          {/*<Route exact path="/course" element ={<Course/>} /> */}
          {/*<Route exact path="/advisor" element ={<Advisor/>} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;