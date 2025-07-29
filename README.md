# ⚡ Iotamine JavaScript SDK

The **Iotamine JS SDK** enables developers to interact with the [Iotamine Cloud API](https://iotamine.com) using JavaScript (Node.js).  
It provides simple methods to manage Virtual Machines (VPS), list available OS & POPs, and more.

---

## 🚀 Features

- ✅ Simple API wrapper using Axios
- ⚙️ Create, start, stop, restart, rebuild or delete a VM
- 🧠 View VM stats, VNC console, disk & snapshot info
- 🌍 List OS and POP (region) options
- 🔐 Fully supports API key authentication
- 📦 Lightweight, no framework dependencies

---

## 📦 Installation

```bash
npm install iotamine-client
````
---

## 🛠 Usage

```js
const Iotamine = require('iotamine-sdk');

const sdk = new Iotamine('your-api-key');

// List available OS and POPs
sdk.core.listOS().then(console.log);
sdk.core.listPOP().then(console.log);

// Create a VM
sdk.vm.create({
  hostname: 'my-vm',
  password: 'StrongPassword123!',
  operating_system: 1,
  pop: 1,
  cores: 2,
  ram: 4096,
  disk: 80
}).then(console.log).catch(console.error);
```

---

## 📚 Available Methods

### 🔧 `sdk.vm` – VM Operations

| Method                     | Description          |
| -------------------------- | -------------------- |
| `list()`                   | List all VPS         |
| `details(vpsId)`           | Get details of a VPS |
| `create({...})`            | Create a new VPS     |
| `start(vpsId)`             | Start VPS            |
| `stop(vpsId)`              | Stop VPS             |
| `restart(vpsId)`           | Restart VPS          |
| `poweroff(vpsId)`          | Power off VPS        |
| `rebuild(vpsId, os, pass)` | Reinstall OS         |
| `destroy(vpsId)`           | Destroy VPS          |

### 📊 Stats / Console

| Method         | Description        |
| -------------- | ------------------ |
| `stats(vpsId)` | Get usage stats    |
| `vnc(vpsId)`   | Get VNC connection |

### 💾 Disk Management

| Method                        | Description          |
| ----------------------------- | -------------------- |
| `listDisks(vpsId)`            | List all disks       |
| `addDisk(vpsId, size)`        | Add new disk (in GB) |
| `deleteDisk(vpsId, diskUUID)` | Delete a disk        |

### 🌐 IP Management

| Method                     | Description     |
| -------------------------- | --------------- |
| `addIP(vpsId)`             | Add new IP      |
| `deleteIP(vpsId, ip)`      | Remove an IP    |
| `setRDNS(vpsId, ip, rdns)` | Set reverse DNS |

### 📸 Snapshots

| Method                       | Description      |
| ---------------------------- | ---------------- |
| `listSnapshots(vpsId)`       | List snapshots   |
| `createSnapshot(vpsId)`      | Take snapshot    |
| `restoreSnapshot(vpsId, id)` | Restore snapshot |
| `deleteSnapshot(vpsId, id)`  | Delete snapshot  |

### 🔥 Firewall

| Method                              | Description           |
| ----------------------------------- | --------------------- |
| `listFirewallRules(vpsId)`          | List current rules    |
| `updateFirewallRules(vpsId, rules)` | Update firewall rules |

---

### 🧠 `sdk.core` – Core Info

| Method      | Description                |
| ----------- | -------------------------- |
| `listOS()`  | Get list of OS templates   |
| `listPOP()` | Get list of PoPs (regions) |

---

## ✅ Requirements

* Node.js 14 or newer
* API key from [Iotamine Control Panel](https://iotamine.com/control)

---

## 🛡️ Authentication

This SDK uses your API Key:

```http
Authorization: Api-Key <your-api-key>
```

---

## 🧪 Example

```js
const sdk = new Iotamine('your-api-key');

sdk.vm.list().then(console.log);
```

---

## 🔒 License

MIT © [Piyush Ladhar](https://github.com/piyushladhar)

---

## 📬 Contact

* 🌍 [Iotamine Website](https://iotamine.com)
* ✉️ [support@iotamine.com](mailto:corporate@iotamine.com)

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Star the repo and fork to improve 🚀