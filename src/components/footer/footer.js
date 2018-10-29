import React, { Component } from 'react';
import appLogo from '../../res/logo.png';
import FollowUs from './foolow_us';
import './footer.css';

const KTT_WEB_SITE = 'http://www.keytotech.com/';
const Copyright = 'Copyright © 2018 KeyToTech | All Rights Reserved';
const APP_DESCRIPTION = 'Завантажуйте Корейський розмовник та спілкуйтесь корейською легко та ефективно!';

class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="left_block">
              <div className="left_footer_block">
                <div className="logo_footer">
                  <img className="logo_img" src={ appLogo }/>
                  <h1 className='app-name'>Корейський розмовник</h1>
                </div>
                <div className="info_block">
                  <h3>{APP_DESCRIPTION}</h3>                  
                </div>
                <div className="contact_block">
                 <a href={KTT_WEB_SITE}><h3>{Copyright} </h3></a> 
                </div>
              </div>
            </div>
        
        <div className="right_block">
          <FollowUs />
        </div>
      </footer>
        );
    }
}

export default Footer;