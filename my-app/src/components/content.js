import React, { Component } from 'react';
import stubImage from '../res/stub_image.jpg';
import './content.css'

class Content extends Component{
    render(){
        return(
            <div className="content">
            <div className="wrapp_info_section">
              <div className="app_info_section">
                <div className="text">
                  <h1 className="info_text">Розділи</h1>
                  <p>

Знайомство, покупка одягу і навіть оренда авто. Тематично поділені слова та вирази допоможуть вам легко висловити свою думку та знайти спільну мову з оточуючими. </p>
                </div>
                <div className="screen">
                <img src={stubImage} />
                </div>
              </div>
              <div className="app_info_section">
                <div className="screen">
                <img src={stubImage} />
                </div>
                <div className="text_left">
                  <h1 className="info_text">Cловник</h1>
                  <p>Словник містить понад  900 слів. Ми зробили пошук по алфавіту, щоб ви могли миттєво переходити від А до Я.
</p>
                </div>
              </div>
              <div className="app_info_section">
                <div className="text">
                  <h1 className="info_text">Улюблене</h1>
                  <p>Створіть власний набір фраз, зберігаючи їх в улюбленому. </p>
                </div>
                <div className="screen">
                <img src={stubImage} />
                </div>
              </div>
              <div className="app_info_section">
                <div className="screen">
                <img src={stubImage} />
                </div>
                <div className="text_left">
                  <h1 className="info_text">Діалоги</h1>
                  <p>Різні життєві ситуації, представлені у вигляді діалогів між двома співрозмовниками. Це чудовий спосіб практикування мови!</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Content;