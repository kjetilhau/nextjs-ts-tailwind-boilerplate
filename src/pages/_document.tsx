import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

const googleFontsUrl = "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap";

class BaseDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

    return (
      <Html lang="en">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
          <link rel="stylesheet" href={googleFontsUrl} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BaseDocument;
