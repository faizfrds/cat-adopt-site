/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["srvzpstcsgpqwbidveje.supabase.co"]
    }
}

module.exports = {
    nextConfig, 
    eslint: {ignoreDuringBuilds: true},
}
