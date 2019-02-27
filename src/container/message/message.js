import React from 'react';
import './message.css';
import Form from '../content/form/form';

class Message extends React.PureComponent{
    render(){
        return<div>
            <div id="message">
                <p>іОС додаток вже на фінальній стадії розробки. Підписуйтеся на наші оновлення, щоб першими дізнатися про запуск додатку в Apple Store</p>
                <a className="MessageButton" href="#" onClick={this.props.showWrap}>Назад</a>
            </div>
            <Form />
        </div>
    }
}

export default Message;