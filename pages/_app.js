
import { useRef } from 'react';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Router } from 'next/router';




function MyApp({ Component, pageProps }) {

  return (

      <RecoilRoot>

      <Component {...pageProps} />;
      </RecoilRoot>

  );
}

export default MyApp;
