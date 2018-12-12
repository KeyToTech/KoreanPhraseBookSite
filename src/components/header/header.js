import React, { Component } from 'react';
import stubImage from '../../res/stub_image.jpg';
import koreanImg from '../../res/korean2.png';
import googlePlayBottom from '../../res/google-store.png'
import iosStoreBottom from '../../res/ios-store.png';
import './header.css';


document.title = 'Корейський розмовник'; // New title :)

var title = "Корейський розмовник";
var subtitle = "Завантажуйте Корейський розмовник та спілкуйтесь корейською легко та ефективно!";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="figure-block">
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

        <div className="main-block">
          <div className="content-header">
            <div className="info-header">
              <h2 className='title'>{title}</h2>
              <h3 className='subtitle'>{subtitle}</h3>
            </div>
          </div>
          <div className="social-networks-block">
            <div className="button_wrap">
              <div className="button_android">
                <a href="https://play.google.com/store/apps/details?id=com.keytotech.koreanphrasebook" class="active">
                  <img className="android_img" src={googlePlayBottom} />
                </a>
              </div>
              <div className="button_ios">
                <a href="http://www.keytotech.com/" class="active">
                  <img className="ios_img" src={iosStoreBottom} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="image-header">
          <img className='app-illustration' src={koreanImg} />
        </div>

      </div>
    );
  }
}


// top-figuare

{/* <d  iv className="left_top_block">
<div className="paralelogram">
</div>
<div className="triangle">
</div>
</div> */}

// bottom-figure

{/* <div className="button_paralelogram"></div> */ }



// content-header

{/* <div className="average_header_block">

  <div className="info_header_block">
    <h2 className='title'>{title}</h2>
    <h3 className='subtitle'>{subtitle}</h3>
  </div>
</div> */}


// social-networks-block

{/* <div className="right_header_block">
  <div className="button_wrap">
    <div className="button_android">
      <a href="https://play.google.com/store/apps/details?id=com.keytotech.koreanphrasebook" class="active">
        <img className="android_img" src={googlePlayBottom} />
      </a>
    </div>
    <div className="button_ios">
      <a href="http://www.keytotech.com/" class="active">
        <img className="ios_img" src={iosStoreBottom} />
      </a>
    </div>
  </div>
</div> */}

// image-header

{/* <div className="image_header_block">
  <div className="header_image">
    <img className='app-illustration' src={koreanImg} />
  </div>
</div> */}

export default Header;