import React, { Component } from 'react';
import stubImage from '../res/stub_image.jpg';
import googlePlayBadge from '../res/google-play-badge.png';
import iosBadge from '../res/ios.svg';
import koreanImg from '../res/korea.jpg';

import './header.css';

class Header extends Component {
    render() {
        return (
          
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
        <img className='app-illustration' src={ koreanImg } />
      </div>
    </div>

  </div>

</div>
        );
    }
}

export default Header;