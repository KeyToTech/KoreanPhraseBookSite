import React, { Component } from 'react';
import '../table/table.css';
import '../table/media.css';

import sectionsImage from '../../../image/sections.png';
import vocabularyImage from '../../../image/vocabulary.png';
import notesImage from '../../../image/notes.png';

const images = [sectionsImage, vocabularyImage, notesImage];

const table = (table) => table.tables.map((table) =>
    <div className="table">
        <div className="text-container">
            <h2 className="title">{table.title}</h2>
            <p className="discription">{table.description}</p>
        </div>
        <a className="button" href={table.href}>{table.btnTable}</a>
    </div>
);

const Table = (props) => (
    <div id="wrap-table">
        <div className="tables">
            {table(props.language.Table)}
        </div>
    </div>
)

export default Table;
