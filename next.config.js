module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        has: [
          {
            type: 'header',
            key: 'User-Agent',
            value: 'Mozilla/5.0 (compatible; woorankreview/2.0; +https://www.woorank.com/)',
          },
          {
            type: 'header',
            key: 'User-Agent',
            value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
          }
        ],
        destination: '/401',
        permanent: false
      }
    ]
  }
}