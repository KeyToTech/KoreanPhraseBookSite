import React, { Component } from 'react';
import '../../content/style.css';



class SectionOne extends Component {
    render() {
        return (
            <section className="wrapp_info_section_one">

               
                    <div className="row">

                        <div className="collumn-green">
                            <div className="image">

                            </div>
                            <div className="content-text">
                                <h1 className="title">Розділи</h1>
                                <p className="text"> основні слова та вирази,які допоможуть вам у побутовомуспілкуванні з носіями мови</p>
                            </div>
                            <div className="button-container">
                                <a href="https://fontawesome.com/icons/check?style=light" className="button">дізнатися більше</a>
                            </div>
                        </div>

                        <div className="collumn-blue">
                            <div className="image">

                            </div>
                            <div className="content-text">
                                <h1 className="title">Словник</h1>
                                <p className="text">більш ніж 900 сліву алфавітному порядку</p>
                            </div>
                            <div className="button-container">
                                <a href="https://www.google.com.ua/" className="button">дізнатися більше</a>
                            </div>
                      </div>
                        <div className="collumn-red">
                            <div className="image">

                            </div>
                            <div className="content-text">
                                <h1 className="title">Нотатки</h1>
                                <p className="text">робіть власні нотаткита записуйте все, що хочете запам’ятати</p>
                            </div>
                            <div className="button-container">
                                <a href="https://www.google.com.ua/" className="button">дізнатися більше</a>
                            </div>
                        </div>


                    </div>

                

            </section>
        );
    }
}

export default SectionOne;