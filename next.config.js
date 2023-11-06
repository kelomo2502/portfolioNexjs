/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'raw.githubusercontent.com',
                port:'',
                pathname:'/kelomo2502/git_assets/main/**'
            }
        ]
    }
}

module.exports = nextConfig
