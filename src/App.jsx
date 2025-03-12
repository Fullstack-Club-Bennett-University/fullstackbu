// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import MeetTheTeamSection from './components/Teams/MeetTheTeamSection';
import EventsSection from './components/Event/EventSection';
import UpcomingEventsSection from './components/UpcomingEventsSection/UpcomingEventsSection';
import NotFound from './components/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ paddingTop: '70px' }}>
          <Routes>
            {/* Main Route */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <section id="event">
                    <EventsSection />
                  </section>
                  <section id="team">
                    <MeetTheTeamSection />
                  </section>
                  <section id="UpcomingEventsSection">
                    <UpcomingEventsSection />
                  </section>
                  <section id="footer">
                    <Footer />
                  </section>
                </>
              }
            />
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;