import React, { Component } from 'react';
import Travel from './components/Travel';
import Travels from './components/Travels';
import Quote from './components/Quote';
import Quotes from './components/Quotes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Quotes />
          <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      <Travels travelsMap={travelsMap} />
         <Travel destination="Ocean"
country='the Philippines'
photo="https://4.bp.blogspot.com/-tI91nFxjcRI/UKRGcsc1XBI/AAAAAAAADbs/dR7pZ_021T0/s1600/AA7.jpg"
distance='11 373'/>
         <Travel destination="Hiking"
country='Mogonlia'
photo="https://www.voyage-mongolie.com/wp-content/uploads/2018/08/voyage-mongolie.jpg"
distance='7 473'/>


      </div>
    );
  }
}

export default App;
