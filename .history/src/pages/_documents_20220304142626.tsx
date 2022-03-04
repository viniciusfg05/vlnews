import Document, {Html, Head, Main, NextScript} from 'next/document'

export export default class MyDocument {
  render() {
    return (
      <Hmtl>
        <Head>
          <title>vlNews</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Hmtl>
    )
  }
}