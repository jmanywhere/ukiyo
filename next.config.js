/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, context) => {
    if (config.plugins) {
      config.plugins.push(
        new context.webpack.IgnorePlugin({
          resourceRegExp: /^(lokijs|pino-pretty|encoding)$/,
        }),
      );
      config.module.rules.push({
        test: /\.json$/,
        use: ['json-loader'],
      })
    }
    return config
  },
}

module.exports = nextConfig
