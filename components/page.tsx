import type { Metadata } from 'next';
import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./footer";
import Nav from "./nav";

type Props = {
  children: ReactNode;
  title: string;
};

export const metadata: Metadata = {
	metadataBase: new URL("https://chatterino.com"),
	keywords: [],
	title: {
		default: "Chatterino",
		template: `%s - Chatterino`
	},
	openGraph: {
		title: 'Chatterino',
		description: 'Chatterino is a chat client for Twitch chat. It aims to be an improved/extended version of the Twitch web chat.',
		images: ['logo.png'],
		type: 'website'
	}
};

function Page({ children, title }: Props) {
  return (
    <div className={"text-white flex flex-col "} style={{ minHeight: "100vh" }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />

      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Page;
