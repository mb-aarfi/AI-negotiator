import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: 16 }}>
      <h1>AI Negotiator</h1>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/retailer">Retailer</Link>
        <Link to="/wholesaler">Wholesaler</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/retailer" element={<div>Retailer</div>} />
      <Route path="/wholesaler" element={<div>Wholesaler</div>} />
      <Route path="/admin" element={<div>Admin</div>} />
    </Routes>
  );
}

