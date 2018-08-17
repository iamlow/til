# Update Alternatives 

about the symbolic links

## Show a list

Example

```sh
$ update-alternatives --list aarch64-linux-gnu_egl_conf
/usr/lib/aarch64-linux-gnu/mesa-egl/ld.so.conf
/usr/lib/aarch64-linux-gnu/tegra-egl/ld.so.conf
```

## Display

Example

```sh
$ update-alternatives --display aarch64-linux-gnu_egl_conf
aarch64-linux-gnu_egl_conf - auto mode
  link best version is /usr/lib/aarch64-linux-gnu/tegra-egl/ld.so.conf
  link currently points to /usr/lib/aarch64-linux-gnu/tegra-egl/ld.so.conf
  link aarch64-linux-gnu_egl_conf is /etc/ld.so.conf.d/aarch64-linux-gnu_EGL.conf
```

## Query

Example

```sh
$ update-alternatives --query aarch64-linux-gnu_egl_conf
Name: aarch64-linux-gnu_egl_conf
Link: /etc/ld.so.conf.d/aarch64-linux-gnu_EGL.conf
Status: auto
Best: /usr/lib/aarch64-linux-gnu/tegra-egl/ld.so.conf
Value: /usr/lib/aarch64-linux-gnu/tegra-egl/ld.so.conf

Alternative: /usr/lib/aarch64-linux-gnu/mesa-egl/ld.so.conf
Priority: 500

Alternative: /usr/lib/aarch64-linux-gnu/tegra-egl/ld.so.conf
Priority: 1000
```

## Install

```sh
update-alternatives --install <link> <name> <path> <priority>
```

Example

```sh
update-alternatives --install \
  /etc/ld.so.conf.d/aarch64-linux-gnu_EGL.conf \
  aarch64-linux-gnu_egl_conf \
  /usr/lib/aarch64-linux-gnu/tegra-egl/ld.so.conf \
  1000
```

## Auto

```
update-alternatives --auto <name>
```

## Config (Manual)

```sh
update-alternatives --config <name>
```

Example


## References

https://linux.die.net/man/8/update-alternatives
https://skyoo2003.github.io/post/2017/03/17/what-is-alternatives-command

