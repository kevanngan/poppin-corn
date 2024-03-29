import { NavLink } from 'react-router-dom';
import {
    tabletWidth
} from '../globals/globalVariables';

const Nav = ({ toggleNav, scrollToTop }) => {

    const closeNav = (e) => {
        if (window.innerWidth < tabletWidth) {
            toggleNav();
        } else {
            e.target.blur();
        }
    }

    return (
        <nav className='siteNavigation' onClick={closeNav}>
            <ul>
                <li><NavLink to="/" onClick={scrollToTop}>Home</NavLink></li>
                <li><NavLink to="/my-list" onClick={scrollToTop}>My List</NavLink></li>
                <li><NavLink to="/about" onClick={scrollToTop}>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;