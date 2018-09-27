module.exports = {
  networks: {
    development: {
      host: "ganache",
      port: 8545,
      network_id: "*",
      gasPrice: 20000000000,
      gas: 90000,
      from: '0xb3e64e1b9173239adb5c1daf3067bb4c958e2f8b'
    }
  }
};
