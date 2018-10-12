import React from 'react';

const travelsMap = [ 'Japon','Suède','Vietnam','USA','Coratie'];

export default ({travelsMap})=>(<div><ul>
    {travelsMap.map(travelMap=><li>{travelMap}</li>)}</ul>
    
    </div>)