import React, { Component } from 'react';
import '../../content/style.css';



class SectionOne extends Component {
    render() {
        return (
            <section className="wrapp_info_section_one">

                <div className="tables">
                
                    <div className="col">
                
                       <div className="table">

                       <h2>Розділи</h2>


                       <h4>Основні слова та вирази,
                             які допоможуть вам у побутовому
                                  спілкуванні з носіями мови. 
                       </h4>

                       <a href="#">Дізнатися більше</a>


                
                       </div>

                    </div>

                    <div className="col">
                
                        <div className="table">
         
                        <h2>Словник</h2>

                        <h4>
                        Більш ніж 900 слів
у алфавітному порядку.
 
                       </h4>

                       <a href="#">Дізнатися більше</a>

                        </div>

                    </div>

                    <div className="col">
                
                         <div className="table">

                         <h2>Нотатки</h2>

                         <h4>
                         Робіть власні нотатки
та записуйте все, що хочете запам’ятати.

                       </h4>

                       
                       <a href="#">Дізнатися більше</a>


                        </div>

                    </div>
                
                </div>
                 

                

            </section>
        );
    }
}

export default SectionOne;