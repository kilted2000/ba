//import React from 'react';
import PropTypes from 'prop-types';
import NavBarItem from './NavBarItem';
import { Link } from "react-router-dom";

const AnchorLink = ({ children, to, className, icon, tabIndex }) => {
  return (
    <Link to={to}>
       <NavBarItem to={to} className={className} icon={icon} tabIndex={tabIndex} >
        {children}
      </NavBarItem>
    </Link>
  );
};

AnchorLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
export default AnchorLink;