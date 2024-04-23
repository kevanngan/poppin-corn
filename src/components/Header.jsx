import React, { useState, useEffect } from 'react';
import { scrollToTop } from '../globals/utilityFunctions';
import { tabletWidth } from '../globals/globalVariables';
import HamburgerMenu from './HamburgerMenu';
import Nav from './Nav';

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
      <HamburgerMenu showNav={showNav} toggleNav={toggleNav} />
      <Nav toggleNav={toggleNav} scrollToTop={scrollToTop} />
    </header>
  );
};

export default Header;