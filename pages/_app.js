import { QueryClient, QueryClientProvider } from 'react-query';
import { useRef } from 'react';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';

import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/router';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const progress = new ProgressBar({
  size: 4,
  color: "#178c9f",
  className:'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  const queryClient = useRef(new QueryClient());
  return (
    <PayPalScriptProvider options={{ "client-id": "AbQOZOnrw1Qep9AA2ddikKPvZAx6AX6-0Ge0Fa8aEaY7CxvIqAS-BLO5oOPA6dpfcHY-Sk8Pxhthz2jE&enable-funding=venmo&currency=USD" }}>
    <QueryClientProvider client={queryClient.current}>
      <RecoilRoot>

      <Component {...pageProps} />;
      </RecoilRoot>
    </QueryClientProvider>
    </PayPalScriptProvider>
  );
}

export default MyApp;
