import React from 'react';
import '../alphabet/alphabet.css';
import '../alphabet/media.css';
import alphabet from '..//..//..//image/alphabet_framed.png';

const Alphabet = (props) => (
        <div id="alphabet-section">
            <div className="container-text-alphabet">
                <h2 className="title-alphabet">{props.language.titleAlphabet}</h2>
                <p className="discription-alphabet">{props.language.descriptionAlphabet}</p>
            </div>
            <div className="wrap-screen">
                <div className="screen">
                    <img className="screen-img" src={alphabet} alt="alphabet" />
                </div>
            </div>
        </div>
)

export default Alphabet;
