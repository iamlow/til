# CoreOS

## Installations on Vmware ESXi

### Download

```sh
curl -LO https://stable.release.core-os.net/amd64-usr/current/coreos_production_vmware_ova.ova
```

## Portainer

```sh
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
```

**References:**

* https://coreos.com/os/docs/latest/booting-on-vmware.html
* https://portainer.readthedocs.io/en/stable/deployment.html#quick-start
* https://help.iwinv.kr/manual/read.html?idx=548
