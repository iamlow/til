## VirtualBox 

```sh
# Download
wget https://download.virtualbox.org/virtualbox/6.0.4/virtualbox-6.0_6.0.4-128413~Ubuntu~xenial_amd64.deb
# Install
sudo dpkg -i virtualbox-6.0_6.0.4-128413\~Ubuntu\~xenial_amd64.deb
```

## VMWare ESXi (NOT Tested)

* https://github.com/josenk/vagrant-vmware-esxi

## Vagrant

```sh
# Download
wget https://releases.hashicorp.com/vagrant/2.2.4/vagrant_2.2.4_x86_64.deb
# Install
sudo dpkg -i vagrant_2.2.4_x86_64.deb
```

### Ubuntu

```sh
# Init https://app.vagrantup.com/boxes/search
vagrant init ubuntu/trusty64
# Run
vagrant up
# Connect SSH
vagrant ssh
```

### Windows 10

```sh
vagrant init kyungw00k/windows-10-pro-kn-x64; vagrant up --provider virtualbox
vagrant rdp
==> default: Detecting RDP info...
    default: Address: 127.0.0.1:3389
    default: Username: vagrant
==> default: Vagrant will now launch your RDP client with the connection parameters
==> default: above. If the connection fails, verify that the information above is
==> default: correct. Additionally, make sure the RDP server is configured and
==> default: running in the guest machine (it is disabled by default on Windows).
==> default: Also, verify that the firewall is open to allow RDP connections.
An appropriate RDP client was not found. Vagrant requires either
`xfreerdp` or `rdesktop` in order to connect via RDP to the Vagrant
environment. Please ensure one of these applications is installed and
available on the path and try again.
sudo apt-get install rdesktop
vagrant rdp
```

## Client

### Windows

Use a remote desktop 

### Mac

Use a microsoft remote desktop 10

https://itunes.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12

