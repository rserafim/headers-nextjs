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
      {
        source: '/news/:id',
        headers: [
          {
            key: 'X-News-Custom-Header',
            value: 'news_header_value',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        "source": "/about",
        "has": [
          {
            "type": "header",
            "key": "x-vercel-ip-country",
            "value": "GB"
          }
        ],
        "destination": "/401",
        "permanent": false
      },
      {
        "source": "/xyz",
        "has": [
          {
            "type": "header",
            "key": "x-matched-path",
            "value": "/401"
          }
        ],
        "destination": "/",
        "permanent": false
      }
    ]
  },
}