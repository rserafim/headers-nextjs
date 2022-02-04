module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        has: [
          {
            type: 'header',
            key: 'x-powered-by',
            key: 'Next.js',
          },
        ],
        permanent: false,
        destination: '/401',
      },
    ]
  },
}