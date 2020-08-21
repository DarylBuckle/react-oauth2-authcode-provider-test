import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import { AuthCodeProvider } from 'react-oauth2-authcode-provider';
import 'react-oauth2-authcode-provider/dist/index.css';

const authProps = {
  authUrl: 'https://dev-emf33n24.eu.auth0.com/authorize',
  callBackPath: '/',
  tokenUrl: 'https://dev-emf33n24.eu.auth0.com/oauth/token',
  logoutUrl: 'https://dev-emf33n24.eu.auth0.com/v2/logout',
  logoutCallBackPath: '/',
  clientId: '0ujnTs1Uynm6W83ygzbkuRkMhqdTrZ26',
  clientSecret: 'DhYAsb9z9LxMDsZL3shPFaB90sCSqMptPaMU-EnB7fEUv-ECbMjqlvn6nQTOVoLG',
  scope: 'openid profile email phone address offline_access',
  usePkce: true,
  useState: true,
  useNonce: true
}


function App() {
  const [doLogout, setDoLogout] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <AuthCodeProvider
          authenticationProps={authProps}
          doLogout={doLogout}
        >
          You are logged in.
          Hooray!

          <button type="button" style={{marginTop: "20px"}} onClick={() => setDoLogout(true)}>Logout</button>
        </AuthCodeProvider>
      </header>
    </div>
  );
}

export default App;
