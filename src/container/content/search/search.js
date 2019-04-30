import React from 'react';
import '../search/search.css';
import '../search/media.css';
import rozdil from '..//..//..//image/rozdil_framed.png';
import middleCircle from '..//../../image/middle_circle.png';
import smallCircle from '..//../../image/small_circle.png';
import doubleCircle from '..//../../image/double_circle.png';

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
                    {props.language.itemsSearch.map((item) =>
                        <li>
                            <h2><span className="item"><i class="fas fa-check"></i>{item}</span></h2>
                        </li>)
                    }
                </ul>
            </div >
        </div >
    </div >
)

export default Search;