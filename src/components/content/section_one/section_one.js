import React, { Component } from 'react';
import '../../content/style.css'


class SectionOne extends Component {
    render() {
        return (
            <section className="main-container">

                <div className="row">

                    <div className="collumn-green">
                        <div className="image"></div>
                        <div className="content"></div>
                        <div className="button">
                           
                        </div>
                    </div>

                    <div className="collumn-blue"></div>
                    <div className="collumn-red"></div>


                </div>



            </section>
        );
    }
}

export default SectionOne;