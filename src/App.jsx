import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HeroSection from "./components/HeroSection/HeroSection";
import MeetTheTeamSection from "./components/Teams/MeetTheTeamSection";
import EventsSection from "./components/Event/EventSection";
//check
import EventsCarousel2 from "./components/BetterEvent/EventSection2";
import UpcomingEventsSection from "./components/UpcomingEventsSection/UpcomingEventsSection";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer/Footer";
import AwardsComponent from "./components/Awards/Awards";
import MeetTheTeamSectionCopy from "./components/Teams/MeetTheTeamSectioncopy";

function App() {
  return (
    <>
      {/* Google Fonts for Montserrat, Poppins and Rufina */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&family=Rufina:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <main>
            <Routes>
              {/* Main Route */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <section id="UpcomingEventsSection">
                      <UpcomingEventsSection />
                    </section>
                    <section id="event">
                      <EventsSection />
                    </section>
                    <section id="event">
                      <EventsCarousel2 />
                    </section>
                    <section id="team">
                      <MeetTheTeamSection />
                    </section>
                    {/* <section id="team">
                      <MeetTheTeamSectionCopy />
                    </section> */}

                    <section>
                      <AwardsComponent />
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
      {/* <Analytics /> */}
    </>
  );
}

export default App;
