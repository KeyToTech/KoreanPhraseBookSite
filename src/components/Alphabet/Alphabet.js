import React from "react";
import "./Alphabet.css";
import AlphabetTable from "./AlphabetTable/AlphabetTable";

const Alphabet = ({ alphabet }) => {
  return (
    <div className="alphabet-area">
      {alphabet &&
        alphabet.map(item => {
          return <AlphabetTable item={item} />;
        })}
    </div>
  );
};

export default Alphabet;
