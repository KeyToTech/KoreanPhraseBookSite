import React, { Component } from 'react';
import '../../content/style.css';
import Button from '@material-ui/core/Button';


class SectionOne extends Component {
    render() {
        return (
            <section className="main-container">

                <div className="row">

                    <div className="collumn-green">
                        <div className="image">
                        <div className="image"></div>
                        </div>
                        <div className="content-text">
                        <h1 className="title">Email Marketing</h1>
                        <p className="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="button">
                            <Button variant="contained" color="primary" >
                                Learn More
                           </Button>
                        </div>
                    </div>

                    <div className="collumn-blue">
                    <div className="image">
                        <div className="image"></div>
                        </div>
                        <div className="content-text">
                        <h1 className="title">Email Marketing</h1>
                        <p className="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="button">
                            <Button variant="contained" color="primary" >
                                Learn More
                           </Button>
                        </div>
                    </div>
                    <div className="collumn-red">
                    <div className="image">
                        <div className="image"></div>
                        </div>
                        <div className="content-text">
                        <h1 className="title">Email Marketing</h1>
                        <p className="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="button">
                            <Button variant="contained" color="primary" >
                                Learn More
                           </Button>
                        </div>
                    </div>


                </div>



            </section>
        );
    }
}

export default SectionOne;