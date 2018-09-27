module.exports = {
  networks: {
    development: {
      host: "ganache",
      port: 8545,
      network_id: "*",
      from: '0xb3e64e1b9173239adb5c1daf3067bb4c958e2f8b'
    },
    production: {
      host: "ganache",
      port: 8545,
      network_id: "*",
      from: '0xb3e64e1b9173239adb5c1daf3067bb4c958e2f8b'
    }
  }
};
