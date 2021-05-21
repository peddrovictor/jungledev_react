import React from 'react';
import './Header.scss'; 

const Header = () => {
    return (
        <header className="header-top">
            <div className="header-navigation">
                <div className="logo-top"></div>

                <nav className="nav-top">
                    <ul className="nav-links">
                        <li>
                            <a href="/">Create Your Nanny Share</a>
                        </li> 

                        <li>
                            <a href="/">Browser Shares</a>
                        </li> 

                        <li>
                            <a href="/">Our Story</a>
                        </li> 
                    </ul>
                </nav>
            </div>

            <div className="header-cta-top">
                <button className="btn btn-header-top">
                    Become a Nanny Share Host
                </button>

                <a href="/">Sing In</a>
            </div>
        </header>
    )
}

export default Header