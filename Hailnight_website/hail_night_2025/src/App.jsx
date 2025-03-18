import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage"; // Your Navbar component
import TicketPage from "./Ticketpage"; // Example pages
import SchedulePage from "./Schedulepage";
import MerchandisePage from "./Merchandisepage";
import EventProgram from "./EventProgram"; // Import your Event Program Page
import Navbar from "./Navbar"

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Render Navbar as the Home Page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/merchandise" element={<MerchandisePage />} />
        <Route path="/event-program" element={<EventProgram />} />
      </Routes>
    </Router>
  );
}
