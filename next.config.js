module.exports = {
  async redirects() {
    return [
      // if the header `x-redirect-me` is present,
      // this redirect will be applied
      {
        source: '/about',
        has: [
          {
            type: 'header',
            key: 'User-Agent',
            value: 'Mozilla/5.0 (compatible; woorankreview/2.0; +https://www.woorank.com/)',
          },
        ],
        permanent: false,
        destination: '/401',
      },
    ]
  },
}
