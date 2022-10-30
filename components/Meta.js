import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <link
        rel="icon"
        href="/favicon.ico"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://chuncheon-culture-map.vercel.app/"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://chuncheon-culture-map.vercel.app/metadata-img.png"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://chuncheon-culture-map.vercel.app/"
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://chuncheon-culture-map.vercel.app/metadata-img.png"
      ></meta>
    </Head>
  );
};

Meta.defaultProps = {
  title: "CHUNCHEON CULTURE MAP | 춘천 문화 지도",
  keywords: "춘천,춘천여행,춘천문화지도,춘천지도",
  description: "낭만도시 춘천을 춘천 문화 지도와 함께 즐겨보세요 🗺📍",
};

export default Meta;
