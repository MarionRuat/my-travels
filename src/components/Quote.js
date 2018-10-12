import React from "react";

const Quote = ({quote,image,character}) => (
  <figure>
    <img
      src={image}
      alt="Nelson Muntz"
    />
    <figcaption>
      <blockquote>
       {quote}.
      </blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default Quote;