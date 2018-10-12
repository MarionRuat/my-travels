import React from 'react';

export default ({travelsMap})=>(<div><ul>
    {travelsMap.map(travelMap=><li>{travelMap}</li>)}</ul>
    
    </div>)