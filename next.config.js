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
        source: "/benchmark",
        destination: "/benchmark/overview",
        statusCode: 301,
      },
      {
        source: "/benchmark",
        destination: "/benchmark/overview",
        statusCode: 302,
      },
      {
        source: "/team",
        destination: "/team",
        statusCode: 301,
      },
      {
        source: "/team",
        destination: "/team",
        statusCode: 302,
      },
      {
        source: "/publications",
        destination: "/publications",
        statusCode: 301,
      },
      {
        source: "/publications",
        destination: "/publications",
        statusCode: 302,
      }
    ];
  },
});