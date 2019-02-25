import React from 'react';
import './message.css';

class Message extends React.PureComponent{
    render(){
        return<div id="message">
            <p>іОС додаток вже на фінальній стадії розробки. Підписуйтеся на наші оновлення, щоб першими дізнатися про запуск додатку в Apple Store</p>
            <a className="MessageButton" href="#" onClick={this.props.showWrap}>Назад</a>
        </div>
    }
}

export default Message;