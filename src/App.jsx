import React from 'react';

// Import components
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import MeetTheTeamSection from './components/Teams/MeetTheTeamSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <HeroSection />
        <section id="team">
          <MeetTheTeamSection />
        </section>
      </main>
    </div>
  );
}

export default App;