import React from 'react'

import HeadSection from './HeadSection'
import AboutSection from './AboutSection'
import WorksSection from './WorksSection'

const App = () => {
  return (
    <div>
      <HeadSection title="uutarou's profile"/>
      <AboutSection/>
      <WorksSection />
    </div>
  );
}

export default App;
