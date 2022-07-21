const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const { createSecureHeaders } = require("next-secure-headers");

const securityHeaders = createSecureHeaders({
  contentSecurityPolicy: {
    // directives: {
    //   defaultSrc: "'self'",
    //   connectSrc: [
    //     "'self'",
    //     "www.google-analytics.com",
    //     "www.googletagmanager.com",
    //     "https://fonts.googleapis.com",
    //     "https://fonts.gstatic.com",
    //     "https://vitals.vercel-insights.com",
    //   ],
    //   scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "www.google-analytics.com", "www.googletagmanager.com"],
    //   styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    //   fontSrc: ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
    //   imgSrc: ["'self'", "data:", "www.google-analytics.com"],
    // },
    // reportOnly: true,
  },
  referrerPolicy: "no-referrer-when-downgrade",
}).concat([
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()", // , interest-cohort=()
  },
]);

module.exports = withPWA({
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  poweredByHeader: false,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    runtimeCaching,
  },
  // images: {
  //   domains: ["media.graphcms.com"],
  // },
});
