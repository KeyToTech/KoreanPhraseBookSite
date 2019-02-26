import React from 'react';
import '../search/search.css';
import '../search/media.css';
import rozdil from '..//..//..//image/rozdil_framed.png';
import koreans from '..//..//../image/house.png';

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

        <div className="wrap-screen">
            <div className="screen">
                <img className="image-search" src={koreans} alt="alphabet" />
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