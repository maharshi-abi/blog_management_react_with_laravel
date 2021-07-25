import React from 'react';
import { NavLink } from "react-router-dom";

export default function Footer(props) {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="page-up">
                    <a href="#" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer__logo">
                            <NavLink to='/'><img src="img/logo.png" alt=""/></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer__nav">
                                <ul>
                                    <li><NavLink to='/'>Homepage</NavLink></li>                                    
                                    <li><NavLink to="/blog">Our Blog</NavLink></li>                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <p>Copyright &copy; All rights reserved <br/> This template is made with <i className="fa fa-heart" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </footer>
            
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch"><i className="icon_close"></i></div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....."/>
                    </form>
                </div>
            </div>                     
        </React.Fragment>
    );
}