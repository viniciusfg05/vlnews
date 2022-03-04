import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppPrps) {
  return <Component {...pageProps} />
}

export default MyApp
