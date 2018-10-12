import React from 'react';
import Travel from './Travel';

const travelsMap = [ 'Japon','Suède','Vietnam','USA','Coratie'];

export default ()=>(<div><ul>
    {travelsMap.map(travelMap=><Travel {...travelMap} />)}</ul>
    
    </div>)