import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import  AuthProvider  from './AuthProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
<Auth0Provider
    domain="dev-txcw3jo08qihcb5z.us.auth0.com"
    clientId="jXWEdnff71BHchUso3LGIAKIUadip166"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
    <BrowserRouter>
     <AuthProvider>
      <App />
      </AuthProvider> 
    </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
  </HelmetProvider>
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
