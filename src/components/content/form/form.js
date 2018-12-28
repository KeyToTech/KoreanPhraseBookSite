import React, { Component } from 'react';
import '../../content/form.css';

class Form extends Component {
    render() {
        return (
            <section className="form">

                <div className="form-container">
                    <h2 className="subscrive">Підписатися</h2>
                    <p className="discription">Отримуйте наші оновлення з пропозиціями та планами</p>

                    <form className="subscrive-form">
                        <input className="search-txt" type="text" placeholder="Введіть електронну пошту" />
                        <input className="search-btn" type="submit" value="Підписатися" href="#" />
                    </form>
                </div>
            </section>
        );
    }
}

export default Form;
