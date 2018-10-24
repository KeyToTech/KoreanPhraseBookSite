import React, { Component } from 'react';
import appLogo from '../res/logo.png';
import icFacebook from '../res/ic-facebook.png';
import icInstagram from '../res/ic-instagram.png';
import icTwitter from '../res/ic-twitter.png';
import './footer.css';

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
                  <h3>Every time you sign up <br/> a friend to VITAL you earn 4 referral points.  <br/> You also get 2 referral points for people your....</h3>
                </div>
                <div className="contact_block">
                  <h3>Copyright © 2018 KeyToTech | All Rights Reserved</h3>
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
              <a href="http://www.keytotech.com/" class="active">                 
               <img className="follow_img" src={icFacebook}/>
               </a>
             </div>
             <div className="follow_item">
                <a href="http://www.keytotech.com/" class="active">                 
                  <img className="follow_img" src={icTwitter}/>
                 </a>
                </div>
              <div className="follow_item">
                <a href="http://www.keytotech.com/" class="active">                
                 <img className="follow_img" src={icInstagram}/>
                  </a>
                </div>
            </div>
            <div className='develop-block'>
            <h2>Developed by: <a href="http://www.keytotech.com/" class="active">KeyToTech</a></h2>
            </div>
          </div>
        </div>
      </footer>
        );
    }
}

export default Footer;