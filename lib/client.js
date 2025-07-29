const axios = require('axios');

class IotamineClient {
  constructor(apiKey, baseUrl = 'https://iotamine.com/api') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;

    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Authorization': `Api-Key ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async request(method, endpoint, data = null) {
    try {
      const response = await this.axios({
        method,
        url: endpoint,
        data
      });
      return response.data;
    } catch (err) {
      throw new Error(`Iotamine API Error: ${err.response?.data?.detail || err.message}`);
    }
  }
}

module.exports = IotamineClient;
