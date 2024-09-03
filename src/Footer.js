import React from 'react';
import './Footer.css'; // Import the CSS file
import PlayStore from "./icons8-google-play-store-48.png";
import LogoTxt from "./codeart-logo-text-footer.svg"
import LogoImage from "./code-art-logo-footer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube, faApple } from "@fortawesome/free-brands-svg-icons";
import Arrow from "./arrow-right.svg";
function Footer() {

    return (
        <footer className="footer">
            <div className='main-foot'>
                <div className='footer-child'>
                    <div className='logoFoot'>
                        <img src={LogoImage} className='logoFooter'></img>
                        <img src={LogoTxt} className='logoTxtFooter'></img>
                    </div>
                    <p className='followUs'>Sosial şəbəkələrdən bizi izləməyi
                        unutmayın!</p>
                    <FontAwesomeIcon icon={faFacebook} className='iconStyle' />
                    <FontAwesomeIcon icon={faInstagram} className='iconStyle' />
                    <FontAwesomeIcon icon={faLinkedin} className='iconStyle' />
                    <FontAwesomeIcon icon={faTwitter} className='iconStyle' />
                    <FontAwesomeIcon icon={faYoutube} className='iconStyle' />
                </div>
                <div>
                    <h2>TOP 4 KATEQORİYA</h2>
                    <a href=''>İnkişaf</a>
                    <a href=''>Kodlaşdırma</a>
                    <a href=''>Dizayn</a>
                    <a href=''>Biznes</a>
                </div>
                <div>
                    <h2>Tez Linklər</h2>
                    <a href=''>Haqqımızda</a>
                    <div className='news'>
                        <a href=''>Xəbərlər</a>
                        <img src={Arrow}></img>
                    </div>
                    <a href=''>Əlaqə</a>
                    <a href=''>Sual-cavab</a>
                </div>
                <div>
                    <h2>Dəstək</h2>
                    <a href=''>Yardım Mərkəzi</a>
                    <a href=''>Tez-tez verilən suallar</a>
                    <a href=''>Qaydalar və Şərtlər</a>
                    <a href=''>Gizlilik Siyasəti</a>
                </div>
                <div className='store'>
                    <h2>Tətbiqimizi Yüklə</h2>
                    <div className='playApp'>
                        <div>
                            <FontAwesomeIcon icon={faApple} size="3x" />
                        </div>
                        <div>
                            <p>Indi yüklə</p>
                            <h4>App Store</h4>
                        </div>
                    </div>
                    <div className='playApp second'>
                        <div>
                            <img src={PlayStore}></img>
                        </div>
                        <div>
                            <p>Indi yüklə</p>
                            <h4>Play Store</h4>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='rights'>
                <div className='rightTxt'>
                    <p>Ⓒ 2023 Bütün hüquqlar qorunur</p> 
                </div>
                <div className='selectBtn'>
                    <select>
                        <option>Azərbaycan</option>
                        <option>English</option>
                        <option>Русский</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
