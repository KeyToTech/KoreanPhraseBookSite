import React, {Component} from 'react';
import stubImage from '../res/stub_image.jpg';
import koreanImg from '../res/korea.jpg';
import googlePlayBottom from '../res/google-store.png';
import iosStoreBottom from '../res/ios-store.png';

import './header.css';

const ANDROID_APP_LINK = 'https://play.google.com/store/apps/details?id=com.keytotech.koreanphrasebook';

class Header extends Component {
    render() {
        return (

            <div className="header">
                <div className='header-block'>
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
                                <div className="info_head_block">
                                    <h2>The Korean Phrases.....</h2>
                                    <h3>Every time you sign up <br/> a friend to VITAL you earn 4 referral points. <br/>You
                                        also get 2 referral points for people your....</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right_header_block">
                        <div className="header_button">
                            <div className="button_android">                            
                                <a href={ANDROID_APP_LINK}><img className="android_img" src={googlePlayBottom}/></a>
                            </div>
                            <div className="button_ios">
                                <a href="https://keytotech.com"><img className="ios_img" src={iosStoreBottom}/></a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="image_header_block">
                    <div className="header_image">
                        <img className='app-illustration' src={koreanImg}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;