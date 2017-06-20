import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from './Header.css';
import { propertyOf } from 'underscore';
import  NAV_MENUS from 'utils/constants/menus';
import HamburgerMenu from '../basic/HamburgerMenu';

import getPathFromMenu from 'utils/routes/getPathFromMenu';

import getTranslationsFromLocal from 'utils/languages/getTranslationsFromLocal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: props.location.pathname,
      hamburgerMenuIsOpened: false,
      originalBodyOverflow: document.body.style.overflow,
    };
    const { HeaderTranslations } = getTranslationsFromLocal(props.local);
    this.HeaderTranslations = HeaderTranslations;
    this.renderMenusJSX = this.renderMenusJSX.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.handleHamburgerMenuClick = this.handleHamburgerMenuClick.bind(this);
    this.toggleBodyOverflow = this.toggleBodyOverflow.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  renderMenusJSX() {
    const { activeMenu } = this.state;
    const HeaderTranslations = this.HeaderTranslations;

    return NAV_MENUS.map(menu => {
      const menuTranslation = propertyOf(HeaderTranslations)(menu.toLowerCase());
      const menuPath = getPathFromMenu(menuTranslation.toLowerCase());
      const isActive = menuPath  === activeMenu;
      return (
        <li 
          key={menuPath} 
          className={['navbar-nav-', menu.toLowerCase(), isActive ? ' ' + styles.active : ''].join('')} 
        >
          <Link 
            onClick={() => {this.handleMenuItemClick(menuPath);}}
            style={{color: 'inherit', textDecoration: 'none'}} 
            to={menuPath}>
            { menuTranslation.toUpperCase() }
          </Link>
        </li>
      );
    }
    );
  }

  handleMenuItemClick(menuPath) {
    this.toggleBodyOverflow(true);
    this.setState({
      activeMenu: menuPath, 
      hamburgerMenuIsOpened: false,
    });
  }

  handleHamburgerMenuClick() {
    const { hamburgerMenuIsOpened } = this.state;
    this.toggleBodyOverflow(hamburgerMenuIsOpened);
    this.setState(prevState => ({
      hamburgerMenuIsOpened : !prevState.hamburgerMenuIsOpened,
    }));
  }

  toggleBodyOverflow(enable) {
    document.body.style.overflow = enable ? this.state.originalBodyOverflow : 'hidden';
  }

  hideMenu() {
    this.setState({hamburgerMenuIsOpened: false});
    this.toggleBodyOverflow(true);
  }

  componentDidMount() {
    window.addEventListener('resize', this.hideMenu.bind(this));
  }
  componentWillUnMount() {
    window.removeEventListener('resize', this.hideMenu.bind(this));
  }

  render() {
    const HeaderTranslations = this.HeaderTranslations;
    const { hamburgerMenuIsOpened } = this.state;
    const MenusJSX = this.renderMenusJSX();

    return (
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <span>{ HeaderTranslations.brandName }</span>
        </div>
        <HamburgerMenu 
          isActive={hamburgerMenuIsOpened}
          onHandleClick={this.handleHamburgerMenuClick.bind(this)} />
        <div 
          className={[
            styles.navbar__menu__items, 
            hamburgerMenuIsOpened ? styles.open : ''].join(' ')}>
          {MenusJSX}
        </div>
        <div 
          ref="revealer" 
          className={[
            styles.navbar__menu__revealer, 
            hamburgerMenuIsOpened ? styles.open : styles.close].join(' ')} />
      </nav>
    );
  }
}

Header.propTypes = {
  local: PropTypes.string.isRequired,
};

export default withRouter(Header);