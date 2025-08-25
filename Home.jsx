import React from "react";
import Sidebar from "../components/Sidebar";
import "./Home.css"; 

const Home = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />   
            
            {/* New container for FirstBox + smallBox */}
            <div >
                <div className="FirstBox">
                    <h1>AI Negotiator</h1>
                    <h2>Supercharge your business with smart negotiation and real-
                        time insights.
                    </h2>
                    <a href="https://example.com">
                        <button className="Button">Get Started</button>
                    </a>
                </div>

                {/* Wrapper for small boxes */}
                <div className="smallBoxes">
                    <div className="smallBox"> 
                        <h2>Smart Suggestions</h2>
                        <h3>AI-powered recommendations to
                        maximize your sales and profits.</h3>
                        
                    </div>
                    <div className="smallBox"> 
                        <h2>AI Insights</h2>
                        <h3>AI-powered recommendations to
                        maximize your sales and profits.</h3>
                    </div>
                    <div className="smallBox"> 
                        <h2>Analytics</h2>
                        <h3>AI-powered recommendations to
                        maximize your sales and profits.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
