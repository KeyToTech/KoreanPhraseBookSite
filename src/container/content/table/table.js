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
        image: sectionsImage,
        button: "Дізнатися більше",
        kTitle: "챕터",
        kDiscription: "새로운 단어들이나 문장들을 쉽게 배울수 있습니다",
        kButton: "더 알아보기",
    },
    {
        title: "Словник",
        discription: "Більш ніж 900 слів у алфавітному порядку.",
        href: "#alphabet-section",
        image: vocabularyImage,
        button: "Дізнатися більше",
        kTitle: "사전",
        kDiscription: "알파벳 순서로 900 단어 이상",
        kButton: "더 알아보기",
    },
    {
        title: "Нотатки",
        discription: "Робіть власні нотаткита записуйте все, що хочете запам’ятати.",
        href: "#search-section",
        image: notesImage,
        button: "Дізнатися більше",
        kTitle: "메모",
        kDiscription: "자주 사용되는 단어나 잊고 싶지 않는 것도 작성하면 됩니다",
        kButton: "더 알아보기",
    }
]
var button = "Дізнатися більше";

const table = (language, strings) => strings.Table.tables.map((table) =>
    language
        ?
        <div className="table">
         
            <div className="text-container">
                <h2 className="title">{table.title}</h2>
                <p className="discription">{table.description}</p>
            </div>
            <a className="button" href={table.href}>{strings.Table.btnTable}</a>
        </div>
        :
        <div className="table">
            <div className="image"><img src={table.image} /></div>
            <div className="text-container">
                <h2 className="title">{table.kTitle}</h2>
                <p className="discription">{table.kDiscription}</p>
            </div>
            <a className="button" href={table.href}>{table.kButton}</a>
        </div>
);

function tables(strings) {
    strings.titleT.map((item) =>
        <div className="table">
            <div className="text-container">
                <h2 className="title">{item}</h2>
            </div>
        </div>
    )

}

const Table = (props) => (
    <div id="wrap-table">
        <div className="tables">

            {table(props.language, props.strings)}
        </div>
    </div>
)

export default Table;
