/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
  },
}

export default nextConfig
