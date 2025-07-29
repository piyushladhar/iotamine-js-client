class Core {
  constructor(client) {
    this.client = client;
  }

  listOS() {
    return this.client.request('GET', '/os/');
  }

  listPOP() {
    return this.client.request('GET', '/pop/');
  }
}

module.exports = Core;
