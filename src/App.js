import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/Services/Services";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="upperBar">
          <p>cjy.heijlman@gmail.com</p>
          <p>+31 612479639</p>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-work" element={<h1>Home</h1>} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-me" element={<h1>Home</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
