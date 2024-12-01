import Head from "next/head";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import Footer from "./footer";
import Nav from "./nav";

type Props = {
  children: ReactNode;
  title: string;
};

function Page({ children, title }: Props) {
  const pathname = usePathname();
  const ogUrl = `https://chatterino.com${pathname}`;
  return (
    <div className={"text-white flex flex-col "} style={{ minHeight: "100vh" }}>
      <Head>
        <meta property="og:title" content={title}>
        <meta property="og:description" content="Chatterino is a chat client for Twitch chat. It aims to be an improved/extended version of the Twitch web chat.">
        <meta property="og:image" content="logo.png"> { /* Should be recommended 1200x630px, ok 600x315px, min 200x200px according to https://de.ryte.com/magazine/open-graph-tags/ */ }
        <meta property="og:url" content={ogUrl}>
        <meta property="og:type" content="website">
        <title>{title}</title>
      </Head>
      <Nav />

      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Page;
