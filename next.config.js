const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: true
    },
  },
  images: {
    unoptimized: true
  },
  redirects: () => {
    return [
      {
        source: "/datasets",
        destination: "/datasets/overview",
        statusCode: 301,
      },
      {
        source: "/datasets",
        destination: "/datasets/overview",
        statusCode: 302,
      },
      {
        source: "/platform",
        destination: "/platform/overview",
        statusCode: 301,
      },
      {
        source: "/platform",
        destination: "/platform/overview",
        statusCode: 302,
      }
    ];
  },
});