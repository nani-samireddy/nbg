import type { MetadataRoute } from "next";
import teluguSongs from "./songs_data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSongsSitemap();
}

function generateSongsSitemap(): MetadataRoute.Sitemap {
  const songs = Object.keys(teluguSongs);
  return songs.map((song) => ({
    url: `https://nani-samireddy.github.io/nbg/songs/${song}`,
    lastModified: new Date(),
    priority: 1,
  }));
}