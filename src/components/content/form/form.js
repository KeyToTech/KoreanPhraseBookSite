import React, { Component } from 'react';
import '../../content/form.css';

class Form extends Component {
    render() {
        return (
            <section className="form">

                <div className="form-container">
                    <h1 className="subscrive">Subscrive</h1>
                    <p className="discription">Receive our updates with offers and plans</p>

                    <form className="subscrive-form">
                        <input className="search-txt" type="text" placeholder="Enter You Email" />
                        <input className="search-btn" type="submit" value="subscrive" href="#" />
                    </form>
                </div>
            </section>
        );
    }
}

export default Form;
