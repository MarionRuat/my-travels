import React, { Component } from 'react';
import Travel from './components/Travel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
