import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.scss'
import { NProgress } from 'nprogress';

import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      const { asPath } = useRouter()

      if(url === asPath) {
        console.log(asPath)
      }
      
      
      

    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <SessionProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

