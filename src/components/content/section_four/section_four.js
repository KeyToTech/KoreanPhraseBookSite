import React, { Component } from 'react';
import '../../content/style_four.css';


class SectionFour extends Component {
    render() {
        return (
            <section className="wrapp_info_section_four">

                <div className="main-container-four">

                   

                        <div className="title-four">
                            Зручний пошук
                        </div>

                        <div className="content-four">
                        Всього лише за мить допоможе знайти потрібне  вам слово чи фразу
                          шукайте всюди: 

                        </div>

                        <div className="wrap-items">
                            <div className="left-items"> 
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Основні вирази</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Числа</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Їжа</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Покупки</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Університет</span>
                                </li>
                            </ul>
                            </div>
                            <div className="right-items">
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Транспорт</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Час</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Зв’язок</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Додаткові матеріали</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span className="item"><i class="fas fa-check"></i>Словник</span>
                                </li>
                            </ul>
                            </div>
                        </div>



                    
                </div>
            </section>
        );
    }
}

export default SectionFour;



