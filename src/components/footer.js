import React, {Component} from 'react';
import appLogo from '../res/logo.png';
import icFacebook from '../res/ic-facebook.png';
import icInstagram from '../res/ic-instagram.png';
import icTwitter from '../res/ic-twitter.png';
import './footer.css';

const FACEBOOK_URL = '';
const TWITTER_URL = '';
const INSTAGRAM_URL = '';

class Footer extends Component {
    render() {
        return (
            <footer>                
                <div className="left_block">
                    <div className="left_footer_block">
                        <div className="logo_footer">
                            <img className="logo_img" src={ appLogo }/>
                            <h1 className='app-name'>Корейський розмовник</h1>
                        </div>
                        <div className="info_block">
                            <h3>Завантажуйте Корейський розмовник <br/> та спілкуйтесь корейською легко та ефективно!</h3>
                        </div>
                        <div className="contact_block">
                                    Copyright © 2018 <a href="https://keytotech.com">KeyToTech</a> | All Rights Reserved
                        </div>
                    </div>
                </div>

                <div className="right_block">
                    <div className="follow_block">
                        <div className="follow_us">
                            <h2>Follow</h2>
                        </div>
                        <div className="follow_items">
                            <div className="follow_item">
                                <a href={FACEBOOK_URL}><img className="foolow_img" src={icFacebook}/></a>
                            </div>
                            <div className="follow_item">
                                <a href={TWITTER_URL}><img className="foolow_img" src={icTwitter}/></a>
                            </div>
                            <div className="follow_item">
                                <a href={INSTAGRAM_URL}><img className="foolow_img" src={icInstagram}/></a>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;