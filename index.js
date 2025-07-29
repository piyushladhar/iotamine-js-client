const IotamineClient = require('./lib/client');
const VM = require('./lib/vm');
const Core = require('./lib/core');

class Iotamine {
  constructor(apiKey) {
    const client = new IotamineClient(apiKey);
    this.vm = new VM(client);
    this.core = new Core(client);
  }
}

module.exports = Iotamine;
