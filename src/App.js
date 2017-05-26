import React from 'react'

import HeadSection from './HeadSection'
import AboutSection from './AboutSection'
import WorksSection from './WorksSection'
import ContactSection from './ContactSection'

const App = () => {
  return (
    <div>
      <HeadSection title="uutarou's profile"/>
      <AboutSection/>
      <WorksSection />
      <ContactSection />
    </div>
  );
}

export default App;
