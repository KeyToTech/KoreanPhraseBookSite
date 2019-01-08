import React, { Component } from 'react';
import '../../content/form.css';

class Form extends Component {
    render() {
        return (
            <section className="form">

                <div className="form-container">
                    <h2 className="subscrive">Підписатися</h2>
                    <p className="discription">Отримуйте наші оновлення з пропозиціями та планами</p>

                  <div className="subscrive-form">
                    <form>
                        <input  type="email" placeholder="Введіть електронну пошту" />
                        <input  type="submit" value="Підписатися" href="#" />
                    </form>
                 </div>
                </div>
            </section>
        );
    }
}

export default Form;
