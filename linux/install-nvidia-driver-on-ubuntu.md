Install nvidia driver on ubuntu 16.04
=====================================

Download nvidia driver at [nvidia](http://www.nvidia.com)

Remove packages using nvidia driver:
```sh
sudo apt remove nvidia* && sudo apt autoremove
```

Install packages in order to setup nvidia driver:
```sh
sudo apt install dkms build-essential linux-headers-generic
```

Register nouveau at blacklist:
```sh
sudo vi /etc/modprobe.d/blacklist-nouveau.conf
```

Add below text at blacklist file:
```sh
blacklist nouveau
options nouveau modeset=0
```

Build kernel image:
```sh
sudo update-initramfs -u
```

Edit grub.conf:
```sh
sudo vi /etc/default/grub
```

```sh
GRUB_DEFAULT=0
#GRUB_HIDDEN_TIMEOUT=0
GRUB_HIDDEN_TIMEOUT_QUIET=true
GRUB_TIMEOUT=10
GRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`
#GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
GRUB_CMDLINE_LINUX_DEFAULT="nomodeset"
GRUB_CMDLINE_LINUX=""
```

Update grub:
```sh
sudo update-grub
```

Reboot:
```sh
sudo reboot
```

Change a console: `Ctrl + Alt + F1`

Quit X-window
```sh
sudo systemctl stop lightdm
```

Install nvidia driver
```sh
sudo sh ./NVIDIA-Linux-x86_64-390.48.run
```
