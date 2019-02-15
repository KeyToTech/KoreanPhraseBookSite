import React from 'react';
import '../form/form.css';
import '../form/media.css';

var subscribe = "Підписатися";
var discription = "Отримуйте наші оновлення з пропозиціями та планами!";
var placeholder = "Введіть електронну пошту";
var value = "Підписатися";

const Form = () => (

    <div id="wrap-form">
        <div className="title-form-container">
            <h2 className="subscribe">{subscribe}</h2>
            <p className="discription-form">{discription}</p>
        </div>

        <div className="subscribe-form">
            <input type="email" placeholder={placeholder} />
            <input type="submit" value={value} href="#" />
        </div>
    </div>
)


export default Form;