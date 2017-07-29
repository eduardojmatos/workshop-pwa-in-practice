module.exports = {
  'root': 'build/',
  'staticFileGlobs': [
    'index.html',
    'manifest.json',
    'css/materialize.min.css',
    'javascripts/app.js',
  ],
  'stripPrefix': 'build/',
  'runtimeCaching': [
    {
      'urlPattern': /\/(.*)/g,
      'handler': 'cacheFirst',
    },
    {
      'urlPattern': /cdnjs/g,
      'handler': 'networkFirst'
    }
  ],
};

