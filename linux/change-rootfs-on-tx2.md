# How to change a root filesystem to an usb flash

- Jetson 문서와 커뮤니티를 검색해 본 결과 U-boot의 위치는 Internal eMMC로 고정되어 있고, 변경이 불가능한 것으로 판단된다.
- Rootfs 위치는 /boot/extlinux/extlinux.conf 파일을 수정하여 사용이 가능한 것으로 안내하고 있는 문서들이 있다. 하지만 직접 테스트 해 본 결과 이 파일만 수정하는 것으로는 정상적으로 동작하지 않는다. SDK에서 제공하는 flash.sh를 사용하여 정상적으로 동작한다. 

## Prerequires

- Toolchanin
- Rootfs

## How to change to an usb flash

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

```sh
sudo ./flash.sh jetson-tx2 sda1
```

> 위 과정이 정상적으로 종료되면 자동으로 usb flash로 부팅함.

### rootfs 설치 여부

flash.sh <rootdev> 인자를 mmcblk0p1로 설정한 경우에만 rootfs을 system.img로 만들어 설치, 다른 장치에는 설치하지 않는 것으로 생각됨. help 페이지에도 
아래와 같은 문구가 있음
  
```
        -S <size> ------------ Rootfs size in bytes. Valid only for internal
                               rootdev. KiB, MiB, GiB short hands are allowed,
                               for example, 1GiB means 1024 * 1024 * 1024 bytes.
```

## Check

```sh
df -h
```

> 위 명령어를 사용하여 변경된 저장소의 용량을 확인할 수 있다.
