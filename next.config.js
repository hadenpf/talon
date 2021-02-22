/**
 * @type {import('next').NextConfig}
 */
const config = {
  target: 'serverless',

  /**
   * @param {import('webpack').Configuration} config
   */
  webpack(config, { webpack, buildId, isServer }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL),
        'process.env.SUPABASE_KEY_PUB': JSON.stringify(
          process.env.SUPABASE_KEY_PUB
        ),
      })
    )

    return config
  },
}

module.exports = config
