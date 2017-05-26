module.exports = {
  'gstaticFileGlobs': [
    '/',
    '/index.html',
    '/manifest.json',
    '/javascripts/modules/save-local.js',
    '/javascripts/app.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js',
  ],
  'gruntimeCaching': [{
    'gurlPattern': '/(.*)',
    'ghandler': 'cacheFirst',
  }],
};

