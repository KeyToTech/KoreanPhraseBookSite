import React, { Component } from 'react';
import '../table/table.css';
import '../table/media.css';
import chapters from '../../../image/chapters.png';
import dictionary from '../../../image/dictionary.png';
import notes from '../../../image/notes.png';

const wrapContent = [
    {
        image: chapters , title: "Розділи", discription: "Основні слова та вирази, які допоможуть вам у побутовомуспілкуванні з носіями мови.",
        href: "#function-section"
    },
    {
        image: dictionary ,
        title: "Словник", discription: "Більш ніж 900 слів у алфавітному порядку.", href: "#alphabet-section"
    },
    {
        image: notes ,
        title: "Нотатки", discription: "Робіть власні нотаткита записуйте все, що хочете запам’ятати.", href: "#search-section"
    }
]
var button = "Дізнатися більше";

const table = wrapContent.map((table) =>
    <div className="table">
        <div className="image-wrap">
            <img className="image" src={table.image} alt="image" />
        </div>
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
