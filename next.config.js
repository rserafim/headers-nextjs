module.exports = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'X-About-Custom-Header',
            value: 'about_header_value',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // if the header `x-redirect-me` is present,
      // this redirect will be applied
      {
        source: '/about',
        has: [
          {
            type: 'header',
            key: 'X-About-Custom-Header',
          },
        ],
        permanent: false,
        destination: '/401',
      },
    ]
  },
}
