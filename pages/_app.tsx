import "../styles/globals.css";
import "../components/chatprop.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { ComponentType } from "react";
import Head from "next/head";

type Props = {
  Component: ComponentType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  const defaultMeta = {
    title: "Chatterino",
    description:
      "Chatterino is a chat client for Twitch chat. It aims to be an improved/extended version of the Twitch web chat.",
    image: "logo.png",
    url: 'https://chatterino.com'
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:image" content={defaultMeta.image} />
        <meta property="og:url" content={defaultMeta.url} />
        <meta property="og:type" content="website" />
      </Head>

      <main className="text-white bg-gray-800" style={{ minHeight: "100vh" }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
