"use client"
//import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NavBarItem = ({ children, to, className, icon, tabIndex }) => {
  const location = useLocation();
   const activeClass = 'navbar-item-active';
  const activeClasses = className ? `${className} ${activeClass}` : activeClass;

  return (
    <Link to={to}>
    <span className="d-inline-flex align-items-center navbar-item">
      {icon && <FontAwesomeIcon icon={icon} className="mr-3" />}
      <span className={location.pathname === to ? activeClasses : className} tabIndex={tabIndex} >
        {children}
      </span>
    </span>
    </Link>
  );
};
NavBarItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.object,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
};
export default NavBarItem;