import React, { Component } from 'react';
import '../../content/style_two.css';

class SectionTwo extends Component {
    render() {
        return (
            <section className="wrapp_info_section_two">
                <div className="main-container-two">

                    <div className="title-section-two">
                        Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit
                    </div>
                    <div className="text-section-two">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <div className="item-section-two">
                        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> 
                        2. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                     </div>
                </div>


            </section>
        );
    }
}

export default SectionTwo;