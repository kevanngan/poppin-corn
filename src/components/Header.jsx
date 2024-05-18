import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../globals/utilityFunctions';
import { tabletWidth } from '../globals/globalVariables';
import HamburgerMenu from './HamburgerMenu';
import Nav from './Nav';
import logo from '../assets/logo/poppin-corn-logo-250px.svg';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(prevState => !prevState);
  };

  const handleMediaQueryChange = (e) => {
    if (e.matches) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${tabletWidth}px)`);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <header className={showNav ? 'show' : ''}>
      <div className="logo">
        <NavLink to="/" onClick={scrollToTop}>
          <img src={logo} alt="Poppin' Corn logo" />
        </NavLink>
      </div>
      <HamburgerMenu showNav={showNav} toggleNav={toggleNav} />
      <Nav toggleNav={toggleNav} scrollToTop={scrollToTop} />
    </header>
  );
};

export default Header;