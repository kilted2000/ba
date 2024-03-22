import { Auth0Provider } from "@auth0/auth0-react";
//import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


 const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const domain = 'dev-txcw3jo08qihcb5z.us.auth0.com';
  const clientId = 'jXWEdnff71BHchUso3LGIAKIUadip166';
  const redirectUri = window.location.origin;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }
//try to use bark-amigos.vercel.app as uri
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
   
  );

};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthProvider;