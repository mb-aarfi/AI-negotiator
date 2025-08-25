import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AINegotiator from "./pages/AINegotiator"; // 👈 import your new page
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex">
        {/* All routes will be loaded here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-negotiator" element={<AINegotiator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
