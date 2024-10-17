import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/my-work" element={<h1>Home</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/about-me" element={<h1>Home</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
