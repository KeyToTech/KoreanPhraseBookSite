import React, { Component } from 'react';
import '../content/wrap.css';
import Table from "../content/table/table.js";
import Functions from "../content/functions/functions.js";
import Alphabet from "../content/alphabet/alphabet.js";
import Search from "../content/search/search.js";
import Form from "../content/form/form.js";
import strings from '../../components/localization/languages';

class Wrap extends Component {
    render() {
        var timer = this.props.setName;
        return (
            <div className="wrap-content">
                <Table language={this.props.language} strings={this.props.strings} />
                <Functions language={this.props.language} />
                <Alphabet language={this.props.language} />
                <Search language={this.props.language} />
                <Form language={this.props.language} />
            </div>
        );
    }
}

export default Wrap;