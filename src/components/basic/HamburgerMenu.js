import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HamburgerMenu.css';

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isActive } = nextProps;
    isActive === this.state.isActive || this.setState({ isActive: isActive});
  }

  render() {
    const { wrapper, active} = styles;
    const { onHandleClick } = this.props;
    const { isActive } = this.state;
    return (<div
      className={[wrapper, isActive ? active : ''].join(' ')}
      onClick={() => {
        this.setState({isActive: !isActive});
        onHandleClick();
      }}
      >
        <span />
        <span />
        <span />
    </div>);
  }
}

HamburgerMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

HamburgerMenu.defaultTypes = {
  isActive: false,
};


export default HamburgerMenu;