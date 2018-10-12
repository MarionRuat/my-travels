import React from 'react';
import Travel from './Travel';

const travelsMap = [ 'Japon','Suède','Vietnam','USA','Coratie'];

const Travels = ()=>(<div>
    {travelsMap.map(travelMap=> <Travel {...travelMap} />)}
    </div>)

    export default Travels;