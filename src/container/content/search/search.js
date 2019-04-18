import React from 'react';
import '../search/search.css';
import '../search/media.css';
import rozdil from '..//..//..//image/rozdil_framed.png';
import middleCircle from '..//../../image/middle_circle.png';
import smallCircle from '..//../../image/small_circle.png';
import doubleCircle from '..//../../image/double_circle.png';

var title = "Зручний пошук";
var discription = "Всього лише за мить допоможе знайти потрібне  вам слово чи фразу шукайте всюди:";
const items = ["Основні вирази", "Числа", "Їжа", "Покупки", "Університет", "Транспорт", "Час", "Зв’язок", "Додаткові матеріали", "Словник"];
var item = "";

function setItem(items) {
    return (
        item = items.map((item) =>
            <ul>
                <li>
                    <h2>  <span className="item"><i class="fas fa-check"></i>{item}</span></h2>
                </li>
            </ul>
        )
    )
}

const Search = () => (
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
                <h2 className="title-search">{title}</h2>
                <p className="discription-search">{discription}</p>
            </div>
            <div className="wrap-items">
                {setItem(items)}
            </div>
        </div>

    </div>
)

export default Search;