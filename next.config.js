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
            value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
          },
        ],
        permanent: false,
        destination: '/401',
      },
    ]
  },
}
