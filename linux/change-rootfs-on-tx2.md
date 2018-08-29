# How to change a root filesystem to an usb flash

- Jetson 문서와 커뮤니티를 검색해 본 결과 U-boot의 위치는 Internal eMMC로 고정되어 있고, 변경이 불가능한 것으로 판단된다.
- Rootfs 위치는 /boot/extlinux/extlinux.conf 파일을 수정하여 사용이 가능한 것으로 안내하고 있는 문서들이 있다. 하지만 직접 테스트 해 본 결과 이 파일만 수정하는 것으로는 정상적으로 동작하지 않는다. SDK에서 제공하는 flash.sh를 사용하여 정상적으로 동작한다. flash.sh는 <rootdev> 인자에 설정값에 따라 Linux_for_Tegra/bootloader/t186ref/p2771-0000 안에 있는 extlinux.conf.XXXXX 파일을 rootfs/boot/extlinux 디렉터리에 복사해서 설치한다.

## Prerequires

- [Jetson TX2 64-bit Driver Package](https://developer.nvidia.com/embedded/dlc/tx2-driver-package-r2821)

> Jetson TX2: Tegra186_Linux_R28.2.1_aarch64.tbz2

- [Sample Root File System](https://developer.nvidia.com/embedded/dlc/sample-root-filesystem-r2821)

> Tegra_Linux_Sample-Root-Filesystem_R28.2.1_aarch64.tbz2

## How to change to an usb flash

### Extract a driver package and a simple root file system

```sh
sudo tar xpf Tegra186_Linux_R28.2.1_aarch64.tbz2
cd Linux_for_Tegra/rootfs
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R28.2.1_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

> Must be use 'sudo' command

### Make a usb flash on Ubuntu Host PC

```sh
sudo mkfs.ext4 /dev/sda1
```

### Mount

```sh
sudo mkdir /media/nvidia/mnt
sudo mount /dev/sda1 /media/nvidia/mnt
```

### Extract rootfs

```sh
cd /media/nvidia/mnt
sudo tar xfj Tegra_Linux_Sample-Root-Filesystem_R28.2.1_aarch64.tbz2
```

### Put a usb flash on TX2

## How to flash u-boot on Ubuntu Host PC

- rootdev를 mmcblk0p1으로 설정하면 u-boot, kernel, rootfs까지 설치한다. 
- rootdev를 mmcblk1p1, sda1으로 설정하면 **rootfs를 설치안함.**, 따로 설치과정이 필요함.

```sh
sudo ./flash.sh jetson-tx2 <rootdev>
```

> 위 과정이 정상적으로 종료되면 자동으로 부팅함.

### rootfs 설치 여부

flash.sh <rootdev> 인자를 mmcblk0p1로 설정한 경우에만 rootfs을 system.img로 만들어 설치, 다른 장치에는 설치하지 않는 것으로 생각됨. help 페이지에도 
아래와 같은 문구가 있음
  
```
        -S <size> ------------ Rootfs size in bytes. Valid only for internal
                               rootdev. KiB, MiB, GiB short hands are allowed,
                               for example, 1GiB means 1024 * 1024 * 1024 bytes.
```

#### 아래는 mmcblk0p1에 설치할 때 생성되는 system.img 크기

```
-rwxr-xr-x 1 root   root    3498460140 Aug 28 17:14 system.img
-rw-r--r-- 1 root   root   30064771072 Aug 28 17:13 system.img.raw
```

## Check

```sh
df -h
```

> 위 명령어를 사용하여 변경된 저장소의 용량을 확인할 수 있다.

## Trace

### eMMC로 추정되는 장치

```sh
/dev/loop0       28G   44M   26G   1% /hdd/jetpack/64_TX2/Linux_for_Tegra/bootloader/mnt
```

### Boot sequence order of Jetson TX2

1. SD Card
1. eMMC
1. USB
1. Network

### rootdev를 mmcblk0p1(eMMC), mmcblk1p1(SD Card), sda1(USB Flash)설정 후 테스트

1. flash rootdev
1. test scenario: No SD card, Fommated eMMC without rootfs, USB Flash with rootfs

#### rootdev를 mmcblk0p1로 설정

```sh
sudo ./flash.sh jetson-tx2 mmcblk0p1
```

Result

```
U-Boot 2016.07-g9c3b9a4 (May 17 2018 - 00:08:48 -0700)

TEGRA186
Model: NVIDIA P2771-0000-500
DRAM:  7.8 GiB
MC:   Tegra SD/MMC: 0, Tegra SD/MMC: 1
*** Warning - bad CRC, using default environment

In:    serial
Out:   serial
Err:   serial
Net:   eth0: ethernet@2490000
Hit any key to stop autoboot:  0
MMC: no card present
switch to partitions #0, OK
mmc0(part 0) is current device
Scanning mmc 0:1...
starting USB...
No controllers found
USB is stopped. Please issue 'usb start' first.
starting USB...
No controllers found
ethernet@2490000 Waiting for PHY auto negotiation to complete........ done
BOOTP broadcast 1
BOOTP broadcast 2
DHCP client bound to address 192.168.0.11 (272 ms)
*** Warning: no boot file name; using 'C0A8000B.img'
Using ethernet@2490000 device
TFTP from server 0.0.0.0; our IP address is 192.168.0.11; sending t
```

> Not found usb device

#### rootdev를 mmcblk1p1로 설정

```sh
sudo ./flash.sh jetson-tx2 mmcblk1p1
```

Result

```
TEGRA186
Model: NVIDIA P2771-0000-500
DRAM:  7.8 GiB
MC:   Tegra SD/MMC: 0, Tegra SD/MMC: 1
*** Warning - bad CRC, using default environment

In:    serial
Out:   serial
Err:   serial
Net:   eth0: ethernet@2490000
Hit any key to stop autoboot:  0
MMC: no card present
switch to partitions #0, OK
mmc0(part 0) is current device
Scanning mmc 0:1...
Found /boot/extlinux/extlinux.conf
Retrieving file: /boot/extlinux/extlinux.conf
216 bytes read in 73 ms (2 KiB/s)
p2771-0000 SD Card boot options
1:      primary kernel
Enter choice: 1:        primary kernel
Retrieving file: /boot/Image
.
.
ERROR: mmcblk1p1 not found
.
.
```

> USB Device를 찾지 않음. mmcblk1p1 장치를 찾을 수 없다고 표시함.

#### rootdev를 sda1 설정

```sh
sudo ./flash.sh jetson-tx2 sda1
```

Result

```
DRAM:  7.8 GiB
MC:   Tegra SD/MMC: 0, Tegra SD/MMC: 1
*** Warning - bad CRC, using default environment

In:    serial
Out:   serial
Err:   serial
Net:   eth0: ethernet@2490000
Hit any key to stop autoboot:  0
MMC: no card present
switch to partitions #0, OK
mmc0(part 0) is current device
Scanning mmc 0:1...
Found /boot/extlinux/extlinux.conf
Retrieving file: /boot/extlinux/extlinux.conf
233 bytes read in 74 ms (2.9 KiB/s)
p2771-0000 USB boot options
1:      primary kernel
Enter choice: 1:        primary kernel
Retrieving file: /boot/initrd
6237769 bytes read in 205 ms (29 MiB/s)
Retrieving file: /boot/Image
```

> USB Device 부팅 성공

#### Conclusion

- USB Flash 부팅하려면 rootdev를 sda1으로 설정하여 Flash해야함
- rootdev를 mmcblk0p1과 mmcblk1p1로 설정하는 것은 둘 다 USB Flash 부팅안됨
- USB Flash 부팅속도 느림, SD Card는 USB에 비해 빠르나, eMMC에 비해 느림

## References

- [L4T Quick Start Guide ](https://developer.download.nvidia.com/embedded/L4T/r28_Release_v2.1/l4t_quick_start_guide.txt?VObtIlYOjrZCPaqN-5O3Ns9WUU8zy5DaZv_xeeCvUs_b2xrQmNtLyoSwn9aykp0i5XYIFxkJYQSryJSx14siMWyZ0xTSMUYJyMHlnjv_usF7NTV6oX1XC6DNeUZy0M0gJD0oFkjrwqti-UDhvege3NXpFvhFjg)
