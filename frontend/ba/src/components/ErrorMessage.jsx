//import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const ErrorMessage = ({ children }) => (
  <Alert color="danger" fade={false} >
    {children}
  </Alert>
);


ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
}
export default ErrorMessage;