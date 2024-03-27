import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="footerSocials">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer;