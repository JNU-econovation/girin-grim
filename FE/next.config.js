/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "girin-grim.s3.ap-northeast-2.amazonaws.com",
        // pathname: "/Image.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
