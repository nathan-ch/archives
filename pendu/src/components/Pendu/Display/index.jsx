import React from "react";

const Display = ({ hideWord, usedLetters, life } ) => {
  return (
    <div>
      <p> Nombre de vies : {life}</p>
      <h4>Le mot à deviner : </h4>
      <h2>{hideWord}</h2>
      <p>Lettres qui ne sont pas dans le mot : {usedLetters}</p>
    </div>
  );
};

export default Display;