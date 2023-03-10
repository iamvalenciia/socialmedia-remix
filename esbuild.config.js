const path = require('path');

module.exports = {
  node: true,
  define: {
    'process.env.NODE_ENV': '"production"', // Set the production environment
  },
  entryPoints: [
    // Your entry points
  ],
  outdir: path.join(__dirname, 'build'),
  platform: 'node',
  target: 'node14.16.0',
  minify: true,
};

