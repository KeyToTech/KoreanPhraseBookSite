import React from 'react';
import '../functions/functions.css';
import '../functions/media.css';
import dialogues from '../../../assets/image/dialogs_android.png';
import background from '../../../assets/image/background.png';
import middleCircle from '../../../assets/image/middle_circle.png';
import smallCircle from '../../../assets/image/small_circle.png';
import doubleCircle from '../../../assets/image/double_circle.png';

function setItem(items) {
    return (
        items.map((item) =>
            <li>
                <h2><span className="item">{item}</span></h2>
            </li>
        )
    )
}

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
            <div className="text-container-function">
                <h2 className="title-function">{props.language.titleFunctins}</h2>
                <p className="discription-function">{props.language.descriptionFunctions}</p>
            </div>
            <div className="container-items">
                <ul>
                    {setItem(props.language.itemsFunctions)}
                </ul>
            </div>
        </div>
    </div>
)

export default Function;
