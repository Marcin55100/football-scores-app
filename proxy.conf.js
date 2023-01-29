const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "http://localhost:5202",
    secure: false,
    logLevel: "debug",
  },
  {
    context: ["/api-db"],
    target: "http://localhost:5192",
    secure: false,
    logLevel: "debug",
  },
];

module.exports = PROXY_CONFIG;
