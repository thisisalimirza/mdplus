import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
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
