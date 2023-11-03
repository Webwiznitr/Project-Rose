/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "ik.imagekit.io", "images.unsplash.com"],
    unoptimized: true,
  },
  
  output: 'export',
  
};

module.exports = nextConfig;
