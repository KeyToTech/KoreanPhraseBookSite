import React, { Component } from 'react';
import '../table/table.css';
import '../table/media.css';

import sectionsImage from '../../../image/sections.png';
import vocabularyImage from '../../../image/vocabulary.png';
import notesImage from '../../../image/notes.png';

const images = [sectionsImage, vocabularyImage, notesImage];
const href = ['#function-section', '#alphabet-section', '#search-section'];

const table = (Table) => Table.tables.map((table, index) =>
    <div className="table">
        <div className="image"><img src={images[index]} /></div>
        <div className="text-container">
            <h2 className="title">{table.title}</h2>
            <p className="discription">{table.description}</p>
        </div>
        <a className="button" href={href[index]}>{Table.btnTable}</a>
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
