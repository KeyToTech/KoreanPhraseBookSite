import React from 'react';
import '../footer/footer.css';
import logo from '../../assets/image/logo_black.png';
const FACEBOOK_URL = 'https://www.facebook.com/%D0%9A%D0%BE%D1%80%D0%B5%D0%B9%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D1%80%D0%BE%D0%B7%D0%BC%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-334992067059489/?modal=admin_todo_tour';
const TWITTER_URL = 'https://twitter.com/kor_rozmovnyk?lang=en';
const INSTAGRAM_URL = 'https://www.instagram.com/korean_phrasebook/';
const KTT_WEB_SITE = 'http://www.keytotech.com/';

function followButton(img, link) {
    return (
        <div className="f-item">
            <a target="_blank" rel="noopener noreferrer" href={link} class="btn">
                {img}
            </a>
        </div>
    )
}

function itemLink(language) {
    return (
        <div className="wrap-follow">
            <div className="follow-us">
                <h2 className='title-footer'>{language.followUs}</h2>
            </div>
            <div className="follow-items">
                {followButton(<i class="fab fa-facebook-f"></i>, FACEBOOK_URL)}
                {followButton(<i class="fab fa-twitter"></i>, TWITTER_URL)}
                {followButton(<i class="fab fa-instagram"></i>, INSTAGRAM_URL)}
            </div>
            <div className='develop-block'>
                <h4>{language.copyright} <a target="_blank" rel="noopener noreferrer" href={KTT_WEB_SITE} id="keytotech" class="active">KeyToTech</a></h4>
            </div>
        </div>
    )
}

const Footer = (props) => (
    <div className="footer">
        <div className="wrap-footer">
            <div className="container-logo">
                <img src={logo} alt="logo-img" className="logo-footer" />
                <h2 className="app-name">국어 회화집</h2>
            </div>

            <div className="wrap-block">
                <div className="container-footer">
                    <div className="wrap-info">
                        <h2 className="title-footer">{props.language.aboutUs}</h2>
                        <p className="content-footer">{props.language.descriptionFooter}</p>
                        <a href='privacy.html' className="t-privacy">Privacy policy</a>
                    </div>
                </div>

                <div className="container-footer">
                    <div className="wrap-contact">
                        <h2 className="title-footer">{props.language.contacts}</h2>
                        <div className="wrap-items-address">
                            <p className="item"><strong>{props.language.titleAddress}</strong></p>
                            <p className="item">{props.language.address}</p>
                            <p className="item"><strong>Email:</strong><a className="link-email" target="_blank" rel="noopener noreferrer"
                                href="mailto:kup@keytotech.com">kup@keytotech.com</a> </p>
                        </div>
                    </div>
                </div>

                <div className="container-footer">
                    {itemLink(props.language)}
                </div>
            </div>
        </div>
    </div>
)

export default Footer;