import React from 'react';
import koreanImg from '../../image/image_header.png';
import logo from '../../image/logo.png';
import logoMb from '..//..//logo.png';
import googlePlayBottom from '../../google-store.png';
import iosStoreBottom from '../../ios-store.png';
import '../header/header.css';
import '../header/media.css';
import { findDOMNode } from 'react-dom';

const href = ['#header', '#wrap-table', '#function-section', '#wrap-form']

function setMenu(items, href) {
  return (
    items.map((item, index) =>
      <li className='item'><a href={href[index]} class={index == 0 ? 'active' : ''}>{item}</a></li>
    ))
}

function menu(items) {
  return (
    <div className="menu">
      <ul className="menu-items">
        {setMenu(items, href)}
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
        <a href="https://itunes.apple.com/us/app/%D0%BA%D0%BE%D1%80%D0%B5%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D1%80%D0%BE%D0%B7%D0%BC%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA/id1456473272" target="_blank">
          <img className="ios-img" alt="ios_img" src={iosStoreBottom} />
        </a>
      </div>
    </div>
  )
}

const Header = (props) => (
  <div id="header" className="header">
    <div className="container-btn-translation">
      <div className="wrap-btn">
        <button id="ukr" value="ukr" onClick={props.changeLanguageSiteUkr} className="btn-tr">UKR</button>
        <button id="kor" value="kor" onClick={props.changeLanguageSiteKor} className="btn-tr">KOR</button>
      </div>
    </div>
    <div className="wrap-header">
      <nav className="navigation-tab">
        <div className="logo">
          <img className="logo-img" alt="img" src={logo} />
          <img className="logo-img-mb" alt="img-mb" src={logoMb} />
          <h3 className="logo-name">{props.language.logoName}</h3>
        </div>
        {menu(props.language.links)}
      </nav>
      <div className="wrap-main-content">
        <div className="main-content">
          <div className="info-header">
            <h2 className='title'>{props.language.title}</h2>
            <p className='subtitle'>{props.language.description}</p>
          </div>
          {buttons()}
        </div>
      </div>
    </div>
    <div className="image-header">
      <img className="image-hd" src={koreanImg} alt="image" />
    </div>
  </div>
);

function scroll() {
  const el = findDOMNode(this.refs.toggle);
}

export default Header;
