const rewrites = async () => {
  return [
    {
      source: '/players/:uuid(\[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})',
      destination: '/players/:uuid'
    },
    {
      source: '/players/:ign',
      destination: '/lookup/:ign'
    }
  ]
}

module.exports = {
  reactStrictMode: true,
  rewrites,
}
