import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import {
  Home,
  CaseStudy,
  About,
  Contact,
  Services,
  Team,
  NotFound,
} from "./pages/pages";
import { Footer, Navbar, Topbar } from "./components/components";

const App = () => {
  return (
    <Router>
      <div className="w-full flex justify-center bg-pri-dark-gray">
        <Topbar />
      </div>
      <div className="w-full flex justify-center bg-[#1b1b1bed]">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/team" Component={Team} />
        <Route path="/casestudy" Component={CaseStudy} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={NotFound} />
      </Routes>
      
      <div className="w-full flex justify-center bg-[rgba(27,27,27,0.93)]">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
