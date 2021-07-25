import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header(props) {
    
    return (
        <React.Fragment>
            <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <NavLink to='/'><img src="img/logo.png" alt=""/></NavLink>                            
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="header__nav">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li><NavLink exact to='/' activeClassName="active">Homepage</NavLink></li>                                    
                                    <li><NavLink exact to="blog" activeClassName="active">Our Blog</NavLink></li>                                    
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        {/* <div className="header__right">
                            <a href="#" className="search-switch"><span className="icon_search"></span></a>
                            <a href="./login.html"><span className="icon_profile"></span></a>
                        </div> */}
                    </div>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
            </header> 
        </React.Fragment>
    );
}