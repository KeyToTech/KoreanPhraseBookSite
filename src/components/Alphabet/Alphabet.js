import React from "react";
import "./Alphabet.css";

const Alphabet = ({ alphabet }) => {
  return (
    <div className="alphabet-area">
      {alphabet &&
        alphabet.map(item => {
          return <p>{item.koreanLetter}</p>;
        })}
    </div>
  );
};

export default Alphabet;
