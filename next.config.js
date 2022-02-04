module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        has: [
          {
            type: 'header',
            key: 'x-matched-path',
            value: '/about',
          },
        ],
        permanent: false,
        destination: '/401',
      },
    ]
  },
}