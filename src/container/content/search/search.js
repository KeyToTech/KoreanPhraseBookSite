import React from 'react';
import '../search/search.css';
import '../search/media.css';
import rozdil from '..//..//..//image/rozdil_framed.png';
import middleCircle from '..//../../image/middle_circle.png';
import smallCircle from '..//../../image/small_circle.png';
import doubleCircle from '..//../../image/double_circle.png';

var title = "Зручний пошук";
var discription = "Всього лише за мить допоможе знайти потрібне  вам слово чи фразу шукайте всюди:";
var kTitle = "특정 어휘 검색";
var kDiscription = "어휘와 구문을 빨리 찾을 수 있습니다:";
const items = ["Основні вирази", "Числа", "Їжа", "Покупки", "Університет", "Транспорт", "Час", "Зв’язок",
    "Додаткові матеріали", "Словник"];
const kItems = ["기본 표현", "숫자", "음식", "쇼핑", "대학교", "교통", "시간", "커뮤니케이션",
    "추가 자료", "사전"];
var item = "";
var kItem = "";

function setItem(items) {
    items.map((item) =>
        <li>
            <h2>  <span className="item"><i class="fas fa-check"></i>{item}</span></h2>
        </li>
    )

}

const Search = (props) => (
    <div id="search-section" name="search">
        <div className="wrapper">
            <img className='background-circle-ms' src={middleCircle} alt="background" />
            <img className='background-circle-ds' src={doubleCircle} alt="background" />
            <img className='background-circle-ss' src={smallCircle} alt="background" />
            <div className="screen">
                <img className="screen-img" src={rozdil} alt="alphabet" />
            </div>
        </div>
        <div className="wrap-content-section">
            <div className="title-search-container">
                <h2 className="title-search">{props.language.titleSearch}</h2>
                <p className="discription-search">{props.language.descriptionSearch}</p>
            </div>
            <div className="wrap-items">
                <ul>
                    {setItem(props.language.itemsSearch)}
                </ul>
            </div>
        </div>
    </div>
)

export default Search;