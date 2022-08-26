module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.noron.vn', 'versatica.ai'],
  },
  publicRuntimeConfig: {
    MH_SOLUTION_URL: process.env['MH_SOLUTION_URL']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
       // for webpack 5 use
       // { and: [/\.(js|ts)x?$/] }
      },
      
      use: ['@svgr/webpack'],
    });
    return config;
  }
}