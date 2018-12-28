import React, { Component } from 'react';
import '../../content/style_three.css';

class SectionThree extends Component {
    render() {
        return (
            <section className="wrapp_info_section_three">
                <div className="main-container-three">
                    <div className="text-component">

                        <h2 className="title-three">
                        Для початківців у розмовнику є Корейський алфавіт
                        </h2>

                        <h3 className="content-three">
                        Вважається, що корейський алфавіт можна вивчити всього лише  за 15 хв!
                        спробуєте?
                        </h3>


                    </div>
                    <div className="price-options">
                        <div className="standart">
                            <p className="standart-name">Standart</p>
                        </div>
                        <p className="text-conten-three">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        <div className="button-container-three">
                            <a href="https://fontawesome.com" className="button-three">Buy now</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionThree;