import { useState, useEffect } from 'react';
import { scrollToTop } from '../globals/utilityFunctions';

import { tabletWidth } from '../globals/globalVariables';

import HamburgerMenu from './HamburgerMenu';
import Nav from './Nav';

const Header = () => {

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const isDesktop = (e) => {
    if (e.matches) {
      setShowNav(false);
    }
  }

  useEffect(() => {
    let mediaQuery = window.matchMedia(`(min-width: ${tabletWidth}px)`);
    mediaQuery.addEventListener('change', isDesktop);

    return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

  return (
    <header className={showNav ? 'show' : ''}>
      <HamburgerMenu showNav={showNav} toggleNav={toggleNav} />
      <Nav toggleNav={toggleNav} scrollToTop={scrollToTop} />
    </header>
  )
}

export default Header;