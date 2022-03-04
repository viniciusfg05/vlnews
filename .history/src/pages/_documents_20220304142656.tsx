import Document, {Html, Head, Main, NextScript} from 'next/document'

export export default class MyDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>vl.News</title>
        </Head>
        <body>
          <Main />
          <NextScript /> 
        </body>
      </Html>
    )
  }
}