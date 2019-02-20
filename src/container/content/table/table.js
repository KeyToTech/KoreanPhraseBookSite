import React, { Component } from 'react';
import '../table/table.css';
import '../table/media.css';

import sectionsImage from '../../../image/sections.png';
import vocabularyImage from '../../../image/vocabulary.png';
import notesImage from '../../../image/notes.png';

const wrapContent = [
    {
        title: "Розділи", 
        discription: "Основні слова та вирази, які допоможуть вам у побутовомуспілкуванні з носіями мови.",
        href: "#function-section",
        image: sectionsImage
    },
    {   
        title: "Словник", 
        discription: "Більш ніж 900 слів у алфавітному порядку.", 
        href: "#alphabet-section",
        image: vocabularyImage
    },
    {   
        title: "Нотатки", 
        discription: "Робіть власні нотаткита записуйте все, що хочете запам’ятати.", 
        href: "#search-section",
        image: notesImage
    }
]
var button = "Дізнатися більше";

const table = wrapContent.map((table) =>
    <div className="table">
        <div className="image"><img src={table.image} /></div>
        <div className="text-container">
            <h2 className="title">{table.title}</h2>
            <p className="discription">{table.discription}</p>
        </div>
        <a className="button" href={table.href}>{button}</a>
    </div>
);

const Table = () => (
    <div id="wrap-table">
        <div className="tables">
            {table}
        </div>
    </div>
)

export default Table;
