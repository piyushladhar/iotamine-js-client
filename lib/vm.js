class VM {
  constructor(client) {
    this.client = client;
  }

  list() {
    return this.client.request('GET', '/vps/');
  }

  details(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/`);
  }

  create({ hostname, password, operating_system, pop, cores, ram, disk, traffic = 5 }) {
    return this.client.request('POST', '/vps/', {
      hostname,
      password,
      operating_system,
      pop,
      cores,
      ram,
      disk,
      traffic
    });
  }

  start(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/start/`);
  }

  stop(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/stop/`);
  }

  restart(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/restart/`);
  }

  poweroff(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/poweroff/`);
  }

  rebuild(vpsId, operating_system, password) {
    return this.client.request('POST', `/vps/${vpsId}/rebuild/`, {
      osid: operating_system,
      new_pass: password,
      conf_pass: password
    });
  }

  stats(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/stats/`);
  }

  vnc(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/vnc/`);
  }

  listDisks(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/list_disk/`);
  }

  addDisk(vpsId, size) {
    return this.client.request('POST', `/vps/${vpsId}/add_disk/`, {
      size
    });
  }

  deleteDisk(vpsId, disk_uuid) {
    return this.client.request('DELETE', `/vps/${vpsId}/delete_disk/${disk_uuid}/`);
  }

  addIP(vpsId) {
    return this.client.request('POST', `/vps/${vpsId}/add_ip/`);
  }

  deleteIP(vpsId, ip) {
    return this.client.request('DELETE', `/vps/${vpsId}/delete_ip/${ip}/`);
  }

  setRDNS(vpsId, ip, rdns) {
    return this.client.request('PUT', `/vps/${vpsId}/ip_address/${ip}/`, {
      rdns
    });
  }

  listSnapshots(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/listbackup/`);
  }

  createSnapshot(vpsId) {
    return this.client.request('POST', `/vps/${vpsId}/createbackup/`);
  }

  restoreSnapshot(vpsId, snapshotId) {
    return this.client.request('POST', `/vps/${vpsId}/restorebackup/`, {
      backup_id: snapshotId
    });
  }

  deleteSnapshot(vpsId, snapshotId) {
    return this.client.request('POST', `/vps/${vpsId}/deletebackup/`, {
      backup_id: snapshotId
    });
  }

  listFirewallRules(vpsId) {
    return this.client.request('GET', `/vps/${vpsId}/firewall_rules/`);
  }

  updateFirewallRules(vpsId, rules) {
    return this.client.request('POST', `/vps/${vpsId}/firewall_rules/updateRules/`, rules);
  }

  destroy(vpsId) {
    return this.client.request('DELETE', `/vps/${vpsId}/`);
  }
}

module.exports = VM;
