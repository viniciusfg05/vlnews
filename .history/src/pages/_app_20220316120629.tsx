import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.scss'
import { NProgress } from 'nprogress';
import { Router } from 'next/router';

NProgress.início( ) ; 
NProgress.feito( ) ;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

