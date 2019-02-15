import React, { Component } from 'react';
import '../content/wrap.css';
import Table from "../content/table/table.js";
import Functions from "../content/functions/functions.js";
import Alphabet from "../content/alphabet/alphabet.js";
import Search from "../content/search/search.js";
import Form from "../content/form/form.js";


class Wrap extends Component {



    render() {

        var timer = this.props.setName;
        return (
            <div className="wrap-content">
              
                <Table />
                <Functions />
                <Alphabet />
                <Search />
                <Form />
            </div>
        );
    }
}

export default Wrap;