import React from 'react';
import '../form/form.css';
import '../form/media.css';

var subscribe = "Підписатися";
var discription = "Отримуйте наші оновлення з пропозиціями та планами!";
var placeholder = "Введіть електронну пошту";
var btnValue = "Підписатися";

class Form extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    sendEmail = (email) => {
        var templateParams = {
            from: email
        };
         
        window.emailjs.send('gmail', 'default', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }

    validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render(){
        let disabled = !(this.validateEmail(this.state.input));

        return <div id="wrap-form">
        <div className="title-form-container">
            <h2 className="subscribe">{subscribe}</h2>
            <p className="discription-form">{discription}</p>
        </div>

        <div className="subscribe-form">
            <input type="email" placeholder={placeholder} value={this.state.input} onChange={(event) => {
                this.setState({
                    input: event.target.value
                })
            }}/>
            <input type="submit" disabled={disabled} onClick={() => this.sendEmail(this.state.input)} value={btnValue} href="#" />
        </div>
    </div>
    }
}

export default Form;