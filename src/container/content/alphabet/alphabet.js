import React from 'react';
import '../alphabet/alphabet.css';
import '../alphabet/media.css';
import alphabet from '..//..//../image/image_alphabet.png';

var title = "Для початківців у розмовнику є Корейський алфавіт";
var discription = " Вважається, що корейський алфавіт можна вивчити всього лише  за 15 хв! Cпробуєте?";

const Alphabet = () => (
    <div id="alphabet-section">
        <div className="container-text-alphabet">
            <h2 className="title-alphabet">{title}</h2>
            <p className="discription-alphabet">{discription}</p>
        </div>
        <div className="wrap-screen">

            <div className="screen">
                <img className="image-alphabet" src={alphabet} alt="alphabet" />
            </div>

        </div>
    </div>
)

export default Alphabet;
