import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";


import ClubsSection from "./components/ClubsSection";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { clubsData, projectsData } from "./data";
import "./components/Cards.css";
import "./App.css";
import ProjectSubmissionForm from "./components/MentorProjectForm";

import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  const [search, setSearch] = useState("");
  const [club, setClub] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true, offset: 100 });
  }, []);

  // Filtering logic remains the same
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch = [
      project.title,
      project.description,
      project.club,
      ...project.tags,
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesClub = !club || getClubIdByName(project.club) === club;
    const matchesDifficulty = !difficulty || project.difficulty === difficulty;
    return matchesSearch && matchesClub && matchesDifficulty;
  });

  function getClubIdByName(name) {
    const c = clubsData.find((c) => c.name === name);
    return c ? c.id : "";
  }

  return (
    <Router>
      <Header setShowModal={setShowModal} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />

              <ClubsSection clubsData={clubsData} setClub={setClub} />
              <FeaturedProjects filteredProjects={filteredProjects} />
              <Footer />
            </>
          }
        />
        <Route path="/projects/:title" element={<ProjectDetails />} />
        <Route
          path="/mentor-project-form"
          element={<ProjectSubmissionForm />}
        />
        <Route path="/login" element={<Modal setShowModal={setShowModal} />} />
       
      </Routes>
    </Router>
  );
};

export default App;
