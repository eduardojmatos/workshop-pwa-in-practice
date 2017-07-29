module.exports = {
  'root': 'build/',
  'staticFileGlobs': [
    'build/index.html',
    'build/manifest.json',
    'build/css/materialize.min.css',
    'build/javascripts/app.js',
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

