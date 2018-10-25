import React, { Component } from 'react';
import appLogo from '../res/logo.png';
import icFacebook from '../res/ic-facebook.png';
import icInstagram from '../res/ic-instagram.png';
import icTwitter from '../res/ic-twitter.png';
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
          <div className="follow_block">
            <div className="follow_us">
              <h2 className='follow_heading'>Follow</h2>
            </div>
          <div className="follow_items">
            <div className="follow_item">
              <a href="" class="active">                 
               <img className="follow_img" src={icFacebook}/>
               </a>
             </div>
             <div className="follow_item">
                <a href={KTT_WEB_SITE} class="active">                 
                  <img className="follow_img" src={icTwitter}/>
                 </a>
                </div>
              <div className="follow_item">
                <a href={KTT_WEB_SITE} class="active">                
                 <img className="follow_img" src={icInstagram}/>
                  </a>
                </div>
            </div>
            <div className='develop-block'>
            <h2>Developed by: <a href={KTT_WEB_SITE} class="active">KeyToTech</a></h2>
            </div>
          </div>
        </div>
      </footer>
        );
    }
}

export default Footer;