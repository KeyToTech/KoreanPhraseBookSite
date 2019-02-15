import React from 'react';
import '../functions/functions.css';
import '../functions/media.css';
import dialogues from '..//..//..//image/dialogs_android.png';

var title = "Ми розробили багато цікавих функцій";
var discription = " Додавайте корисні для вас слова та фрази в улюблене практикуйте реальні побутові ситуації за допомогою діалогів";
var item = "";
var i = 0;
const items = ["Улюблене", "Діалоги"];

function setItem(items) {
    return (
        item = items.map((item) =>
            <ul>
                <li>
                    <h2>  <span className="item">{++i}.  {item}</span></h2>
                </li>
            </ul>
        )
    )
}

const Function = () => (
    <div id="function-section">

        <div className="    ">
            <div className="screen">
                <img className="screen-img" src={dialogues} alt="alphabet" />
            </div>
        </div>
        <div className="wrap-context-function">
            <div className="text-container-function">
                <h2 className="title-function">{title}</h2>
                <p className="discription-function">{discription}</p>
            </div>
            <div className="container-items">
                {setItem(items)}
            </div>
        </div>
    </div>
)

export default Function;
