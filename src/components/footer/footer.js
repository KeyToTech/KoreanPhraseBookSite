import React, { Component } from 'react';
import appLogo from '../../res/logo.png';
import FollowUs from './foolow_us';
import './footer.css';
import './mobile_scaling.css'

// const KTT_WEB_SITE = 'http://www.keytotech.com/';
// const Copyright = 'Copyright © 2018 KeyToTech | All Rights Reserved';


class Footer extends Component {
  render() {
    return (
      <footer className="section_footer">
        <div className="footer_content">
          <div className="left_content_footer">
            <div className="logo_footer">
              <img className="logo_img" alt='logo' src={appLogo} />
              <h1 className='app_name'>Корейський розмовник</h1>
            </div>
            <div className="about_container">
              <h1 className="about_name_footer">About Us</h1>
              <p className="discription_footer">Завантажуйте Корейський розмовник та спілкуйтесь корейською легко та ефективно!</p>
            </div>
          </div>
          <div className="right_content_footer">
            <div className="contacts_container">
              <h1 className="contact_name_footer">Contact Us</h1>
              <div className="wrap_address">
                <p className="top_item"><strong>Office Address</strong><br />
                  16 Collins Street West
                </p>
                <p><strong>Phone:</strong> +38093-98-98-671</p>
                <p><strong>Email:</strong> luisowen11@gmail.com</p>
              </div>
            </div>
            <div className="follow_container">
              <FollowUs />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
