import React from 'react';
import './footer.css';
const FACEBOOK_URL = 'https://www.facebook.com/%D0%9A%D0%BE%D1%80%D0%B5%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D1%80%D0%BE%D0%B7%D0%BC%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-334992067059489/?modal=admin_todo_tour';
const TWITTER_URL = 'https://twitter.com/kor_rozmovnyk?lang=en';
const INSTAGRAM_URL = 'https://www.instagram.com/korean_phrasebook/';
const KTT_WEB_SITE = 'http://www.keytotech.com/';

function followButton(img, link) {
  return (
    <div className="follow_item">
      <a href={link} class="btn">
        {img}
      </a>
    </div>
  )
}

const FollowUs = () => (
  <div className="follow_block">
    <div className="follow_us">
      <h2 className='follow_heading'>Follow US</h2>
    </div>
    <div className="follow_items">
      {followButton(<i class="fab fa-facebook-f"></i>, FACEBOOK_URL)}
      {followButton(<i class="fab fa-twitter"></i>, TWITTER_URL)}
      {followButton(<i class="fab fa-instagram"></i>, INSTAGRAM_URL)}
    </div>
    <div className='develop_block'>
      <h2>Developed by: <a href={KTT_WEB_SITE} class="active">KeyToTech</a></h2>
    </div>
  </div>
)

export default FollowUs;