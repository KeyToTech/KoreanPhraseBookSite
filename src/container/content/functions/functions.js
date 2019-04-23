import React from 'react';
import '../functions/functions.css';
import '../functions/media.css';
import dialogues from '..//..//..//image/dialogs_android.png';
import background from '..//..//..//image/background.png';
import middleCircle from '..//../../image/middle_circle.png';
import smallCircle from '..//../../image/small_circle.png';
import doubleCircle from '..//../../image/double_circle.png';

var title = "Ми розробили багато цікавих функцій";
var discription = " Додавайте корисні для вас слова та фрази в улюблене практикуйте реальні побутові ситуації за допомогою діалогів";
var kTitle = "학습자 위한 유용한 가능";
var kDiscription = "즐겨찾기에 자주 사용되는 구문 추가 대화를 통해 실제 가정 상황을 연습";
var item = "";
var kItem = "";
const items = ["Улюблене", "Діалоги"];
const kItems = ["즐겨찾기", "대화"];

function setItem(items, language) {
    if (language == true) {
        return (
            item = items.map((item, index) =>
                <ul>
                    <li>
                        <h2>  <span className="item">{++index}.  {item}</span></h2>
                    </li>
                </ul>
            )
        )
    } else {
        return (
            kItem = kItems.map((item, index) =>
                <ul>
                    <li>
                        <h2>  <span className="item">{++index}.  {item}</span></h2>
                    </li>
                </ul>
            )
        )
    }
}

const changeLanguage = (language) => (
    language == true
        ?
        <div className="text-container-function">
            <h2 className="title-function">{title}</h2>
            <p className="discription-function">{discription}</p>
        </div>
        :
        <div className="text-container-function">
            <h2 className="title-function">{kTitle}</h2>
            <p className="discription-function">{kDiscription}</p>
        </div>
)

const Function = (props) => (
    <div id="function-section">
        <div className="wrapper">
            <img className='background-phones-f' src={background} alt="background" />
            <img className='background-circle-mf' src={middleCircle} alt="background" />
            <img className='background-circle-df' src={doubleCircle} alt="background" />
            <img className='background-circle-sf' src={smallCircle} alt="background" />
            <div className="screen">
                <img className="screen-img" src={dialogues} alt="alphabet" />
            </div>
        </div>
        <div className="wrap-context-function">
            {changeLanguage(props.language)}
            <div className="container-items">
                {setItem(items, props.language)}
            </div>
        </div>
    </div>
)

export default Function;
