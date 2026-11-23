/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import SkillsAndInterests from "./components/SkillsAndInterests";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function MainApp() {
  return (
    <div className="min-h-screen bg-navy text-off-white font-sans selection:bg-accent selection:text-white relative">
      <div className="noise-overlay" />
      <main className="relative z-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <SkillsAndInterests />
        <Clients />
        <Contact />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
