const PROXY_CONFIG = [
    {
        context: [
            "/api",
            "/logout"
        ],
        target: process.env.EMA_API_SERVER,
        secure: false,
        logLevel: "debug",
        changeOrigin: true
    }
];

module.exports = PROXY_CONFIG;
