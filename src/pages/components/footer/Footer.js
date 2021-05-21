import React from 'react';
import './Footer.scss';
import hapuLogo from '../../../assets/images/hapu-logo.png';
import facebookLogo from '../../../assets/images/fb-logo.png';
import twitterLogo from '../../../assets/images/twitter-logo.png';
import instagramLogo from '../../../assets/images/insta-logo.png';

const Footer  = () => {
    return (
        <footer className="footer">
            <br/><br/><br/><br/>
            <div className="footer-row">
                <img className="footer-logo" alt="Hapu's logo" src={hapuLogo}/>

                <nav className="footer-nav">
                    <ul className="nav-links-footer">
                        <li>
                            <a href="/">
                                Share Your Nanny
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                Our Story
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                Blog
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                Terms & Privacy
                            </a>
                        </li>
                    </ul>
                </nav>

                <ul className="socials">
                    <li>
                        <a href="/">
                            <img alt="Facebook link" src={facebookLogo}/>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <img alt="Twitter link" src={twitterLogo}/>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <img alt="Instagram link" src={instagramLogo}/>
                        </a>
                    </li>
                </ul>
            </div>

            <p className="copyright-text">
                Copyright © 2017 Hapu PTY Limited All rights reserved
            </p>
        </footer>
    )
}

export default Footer