/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ["res.cloudinary.com", "ik.imagekit.io", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
