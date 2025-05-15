import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script defer src="https://videoadstech.org/ads/lifenews_livextop_com.907da7a8-d82d-4786-a384-323a8c25c008.video.js"></script>
        <script async src="https://server.adhub.media/ads/lifenews_livextop_com.d6ad0063-eeb0-4ee6-8965-bbac9976766a.display.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
