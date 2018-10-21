import React, {Component} from 'react';
import koreanImg from '../res/korea.jpg';
import googlePlayBottom from '../res/google-store.png';
import iosStoreBottom from '../res/ios-store.png';

import './header.css';

const TITLE = 'Корейський розмовник';
const SHORT_DESCRIPTION = 'Завантажуйте Корейський розмовник та спілкуйтесь корейською легко та ефективно!';

const KEY_TO_TECH = 'https://keytotech.com';
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
                                <h1>{TITLE}</h1>
                            </div>

                            <div className="info_header_block">
                                <div className="info_head_block">
                                    <h2>{TITLE}</h2>
                                    <h3>{SHORT_DESCRIPTION}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right_header_block">
                        <div className="header_button">
                            <div className="button_android">                            
                                <a href={ANDROID_APP_LINK} class="active"><img className="android_img" src={googlePlayBottom}/></a>
                            </div>
                            <div className="button_ios">
                                <a href={KEY_TO_TECH} class="active"><img className="ios_img" src={iosStoreBottom}/></a>
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