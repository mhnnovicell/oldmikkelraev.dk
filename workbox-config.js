module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{css,eot,svg,ttf,woff,woff2,png,xml,ico,json,eps,gif,pdf,ini,jpg,html,js,md}"
  ],
  "swDest": "sw.js",

  // Define runtime caching rules.
  runtimeCaching: [{
    // Match any request ends with .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:png|jpg|jpeg|svg|css|js)$/,

    // Apply a cache-first strategy.
    handler: 'networkFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'images',

      // Only cache 10 images.
      expiration: {
        maxEntries: 10,
      },
    },
  }],
};