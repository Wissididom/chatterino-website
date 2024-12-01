import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  // Set content type to XML
  res.setHeader("Content-Type", "text/xml");

  // Return oEmbed XML response
  res.send(`<?xml version="1.0" encoding="utf-8" standalone="yes"?>
    <oembed>
      <version>1.0</version>
      <type>link</type>
      <title>Chatterino</title>
      <author_name>Chatterino Team</author_name>
      <provider_name>Chatterino</provider_name>
      <provider_url>https://chatterino.com</provider_url>
      <thumbnail_url>https://chatterino.com/logo.png</thumbnail_url>
      <thumbnail_width>300</thumbnail_width>
      <thumbnail_height>300</thumbnail_height>
    </oembed>`);
}
