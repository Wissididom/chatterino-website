import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get the URL of the content to be embedded from the query parameters
  const { url } = req.query;

  // Set content type to XML
  res.setHeader("Content-Type", "application/json");

  // Return oEmbed JSON response
  res.json({
    version: "1.0",
    type: "link", // or "rich", "photo", "video" depending on your content
    title: "Chatterino",
    author_name: "Chatterino Team",
    provider_name: "Chatterino",
    provider_url: "https://chatterino.com",
    thumbnail_url: "https://chatterino.com/logo.png",
    thumbnail_width: 300,
    thumbnail_height: 300,
  });
}
