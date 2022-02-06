module.exports = {
  async redirects() {
    return [
      {
        "source": "/about",
        "has": [
          {
            "type": "header",
            "key": "x-powered-by",
            "value": "Next.js"
          }
        ],
        "destination": "/",
        "permanent": false
      }
    ]
  },
}