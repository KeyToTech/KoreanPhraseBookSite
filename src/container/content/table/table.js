import React, { Component } from 'react';
import '../table/table.css';
import '../table/media.css';

import sectionsImage from '../../../image/sections.png';
import vocabularyImage from '../../../image/vocabulary.png';
import notesImage from '../../../image/notes.png';


const table = (language, strings) => strings.Table.tables.map((table) =>
    <div className="table">
        <div className="text-container">
            <h2 className="title">{table.title}</h2>
            <p className="discription">{table.description}</p>
        </div>
        <a className="button" href={table.href}>{strings.Table.btnTable}</a>
    </div>
);

const Table = (props) => (
    <div id="wrap-table">
        <div className="tables">
            {table(props.language, props.strings)}
        </div>
    </div>
)

export default Table;
