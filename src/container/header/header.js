import React from 'react';
import koreanImg from '../../korean2.png';
import logo from '../../logo.png';
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

function overlay() {
  return (
    <div className="main-overlay">
      <div className="top-figure">
        <div className="paralelogram">
        </div>

        <div className="triangle">
        </div>
      </div>
      <div className="bottom-figure">
        <div className="bottom-paralelogram"></div>
      </div>
    </div>
  )
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

function buttons(showMessage) {
  return (
    <div className="button-wrap">
      <div className="button-android">
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.keytotech.koreanphrasebook" >
          <img className="android-img" alt="android_img" src={googlePlayBottom} />
        </a>
      </div>

      <div className="button-ios">
        <a href="#message" onClick={showMessage}>
          <img className="ios-img" alt="ios_img" src={iosStoreBottom} />
        </a>
      </div>
    </div>
  )
}

const Header = (props) => (
  <div id="header" className="header">
    {overlay()}
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
          {buttons(props.showMessage)}
        </div>
        <div className="image-header">
          <img className='app-illustration' alt='app-illustration' src={koreanImg} />
        </div>
      </div>
    </div>
  </div>
);

function scroll() {
  const el = findDOMNode(this.refs.toggle);
  

}

export default Header;
