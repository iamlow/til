# mdns(Multicast DNS)

avahi - mdns 구현체, Ubuntu에서 기본으로 설치되어있음

## Intall avahi

```sh
apt-get install avahi
```

## Install avahi-utils

```sh
apt-get install avahi-utils
```

## Test

### IP로 호스트 이름 찾기

```sh
avahi-resolve --address 192.168.0.3
192.168.0.3	tegra-ubuntu.local
```

```sh
avahi-resolve --address 192.168.0.6
192.168.0.6	tegra-ubuntu-2.local
```
검색된 호스트 이름을 브라우저에 입력하면 웹페이가 표시됨
> MacBook에서는 Bonjour를 지원하여 동작하나, 윈도우는 미지원 윈도우 사용법 테스트.
> 윈도우에서 사용 가능한 Bonjour 있음, 테스트 필요.

## Reference

- https://www.joinc.co.kr/w/man/12/avahi/tutorial
