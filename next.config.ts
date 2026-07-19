import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "storage.buzzsprout.com",
      },
      {
        protocol: "https",
        hostname: "www.buzzsprout.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "image-cdn-fa.spotifycdn.com",
      },
      {
        protocol: "https",
        hostname: "image-cdn-ak.spotifycdn.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://app.mdplus.community/login",
        permanent: false,
      },
      {
        source: "/join",
        destination: "https://app.mdplus.community/apply",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
