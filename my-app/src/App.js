import React, { Component } from 'react';
import logo from './logo.svg';
import appLogo from './res/logo.png';
import googlePlayBadge from './res/google-play-badge.png';
import iosBadge from './res/ios.svg';
import stubImage from './res/stub_image.jpg';
import icFacebook from './res/ic-facebook.png';
import icInstagram from './res/ic-instagram.png';
import icTwitter from './res/ic-twitter.png';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
<div className="header">
<div className="left_header_block">
  <div className="left_top_block">
  <div className="paralelogram">
  </div>
  <div className="triangle">
  </div>
</div>

<div className="button_paralelogram">
</div>


  <div className="average_header_block">
      <div className="logo_header">
        <h1>Korean Phrases</h1>
      </div>

    <div className="info_header_block">
      <div className="info_block">
        <h2>The Korean Phrases.....</h2>
        <h3>Every time you sign up <br/> a friend to VITAL you earn 4 referral points. <br/>You also get 2 referral points for people your....</h3>
      </div>
    </div>
  </div>
</div>

  <div className="right_header_block">
    <div className="header_button">
      <div className="button_android">
        <img className="android_img" src={googlePlayBadge}/>
      </div>
      <div className="button_ios">
        <img className="ios_img" src={iosBadge}/>
      </div>
    </div>

    <div className="image_header_block">
      <div className="header_image">
        <img src={ stubImage } />
      </div>
    </div>

  </div>

</div>

  <div className="content">
    <div className="wrapp_info_section">
      <div className="app_info_section">
        <div className="text">
          <h1 className="info_text">Нотатки</h1>
          <p>Застосунок містить основні слова та вирази, які допоможуть вам у <br/>  побутовому спілкуванні з носіями мови. <br/>
          У розділі Діалоги ви знайдете різні життєві ситуації, представлені у вигляді діалогів між двома співрозмовниками. Це чудовий спосіб
            вивчення та практикування мови </p>
        </div>
        <div className="screen">
        <img src={stubImage} />
        </div>
      </div>
      <div className="app_info_section">
        <div className="screen">
        <img src={stubImage} />
        </div>
        <div className="text_left">
          <h1 className="info_text">Cловник</h1>
          <p>fvgbhnjm</p>
        </div>
      </div>
      <div className="app_info_section">
        <div className="text">
          <h1 className="info_text">Нотатки</h1>
          <p>Вивчайте алфавіт, додавайте улюблене, та робіть власні нотатки.</p>
        </div>
        <div className="screen">
        <img src={stubImage} />
        </div>
      </div>
      <div className="app_info_section">
        <div className="screen">
        <img src={stubImage} />
        </div>
        <div className="text_left">
          <h1 className="info_text">Cловник</h1>
          <p>fvgbhnjm</p>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div className="left_block">
      <div className="left_footer_block">
        <div className="logo_footer">
          <img className="logo_img-f" src={ appLogo }/>
          <h1 className="h1-f">Korean phrases</h1>
        </div>
        <div className="info_block">
          <h3 className="h3-f">Every time you sign up <br/> a friend to VITAL you earn 4 referral points.  <br/> You also get 2 referral points for people your....</h3>
        </div>
        <div className="contact_block">
          <h3 className="h4-f">Copyright © 2018 KeyToTech | All Rights Reserved</h3>
        </div>
      </div>
    </div>


    <div className="menu_footer_block">
      <div className="menu_items">
        <div className="menu_item">
          <h2 className="h2-f">About</h2>
        </div>
        <div className="menu_item">
          <h2 className="h2-f">Price</h2>
        </div>
        <div className="menu_item">
          <h2 className="h2-f">Features</h2>
        </div>
      </div>
    </div>



<div className="right_block">
  <div className="follow_block">
    <div className="follow_us">
      <h2 className="h2-f">Follow</h2>
    </div>
    <div className="follow_items">
      <div className="follow_item">
      <img className="foolow_img" src={icFacebook}/>
    </div>
      <div className="follow_item">
        <img className="foolow_img" src={icTwitter}/>
      </div>
        <div className="follow_item">
          <img className="foolow_img" src={icInstagram}/>
    </div>
  </div>
  </div>

</div>

  </footer>


     </div>

    );
  }
}

export default App;
