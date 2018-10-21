import React, {Component} from 'react';
import appLogo from '../res/logo.png';
import icFacebook from '../res/ic-facebook.png';
import icInstagram from '../res/ic-instagram.png';
import icTwitter from '../res/ic-twitter.png';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>                
                <div className="left_block">
                    <div className="left_footer_block">
                        <div className="logo_footer">
                            <img className="logo_img" src={appLogo}/>
                            <h1>Korean phrases</h1>
                        </div>
                        <div className="info_block">
                            <h3>Every time you sign up <br/> a friend to VITAL you earn 4 referral points. <br/> You
                                also get 2 referral points for people your....</h3>
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
        );
    }
}

export default Footer;