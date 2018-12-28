import React, { Component } from 'react';
import '../../content/style_two.css';

class SectionTwo extends Component {
    render() {
        return (
            <section className="wrapp_info_section_two">
                <div className="main-container-two">

                    <h2 className="title-section-two">
                    Ми розробили багато цікавих функцій
                    </h2>
                    <h3 className="text-section-two">
                    Додавайте корисні для вас слова та фрази в улюблене
                      практикуйте реальні побутові ситуації за допомогою діалогів
              </h3>
                    <div className="item-section-two">
                        1. Улюблене<br/> 
                        2. Діалоги
                     </div>
                </div>


            </section>
        );
    }
}

export default SectionTwo;