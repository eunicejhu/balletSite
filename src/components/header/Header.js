import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import { propertyOf } from 'underscore';

import getPathFromTabName from '../../utils/routes/getPathFromTabName';

import getTranslationsFromLocal from '../../utils/languages/getTranslationsFromLocal';

const NAV_MENUS = [
  'HOME',
  'INSCRIPTION', 
  'EVENTS', 
  'EQUIPEMENTS', 
  'CONTACT',
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuIndex: 0,
    };
    const { HeaderTranslations } = getTranslationsFromLocal(props.local);
    this.HeaderTranslations = HeaderTranslations;
    this.renderMenusJSX = this.renderMenusJSX.bind(this);
  }

  renderMenusJSX() {
    const { activeMenuIndex } = this.state;
    const HeaderTranslations = this.HeaderTranslations;

    return NAV_MENUS.map((menu, index) => {
      const menuTranslation = propertyOf(HeaderTranslations)(menu.toLowerCase());
      const isActive = index === activeMenuIndex;
      return (
        <li 
          key={index} 
          className={['navbar-nav-', menu.toLowerCase(), isActive ? ' ' + styles.active : ''].join('')} 
          onClick={() => this.setState({activeMenuIndex: index})} >
          <a>{ menuTranslation.toUpperCase() }
          </a>
        </li>
      );
    }
    );
  }

  render() {
    const HeaderTranslations = this.HeaderTranslations;
    const MenusJSX = this.renderMenusJSX();

    return (
        <nav className={styles.navbar}>
          <div className={styles.navbar_brand}>
            <span className="navbar-brand-name">{ HeaderTranslations.brandName }</span>
          </div>
          <ul className={styles.navbar_nav}>
            {MenusJSX}
          </ul>
          <div className={styles.navbar_hamburger_menu}>
            MENU
          </div>
      </nav>
    );
  }
}

Header.propTypes = {
  local: PropTypes.string.isRequired,
};

export default Header;