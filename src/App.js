import React from 'react'

import HeadSection from './HeadSection'
import AboutSection from './AboutSection'

//class App extends React.Component {
//  render() {
//    return (
//      <div>
//        <HeadSection title="uutarou's profile"/>
//        <AboutSection/>
//      </div>
//    );
//  }
//}

const App = () => {
  return (
    <div>
      <HeadSection title="uutarou's profile"/>
      <AboutSection/>
    </div>
  );
}

export default App;
