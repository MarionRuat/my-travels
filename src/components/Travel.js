import React from 'react'

export default ({destination, country, photo, distance})=>(
    <div>
    <h1>{destination}</h1>
    <p>{country}</p>
    <img src={photo} alt="photo" className="travel-picture"/>
    <p>{distance} km</p>
</div>
)
