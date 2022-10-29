import { Html, Main, Head, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const title = 'CHUNCHEON CULTURE MAP | 춘천 문화 지도';
  const description = '낭만도시 춘천을 춘천 문화 지도와 함께  즐겨보세요 🗺📍';
  
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chuncheon-culture-map.vercel.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://chuncheon-culture-map.vercel.app/metadata-img.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://chuncheon-culture-map.vercel.app/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://chuncheon-culture-map.vercel.app/metadata-img.png"
        ></meta>

        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_MAP_API}&libraries=services,clusterer`}
          strategy="beforeInteractive"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
