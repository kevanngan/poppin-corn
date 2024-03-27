import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="footerContent">

                <div className="footerSocials">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} />   
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                </div>

                <div className="footerLinks">
                    <div className="footerNav">
                        <Link to="/">Home</Link>
                        <Link to="/my-list">My List</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <div className="footerCategory">
                        <Link to="/popular">Popular</Link>
                        <Link to="/now_playing">Now Playing</Link>
                        <Link to="/top_rated">Top Rated</Link>
                        <Link to="/upcoming">Upcoming</Link>
                    </div>
                </div>
            </div>
            <p className="footerCopyright">{new Date().getFullYear()} Poppin' Corn. All rights reserved.</p>
        </footer>
    )
}

export default Footer;