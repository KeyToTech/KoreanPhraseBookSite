import React from 'react';
import koreanImg from '../../korean2.png';
import logo from '../../image/logo.png';
import googlePlayBottom from '../../google-store.png';
import iosStoreBottom from '../../ios-store.png';
import '../header/header.css';
import '../header/media.css';
import { findDOMNode } from 'react-dom';
var logoName = "Korean Phrase";
var title = "Корейський розмовник";
var subtitle = "Завантажуйте Корейський розмовник та спілкуйтесь корейською легко та ефективно!";

const items = [
  { class: "item", href: "#header", name: "Головна", active: "active" },
  { class: "item", href: "#wrap-table", name: "Категорії" },
  { class: "item", href: "#function-section", name: "Функції" },
  { class: "item", href: "#wrap-form", name: "Оновлення" },
]

function setMenu(items) {
  var item;
  return (
    item = items.map((item) =>
      <li className={item.class}><a href={item.href} class={item.active}>{item.name}</a></li>
    ))
}

function menu() {
  return (
    <div className="menu">
      <ul className="menu-items">
        {setMenu(items)}
      </ul>
    </div>
  )
}

function buttons() {
  return (
    <div className="button-wrap">
      <div className="button-android">
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.keytotech.koreanphrasebook" >
          <img className="android-img" alt="android_img" src={googlePlayBottom} />
        </a>
      </div>

      <div className="button-ios">
        <a target="_blank" href="http://www.keytotech.com/" >
          <img className="ios-img" alt="ios_img" src={iosStoreBottom} />
        </a>
      </div>
    </div>
  )
}

const Header = () => (
  <div id="header" className="header">
    <div className="wrap-header">
      <nav className="navigation-tab">
        <div className="logo">
          <img className="logo-img" alt="img" src={logo} />
          <h3 className="logo-name">{logoName}</h3>
        </div>
        {menu()}
      </nav>
      <div className="wrap-main-content">
        <div className="main-content">
          <div className="info-header">
            <h2 className='title'>{title}</h2>
            <p className='subtitle'>{subtitle}</p>
          </div>
          {buttons()}
        </div>
        <div className="image-header">
          
        </div>
      </div>
    </div>
  </div>
);

function scroll() {
  const el = findDOMNode(this.refs.toggle);
  

}

export default Header;
