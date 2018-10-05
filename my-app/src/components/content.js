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
                  <h1 className="info_text">Нотатки</h1>
                  <p>Застосунок містить основні слова та вирази, які допоможуть вам у <br/>  побутовому спілкуванні з носіями мови. <br/>
                  У розділі Діалоги ви знайдете різні життєві ситуації, представлені у вигляді діалогів між двома співрозмовниками. Це чудовий спосіб
                    вивчення та практикування мови </p>
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
                  <p>fvgbhnjm</p>
                </div>
              </div>
              <div className="app_info_section">
                <div className="text">
                  <h1 className="info_text">Нотатки</h1>
                  <p>Вивчайте алфавіт, додавайте улюблене, та робіть власні нотатки.</p>
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
                  <p>fvgbhnjm</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Content;