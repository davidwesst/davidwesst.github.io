const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const isProd = process.env.NODE_ENV === 'production'

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }

  return {
    assetPrefix: isProd ? 'https://www.davidwesst.com' : '',
    target: 'serverless',
    exportPathMap: async function(
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' }
      }
    },
  }
}