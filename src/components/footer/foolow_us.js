import React, { Component } from 'react';
import icFacebook from '../../res/ic-facebook.png';
import icInstagram from '../../res/ic-instagram.png';
import icTwitter from '../../res/ic-twitter.png';
import './footer.css';

const FACEBOOK_URL = '';
const TWITTER_URL = '';
const INSTAGRAM_URL = '';
const KTT_WEB_SITE = '';


function followButton(img, link){
    return ( 
      <div className="follow_item">
          <a href={link} class="active">                 
          <img className="follow_img" src={img}/>
      </a>
    </div>
  )
}

const FollowUs = () => (

        <div className="follow_block">
            <div className="follow_us">
              <h2 className='follow_heading'>Follow</h2>
            </div>
          <div className="follow_items">
                {followButton(icFacebook, FACEBOOK_URL)}
                {followButton(icTwitter, TWITTER_URL)}
                {followButton(icInstagram, INSTAGRAM_URL)}
            </div>
            <div className='develop-block'>
            <h2>Developed by: <a href={KTT_WEB_SITE} class="active">KeyToTech</a></h2>
            </div>
          </div>
)
export default FollowUs;