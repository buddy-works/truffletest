module.exports = {
  networks: {
    development: {
      host: "ganache",
      port: 8545,
      network_id: "*",
      gasPrice: 20000000000,
      gas: 90000,
      from: '0xc3df2af882d9dc6ff537963c24beb3bb9dfa712b'
    }
  }
};
