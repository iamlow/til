## VirtualBox 

```sh
# Download
wget https://download.virtualbox.org/virtualbox/6.0.4/virtualbox-6.0_6.0.4-128413~Ubuntu~xenial_amd64.deb
# Install
sudo dpkg -i virtualbox-6.0_6.0.4-128413\~Ubuntu\~xenial_amd64.deb
```

## Vagrant

```sh
# Download
wget https://releases.hashicorp.com/vagrant/2.2.4/vagrant_2.2.4_x86_64.deb
# Install
sudo dpkg -i vagrant_2.2.4_x86_64.deb
# Init https://app.vagrantup.com/boxes/search
vagrant init ubuntu/trusty64
# Run
vagrant up
# Connect SSH
vagrant ssh
```
