import React, {Component} from 'react';
import stubImage from '../res/stub_image.jpg';
import koreanImg from '../res/korea.jpg';
import googlePlayBottom from '../res/google-store.png';
import iosStoreBottom from '../res/ios-store.png';
import './header.css';

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

                            <div className="info_header_block">
                                <h2 className='title'>Корейський розмовник</h2>
                                <h3 className='subtitle'>Завантажуйте Корейський розмовник та спілкуйтесь корейською
                                    легко та ефективно!</h3>
                            </div>
                        </div>
                    </div>

                    <div className="right_header_block">
                        <div className="button_wrap">
                            <div className="button_android">
                                <a href="http://www.keytotech.com/" class="active">
                                    <img className="android_img" src={googlePlayBottom}/>
                                </a>
                            </div>
                            <div className="button_ios">
                                <a href="http://www.keytotech.com/" class="active">
                                    <img className="ios_img" src={iosStoreBottom}/>
                                </a>
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