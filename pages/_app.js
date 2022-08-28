import '/styles/globals.css';
import Head from '/components/root/Head';
import Body from '/components/Root/Body';

/* NProgress */
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import { Router } from 'next/dist/client/router';
Router.events.on('routeChangeStart', () => {
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
});
Router.events.on('routeChangeError', () => {
  NProgress.done()
});
/* NProgress */

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Body>
        <Component {...pageProps} />  
      </Body>
    </>
  );
}

export default MyApp
