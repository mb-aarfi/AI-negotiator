import React from "react";
import { Link } from "react-router-dom"; // 👈 import Link
import HomeIcon from "../assets/HOME.png"; 
import DashboardIcon from "../assets/DASHBOARD.png"; 
import RobotIcon from "../assets/ROBOT.png"; 
import SmartmarketingIcon from "../assets/SMARTMARKETING.png"; 
import InventoryIcon from "../assets/INVENTORY.png"; 
import SmartsuggestionIcon from "../assets/SMARTSUGGESTION.png"; 
import "./Sidebar.css";  

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <img src={RobotIcon} alt="Logo" />
        <h1>NegoKart</h1>
      </div>

      {/* Menu */}
      <nav className="menu">
        <Link to="/"><img src={HomeIcon} alt="Home" className="icon" /> Home</Link>
        <Link to="/"><img src={DashboardIcon} alt="Dashboard" className="icon" /> Dashboard</Link>
        <Link to="/ai-negotiator"><img src={RobotIcon} alt="AI Negotiator" className="icon" /> AI Negotiator</Link>
        <Link to="/"><img src={SmartmarketingIcon} alt="Smart Marketing" className="icon" /> Smart Marketing</Link>
        <Link to="/"><img src={InventoryIcon} alt="Inventory" className="icon" /> Inventory</Link>
        <Link to="/"><img src={SmartsuggestionIcon} alt="Smart Suggest" className="icon" /> Smart Suggest</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
