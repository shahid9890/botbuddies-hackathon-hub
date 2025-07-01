
"use client";

import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Index from "./pages/Index";
import Events from "./pages/Events";
import SchoolHackathons from "./pages/SchoolHackathons";
import CollegeHackathons from "./pages/CollegeHackathons";
import Calendar from "./pages/Calendar";
import PastEvents from "./pages/PastEvents";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import JoinTeam from "./pages/JoinTeam";
import Marketing from "./pages/Marketing";
import AdminPanel from "./pages/AdminPanel";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar toggleTheme={toggleTheme} isDark={isDark} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/events" element={<Events />} />
                <Route path="/school-hackathons" element={<SchoolHackathons />} />
                <Route path="/college-hackathons" element={<CollegeHackathons />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/past-events" element={<PastEvents />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/join-team" element={<JoinTeam />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
