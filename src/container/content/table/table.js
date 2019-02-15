import React, { Component } from 'react';
import '../table/table.css';
import '../table/media.css';


const wrapContent = [
    {
        title: "Розділи", discription: "Основні слова та вирази, які допоможуть вам у побутовомуспілкуванні з носіями мови.",
        href: "#function-section"
    },
    { title: "Словник", discription: "Більш ніж 900 слів у алфавітному порядку.", href: "#alphabet-section" },
    { title: "Нотатки", discription: "Робіть власні нотаткита записуйте все, що хочете запам’ятати.", href: "#search-section" }
]
var button = "Дізнатися більше";

const table = wrapContent.map((table) =>
    <div className="table">
        <div className="image"></div>
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
