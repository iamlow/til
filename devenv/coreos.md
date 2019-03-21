# CoreOS

## Installations on Vmware ESXi

### Download

```sh
curl -LO https://stable.release.core-os.net/amd64-usr/current/coreos_production_vmware_ova.ova
```

### Installation

...

### Update docker

```sh
update_engine_client -update
```

## Docker-compoose

```sh
sudo mkdir -p /opt/bin
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /opt/bin/docker-compose
sudo chmod +x /opt/bin/docker-compose
```

## Portainer

```sh
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
```

**References:**

* https://coreos.com/os/docs/latest/booting-on-vmware.html
* https://portainer.readthedocs.io/en/stable/deployment.html#quick-start
* https://help.iwinv.kr/manual/read.html?idx=548
* https://kb.vmware.com/s/article/2109161

